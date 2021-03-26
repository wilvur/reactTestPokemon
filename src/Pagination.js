import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
        display: flex;
        justify-content: center;
        margin:10px;
        
`

const Button = styled.button`
	background-color:#44c767;
	border-radius:20px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    margin:3rem;
	&:hover {
	background-color:#5cbf2a;
    }
    &:active {
        position:relative;
        top:1px;
        border:0px;
    }   
`

export default function Pagination({gotoNextP,gotoPrevP}) {
    return (
        <Container>
        
            {gotoPrevP && <Button onClick={gotoPrevP}>Prev</Button>}
            {gotoNextP && <Button onClick={gotoNextP}>Next</Button>}
        </Container>
    )
}
