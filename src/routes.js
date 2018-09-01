import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { pageWithLayout } from "./containers/page";

export const Routes = props => (
  <Switch className="app">
    <Route
      path="/"
      exact
      render={renderProps => <Home {...props} {...renderProps} />}
    />
    <Route
      path="/login"
      exact
      render={renderProps => <Login {...props} {...renderProps} />}
    />
  </Switch>
);

export default pageWithLayout(Routes);
