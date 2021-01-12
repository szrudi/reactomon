import PokemonCard from "./PokemonCard";
import {useHttp} from "../hooks/useHttp";

const PokemonList = props => {
    const [data, isLoading] = useHttp('https://pokeapi.co/api/v2/pokemon');

    let content = <p>Loading list...</p>;

    if (data && !isLoading) {
        let pokemonList = data.results.map(p => ({...p, id: p.url.match(/\/(\d+)\/$/)[1]}));
        content = pokemonList.map(
            pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        );
    }

    return (
        <div>
            <h1>List of pokemon</h1>
            {content}
        </div>
    );
}

export default PokemonList;
