import React, { useState } from "react";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {


  return (
    <header>
      <nav>
        <div className="nav-bar">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Logo" />
            <div className="name-container">
              <h1 className="name">
                <span className="name-span">8 BIT </span> Comic Store
              </h1>
            </div>
          </div>
          <div className="carrito-container">
            <div>
              <a href="">
                {" "}
                <FontAwesomeIcon
                  className="logo-carrito"
                  icon={faShoppingCart}
                />
              </a>
            </div>
            <div>
              <h3 className="separador">|</h3>
            </div>
            <div>
              <h2 className="valor-total">$ 0.00</h2>
            </div>
          </div>
          <div>
            <ul className="list-container">
              <li className="list">
                <a href="./app" className="list-link">
                  Home
                </a>
              </li>
              <li className="list">
                <a href="./productos" className="list-link">
                  Productos
                </a>
              </li>
              <li className="list">
                <a href="./about" className="list-link">
                  About
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
