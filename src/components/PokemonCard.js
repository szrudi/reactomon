import React, {Component} from 'react';

class PokemonCard extends Component {
    render() {
        return <div>{this.props.pokemon.name}</div>;
    }
}

export default PokemonCard;
