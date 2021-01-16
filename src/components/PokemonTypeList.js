import PokemonTypeSmallCard from "./PokemonTypeSmallCard";
import {useHttp} from "../hooks/useHttp";
import {CardsContainer} from "../elements/CardsContainer";
import {pokemonApi} from "../helpers/Globals";

const PokemonTypeList = props => {
    const [data] = useHttp(pokemonApi + '/type');
    return (
        <CardsContainer>
            {data ?
                data.results.map(type => <PokemonTypeSmallCard type={type} key={type.name}/>)
                : <p>Loading list...</p>
            }
        </CardsContainer>
    );
}

export default PokemonTypeList;
