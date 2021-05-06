import React, { useState } from "react";


function PokemonFinder () {
    const [pokemonbuscado, setPokemonresultado] = useState ('')
    const [pokemon, setPokemon] = useState ('')

    const obtenerPokemon = async  () => {
      const respuestaServer =  await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}
      `);
        const bodyRespuestaDelServer = respuestaServer.json()
         bodyRespuestaDelServer.then ( value => setPokemonresultado(value))
    };
    console.log(pokemonbuscado)
    

    return(
        <div>
            
            <input value={pokemon} type='text' placeholder='Busque su pokmemon'
        onChange={(e) => setPokemon(e.target.value)}/>   
           <button onClick={obtenerPokemon}>
             Mostrar la lista de productos!
           </button>
       
        {/* {
            (pokemonbuscado.length > 0 ?  => (alert('sos re gil')
            ) ) */}
        }
        {/* //    {pokemonbuscado.abilities[0].ability.name} */}
           {/* {pokemonbuscado.abilities[0].ability.name}
           <img src={pokemonbuscado.sprites.front_default} alt=""/> */}
           {/* {pokemonbuscado.length > 0 ? (pokemonbuscado.map(() => (
          <div>
            <p>Su primer ingrediente es {pokemonbuscado.name}</p>
          </div>
        ))
      ) : (
        <p>Todavia no tengo tragos </p>
      )} */}
        </div>
    
     
    //     <input value={pokemon} type=“text” placeholder=“Busque su pokmemon”
    //     onChange={(e) => setPokemon(e.target.value)}
    //     />
    //     <button onClick={obtenerPokemon} >Mostrar la lista de productos!</button>
    //       <div>
    //    </div>
    //    { <p>{pokemonbuscado.name}</p>
    //    }
     
    )
  
  
}
export default PokemonFinder;
    