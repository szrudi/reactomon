import React from 'react';
import {useHttp} from "../hooks/useHttp";
import {Card} from "../elements/Card";
import styled from "styled-components";

const PokemonThumbnail = styled.img`
  height: 100px;
  width: 100%;
  margin: 5px auto;
`;

const PokemonDetails = props => {
    const [pokemon] = useHttp(`https://pokeapi.co/api/v2/pokemon/${props.id}`);

    let content = <div>Loading...</div>;
    if (pokemon) {
        content = <>
            <div>
                <PokemonThumbnail
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name + " front sprite"} />
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
        <Card className="details">
            {content}
        </Card>
    );
}

export default PokemonDetails;
