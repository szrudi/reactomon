import React from 'react';
import {generatePath, Link, useParams} from 'react-router-dom';
import {Card} from "../elements/Card";
import {routes} from "../helpers/Globals";
import CatchPokemon from "./CatchPokemon";

const PokemonSmallCard = ({pokemon}) => {
    const {isCaught} = useParams();
    const url = generatePath(routes.pokemon.path, {id: pokemon.id, isCaught});
    return (
        <Link to={url}>
            <Card small centered>
                <span style={{textTransform: "capitalize"}}>
                    {pokemon.name}
                </span>
                <CatchPokemon pokemon={pokemon}/>
            </Card>
        </Link>
    );
}

export default PokemonSmallCard;
