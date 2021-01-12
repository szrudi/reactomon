import React, {useState, useEffect} from 'react';
import axios from "axios";
import PokemonList from "./PokemonList"

const PokemonDetails = props => {
    const [pokemon, setPokemon] = useState({});

    useEffect(
        () => {
            const {id} = props.match.params;
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(result => {
                    setPokemon(result.data);
                });
        }, [props.match.params]
    );

    return (
        <div>
            {pokemon.name}
            <hr/>
            <PokemonList/>
        </div>
    );
}

export default PokemonDetails;
