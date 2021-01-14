import PokemonSmallCard from "./PokemonSmallCard";
import {useHttp} from "../hooks/useHttp";
import PokemonDetails from "./PokemonDetails";
import {useParams} from "react-router-dom";
import {CardsContainer} from "../elements/CardsContainer";

const PokemonList = props => {
    let cards = null;
    let [pokemonList] = useHttp('https://pokeapi.co/api/v2/pokemon');
    if (pokemonList) {
        pokemonList = pokemonList.results.map(p => ({...p, id: p.url.match(/\/(\d+)\/$/)[1]}));
        cards = pokemonList.map(pokemon =>
            <PokemonSmallCard pokemon={pokemon} key={pokemon.id}/>
        );
    }

    const {id} = useParams();
    return <>
        <h1>Pokemon list</h1>
        <div className="content">
            <CardsContainer>
                {cards ? cards : <p>Loading list...</p>}
            </CardsContainer>
            {id && <PokemonDetails id={id}/>}
        </div>
    </>;
}

export default PokemonList;
