import PokemonSmallCard from "./PokemonSmallCard";
import {CardsContainer} from "../elements/CardsContainer";
import {PokemonContext} from "../contexts/PokemonContextElement";
import {useContext} from "react";
import PropTypes from "prop-types";

const PokemonList = props => {
    let cards = null;
    let pokemonList = useContext(PokemonContext);
    if (props.caughtOnly) {
        pokemonList = pokemonList.filter(p => p.caught);
    }
    cards = pokemonList.map(pokemon => <PokemonSmallCard pokemon={pokemon} key={pokemon.id}/>);
    return (<>
        <CardsContainer>
            {cards.length > 0 ? cards : <p>Loading list...</p>}
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
