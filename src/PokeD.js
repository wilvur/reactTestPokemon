import React, { useState, useEffect} from 'react'
//import axios from 'axios'

export default function PokeD({name}) {
    const [pokeD_img, setPoked_img] = useState([]);
    
    const url = "https://pokeapi.co/api/v2/pokemon/" + name;

    
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data =>  setPoked_img(data.sprites.front_default))
    }, [])
 
  

    return (
      <div className="App">
        <div>
            <img src={pokeD_img} />
        </div>
      </div>
    );
  }


