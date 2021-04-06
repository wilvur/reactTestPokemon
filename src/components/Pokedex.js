import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';

export default function Pokedex(props) {
    const {pokemons} = props;
    
    return (
        <div >
            <h1>Pokedex</h1>
            <Pagination />
             <div className="pokedexContainer">
               { 
                   pokemons.map((pokemon, idx) => {
                       return <Pokemon pokemon={pokemon} key={pokemon.name} />              
                   })
               }
             
             </div> 
        </div>
    )
}
