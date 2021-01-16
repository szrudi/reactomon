import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from "../elements/Card";

const PokemonSmallCard = props => {
    return (
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <Card small centered>
                <span style={{textTransform: "capitalize"}}>
                    {props.pokemon.name}
                </span>
            </Card>
        </Link>
    );
}

export default PokemonSmallCard;
