import React, {createContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/useHttp";
import {pokemonApi} from "../helpers/Globals";

export const PokemonContext = createContext([[], _ => _, false]);

const PokemonContextElement = (props) => {
    const [response, isLoading] = useHttp(pokemonApi + '/pokemon');
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        if (response) {
            setPokemonList(response.results.map(p => ({
                ...p,
                id: parseInt(p.url.match(/\/(\d+)\/$/)[1]),
                caught: false,
            })));
        }
    }, [response, setPokemonList]);

    return (
        <PokemonContext.Provider value={[pokemonList, setPokemonList, isLoading]}>
            {props.children}
        </PokemonContext.Provider>
    );
}

export default PokemonContextElement;
