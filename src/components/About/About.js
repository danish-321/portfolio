import React, { useState, useEffect } from "react";
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

const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const handleScroll = () => {
    let scrollY = window.scrollY;

    if (window.innerHeight > 600) if (scrollY > 0 + 300) setShowAbout(true);

    if (window.innerHeight < 600)
      if (scrollY > 600 - window.innerHeight - 10) setShowAbout(true);
  };

  let skills = ["html", "css", "javascript", "react", "redux", "tailwindcss"];

  skills = skills.map((skill) => (
    <div className="inline-block mr-3 my-3 p-3 font-bold  text-black tracking-widest text-sm uppercase hover:bg-gray-300 bg-gray-200 cursor-pointer">
      {skill}
    </div>
  ));

  return (
    <div
      id="about"
      className="h-screen flex flex-col items-center justify-evenly"
      style={{ minHeight: 600, maxHeight: 1000 }}
    >
      {showAbout && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div
              variants={item}
              className="mt-10 font-bold text-sm uppercase text-purple tracking-widest"
            >
              About
            </motion.div>
            <motion.div
              variants={item}
              className="my-1 text-black font-semibold text-3xl sm:text-5xl"
            >
              Personal Info
            </motion.div>
            <motion.div
              variants={item}
              className="font-medium mx-1 mt-3 px-1 py-1  duration-150  text-black rounded-md"
            >
              Get to know more about me
            </motion.div>
          </div>

          <div className="flex items-start" style={{ maxWidth: 1000 }}>
            <div className="w-full m-10">
              <motion.div
                variants={item}
                className="font-bold text-xl text-black tracking-wide"
              >
                Hello!
              </motion.div>
              <motion.div variants={item} className="mt-3">
                My name is Danish Anwer and I'm a passionate Frontend Web
                Developer using web technologies to build amazing products and
                focusing on solving problems for different niches and different
                industries using the power of technology.
              </motion.div>
              <motion.div variants={item} className="mt-3">
                I will love to hear from you. Whether it's a project, job
                opportunity, or just a chat. Feel free to contact me.
              </motion.div>
            </div>

            <div className="w-full m-10">
              <motion.div
                variants={item}
                className="font-bold text-xl text-black tracking-wide mb-3"
              >
                Skills
              </motion.div>
              <motion.div variants={item}>{skills}</motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
