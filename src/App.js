import React, {useState, useEffect} from 'react'
import './style.css'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import { getPokemon, getPokemonData, searchPokemon, getPokemonNames, getPokemon2 } from './api'
import { FavoriteProvider } from './contexts/favoritesContexts'


const localStoreageKey = "favorite_pokemon"

export default function App() {
    const [pokemons, setpokemons] = useState([]);
    const [page, setpage] = useState(0);
    const [total, settotal] = useState(0);
    const [loading, setloading] = useState(true);
    const [offset, setoffset] = useState(80);
    const [favorites, setFavorites] = useState([]);
    const [notfound, setNotfound] = useState(false);
    const [names, setNames] = useState([]);



    const fetchPokemons = async () => {
        try {
            setloading(true);
                const data = await getPokemon(offset, offset * page );
                const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
                
            })
            const results = await Promise.all(promises);
                setpokemons(results) ;
                setloading(false);
                settotal(Math.ceil(data.count / offset))         
            
        } catch (error) { }            
    }

    const  loadFavorites = () => {
        const pokemons = JSON.parse(window.localStorage.getItem(localStoreageKey)) ||  [] ;
        setFavorites(pokemons);
    }

    useEffect(() => {
        loadFavorites();
        loadNames();
        
    }, [])

    useEffect(() => {
        fetchPokemons();
    }, [page])

    const updateFavoritePokemons = (name) => {
        const updated = [...favorites];
        const isFavorite = favorites.indexOf(name);
        
        if (isFavorite >= 0) {
            updated.splice(isFavorite,1);
        } else {
            updated.push(name);
            
        }
        setFavorites(updated);
        window.localStorage.setItem(localStoreageKey, JSON.stringify(updated) ); 
    }

    const onSearch = async (pokemon) => {
        
        if (!pokemon) {
            setloading(false);
            setNotfound(true);
           
         }
        const result = await searchPokemon(pokemon);
        if(!result) {
            setloading(false);
            setNotfound(true);
            return;
        } else {
            setpokemons([result]);
            setloading(false);
            setNotfound(false);
            setpage(0)
        }
      
    } 

    const loadNames = async () => {
        try {
            const  armarListado = await getPokemonNames();
            //console.log(nombresCargardos);
            setNames(armarListado);
            getPokemon2();
            
        } catch (error) {
            console.log("error en carga de los nombres.")
        }
      
    }

 
    return (
        <>
          <button onclick={() => console.log("hola")} >info</button>
         <FavoriteProvider value={{
             favoritePokemons: favorites,
             updateFavoritePokemons: updateFavoritePokemons
        }} >
  
         <Navbar onSearch={onSearch} names={names}/>       
            <Pokedex 
                pokemons={pokemons}
                page={page}
                setpage={setpage} 
                total={total}
                loading={loading}            
            />
        </FavoriteProvider>
        </>
    )
}
