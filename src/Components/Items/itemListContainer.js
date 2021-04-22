import React from "react";
import Foto from "./fotosProductos/watchmen.png";

const itemListContainer = (Props) => {
const Products = "aca estan mis productos"

  return (
    <body>
      <div className="card-container">
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="card-name">Watchmen</div>
          <div className="card-description">
            A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
            WATCHMEN, cambiando el curso de la historia de los cómics.
          </div>
          <div className="price">$4000</div>
          <div className="card-btn-compra">
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="card-name">Watchmen</div>
          <div className="card-description">
            A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
            WATCHMEN, cambiando el curso de la historia de los cómics.
          </div>
          <div className="price">$4000</div>
          <div className="card-btn-compra">
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="card-name">Watchmen</div>
          <div className="card-description">
            A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
            WATCHMEN, cambiando el curso de la historia de los cómics.
          </div>
          <div className="price">$4000</div>
          <div className="card-btn-compra">
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="card">
          <div className="card-photo-container">
            <img className="card-photo" src={Foto} alt="Foto" />
          </div>
          <div className="card-name">Watchmen</div>
          <div className="card-description">
            A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
            WATCHMEN, cambiando el curso de la historia de los cómics.
          </div>
          <div className="price">$4000</div>
          <div className="card-btn-compra">
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default itemListContainer;
