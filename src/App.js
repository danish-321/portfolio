import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import Email from "./Email/Email";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
       <Router >
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
     
  );
}

export default App;
