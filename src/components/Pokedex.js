import React  from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';
import styled from 'styled-components/macro';
import {ReactComponent as Pokebola} from './icons/pokeball.svg';
import  Background from './icons/background.svg'

    ///////////////////////////////////// estilos
    const PokedexContainer = styled.div`
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(10em, 10em));
        justify-content: center;
        align-items: center;
        grid-gap: 1em;
        padding-top:3rem;
        
    `;
        const PokedexContainerSingle = styled.div`
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        padding-top:3rem; 
        `;

    const TituloAPP = styled.h1`
        width:100%;
        color:#4a4a4a;
        justify-content: center;
        text-align:center;
        padding:  10px;
    `
    const BG = styled.div`
       position:absolute;
       width: 100%;
       height:100vh;
       background-image: url(${Background});
       background-size: cover;       
       z-index: -999;
    `
    const LoadingContainer = styled.div`
        width: 100%;
        height: 100vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-items:center;
        z-index:999;
        margin: 10%;
        
    `

export default function Pokedex(props) {
    const {pokemons, page, setpage, total, loading, onSearch} = props;
 
    const lastPage = () => {
        const nextPage = Math.max(page -1 , 0);
        setpage(nextPage)
    } 
    const nextPage = ()=>{
        const nextPage = Math.min(page + 1 , total - 1);
        setpage(nextPage)
    } 
   
    // saco el total para ver si muestro la paginacion
    const pokemonsLenght = (pokemons.length > 1) ? true : false;
    
    return (
        < >
         <BG>    
             { loading ? (
                 <LoadingContainer>
                    <Pokebola id="loading_img"/>
                 </LoadingContainer>
                ) : (
                 <>
                 { pokemonsLenght ? (
                <PokedexContainer>
                     {  pokemons.map((pokemon, idx) => {
                        return <Pokemon  pokemon={pokemon} key={pokemon.name} onSearch={onSearch} pokemonsLenght={pokemonsLenght} />              
                    }) }
                </PokedexContainer>
                 ): (
                <PokedexContainerSingle>
                    {  pokemons.map((pokemon, idx) => {
                       return <Pokemon  pokemon={pokemon} key={pokemon.name} onSearch={onSearch} pokemonsLenght={pokemonsLenght} />              
                   }) }
               </PokedexContainerSingle>  
                 )}
                </>
                ) 
            }
            
            { pokemonsLenght ? (
             <Pagination 
                page={page + 1} 
                totalPage={total} 
                onLeftClick={lastPage}
                onRightClick={nextPage}      
             /> ): "back"}
             
        </BG>
        </>
    )
}
