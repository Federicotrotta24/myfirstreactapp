import React, { useState } from 'react';
import NavBar from './Components/Navbar/navBar'
import ItemListContainer from './Components/Items/itemListContainer';
import './App.css';
import ItemList from './Components/Items/itemList'
import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [pokemonABuscar, setPokemonABuscar] = useState ('')
  const [pokemon, setPokemon] =useState ([])
  
  const handleClick = async () =>{

  let solicitarPokemon = async (pokemonNombre) =>{
    console.log('estoy buscando los productos')

    const respuestaServer =  await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonNombre}
    `);
      const bodyRespuestaDelServer = respuestaServer.json()
      
      return bodyRespuestaDelServer;
  };

    const misPokemon =  await solicitarPokemon(pokemonABuscar)
    setPokemon(misPokemon.name);
    console.log(misPokemon.species
      )
  }

  return(
    <body>
      <React.Fragment>
        <NavBar/> 
        <ItemListContainer saludo='BIENVENIDOS'/>
      </React.Fragment>
      <input value={pokemonABuscar} type="text" name="" id="" placeholder='Busque su pokmemon'
      onChange={(e) => setPokemonABuscar(e.target.value)}
      />
      <button onClick={handleClick}>Mostrar la lista de productos!</button>
      <p>{pokemon}</p>
       {
        pokemon.length > 0 ? (pokemon.map(() => 
        <div>
          <p>
          Su primer ingrediente es {pokemon}</p>
        </div>
         ) ) : 
        (<p>Todavia no tengo tragos </p>)}
    </body>
    
  )
}

export default App;
