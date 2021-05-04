import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';

export default function Pokedex(props) {
    const {pokemons, page, setpage, total, loading} = props;

    //console.log("page = "+ page)

    const lastPage = () => {
        const nextPage = Math.max(page -1 , 0);
        //console.log("lastpge " + nextPage)
        setpage(nextPage)
    } 
    const nextPage = ()=>{
        const nextPage = Math.min(page + 1 , total - 1);
        //console.log("nextPage = " + nextPage)
        setpage(nextPage)
    } 
   
   
    
    return (
        <div >
            <h1>Pokedex</h1>

            <Pagination 
                page={page + 1} 
                totalPage={total} 
                onLeftClick={lastPage}
                onRightClick={nextPage}      
            />

             { loading ? (
                <div>cargando pokemones</div>
                )    :    (
             <div className="pokedexContainer">
               { 
                   pokemons.map((pokemon, idx) => {
                       return <Pokemon pokemon={pokemon} key={pokemon.name} />              
                   })
               }
             </div> 
             
             ) }
             <Pagination 
                page={page + 1} 
                totalPage={total} 
                onLeftClick={lastPage}
                onRightClick={nextPage}      
             />
        </div>
    )
}
