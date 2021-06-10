import React, {useState, useEffect} from 'react'
import './style.css'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import { getPokemon, getPokemonData, searchPokemon, getPokemonNames } from './api'
import { FavoriteProvider } from './contexts/favoritesContexts'


const localStoreageKey = "favorite_pokemon"

export default function App() {
    const [pokemons, setpokemons] = useState([]);
    const [pokemonsL, setpokemonL] = useState(30);
    const [page, setpage] = useState(0);
    const [total, settotal] = useState(0);
    const [loading, setloading] = useState(true);
    const [offset, setoffset] = useState(30);
    const [favorites, setFavorites] = useState([]);
    const [notfound, setNotfound] = useState(false);


    const [PokemonNames, setPokemonName] = useState([]);


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
                settotal(Math.ceil(data.count / offset)); 
                
            
        } catch (error) { }            
    }

    const  loadFavorites = () => {
        const pokemons = JSON.parse(window.localStorage.getItem(localStoreageKey)) ||  [] ;
        setFavorites(pokemons);
    }

    const getPokemonNames = async () => {
        try {
          let url = `https://pokeapi.co/api/v2/pokemon?limit=1`;
          const response = await fetch(url).then((res) => res.json());
          const total = response.count;
    
          if (total) {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${total}`)
              .then((res) => res.json())
              .then((res) => {
                setPokemonName(res.results);
              });
          }
        } catch (error) {}
      };
 
    useEffect(() => {
        loadFavorites(); 
        getPokemonNames();
        
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
         console.log(pokemon)
        
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
 
    return (
        <>
         
         <FavoriteProvider value={{
             favoritePokemons: favorites,
             updateFavoritePokemons: updateFavoritePokemons
        }} >
  
         <Navbar onSearch={onSearch} PokemonNames={PokemonNames} />       
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
