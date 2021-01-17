import React, {useContext} from 'react';
import PropTypes from "prop-types";
import PokemonSmallCard from "./PokemonSmallCard";
import {CardsContainer} from "../elements/CardsContainer";
import {PokemonContext} from "../contexts/PokemonContextElement";

const PokemonList = props => {
    let [pokemonList, , isLoading] = useContext(PokemonContext);
    let placeHolder = <p>{isLoading ? "Loading list..." : "No Pokemon found."}</p>;

    if (props.caughtOnly) {
        pokemonList = pokemonList.filter(p => p.caught);
    }

    const cards = pokemonList.map(pokemon =>
        <PokemonSmallCard pokemon={pokemon} key={pokemon.id}/>);
    return (<>
        <CardsContainer>
            {cards.length > 0 ? cards : placeHolder}
        </CardsContainer>
    </>);

}

PokemonList.propTypes = {
    caughtOnly: PropTypes.bool,
};
PokemonList.defaultProps = {
    caughtOnly: false,
};
export default PokemonList;
