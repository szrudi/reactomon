import React, {useState, useEffect} from 'react';
import axios from "axios";
import PokemonType from "./PokemonType";

const PokemonTypes = props => {
    const [pokemonTypes, setPokemonTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(result => {
                setPokemonTypes(result.data.results);
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
