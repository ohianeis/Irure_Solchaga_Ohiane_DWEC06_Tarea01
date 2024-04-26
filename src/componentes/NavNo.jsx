import React, { useState } from "react";
import ImgContainer from "./ImgContainer";


const Nav = () => {
  //componente con botones se añade a App.jsx

  //estado con el filtro que cambia cuando se pulsa en alguno de los botónes, por defecto con todo para que al cargar página cargue toda la galería de imágenes paso estado al componente hijo ImgContainer
  const [filtro, setFiltros] = useState("todo");


  console.log("se monta nav");

  //evento que captura el data-id del botón y según sus datos setea el filtro con valor correspondiente
  const handleFiltro = (e) => {
    //obtengo el atributo data-id
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
    console.log(dataId);
    setFiltros(dataId);
  };

  console.log(filtro);

  return (
    <div className="">
      <button
        type="button"
        className="filter-btn"
        data-id="todo"
        onClick={(e) => {
          handleFiltro(e);
        }}
      >
        todas las categorias
      </button>
      <button
        type="button"
        className="filter-btn"
        data-id="cat1"
        onClick={(e) => {
          handleFiltro(e);
        }}
      >
        naturaleza
      </button>
      <button
        type="button"
        className="filter-btn"
        data-id="cat2"
        onClick={(e) => {
          handleFiltro(e);
        }}
      >
        mar
      </button>
      <button
        type="button"
        className="filter-btn"
        data-id="cat3"
        onClick={(e) => {
          handleFiltro(e);
        }}
      >
        parapente
      </button>
      <ImgContainer filtro={filtro} />
    </div>
  );
};

export default Nav;
