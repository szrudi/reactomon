import React, {useState, useEffect} from 'react';
import PokemonCard from "./PokemonCard";
import axios from "axios";

const PokemonList = props => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(
        () => {
            axios.get('https://pokeapi.co/api/v2/pokemon')
                .then(result => {
                    setPokemonList(result.data.results.map(
                        p => ({...p, id: p.url.match(/\/(\d+)\/$/)[1]})
                    ));
                });
        }, []
    );

    return (
        <div>
            <h1>List of pokemon</h1>
            {pokemonList.map(pokemon =>
                <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
        </div>
    );
}

export default PokemonList;
