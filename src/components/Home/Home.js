import React, { useState } from "react";
import "./homeStyle.css";
import { motion } from "framer-motion";
import ScrollDownButton from "./ScrollDownButton";

const Home = () => {
  const imgSrc = "/resources/southpole.jpg";

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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      id="home"
      className=" h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: 600,
      }}
    >
      <div className="w-full">
        <div>
          <div className="flex flex-col sm:flex-row items-start  justify-evenly">
            <div className="">
              <div className="flex items-center mb-3">
                <div className="w-8 bg-purple mr-3" style={{ height: 1 }}></div>
                <motion.div
                  variants={item}
                  className="font-bold text-sm uppercase text-purple tracking-widest"
                >
                  Hello There
                </motion.div>
              </div>
              <motion.div
                variants={item}
                className=" my-1 text-white font-semibold text-3xl sm:text-5xl "
              >
                I am Danish Anwer
              </motion.div>
              <motion.div
                variants={item}
                className="text-white font-semibold    text-3xl sm:text-5xl "
              >
                I am a Web Developer
              </motion.div>

              <motion.div variants={item}>
                <ScrollDownButton />
              </motion.div>
            </div>
            <motion.div
              variants={item}
              className=" w-full sm:w-36 flex  flex-col items-center"
            >
              <a
                className=" w-3/5 sm:w-36 mt-16 m-1 h-12 flex items-center justify-center border-white border text-white font-medium text-sm uppercase btn-wipe-bot-up"
                href="#portfolio"
              >
                Latest Projects
              </a>
              <a
                className=" w-3/5  sm:w-36  m-1 h-12 flex items-center justify-center border-white border text-white font-medium text-sm uppercase btn-wipe-bot-up"
                href="#about"
              >
                More About Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
