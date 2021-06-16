import React, { useState } from "react";
import styled from 'styled-components'


  ////////////////////// style components /////////////////////////////

  const SearchContainer = styled.div` 
    width: 20em;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    background-color: white;
    border-radius: 0.8rem;
  `;

  const SearchInput = styled.input`
    width: 20em;
    outline: none;
    border: none;
    font-size: 1em;
    
  `
  const AutoContainer = styled.div`
    position: absolute;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border: 1px solid grey;
    background-color: whitesmoke;
    z-index: 55;
    width: 18.8em;
    height: 400px;
    overflow: scroll;
    padding: 5px;
    top: 166px;
    `;

  const Sugerido = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    cursor:pointer;

   &:hover {
     background-color: #c9cee9;
   }
 `
 const Button = styled.button`
    font-size: 1em;
    outline: none;
    border: none;
    padding:0.4rem;
    margin:0.4rem;
    border-radius: 0.8rem;
 
 `


  /////////////////////////////////////////////////////////////////////

export default function Search({ PokemonNames, onSearch}) {
  const [PokemonFiltrados, setPokemonesFiltrados] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [sugerido, setSugerido] = useState("");
 

  const handleTextChange = (e) => {
    const search = e.target.value;
    setSugerido(search);

    if (search.length > 0) {
      setMostrarResultados(true);
      filtrarNombres(search);
    } else {
      setMostrarResultados(false);
      setPokemonesFiltrados([]);
    }
  };

  const filtrarNombres = (search) => {
    const filtrado = PokemonNames.filter((poke) => {
      const regex = new RegExp(`^${search}`, "gi");
      return poke.name.match(regex);
    });
    if (filtrado.length > 0) {
      setMostrarResultados(true);
      const limitados = filtrado;
      setPokemonesFiltrados(limitados);
    } else {
      setMostrarResultados(false);
      setPokemonesFiltrados([]);
    }
  };

  const handleSugerido = (s) => {
    setMostrarResultados(false);
    setSugerido(s);
  };

  const onClick = async () => {
    const buscar = document.getElementById("inputS").value;
    if (buscar.length > 2 ) {
        onSearch(sugerido);
        console.log("aca busco desde click")
    }   
    
   
   /// oculto los sugeridos
    setMostrarResultados(false);
  };


  return (
    <>
    <SearchContainer>
      <div>
        <SearchInput id="inputS" 
            type="text" 
            value={sugerido} 
            onChange={handleTextChange} 
            autoComplete="off"
          />
      </div>  
       
      {mostrarResultados && (
        <AutoContainer>
          {PokemonFiltrados.map((f, idx) => (
            <Sugerido
                onClick={() => handleSugerido(f.name)} 
                key={idx} 
                tabIndex="1"
                >
              {f.name}
            </Sugerido>
          ))}
        </AutoContainer>
      )} 
    </SearchContainer>
    <Button
      onClick={onClick}
      >Buscar Pokemon
    </Button>
    </>
  );
}
