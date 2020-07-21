import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import PokemonTypes from "./components/PokemonTypes";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route path="/pokemon-list">
                        <PokemonList/>
                    </Route>
                    <Route path="/pokemon-types">
                        <PokemonTypes/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
