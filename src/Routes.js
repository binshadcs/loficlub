import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Tracks } from "./core";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tracks" exact component={Tracks} />
      </Switch>
    </Router>
  );
};

export default Routes;
