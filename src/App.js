import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Email from "./Email/Email";
import HomeApp from "./HomeApp";

function App() {
  const location = useLocation();

  return (
    <Switch location={location} key={location.key}>
      <Route exact path="/" component={HomeApp} />
      <Route exact path="/email" component={Email} />
    </Switch>
  );
}

export default App;
