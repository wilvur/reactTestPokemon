import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import FavoriteContext from '../contexts/favoritesContexts'



export default function Navbar() {
    const {favoritePokemons} = useContext(FavoriteContext)

  

    return (
        <nav>
          <div><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" /></div>
          <div>🖤 {favoritePokemons.length}</div>
        </nav>
    )
}


