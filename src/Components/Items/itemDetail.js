import React, { useState } from "react";

const ItemDetail = () => {
  const Productos = [
    {
      id: 1,
      nombre: "Watchmen",
      precio: "$2000",
      stock: 5,
      img:
        "https://www.ecccomics.com/content/productos/8096/cubierta_coleccionable_watchmen_num19_WEB.jpg",
      link: "/itemDetail",
    },
    { id: 2, nombre: "Batman", precio: "$1000", stock: 5, img: 'https://www.ecccomics.com/content/productos/8061/Batman_99_44_1a_cubierta.jpg'  },
    { id: 3, nombre: "Linterna Verde", precio: "$500", stock: 5, img: 'https://www.ecccomics.com/content/productos/5741/Green_Lantern_1.jpg'  },
    { id: 4, nombre: "V de Vendetta", precio: "$2500", stock: 5, img: 'https://www.ecccomics.com/content/productos/8637/cubierta_v_de_vendetta_CARTONE_WEB.jpg'  },
    { id: 5, nombre: "Deadpool", precio: "$400", stock: 5, img: 'https://images-na.ssl-images-amazon.com/images/I/81vTJbNIWUL.jpg'  },
  ];

  return (
    <div>
      {Productos.map((Productos, id) => (
        <div className="description-container-detail">
          <div className="decription-img-container-detail">
            <img
              className="itemDetail-img"
              src={Productos.img}
              alt="portada del comic"
            />
          </div>
          <div className="description-price-container-detail">
            <h3 className="itemDetail-title">{Productos.nombre}</h3>
            <p className="description-price">
              {Productos.precio}
            </p>
            <p className='item-detail-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              doloribus dolores debitis nesciunt. Tenetur saepe cupiditate nulla
              exercitationem iste omnis harum aliquid dicta debitis asperiores
              velit animi facere esse voluptate accusantium, vitae pariatur.
              
            </p>
            <button className="card-btn-compra">Comprar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
