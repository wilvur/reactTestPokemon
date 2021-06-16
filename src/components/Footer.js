import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
bottom: 0;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border-top:3px solid black;
background-color:#0080ff;
color:white;



`


export default function Footer() {
    return (
        <FooterDiv>
            Creado sin fines comerciales, toda información es obtenidas de pokeapi.com
        </FooterDiv>
    )
}
