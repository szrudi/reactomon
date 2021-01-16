import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonTypeList from "./components/PokemonTypeList";
import MainLayout from "./layouts/MainLayout";
import {routes} from "./helpers/Globals";
import PokemonDetails from "./components/PokemonDetails";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route exact path={[routes.pokemon, routes.pokemonList, "/"]}>
                        <Route path={routes.pokemon}
                               render={(routeProps) => (
                                   <PokemonDetails id={routeProps.match.params.id}/>)}/>
                        <PokemonList/>
                    </Route>
                    <Route path={routes.types}
                           component={PokemonTypeList}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
