import React from 'react';
import NavBar from "../components/NavBar";
import {Title} from "../elements/Title";
import {Route, Switch} from "react-router-dom";
import {routes} from "../helpers/Globals";

const MainLayout = (props) => (
    <div className="App">
        <Title className={"title"}>
            <Switch>
                {[...Object.values(routes)].map((route) =>
                    <Route exact path={route.path}>{route.title}</Route>)}
            </Switch>
        </Title>
        <NavBar/>
        <div className="content">
            {props.children}
        </div>
    </div>
);

export default MainLayout;