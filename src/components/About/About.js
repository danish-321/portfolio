import React from "react";
import Image from "./Image";
// import image

const About = () => {
  let skills = ["html", "css", "javascript", "react", "redux", "tailwindcss"];

  skills = skills.map((skill) => (
    <div
      className="inline-block mr-3 my-3 p-3 font-bold  text-black tracking-widest text-sm uppercase "
      style={{ backgroundColor: "#E1E1E1" }}
    >
      {skill}
    </div>
  ));

  return (
    <div
      id="about"
      className="h-screen flex flex-col items-center justify-evenly"
      style={{ minHeight: 600, maxHeight: 1000 }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-sm uppercase text-purple tracking-widest">
          About
        </div>
        <div className="my-1 text-black font-semibold text-3xl sm:text-5xl">
          Personal Info
        </div>
        <div className="font-medium mx-1 mt-3 px-1 py-1  duration-150 cursor-pointer text-black rounded-md">
          Get to know more about me
        </div>
      </div>

      <div className="flex items-start" style={{ maxWidth: 1000 }}>
        <div className="w-full m-10">
          <div className="font-bold text-xl text-black tracking-wide">
            Hello!
          </div>
          <div className="mt-3">
            My name is Danish Anwer and I'm a passionate Frontend Web Developer
            using web technologies to build amazing products and focusing on
            solving problems for different niches and different industries using
            the power of technology.
          </div>
          <div className="mt-3">
            I will love to hear from you. Whether it's a project, job
            opportunity, or just a chat. Feel free to contact me.
          </div>
        </div>

        <div className="w-full m-10">
          <div className="font-bold text-xl text-black tracking-wide mb-3">
            Skills
          </div>
          <div>{skills}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
