import React, {Component} from 'react';
import PokemonCard from "./PokemonCard";
import axios from "axios";

class PokemonList extends Component {
    state = {
        pokemonList: [],
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(result => {
                this.setState({
                    pokemonList: result.data.results.map(p => {
                            p.id = p.url.match(/\/(\d+)\/$/)[1];
                            return p;
                        }
                    )
                });
            });
    }

    render() {
        return (
            <div>
                <h1>List of pokemon</h1>
                {this.state.pokemonList.map(pokemon =>
                    <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
            </div>
        );
    }
}

export default PokemonList;
