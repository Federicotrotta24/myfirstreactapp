import NavBar from './Components/Navbar/navBar'
import Body from './Components/Items/itemListContainer'
import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import itemListContainer from './Components/Items/itemListContainer';
import React from 'react';

function App() {
  const products = "aca estan mis productos"

  return(
    <React.Fragment>
      <NavBar/> 
      <itemListContainer products= {products}/>
      <Body/>
    </React.Fragment>
  )
}

export default App;
