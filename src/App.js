import React, { useState } from "react";
import NavBar from "./Components/Navbar/navBar";
import ItemListContainer from "./Components/Items/itemListContainer";
import About from "./Components/About /about";
import ItemDetail from './Components/Items/itemDetail'
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route  path ='/productos'>
            <ItemListContainer saludo="Compra sin culpa" />
          </Route>
          <Route  path='/about'>
              <About />
          </Route>
          <Route>
              <ItemDetail/>
          </Route>
        </Switch>
      </React.Fragment> 
    
    </BrowserRouter>
  );
}
export default App;
