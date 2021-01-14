import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from "../elements/Card";

const PokemonCard = props => {
    return (
        <Card small centered>
            <Link to={`/pokemon/${props.pokemon.id}`}>
                <div>{props.pokemon.name}</div>
            </Link>
        </Card>
    );
}

export default PokemonCard;
