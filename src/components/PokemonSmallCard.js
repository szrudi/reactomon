import React from 'react';
import {generatePath, Link, useParams} from 'react-router-dom';
import {Card} from "../elements/Card";
import {routes} from "../helpers/Globals";

const PokemonSmallCard = props => {
    const {isCaught} = useParams();
    const path = isCaught ? routes.pokemonCaught.path : routes.pokemon.path;
    return (
        <Link to={generatePath(path, {id: props.pokemon.id, isCaught})}>
            <Card small centered>
                <span style={{textTransform: "capitalize"}}>
                    {props.pokemon.name}
                </span>
            </Card>
        </Link>
    );
}

export default PokemonSmallCard;
