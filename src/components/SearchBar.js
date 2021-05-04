import React, {useState} from 'react'



const SearchBar =({onSearch}) => {

    const [search, setsearch] = useState('');
    const [pokemon, setpokemon] = useState();

    const onChange = (e) => {
        setsearch(e.target.value);
        if (e.target.value === 0) { setsearch(null)}
    }

    const onClick = async (e) => {
       onSearch(search);
        
    }
    return (
        <>
           <input 
                type="text"  
                placeholder="aca se busca"
                onChange={onChange}
            /> <button onClick={onClick}>Buscar</button>
          
    
        </>
    )
}
export default SearchBar