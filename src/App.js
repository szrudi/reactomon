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
    // TODO: add theme switch (normal/night mode)
    //   - https://reactjs.org/docs/context.html
    //   - https://www.smashingmagazine.com/2020/01/introduction-react-context-api/

    return (
        <BrowserRouter>
            <Route exact path="/">
                <Redirect to={generatePath(routes.pokemonList.path)}/>
            </Route>
            <MainLayout>
                <PokemonContextElement>
                    <Switch>
                        <Route path={routes.types.path}
                               component={PokemonTypeList}/>
                        <Route exact path={[routes.pokemonList.path, routes.pokemon.path]}
                               render={
                                   (routeProps) => {
                                       const isCaught = routeProps.match.params.isCaught === 'caught';
                                       const showDetails = routes.pokemon.path === routeProps.match.path;
                                       return (<>
                                           {showDetails && <PokemonDetails id={routeProps.match.params.id}/>}
                                           <PokemonList caughtOnly={isCaught}/>
                                       </>);
                                   }
                               }/>
                    </Switch>
                </PokemonContextElement>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
