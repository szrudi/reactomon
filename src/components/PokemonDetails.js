import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


class PokemonDetails extends Component {
    state = {
        pokemon: {}
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(result => {
                this.setState({
                    pokemon: result.data
                });
            });
    }

    render() {
        return (
            <div>{this.state.pokemon.name}</div>
        );
    }
}

export default PokemonDetails;
