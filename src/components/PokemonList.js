import React, {Component} from 'react';
import Pokemon from "./Pokemon";
import axios from "axios";

class PokemonList extends Component {
    state = {
        pokemonList: [],
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(result => {
                this.setState({
                    pokemonList: result.data.results
                });
            });
    }

    render() {
        return (
            <div>
                <h1>List of pokemon</h1>
                {this.state.pokemonList.map(pokemon => {
                    return (<Pokemon pokemon={pokemon} key={pokemon.name}/>)
                })}
            </div>
        );
    }
}

export default PokemonList;