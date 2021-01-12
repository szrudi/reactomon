import React, {Component} from 'react';

class PokemonType extends Component {
    render() {
        return (
            <div>{this.props.type.name}</div>
        );
    }
}

export default PokemonType;
