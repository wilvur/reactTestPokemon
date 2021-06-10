import React  from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';
import styled from 'styled-components/macro'
import {ReactComponent as Pokebola} from './icons/pokeball.svg'


    ///////////////////////////////////// estilos
    const PokedexContainer = styled.div`
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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
        position:absolute;        
        z-index:-999;
        -webkit-animation:spin 8s linear infinite;
        -moz-animation:spin 8s linear infinite;
        animation:spin 8s linear infinite;
        transform-origin: center;
        transform-box: fill-box;
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
        //console.log("lastpge " + nextPage)
        setpage(nextPage)
    } 
    const nextPage = ()=>{
        const nextPage = Math.min(page + 1 , total - 1);
        //console.log("nextPage = " + nextPage)
        setpage(nextPage)
    } 
   
   
    return (
        < >
        <BG>
        </BG>
            <TituloAPP>Pokedex = {pokemons.lenght} </TituloAPP>
           
            
             { loading ? (
                <LoadingContainer>
                    
                </LoadingContainer>
                )    :    (
             <PokedexContainer>
             
             <Pokebola id="pokebola"/>
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
        </>
    )
}
