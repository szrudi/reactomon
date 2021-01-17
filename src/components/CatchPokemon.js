import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {PokemonContext} from "../contexts/PokemonContextElement";

const CatchPokemon = ({pokemon}) => {
    let [pokemonList, setPokemonList] = useContext(PokemonContext);

    const catchPokemon = e => {
        e.preventDefault();
        pokemonList = pokemonList.map(p => {
            if (p.id === pokemon.id) {
                p.caught = true;
            }
            return p;
        });
        setPokemonList(pokemonList);
    };

    return (
        <div>
            <button onClick={catchPokemon}>Catch{pokemon.caught ? ' again' : ''}!</button>
        </div>
    );
};

CatchPokemon.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number,
        caught: PropTypes.bool,
    }).isRequired,
};

export default CatchPokemon;
