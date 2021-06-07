import React, {useState,useEffect} from 'react'
import Pokemon from './Pokemon';


export default function SearchBar({onSearch, names}) {
    const [Search, setSearch] = useState();
   

    const Auto = () => {
        const [display, setDisplay] = useState(false);
        const [options, setOptions] = useState([]);
        const [searchN, SetSearchN] = useState("");

        useEffect(() => {
            const poke = [];
            const promises = new Array(20)
                .fill()
                .map( (v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
            Promise.all(promises).then(pokemonArr => {
                return pokemonArr.map(res => 
                    res.json().then(({name, sprites: {front_default:sprite}}) =>
                    poke.push({name,sprite})
                   
                    )
                );
            });
           console.log("esta")
           setOptions(poke)      
        },[]);
    

    }
    

    const onChange = (e) => {
        setSearch(e.target.value);
      if (e.target.value.lenght === 0) {
          onSearch(null);
      }
     
    }

    const onClick = (e) => {
        if (e.target.value.lenght === 0) {
            return;
        } else {
            onSearch(Search)
        }
    
    }

    return (
        <div>
            <input placeholder="Buscar" onChange={onChange}></input>  
            <button onClick={onClick}>buscar</button>
        </div>
    )
}
