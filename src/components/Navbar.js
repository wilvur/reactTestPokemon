import React, { useContext } from 'react'
import FavoriteContext from '../contexts/favoritesContexts'
import styled from 'styled-components'
import Search from './Search'


const Logo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:red;
  padding:0.6rem;
  cursor:pointer;
`;

const Toolbar = styled.div`
    background-color:red;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border-bottom:3px black solid;
    -webkit-box-shadow: 0px 5px 15px 7px rgba(0,0,0,0.25); 
    box-shadow: 0px 5px 15px 7px rgba(0,0,0,0.25);
    
  `;

  const FavoritesDiv = styled.div`
   padding:1rem;
   cursor:pointer;
  `

export default function Navbar({onSearch, PokemonNames, onFavorite, onReload}) {
    const {favoritePokemons} = useContext(FavoriteContext);

    const handleFavorite = () => { 
      console.log("tenes que entrar");
      onFavorite();
    } 

    return (
        <>        
       <Logo onClick={onReload}><img  alt="pokedex"src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" /></Logo>
        <Toolbar>
        <Search onSearch={onSearch} PokemonNames={PokemonNames}/>
        <FavoritesDiv >🖤 <button onClick={handleFavorite}>{favoritePokemons.length}</button></FavoritesDiv>
        </Toolbar>
        </>
    )
}


