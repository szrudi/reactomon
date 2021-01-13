import React from 'react';
import PokemonList from "./PokemonList";
import {useHttp} from "../hooks/useHttp";

const PokemonDetails = props => {

    const {id} = props.match.params;
    const [data] = useHttp(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = data ? data : {};

    return (
        <div>
            {pokemon.name}
            <hr/>
            <PokemonList/>
        </div>
    );
}

export default PokemonDetails;
