import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const HomeApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default HomeApp;
