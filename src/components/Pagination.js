import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
width:20%;
margin:2rem 1rem 2rem 40%;  
display:flex;
flex-direction:row;
align-items:baseline;
justify-content:space-between;

`;

const Button = styled.button`

background-color:#ebebeb;
border-radius:20px;
border:1px solid #9e9e9e;
display:inline-block;
cursor:pointer;
font-family:Arial;
font-size:15px;
padding:23px 11px;
text-decoration:none;

`

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPage} = props;


    return (
        <PaginationContainer>
            <Button onClick={onLeftClick}>{"<<"}</Button>   
            <div> {page} de {totalPage} </div>
            <Button onClick={onRightClick}>{">>"}</Button>   
        </PaginationContainer>
    )
}

export default Pagination
