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
    box-shadow:2px 2px 2px grey;   
    filter: opacity(0.9); 
    background-color:${props => props.bcolor || "#01d8fe"}; 
    cursor:pointer;

    `;

    const PokemonCardXL = styled.div`
    width: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 1rem;
    border-radius:2em;
    box-shadow:2px 2px 2px grey;   
    filter: opacity(0.9); 
    background-color:${props => props.bcolor || "#01d8fe"}; 
    `;

    const DetallesContainerXL = styled.div`
     width: 100%;
     display:flex;
     flex-direction: column;
     justify-content: right;

     && ul {
         list-style: none;
     }
    `
    const MovimientosContainer = styled.div`
     && p {
        height: 100px;
        overflow: hidden; 
     }
     && span {
         color:red;
         cursor:pointer;
     }

    `
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

const Pokemon = ({pokemon, onSearch, pokemonsLenght}) => {

    const {favoritePokemons, updateFavoritePokemons } =  useContext(FavoriteContext);
    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    /// custom 
  const imagen = pokemon.sprites.front_default;
  const imagenXL = pokemon.sprites.other["official-artwork"].front_default;
  //const imagenXL = pokemon.sprites.map((s, i) => s );
  console.log(pokemon)
  //console.log(imagenXL);

  
  const movimientos =  pokemon.moves.map((m, i ) =>  m.move.name + " / ");

 
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
   // traigo el color segun el parametro
   const color = typesPokemones[typePoke]


    const clickFavorite = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);  
    }

    const clickOnSearch = (s) => {
        console.log("entre al click");
        onSearch(pokemon.name)
    }
    
    
       
    return (
        <>
        {pokemonsLenght ? (
        <PokemonCard bcolor ={color} onClick={clickOnSearch} >
            <FavoritoBoton onClick={clickFavorite}>{heart}</FavoritoBoton>
            <Nombre>{pokemon.name} </Nombre>
            <Sprite>   <img alt={pokemon.name} src={imagen} /></Sprite>
            <Bgsprite> <img src={PokeBg[typePoke]} /></Bgsprite> 
            <ul>
                <li>Altura: {pokemon.height}</li>
                <li>Peso: {pokemon.weight}</li>
                <li>Orden: {pokemon.order}</li> 
                <li>Experiencia: {pokemon.base_experience}</li> 
            
            </ul>   
        </PokemonCard>
        ) : (
            <PokemonCardXL bcolor ={color}  >
            <FavoritoBoton onClick={clickFavorite}>{heart}</FavoritoBoton>
            <Nombre>{pokemon.name} </Nombre>
            <Sprite><img alt={pokemon.name} src={imagenXL}  width="340px"/></Sprite>
            <Bgsprite> <img src={PokeBg[typePoke]} width="450"/></Bgsprite> 
            <DetallesContainerXL>
            <h3> Detalles</h3>
            <ul>
                <li>Altura: {pokemon.height}</li>
                <li>Peso: {pokemon.weight}</li>
                <li>Orden: {pokemon.order}</li> 
                <li>Experiencia: {pokemon.base_experience}</li> 
                <li>Tipo: {typePoke}</li>
            </ul> 
             <h3>Movimientos</h3>
             <MovimientosContainer>
              <p>{movimientos}</p>
              <span>ver mas</span>
             </MovimientosContainer>
             
            </DetallesContainerXL> 
        </PokemonCardXL>
            
        )
    }

        </>
    )
}

export default Pokemon
