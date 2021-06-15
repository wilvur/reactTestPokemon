import React, { useContext } from 'react'
import FavoriteContext from '../contexts/favoritesContexts'
import styled from 'styled-components'
import PokeBg from './icons/index'

    const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 10px;
    border-radius:26px;
    overflow:hidden;
    box-shadow:2px 2px 2px grey;
    min-width:150px;  
    filter: opacity(0.9); 
    background-color:${props => props.bcolor || "#01d8fe"}; 
     
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
  
    `;
     
    const Bgsprite = styled.div`
     position:absolute; 
     filter: opacity(0.25);
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

   // defino que tipo de pokemon
   const typePoke = pokemon.types[0].type.name;
   // defino que color de fondo
   const typesPokemones = {
       water : "#1fafdf",
       fire  : "#f48b20",
       grass : "#56b947",
       ground: "#78421b",
       rock:"#a69f97",
       steel: "#533e28",
       ice: "#65cdf6",
       electric:"#f3b81a",
       dragon:"#56b947",
       ghost:"#8b7e71",
       psychic:"#c03995",
       normal:"#f3b81a",
       fighting:"#b92025",
       poison:"#b92025",
       bug:"#56b947",
       flying:"#1fafdf",
       dark:"#c03995",
       fairy:"#4f81a2"
   };

   const color = typesPokemones[typePoke]

    const clickFavorite = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);  
    }

    
       
    return (
        <PokemonCard bcolor ={color} >
            <FavoritoBoton onClick={clickFavorite}>{heart}</FavoritoBoton>
            <Nombre>{pokemon.name}</Nombre>
            <Sprite>   <img alt={pokemon.name} src={imagen} /></Sprite>
            <Bgsprite> <img src={PokeBg[typePoke]} /></Bgsprite> 
            <ul>
                <li>Altura: {pokemon.height}</li>
                <li>Peso: {pokemon.weight}</li>
                <li>Orden: {pokemon.order}</li> 
                <li>Experiencia: {pokemon.base_experience}</li> 
                <li>Tipo: {typePoke}</li>
            </ul>  
           
        </PokemonCard>
    )
}

export default Pokemon
