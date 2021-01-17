import React from 'react';
import {generatePath, NavLink} from "react-router-dom";
import {routes} from "../helpers/Globals";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  border: solid 2px #eee;
  box-shadow: 5px 5px 6px #ddd;
  padding: 5px 15px;
  margin: 2px 10px;
  text-decoration: none;
  font-weight: bold;
  color: #333;

  &.active {
    box-shadow: 2px 2px 4px #ddd;
    border-color: #c5c5c5;
    top: 3px;
    left: 3px;
  }
`;

const menuStyle = {marginBottom: 15, position: 'relative', verticalAlign: 'top'};

const NavBar = props => {
    return (
        <div className="menu" style={menuStyle}>
            <StyledNavLink exact to={generatePath(routes.pokemonList.path)}>{routes.pokemonList.title}</StyledNavLink>
            <StyledNavLink to={generatePath(routes.types.path)}>{routes.types.title}</StyledNavLink>
            <StyledNavLink to={generatePath(routes.pokemonCaughtList.path, {isCaught: 'caught'})}>
                {routes.pokemonCaughtList.title}</StyledNavLink>
        </div>
    );
};

export default NavBar;
