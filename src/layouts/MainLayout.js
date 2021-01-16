import React from 'react';
import NavBar from "../components/NavBar";
import {Title} from "../elements/Title";
import {Route, Switch} from "react-router-dom";
import {routes} from "../helpers/Globals";

const MainLayout = (props) => (
    <div className="App">
        <Title className={"title"}>
            <Switch>
                <Route path={routes.pokemon}>Pokemon Details</Route>
                <Route path={routes.pokemonList}>Pokemon list</Route>
                <Route path={routes.types}>Types of pokemon</Route>
            </Switch>
        </Title>
        <NavBar/>
        <div className="content">
            {props.children}
        </div>
    </div>
);

export default MainLayout;