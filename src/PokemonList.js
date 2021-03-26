import React from 'react'
import PokeD from './PokeD'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
    
`
const Pname = styled.h3`
   color:black;
   font-family: 'Dela Gothic One', cursive;
   &::first-letter {
   text-transform:capitalize;
}
`
const Pcard = styled.div`
    display:flex;
    flex-direction:column;
    min-width:180px;
    align-items:center;
    border: 1px solid #c8c8c8;
    border-radius:10px;
    padding:4px; 
    margin:3px;
    box-shadow: 3px 6px #e8e8e8; 
    background-image: linear-gradient(180deg, #158aff , #8ac5ff,white,#008000, #6df10c,#6df10c);

    &:hover {
        border:3px #158aff solid;
        margin:0px;
        box-shadow: 0px 0px #e8e8e8; 
    }
    
`


export default function PokemonList({pokemon}) {


    return (
        <Wrapper>
            {pokemon.map(p => (
                <Pcard  key={p}>
                    <Pname>{p}</Pname>
                    <PokeD name={p} />
                </Pcard>)
                )}
        </Wrapper>
    )
}
