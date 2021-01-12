import React, {useState, useEffect} from 'react';
import PokemonType from "./PokemonType";

const PokemonTypes = props => {
    const [pokemonTypes, setPokemonTypes] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(result => {
                setPokemonTypes(result.results);
            });
        }, []);

    return (
        <div>
            <h1>List of types</h1>
            {pokemonTypes.map(type =>
                <PokemonType type={type} key={type.name}/>)}
        </div>
    );
}

export default PokemonTypes;
