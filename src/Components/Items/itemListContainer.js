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
  const Productos = [
    { id: 1, nombre: "Watchmen", precio: "$2000", stock: 5, img:'https://www.ecccomics.com/content/productos/8096/cubierta_coleccionable_watchmen_num19_WEB.jpg', link: '/itemDetail' },
    { id: 2, nombre: "Batman", precio: "$1000", stock: 5, img: 'https://www.ecccomics.com/content/productos/8061/Batman_99_44_1a_cubierta.jpg'  },
    // { id: 3, nombre: "Linterna Verde", precio: "$500", stock: 5, img: 'https://www.ecccomics.com/content/productos/5741/Green_Lantern_1.jpg'  },
    { id: 4, nombre: "V de Vendetta", precio: "$2500", stock: 5, img: 'https://www.ecccomics.com/content/productos/8637/cubierta_v_de_vendetta_CARTONE_WEB.jpg'  },
    { id: 5, nombre: "Deadpool", precio: "$400", stock: 5, img: 'https://images-na.ssl-images-amazon.com/images/I/81vTJbNIWUL.jpg'  },
  ];
  console.log(Productos);

  return (
    <body>
      <h2 className="saludo"> {Props.saludo} </h2>
      <div className="card-container">
        {Productos.map((Productos, id) => (
          <div className='card-container'>
            <div className="card">
              <div className="card-photo-container">
                <a href='/temDetail.js'> <img className="card-photo" src={Productos.img} alt="Foto" /></a>
              </div>
              <div className="description-container">
                <div className="card-name">{Productos.nombre}</div>
                <div className="card-description">
                  A mediados de los ochenta, Alan Moore y Dave Gibbons crearon
                  WATCHMEN, cambiando el curso de la historia de los cómics.
                </div>
                <div className="price">{Productos.precio}</div>
              </div>
              <div className="btn-container">
                <button className="card-btn-compra" onClick={agregarCarrito}>
                  Comprar!
                </button>
                <button
                  className="card-btn-eliminar"
                  onClick={eliminarDelCarrito}>
                  X
                </button>
              </div>
            </div>
          </div>
            ))}
      </div>
    </body>
  );
};

export default ItemListContainer;
