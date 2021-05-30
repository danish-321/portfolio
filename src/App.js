import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <LazyLoad once>
        <NavigationBar />
      </LazyLoad>

      <LazyLoad once>
        <Home />
      </LazyLoad>

      <LazyLoad once>
        <About />
      </LazyLoad>

      <LazyLoad once>
        <Projects />
      </LazyLoad>

      <LazyLoad once>
        <Contact />
      </LazyLoad>

      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
