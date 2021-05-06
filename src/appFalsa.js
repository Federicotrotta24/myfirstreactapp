import React, { useState } from "react";
import NavBar from "./Components/Navbar/navBar";
import ItemListContainer from "./Components/Items/itemListContainer";
import "./App.css";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import ItemList from "./Components/Items/itemList";
import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [pokemonBuscado, setPokemonresultado] = useState("");
  const [pokemon, setPokemon] = useState([]);

  let solicitarPokemon = async () => {
    console.log("estoy buscando los productos");
    const respuestaServer = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}
    `);
    const bodyRespuestaDelServer = await respuestaServer.json();

    setPokemonresultado(bodyRespuestaDelServer);
  };
  console.log(pokemonBuscado);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Router path='/'>
            <App/>
          </Router>
          <NavBar />
          <ItemListContainer saludo="BIENVENIDOS" />
        </Switch>
      </BrowserRouter>

      <input
        value={pokemon}
        type="text"
        name=""
        id=""
        placeholder="Busque su pokmemon"
        onChange={(e) => setPokemon(e.target.value)}
      />
      <button onClick={solicitarPokemon}>Mostrar la lista de productos!</button>
      {pokemonBuscado.length > 0 ? (
        pokemonBuscado.map(() => (
          <div>
            <p>Su primer ingrediente es {pokemonBuscado.name}</p>
          </div>
        ))
      ) : (
        <p>Todavia no tengo tragos </p>
      )}
    </React.Fragment>
  );
}
export default App;
