import React from 'react';
import {Link} from 'react-router-dom';

const PokemonCard = props => {
    return (
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <div>{props.pokemon.name}</div>
        </Link>
    );
}

export default PokemonCard;
