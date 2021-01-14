import React from 'react';
import {Card} from "../elements/Card";

const PokemonType = props => {
    return (
        <Card small centered>
            <div>{props.type.name}</div>
        </Card>
    );
}

export default PokemonType;
