import React from 'react'
//componente que recibe como prop de su elemento padre ImgContainer el evento handleFiltro para setear al filtro según botoón clickado
const Nav = ({handleFiltro}) => {
  return (
    <div className="title">
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
  
  </div>
  )
}

export default Nav
