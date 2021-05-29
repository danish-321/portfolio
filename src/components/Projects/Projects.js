import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="h-screen flex flex-col items-center justify-evenly"
      style={{ backgroundColor: "#E7E7E8", minHeight: 1000 }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-sm uppercase text-purple tracking-widest">
          Works
        </div>
        <div className="my-1 text-black font-semibold text-3xl sm:text-5xl">
          Latest Projects
        </div>
        <div className="font-medium  mx-1 mt-3 px-1 py-1  duration-150 cursor-pointer text-black rounded-md">
          Here you can find some of the projects that I created recently
        </div>
      </div>

      <div className="flex items-start mx-10" style={{ maxWidth: 800 }}>
        <ProjectCard
          title={"Todoser"}
          summary={
            "Todoser is a web app that companies can use to organize their calendars and tasks. Made using React, Express, MongoDB, Node, Framer Motion, Tailwindcss, etc."
          }
          website={"https://todoser-ehhk3.ondigitalocean.app/"}
          picture={"https://i.ibb.co/5j81L5K/todo-screenshot.png"}
        />
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
};

export default Projects;
