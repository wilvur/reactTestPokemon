import React, {useState} from 'react'


export default function SearchBar({onSearch}) {
    const [Search, setSearch] = useState("pepe")

    const onChange = (e) => {
      setSearch(e.target.value);
      if (e.target.value.lenght === 0) {
          onSearch(null);
      }

    }

    const onClick = () => {
        onSearch("picachu");
    }

    return (
        <div>
            <input placeholder="Buscar" onChange={onChange}></input>  
            <button onClick={onClick}>buscar</button>
        </div>
    )
}
