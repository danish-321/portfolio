import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Email from "./Email/Email";
import HomeApp from "./HomeApp";
import { AnimatePresence } from "framer-motion";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <LazyLoad once>
        <NavigationBar />
      </LazyLoad>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={HomeApp} />
        <Route exact path="/email" component={Email} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
