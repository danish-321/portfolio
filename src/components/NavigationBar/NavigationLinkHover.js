import React from "react";

const NavigationLinkHover = ({ linkName, setShowMenu, setShowMenuButton }) => {
  const navButtonClassname =
    "font-medium text-sm uppercase mx-1 px-1 py-1  duration-150 cursor-pointer text-white rounded-md";

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
