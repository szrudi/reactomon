import React from 'react';
import NavBar from "../components/NavBar";
import {Title} from "../elements/Title";
import {Route, Switch} from "react-router-dom";
import {routes} from "../helpers/Globals";
import {Content} from "../elements/Content";

const MainLayout = (props) => (
    <div className="App">
        <Title className={"title"}>
            <Switch>
                {[...Object.values(routes)].map((route) =>
                    <Route exact path={route.path} key={route.path}
                           render={
                               (routeProps) => route.title(routeProps.match.params.isCaught)
                           }
                    />
                )}
            </Switch>
        </Title>
        <NavBar/>
        <Content>{props.children}</Content>
    </div>
);

export default MainLayout;