import React, {Component} from 'react';

class Pokemon extends Component {
    render() {
        return (
            <div>
                {this.props.pokemon.name}
            </div>
        );
    }
}

export default Pokemon;