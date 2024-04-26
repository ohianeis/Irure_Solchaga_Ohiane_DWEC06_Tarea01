import React, { useEffect, useState } from "react";
/*recibe estados del componente padre, con ellos obtiene el array imágenes que mostrara después de haber hecho la llamada en el componente ImgContainer.jsx con correspondiente filtro
index e indice lo uso para según ellos darle un atributo u otro al componente.
*/
const Img = ({ imagen, index, indice }) => {
  const [atributo, setAtributo] = useState("");
  useEffect(() => {
    //seteo estado atributo según index map (indice del array) y el indice que voy incrementando en ImgContainer.jsx para poder dar distintos valores atributo.
    if (index === indice) {
      setAtributo("activeSlide");
    } else if (index > indice) {
      setAtributo("nextSlide");
    } else {
      setAtributo("lastSlide");
    }
  });

  return (
    <>
      <article key={imagen.id} className={atributo}>
        <img src={imagen.src} alt={imagen.img} className="person-img"></img>
        <h4>{imagen.img}</h4>
        <p className="title">{imagen.categoria}</p>
      </article>
    </>
  );
};

export default Img;
