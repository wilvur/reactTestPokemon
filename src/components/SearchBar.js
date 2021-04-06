import React, {useState} from 'react'
import {searchPokemon} from '../api'


const SearchBar =() => {

    const [search, setsearch] = useState('');
    const [pokemon, setpokemon] = useState();

    const onChange = (e) => {
        setsearch(e.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setpokemon(data)   
        console.log(data)
    }
    return (
        <>
           <input 
                type="text"  
                placeholder="aca se busca"
                onChange={onChange}
            /> 
            <div><button onClick={onClick}>Buscar</button></div>
          {pokemon && pokemon.weight }
    
        </>
    )
}
export default SearchBar