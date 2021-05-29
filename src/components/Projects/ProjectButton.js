import React, { useState } from "react";
import style from "./style.js";

const ProjectButton = ({ website }) => {
  const [hover, setHover] = useState();

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        ...style.normal,
        ...(hover ? style.hover : null),
      }}
      onClick={() => (window.location = website)}
      className=" projectButton font-bold text-sm uppercase tracking-widest w-full h-10 flex items-center justify-center mt-10 cursor-pointer"
    >
      See Live
    </div>
  );
};

export default ProjectButton;
