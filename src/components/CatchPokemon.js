import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {PokemonContext} from "../contexts/PokemonContextElement";
import styled from "styled-components";

const PokeBall = styled.div`
  display: block;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: 0;
  background-size: contain;
  background-image: url("/poke_ball_${props => props.closed ? 'closed' : 'open'}.png");
  background-repeat: no-repeat;

  &:hover {
    background-image: url("/poke_ball_${props => props.closed ? 'closed' : 'active'}.png");
  }
`;

const CatchPokemon = ({pokemon}) => {
    let [pokemonList, setPokemonList] = useContext(PokemonContext);

    const catchPokemon = e => {
        e.preventDefault();
        pokemonList = pokemonList.map(p => {
            if (p.id === pokemon.id) {
                // FIXME is this okay like this?
                // https://reactjs.org/docs/hooks-reference.html#functional-updates
                p.caught = !p.caught;
            }
            return p;
        });
        setPokemonList(pokemonList);
        // setPokemonList((previousList) =>
        //     previousList.map(p => {
        //         if (p.id === pokemon.id) {
        //             p.caught = !p.caught;
        //         }
        //         return p;
        //     })
        // );
    };

    return (<PokeBall closed={pokemon.caught} onClick={catchPokemon}/>);
};

CatchPokemon.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number,
        caught: PropTypes.bool,
    }).isRequired,
};

export default CatchPokemon;
