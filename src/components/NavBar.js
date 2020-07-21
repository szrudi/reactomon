import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/pokemon-list">Pokemon list</Link>{' | '}
                <Link to="/pokemon-types">Pokemon Types</Link>
            </div>
        );
    }
}

export default NavBar;