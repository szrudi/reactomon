import PokemonCard from "./PokemonCard";
import {useHttp} from "../hooks/useHttp";
import {useParams} from "react-router-dom";
import {CardsContainer} from "../elements/CardsContainer";

const PokemonList = props => {
    let cards = null;
    let [pokemonList] = useHttp('https://pokeapi.co/api/v2/pokemon');
    if (pokemonList) {
        pokemonList = pokemonList.results.map(p => ({...p, id: p.url.match(/\/(\d+)\/$/)[1]}));
        cards = pokemonList.map(pokemon =>
            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        );
    }

    return <>
        <h1>Pokemon list</h1>
        <div className="content">
            <CardsContainer>
                {cards ? cards : <p>Loading list...</p>}
            </CardsContainer>
        </div>
    </>;
}

export default PokemonList;
