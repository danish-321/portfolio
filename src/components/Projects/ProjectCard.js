import React from "react";
import ProjectButton from "./ProjectButton";

const ProjectCard = ({ title, summary, website, picture, link }) => {
  return (
    <div className="w-full m-10 bg-gray-100 p-10 shadow-lg hover:bg-white duration-150 ">
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
