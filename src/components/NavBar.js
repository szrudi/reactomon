import React from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../helpers/Globals";

const NavBar = props => {
    return (
        <div className="menu">
            <NavLink to={routes.pokemonList.path}>Pokemon list</NavLink>{' | '}
            <NavLink to={routes.types.path}>Pokemon Types</NavLink>
        </div>
    );
}

export default NavBar;
