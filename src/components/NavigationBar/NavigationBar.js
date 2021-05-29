import React, { useState, useEffect } from "react";
import OutsideAlerter from "./OutsideAlerter";
import NavigationLink from "./NavigationLink";
import NavigationLinkHover from "./NavigationLinkHover";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

import { ReactComponent as Menu } from "./menu.svg";

import "./style.css";

const NavigationBar = () => {
  const [responsive, setResponsive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);
  const [navBackground, setNavBackground] = useState();

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("scroll", handleScroll);
  });

  const handleResize = () => {
    if (window.innerWidth < 800 && responsive !== true) setResponsive(true);
    else if (window.innerWidth > 800 && responsive !== false)
      setResponsive(false);
  };

  const handleScroll = () => {
    setNavBackground(window.scrollY > window.innerHeight - 10 ? true : false);
  };

  console.log("NAV BACKGROUND", responsive);

  // if <600 then responive NavigationBar
  // responisv nav, button click then menu

  // if >600 then nav

  // width animate in from top
  //

  return (
    <div className="fixed w-full" style={{}}>
      <div
        className={classNames("px-3  pb-3 flex items-center justify-between ")}
        style={{ zIndex: 100 }}
      >
        <a
          href="#home"
          className="text-2xl font-medium mx-1 px-3 py-1 duration-150 cursor-pointer text-white rounded-md"
        >
          DA
        </a>

        {!responsive && (
          <div>
            <NavigationLink linkName="home" />
            <NavigationLink linkName="about" />
            <NavigationLink linkName="portfolio" />
            <NavigationLink linkName="contact" />
          </div>
        )}

        {responsive && showMenuButton && (
          <div
            onClick={() => {
              setShowMenu(true);
              setShowMenuButton(false);
            }}
            className="w-10 h-10"
          >
            <div className="w-10 h-10 p-2">
              <Menu />
            </div>
          </div>
        )}
      </div>

      {navBackground && (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 1,
              y: -70,
              height: 0,
            }}
            exit={{
              opacity: 1,
              y: -70,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: -70,
              height: 60,
            }}
            transition={{
              opacity: {
                duration: 1,
              },
            }}
            style={{ zIndex: -100 }}
            className={classNames("w-screen h-10 bg-black absolute")}
          ></motion.div>
        </AnimatePresence>
      )}
      {/* <OutsideAlerter
        display={() => {
          setShowMenu(false);
          setShowMenuButton(true);
        }}
      >
        <div className="">
          {showMenu && (
            <div className="flex flex-col pb-1">
              <NavigationLinkHover
                linkName="home"
                setShowMenu={setShowMenu}
                setShowMenuButton={setShowMenuButton}
              />

              <NavigationLinkHover
                linkName="about"
                setShowMenu={setShowMenu}
                setShowMenuButton={setShowMenuButton}
              />

              <NavigationLinkHover
                linkName="portfolio"
                setShowMenu={setShowMenu}
                setShowMenuButton={setShowMenuButton}
              />

              <NavigationLinkHover
                linkName="contact"
                setShowMenu={setShowMenu}
                setShowMenuButton={setShowMenuButton}
              />
            </div>
          )}
        </div>
      </OutsideAlerter>
     */}
    </div>
  );
};

export default NavigationBar;
