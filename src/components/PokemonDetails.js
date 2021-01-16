import React from 'react';
import styled from "styled-components";
import {useHttp} from "../hooks/useHttp";
import {pokemonApi} from "../helpers/Globals";
import {CardDetailed} from "../elements/CardDetailed";

const PokemonThumbnail = styled.img`
  height: 100px;
  width: 100%;
  margin: 5px auto;
`;

const PokemonDetails = props => {
    const [pokemon] = useHttp(`${pokemonApi}/pokemon/${props.id}`);

    let content = <div>Loading...</div>;
    if (pokemon) {
        content = <>
            <div>
                <PokemonThumbnail
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name + " front sprite"}/>
            </div>
            <h3>{pokemon.name}</h3>
            <ul>
                <li>Height: {pokemon.height}</li>
                <li>Weight: {pokemon.weight}</li>
                <li>Base experience: {pokemon.base_experience}</li>
                <li>Types: {pokemon.types && pokemon.types
                    .map(t => <span className="type" key={t.type.url}>{t.type.name}</span>)
                    .reduce((prev, curr) => [prev, ', ', curr])}
                </li>
            </ul>
        </>
    }

    return (
        <CardDetailed>{content}</CardDetailed>
    );
}

export default PokemonDetails;
