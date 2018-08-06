import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ValidateAddress from "../components/ValidateAddress";
import DisplayDirections from "../components/DisplayDirections";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ValidateAddress} />
      <Route path="/map" exact component={DisplayDirections} />
    </Switch>
  </BrowserRouter>
);
