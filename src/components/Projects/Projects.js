import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: -100 },
  show: {
    y: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -100,

    transition: {
      staggerDirection: -1,
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      type: "spring",
      bounce: 0.1,
    },
  },
};

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const handleScroll = () => {
    let scrollY = window.scrollY;

    console.log(scrollY, window.innerHeight);

    if (window.innerHeight < 600)
      if (scrollY > 600 - window.innerHeight + 800) setShowProjects(true);
    if (window.innerHeight < 800) if (scrollY > 800) setShowProjects(true);
    if (window.innerHeight >= 800)
      if (scrollY > window.innerHeight + 10) setShowProjects(true);
  };

  return (
    <div
      id="portfolio"
      className="h-screen flex flex-col items-center justify-evenly"
      style={{ backgroundColor: "#E7E7E8", minHeight: 1000 }}
    >
      {showProjects && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex flex-col  justify-evenly h-screen"
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div
              variants={item}
              className="mt-10 font-bold text-sm uppercase text-purple tracking-widest"
            >
              Works
            </motion.div>
            <motion.div
              variants={item}
              className="my-1 text-black font-semibold text-3xl sm:text-5xl"
            >
              Latest Projects
            </motion.div>
            <motion.div
              variants={item}
              className="font-medium  mx-1 mt-3 px-1 py-1  duration-150  text-black rounded-md"
            >
              Here you can find some of the projects that I created recently
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="flex items-start mx-10"
            style={{ maxWidth: 800 }}
          >
            {/* <ProjectCard /> */}
            <ProjectCard
              title={"Todoser"}
              summary={
                "Todoser is a web app that companies can use to organize their calendars and tasks. Made using React, Express, MongoDB, Node, Framer Motion, Tailwindcss, etc."
              }
              website={"https://todoser.net/"}
              picture={"https://i.ibb.co/5j81L5K/todo-screenshot.png"}
            />

             {/* <ProjectCard /> */}
             <ProjectCard
              title={"BusineX Email"}
              summary={
                "BusineX Email is an HTML Email created using HTML and CSS."
              }
              website={""}
              picture={"https://i.ibb.co/5j81L5K/todo-screenshot.png"}
            />

          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
