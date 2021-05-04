import React, { useContext } from 'react'
import FavoriteContext from '../contexts/favoritesContexts'

const Pokemon = ({pokemon}) => {

    const {favoritePokemons, updateFavoritePokemons } =  useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickFavorite = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }
       
    return (
        <div className="pokemon_card">
          <div><h3>{pokemon.name} </h3></div>
          <div><button onClick={clickFavorite}>{heart}</button></div>
          <div><img src={pokemon.sprites.front_default} /></div>
          <div>Especie:{pokemon.species.name} </div>
          <div> Habilidades
           <ul>
                {
                    pokemon.abilities.map( (e) => {
                        return (<li key={e.ability.name}>{e.ability.name}</li>)
                    } )
                }
             </ul>
          </div>  
        </div>
    )
}

export default Pokemon
