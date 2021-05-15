export const searchPokemon = async (pokemon) => {
    try {
     let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
     const response = await fetch(url);
     const data = await response.json() ; 
        
     return data;

    } catch (error) {
        console.log("no encontrado pokemon")
    }   

}

export const getPokemon = async (limit=25, offset= 0) => {
    try {
     let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
     const response = await fetch(url);
     const data = await response.json() ; 
     return data;
    } catch (error) {}  
}

export const getPokemonData = async (url) => {
    try {
     const response = await fetch(url);
     const data = await response.json() ;     
     return data;

    } catch (error) {}   

}



export const getPokemonNames = async () => {
    try {
     let url = `https://pokeapi.co/api/v2/pokemon?limit=3000`
     const response = await fetch(url);
     const data = await response.json() ; 
    // armo una lista con los nombres para el auto-completar 
     const lista = await data.results.map((nombre) => {
        return nombre.name
    })
    return lista;
    
    } catch (error) {}  
}
