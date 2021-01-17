import React, {createContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/useHttp";
import {pokemonApi} from "../helpers/Globals";

export const PokemonContext = createContext([]);

const PokemonContextElement = (props) => {
    const [response] = useHttp(pokemonApi + '/pokemon');
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        if (response) {
            setPokemonList(response.results.map(p => ({
                ...p,
                id: p.url.match(/\/(\d+)\/$/)[1],
                caught: Math.round(Math.random() * 10) % 4 === 0,
            })));
        }
    }, [response]);

    return (
        <PokemonContext.Provider value={pokemonList}>
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonContextElement;

