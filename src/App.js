import React from 'react';
import './App.css';
import {BrowserRouter, generatePath, Redirect, Route, Switch} from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonTypeList from "./components/PokemonTypeList";
import MainLayout from "./layouts/MainLayout";
import {routes} from "./helpers/Globals";
import PokemonDetails from "./components/PokemonDetails";
import PokemonContextElement from "./contexts/PokemonContextElement";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Redirect to={generatePath(routes.pokemonList.path)}/>
            </Route>
            <MainLayout>
                <Switch>
                    <Route path={routes.types.path}
                           component={PokemonTypeList}/>
                    <Route exact path={[
                        routes.pokemonList.path, routes.pokemon.path,
                        routes.pokemonCaughtList.path, routes.pokemonCaught.path]}
                           render={
                               (routeProps) => {
                                   const isCaught = routeProps.match.params.isCaught === 'caught';
                                   const showDetails = [routes.pokemon.path, routes.pokemonCaught.path]
                                       .includes(routeProps.match.path);
                                   return (
                                       <PokemonContextElement>
                                           {showDetails && <PokemonDetails id={routeProps.match.params.id}/>}
                                           <PokemonList caughtOnly={isCaught}/>
                                       </PokemonContextElement>);
                               }}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
