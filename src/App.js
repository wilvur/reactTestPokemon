import React, {useState, useEffect} from 'react'
import './style.css'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import { getPokemon, getPokemonData } from './api'



export default function App() {
    const [pokemons, setpokemons] = useState([]);
    const [page, setpage] = useState();
    const [total, settotal] = useState();
    const [loading, setloading] = useState(true);
    

    const fetchPokemons = async () => {
        try {
            const data = await getPokemon();
            const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
                
            })
            const results = await Promise.all(promises)
           
            setpokemons(results) 
            setloading(false)
            
        } catch (error) { }       
        
    }

    useEffect(() => {
        fetchPokemons();
    }, [])

    return (
        <>
         <Navbar /> 
          { loading ? ( 
              <div>Cargando Pokemones</div>
            ) : (
            <Pokedex pokemons={pokemons}/>
            )}
        
        </>
    )
}
