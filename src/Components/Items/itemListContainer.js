import React, { useState } from "react";
import Foto from "./fotosProductos/watchmen.png";

const ItemListContainer = (Props) => {
  const [contador, setContador] = useState(1);

  function agregarCarrito() {
    setContador(contador + 1);
    alert("Usted tiene " + contador + " productos en el carrito");
  }
  function eliminarDelCarrito (){
    setContador (contador - 1);
    alert('Ya se elimino un producto de su carrito')
  }

  return (
    <body>
      <h2 className="saludo"> {Props.saludo} </h2>
      <div className="card-container">
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="description-container"> 
            <div className="card-name">Watchmen</div>
            <div className="card-description">
              A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
              WATCHMEN, cambiando el curso de la historia de los cómics.
            </div>
            <div className="price">$4000</div>
          </div>
          <div className='btn-container'>
            <button className="card-btn-compra" onClick={agregarCarrito}>
              Comprar!
            </button>
            <button className="card-btn-eliminar" onClick={eliminarDelCarrito}>
              X
            </button> 
          </div>
        </div>
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="description-container"> 
            <div className="card-name">Watchmen</div>
            <div className="card-description">
              A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
              WATCHMEN, cambiando el curso de la historia de los cómics.
            </div>
            <div className="price">$4000</div>
          </div>
          <div className='btn-container'>
            <button className="card-btn-compra" onClick={agregarCarrito}>
              Comprar!
            </button>
            <button className="card-btn-eliminar" onClick={eliminarDelCarrito}>
              X
            </button> 
          </div>
        </div>
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="description-container"> 
            <div className="card-name">Watchmen</div>
            <div className="card-description">
              A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
              WATCHMEN, cambiando el curso de la historia de los cómics.
            </div>
            <div className="price">$4000</div>
          </div>
          <div className='btn-container'>
            <button className="card-btn-compra" onClick={agregarCarrito}>
              Comprar!
            </button>
            <button className="card-btn-eliminar" onClick={eliminarDelCarrito}>
              X
            </button> 
          </div>
        </div>
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="description-container"> 
            <div className="card-name">Watchmen</div>
            <div className="card-description">
              A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
              WATCHMEN, cambiando el curso de la historia de los cómics.
            </div>
            <div className="price">$4000</div>
          </div>
          <div className='btn-container'>
            <button className="card-btn-compra" onClick={agregarCarrito}>
              Comprar!
            </button>
            <button className="card-btn-eliminar" onClick={eliminarDelCarrito}>
              X
            </button> 
          </div>
        </div>
      </div>
    </body>
  );
};

export default ItemListContainer;
