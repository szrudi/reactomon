import PokemonTypeSmallCard from "./PokemonTypeSmallCard";
import {useHttp} from "../hooks/useHttp";
import {CardsContainer} from "../elements/CardsContainer";

const PokemonTypeList = props => {
    const [data] = useHttp('https://pokeapi.co/api/v2/type');

    return <>
        <h1>Types of pokemon</h1>
        <div className="content">
            <CardsContainer>
                {data ?
                    data.results.map(type => <PokemonTypeSmallCard type={type} key={type.name}/>)
                    : <p>Loading list...</p>
                }
            </CardsContainer>
        </div>
    </>;
}

export default PokemonTypeList;
