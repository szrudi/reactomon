import PokemonTypeSmallCard from "./PokemonTypeSmallCard";
import {useHttp} from "../hooks/useHttp";
import {CardsContainer} from "../elements/CardsContainer";
import {pokemonApi} from "../helpers/Globals";

const PokemonTypeList = () => {
    const [data, isLoading] = useHttp(pokemonApi + '/type');
    let placeHolder = <p>{isLoading ? "Loading list..." : "No type found."}</p>;
    return (
        <CardsContainer>
            {data ?
                data.results.map(type => <PokemonTypeSmallCard type={type} key={type.name}/>)
                : placeHolder
            }
        </CardsContainer>
    );
}

export default PokemonTypeList;
