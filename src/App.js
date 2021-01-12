import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import PokemonTypes from "./components/PokemonTypes";
import PokemonDetails from "./components/PokemonDetails"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route path="/pokemons">
                        <PokemonList/>
                    </Route>
                    <Route path="/types">
                        <PokemonTypes/>
                    </Route>
                    <Route path="/pokemon/:id" component={PokemonDetails}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
