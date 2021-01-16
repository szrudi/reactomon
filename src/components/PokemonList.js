import PokemonSmallCard from "./PokemonSmallCard";
import {useHttp} from "../hooks/useHttp";
import {CardsContainer} from "../elements/CardsContainer";
import {pokemonApi} from "../helpers/Globals";

const PokemonList = props => {
    let cards = null;
    let [pokemonList] = useHttp(pokemonApi + '/pokemon');
    if (pokemonList) {
        pokemonList = pokemonList.results.map(p => ({...p, id: p.url.match(/\/(\d+)\/$/)[1]}));
        cards = pokemonList.map(pokemon =>
            <PokemonSmallCard pokemon={pokemon} key={pokemon.id}/>
        );
    }

    return (<>
        <CardsContainer>
            {cards ? cards : <p>Loading list...</p>}
        </CardsContainer>
    </>);
}

export default PokemonList;
