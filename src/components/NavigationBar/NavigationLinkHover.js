import React from "react";

const NavigationLinkHover = ({ linkName, setShowMenu, setShowMenuButton }) => {
  const navButtonClassname =
    "font-medium text-sm uppercase px-1 py-1  duration-150 cursor-pointer text-white ";

  return (
    <a
      href={`#${linkName}`}
      onClick={() => {
        setShowMenu(false);
        setShowMenuButton(true);
      }}
      className={navButtonClassname}
    >
      {linkName}
    </a>
  );
};

export default NavigationLinkHover;
