import React from "react";
import ProjectButton from "./ProjectButton";

const ProjectCard = ({ title, summary, website, picture, link }) => {
  return (
    <div
    style={{ minWidth: 300, maxWidth:500}}
     className="w-full mx-3 md:mx-6 my-6 bg-gray-100 p-10 shadow-lg hover:bg-white duration-150 ">
      <div
        style={{  
          height:300,
          background: `url(${ picture })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      />

      <div className="font-bold text-black  text-xl text-center my-10">
        {title}
      </div>

      <div className="text-center">{summary}</div>

      <ProjectButton website={website} link={link} />
    </div>
  );
};

export default ProjectCard;
