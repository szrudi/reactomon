import React, {Component} from 'react';
import axios from "axios";
import PokemonType from "./PokemonType";

class PokemonTypes extends Component {
    state = {
        pokemonTypes: [],
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(result => {
                this.setState({
                    pokemonTypes: result.data.results
                });
            });
    }

    render() {
        return (
            <div>
                <h1>List of types</h1>
                {this.state.pokemonTypes.map(type => {
                    return (<PokemonType type={type} key={type.name}/>)
                })}
            </div>
        );
    }
}

export default PokemonTypes;