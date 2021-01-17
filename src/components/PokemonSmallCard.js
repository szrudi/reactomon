import React from 'react';
import {generatePath, Link, useRouteMatch} from 'react-router-dom';
import {Card} from "../elements/Card";
import {routes} from "../helpers/Globals";

const PokemonSmallCard = props => {
    let {path} = useRouteMatch();
    let pokemonPath =
        path === routes.pokemonCaughtList.path
            ? routes.pokemonCaught.path : routes.pokemon.path;

    return (
        <Link to={generatePath(pokemonPath, {id: props.pokemon.id})}>
            <Card small centered>
                <span style={{textTransform: "capitalize"}}>
                    {props.pokemon.name}
                </span>
            </Card>
        </Link>
    );
}

export default PokemonSmallCard;
