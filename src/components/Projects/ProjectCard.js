import React from "react";
import ProjectButton from "./ProjectButton";

const ProjectCard = ({ title, summary, website, picture }) => {
  return (
    <div className="w-full m-10 bg-gray-100 p-10 shadow-lg hover:bg-white duration-150 ">
      <img src={picture} />

      <div className="font-bold text-black  text-xl text-center my-10">
        {title}
      </div>

      <div className="text-center">{summary}</div>

      <ProjectButton website={website} />
    </div>
  );
};

export default ProjectCard;

// {
/* <div className="w-full m-10 bg-white p-10 shadow-lg">
<div></div>

<div className="font-bold text-black  text-xl text-center my-10">
  Todoser
</div>

<div className="text-center">
  Todoser is a web app that companies can use to organize their
  calendars and tasks. Made using React, Express, MongoDB, Node,
  Framer Motion, Tailwindcss, etc.
</div>

// {/* see live */
// }
// {
//   /* <div */
// }
//   className=" button font-bold text-sm uppercase text-white tracking-widest w-full h-10 flex items-center justify-center mt-10"
//   style={{ backgroundColor: "#812385" }}
// >
//   See Live
// </div>
// </div> */}
