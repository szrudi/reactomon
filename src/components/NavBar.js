import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/pokemons">Pokemon list</Link>{' | '}
                <Link to="/types">Pokemon Types</Link>
            </div>
        );
    }
}

export default NavBar;