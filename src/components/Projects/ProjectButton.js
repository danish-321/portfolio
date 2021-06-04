import React, { useState } from "react";
import style from "./style.js";
import { useHistory } from "react-router-dom";

const ProjectButton = ({ website, link }) => {
  const [hover, setHover] = useState();

  const history = useHistory();

  const handleClick = () => {
    history.push("/email");
  };

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
      onClick={() => {
        link ? handleClick() : (window.location = website);
      }}
      className=" projectButton font-bold text-sm uppercase tracking-widest w-full h-10 flex items-center justify-center mt-10 cursor-pointer"
    >
      See Live
    </div>
  );
};

export default ProjectButton;
