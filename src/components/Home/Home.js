import React, { useState } from "react";
import "./homeStyle.css";
import ScrollDownButton from "./ScrollDownButton";

const Home = () => {
  const imgSrc = "/resources/southpole.jpg";

  return (
    <div
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
                <div className="font-bold text-sm uppercase text-purple tracking-widest">
                  Hello There
                </div>
              </div>
              <div className=" my-1 text-white font-semibold text-3xl sm:text-5xl ">
                I am Danish Anwer
              </div>
              <div className="text-white font-semibold    text-3xl sm:text-5xl ">
                I am a Web Developer
              </div>

              <ScrollDownButton />
            </div>
            <div className=" w-full sm:w-36 flex  flex-col items-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
