import React from "react";
import "./NavigationLinkStyle.css";

const NavigationLink = ({ linkName }) => {
  const navButtonClassname =
    "font-medium text-sm uppercase mx-1 px-1 py-1  duration-150 cursor-pointer text-white rounded-md";

  return (
    <a href={`#${linkName}`} className={navButtonClassname}>
      {linkName}
    </a>
  );
};

export default NavigationLink;
