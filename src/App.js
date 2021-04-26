import NavBar from './Components/Navbar/navBar'
import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import ItemListContainer from './Components/Items/itemListContainer';
import React from 'react';

function App() {

  return(
    <React.Fragment>
      <NavBar/> 
      <ItemListContainer saludo='Bienvenidos'/>
      
    </React.Fragment>
  )
}

export default App;
