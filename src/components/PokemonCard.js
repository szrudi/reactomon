import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PokemonCard extends Component {
    render() {
        return (
            <Link to={`/pokemon/${this.props.pokemon.id}`}>
                <div>{this.props.pokemon.name}</div>
            </Link>
        );
    }
}

export default PokemonCard;
