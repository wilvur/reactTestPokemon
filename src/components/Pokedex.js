import React  from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';
import styled from 'styled-components/macro';
import {ReactComponent as Pokebola} from './icons/pokeball.svg';
import  Background from './icons/background.svg'

    ///////////////////////////////////// estilos
    const PokedexContainer = styled.div`
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 180px));
        justify-content: center;
        grid-gap: 1em;
        margin:30px;  
    `;
    const TituloAPP = styled.h1`
        width:100%;
        color:#4a4a4a;
        justify-content: center;
        text-align:center;
        padding: 30px 10px;
    `
    const BG = styled.div`
       width: 100%;
       height: 80vh;
       background-image: url(${Background});
       background-size: cover;       
    `
    const LoadingContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-items:center;
    `


export default function Pokedex(props) {
    const {pokemons, page, setpage, total, loading} = props;
 
    const lastPage = () => {
        const nextPage = Math.max(page -1 , 0);
        setpage(nextPage)
    } 
    const nextPage = ()=>{
        const nextPage = Math.min(page + 1 , total - 1);
        setpage(nextPage)
    } 
   

    return (
        < >
         <BG>
          <TituloAPP>Pokedex</TituloAPP>        
             { loading ? (
                <LoadingContainer>
               <Pokebola id="pokebola"/>
                </LoadingContainer>
            )    :    (
             <PokedexContainer>
               { 
                   pokemons.map((pokemon, idx) => {
                       return <Pokemon pokemon={pokemon} pokeL={pokemons.length} key={pokemon.name} />              
                   })
               }
             </PokedexContainer> 
             
             ) }
             <Pagination 
                page={page + 1} 
                totalPage={total} 
                onLeftClick={lastPage}
                onRightClick={nextPage}      
             />
             </BG>
        </>
    )
}
