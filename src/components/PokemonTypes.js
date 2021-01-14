import PokemonType from "./PokemonType";
import {useHttp} from "../hooks/useHttp";
import {CardsContainer} from "../elements/CardsContainer";

const PokemonTypes = props => {
    const [data] = useHttp('https://pokeapi.co/api/v2/type');

    return <>
        <h1>Types of pokemon</h1>
        <div className="content">
            <CardsContainer>
                {data ?
                    data.results.map(type => <PokemonType type={type} key={type.name}/>)
                    : <p>Loading list...</p>
                }
            </CardsContainer>
        </div>
    </>;
}

export default PokemonTypes;
