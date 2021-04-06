import React from 'react'

const Pokemon = ({pokemon}) => {
    console.log(pokemon)
    return (
        <div className="pokemon_card">
          <div>{pokemon.name}</div>
          <div><img src={pokemon.sprites.front_default} /></div>
          <div>{pokemon.species.name} </div>
          <div> 
           <ul>
                {
                    pokemon.abilities.map( (e) => {
                        return (<li>{e.ability.name}</li>)
                    } )
                }
             </ul>
          </div>  
        </div>
    )
}

export default Pokemon
