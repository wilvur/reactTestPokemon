import React, {useState, useEffect} from 'react'
import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination'




export default function App() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

  
    useEffect(() => {
        setLoading(false)
        let cancel
        axios.get(currentPageUrl, { 
            cancelToken: new axios.CancelToken(c => cancel = c )
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
            
        })
        return () => cancel()
    }, [currentPageUrl])


    function gotoNextP() {
        setCurrentPageUrl(nextPageUrl)
    }

    function gotoPrevP() { 
        setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return "loading"

    return (
        <>
            <PokemonList pokemon={pokemon} />
            <Pagination 
                gotoNextP={nextPageUrl ? gotoNextP : null}  
                gotoPrevP={prevPageUrl ? gotoPrevP : null} 
            />
           
        </>
    )
}
