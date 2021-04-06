import React from 'react'
import SearchBar from './SearchBar'


export default function Navbar() {
    return (
        <nav>
          <div><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" /></div>
          <SearchBar / >
        </nav>
    )
}
