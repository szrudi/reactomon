import React from 'react';
import {Link} from "react-router-dom";

const NavBar = props => {
    return (
        <div>
            <Link to="/pokemons">Pokemon list</Link>{' | '}
            <Link to="/types">Pokemon Types</Link>
        </div>
    );
}

export default NavBar;
