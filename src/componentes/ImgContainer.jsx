import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { pedirDatos } from "../data/pedirDatos";
import Img from "./Img";
import Nav from "./Nav";

const ImgContainer = () => {
  const [filtro, setFiltros] = useState("todo");
  const [errorr, setError] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [indice, setIndice] = useState(0);

  const handleFiltro = (e) => {
    //obtengo el atributo data-id , paso a nav la funcion handleFiltro para que lo maneje como evento onclick
    let dataId = e.target.getAttribute("data-id");

    if (dataId == "todo") {
      dataId = "todo";
    } else if (dataId == "cat1") {
      dataId = "naturaleza";
    } else if (dataId == "cat2") {
      dataId = "mar";
    } else if (dataId == "cat3") {
      dataId = "parapente";
    }
    setFiltros(dataId);
  };

  //realiza cada dos segundos el cambio de imágen, si hemos llegado al final array imagenes se setea a 0 para comenzar si no se suma uno, se pasa indice como prop a componente Img
  const timeChange = setTimeout(() => {
    const changeSlider = () => {
      if (indice >= imagenes.length - 1) {
        setIndice(0);
      } else {
        setIndice(indice + 1);
      }
    };
    changeSlider();
  }, 2000);

  async function obtenerDatos() {
    /*obtiene los datos de pedirDatos.js, manejo tanto respuesta favorable como error, seteo el estado de imagenes y el de error según el caso,se usa luego condición 
          según estos casos en el montaje del componente*/
    try {
      const datos = await pedirDatos();
      if (filtro == "todo") {
        setImagenes(datos);
      } else {
        setImagenes(datos.filter((imagen) => imagen.categoria === filtro));
      }
    } catch (error) {
      // Manejo del error

      setError("no se han obtenido las imágenes");
    }
  }
  useEffect(() => {
    //se ejecuta la primera vez que se renderiza componente y cada vez que filtro cambie con ello se pide los datos a pediDatos.js según el filtro obtenido con los botónes

    obtenerDatos();

    return () => {
      //cuando se desmonta limpio setTimeOut
      clearTimeout(timeChange);
    };
  }, [filtro]);
  return (
    <>
      <Nav handleFiltro={handleFiltro} />
      <section className="section-center">
        {imagenes && imagenes.length > 0 ? (
          <>
            {imagenes.map((imagen, index) => (
              <Img
                key={imagen.id}
                imagen={imagen}
                index={index}
                indice={indice}
              />
            ))}
          </>
        ) : (
          <p>{errorr}</p>
        )}
      </section>
    </>
  );
};

export default ImgContainer;
