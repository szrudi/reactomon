import PokemonType from "./PokemonType";
import {useHttp} from "../hooks/useHttp";

const PokemonTypes = props => {
    const [data] = useHttp('https://pokeapi.co/api/v2/type');
    let pokemonTypes = data ? data.results : [];

    return (
        <div>
            <h1>List of types</h1>
            {pokemonTypes.map(type =>
                <PokemonType type={type} key={type.name}/>)}
        </div>
    );
}

export default PokemonTypes;
