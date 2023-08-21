import React, { useState } from "react";

const Fetch = () => {
    const [pokeList, setPokeList] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response.results)
            setPokeList(response.results.map(poke => poke.name))
        })
            
    }

    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>{
                pokeList.map((item,index)=>
                    <li key={index}>{item}</li>
                )
            }</ul>
        </div>
    )
}

export default Fetch;