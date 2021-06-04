import React, { useEffect } from "react";
import { email } from "./businexEmail.js";
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

const Email = () => {
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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ backgroundColor: "#E7E7E8" }}
        className="flex flex-col justify-evenly items-center"
      >
        <div className="mt-10 flex flex-col items-center justify-center">
          <motion.div
            variants={item}
            className="font-bold text-sm uppercase text-purple tracking-widest"
          >
            Project
          </motion.div>
          <motion.div
            variants={item}
            className="my-1 text-black font-semibold text-3xl sm:text-5xl"
          >
            BusineX Email
          </motion.div>
          <motion.div
            variants={item}
            className="font-medium mx-1 mt-3 px-1 py-1  duration-150  text-black rounded-md"
          >
            BusineX Email is an HTML Email created using HTML and CSS.
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="my-12 hover:shadow-2xl duration-150"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: email,
            }}
          ></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Email;
