import React, { useContext } from 'react'
import FavoriteContext from '../contexts/favoritesContexts'
import styled from 'styled-components'

    const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 10px;
    background-color:#01d8fe;
    border-radius:26px;
    overflow:hidden;
    box-shadow:2px 2px 2px grey;
    min-width:150px;  
    filter: opacity(0.9); 
    `;

    const Nombre = styled.h3`
     color:#2a2a2a;
     text-shadow: 2px 2px 8px #a0a0a0;
     text-transform: capitalize;
     font-size:1.8rem;
    `;

    const FavoritoBoton = styled.button`
     background-color:transparent;
     border: 0 ;
     outline: 0; 
     margin-left: 80%;
    `
    const Sprite = styled.div`
    margin-left: 130px;
    `;
     
    const Bgsprite = styled.div`
     position:absolute; 
     filter: opacity(0.4);
     z-index:-999;
     margin:0.4rem auto;
    `;

const Pokemon = ({pokemon}) => {

    const {favoritePokemons, updateFavoritePokemons } =  useContext(FavoriteContext);
    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    /// custom 
    const imagen = pokemon.sprites.front_default;

    const clickFavorite = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
        console.log("di al boton")
    }
       
    return (
        <PokemonCard>
        <FavoritoBoton onClick={clickFavorite}>{heart}</FavoritoBoton>
        <Nombre>{pokemon.name} </Nombre>
        <Sprite><img alt={pokemon.name} src={imagen} /></Sprite>
        <Bgsprite>
        <svg width={150} height={150}>
        <circle cx={50} cy={50} r={50} fill="white" />
        <circle cx={30} cy={30} r={40} fill="white" />
	    </svg>
        </Bgsprite>
         
        </PokemonCard>
    )
}

export default Pokemon
