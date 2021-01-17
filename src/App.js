import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonTypeList from "./components/PokemonTypeList";
import MainLayout from "./layouts/MainLayout";
import {routes} from "./helpers/Globals";
import PokemonDetails from "./components/PokemonDetails";
import PokemonContextElement from "./contexts/PokemonContextElement";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <PokemonContextElement>
                    <Switch>
                        <Route exact path={[
                            routes.root.path,
                            routes.pokemonList.path, routes.pokemon.path,
                            routes.pokemonCaughtList.path, routes.pokemonCaught.path
                        ]}>
                            <Route path={[routes.pokemon.path, routes.pokemonCaught.path]}
                                   render={(routeProps) => (
                                       <PokemonDetails id={routeProps.match.params.id}/>)}/>
                            <Switch>
                                <Route path={[routes.pokemonList.path, routes.root.path]}>
                                    <PokemonList/>
                                </Route>
                                <Route path={routes.pokemonCaughtList.path}>
                                    <PokemonList caughtOnly={true}/>
                                </Route>
                            </Switch>
                        </Route>
                        <Route path={routes.types.path}
                               component={PokemonTypeList}/>
                    </Switch>
                </PokemonContextElement>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
