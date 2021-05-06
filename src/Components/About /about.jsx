import React from "react";
import logo from "./mario.png"


const About = () => {
  return (
    <div>
      <div className='mensajeDeConstruccion-container'>
        <h3 className='mensajeDeConstruccion'>
            Estamos en construccion
        </h3>
        
      </div>
      <div className='img-container'>
        <img className='logo-mario' src={logo} alt=""/>
      </div>
    </div>
  );
};

export default About;
