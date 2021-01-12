import React, {useState, useEffect} from 'react';
import PokemonList from "./PokemonList";

const PokemonDetails = props => {
    const [pokemon, setPokemon] = useState({});

    useEffect(
        () => {
            const {id} = props.match.params;
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(response => response.json())
                .then(result => {
                    setPokemon(result);
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
