import React, { useState } from "react";
import style from "./style.js";
import { ReactComponent as DownArrow } from "./down-arrow.svg";

const ScrollDownButton = () => {
  const [hover, setHover] = useState();

  return (
    <a
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="mt-20 flex items-center cursor-pointer"
      href="#about"
    >
      <div
        style={{
          ...style.normal,
          ...(hover ? style.hover : null),
        }}
        className=" font-medium text-sm uppercase mx-1 px-1 py-1  duration-150 text-white rounded-md"
      >
        Scroll Down
      </div>
      <div
        className="w-3 h-3"
        style={{
          ...style.normal,
          ...(hover ? style.hover : null),
        }}
      >
        <DownArrow />
      </div>
    </a>
  );
};

export default ScrollDownButton;
