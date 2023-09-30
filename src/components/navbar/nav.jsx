import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnChoose from "./btnChoose";
import { FiSun, FiMoon } from "react-icons/fi";

import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] sm:h-[80px] bg-offBlack/90 dark:bg-offWhite/90 d-mode backdrop-blur-md z-[20] flex">
      <div className="h-[40px] my-auto max-width flex justify-between items-center text-offWhite dark:text-offWhite d-mode">
        <h1 className="font-orbitron text-[26px] sm:text-[32px] uppercase text-offWhite dark:text-offBlack d-mode">Logo..</h1>
        <div className="flex-center text-[14px] sm:text-[16px] font-rajdhani font-normal tracking-[2px]">
          <ModeChange />
          <BtnChoose to="/" text="Home" />
          <hr className="h-[30px] sm:h-[40px] w-[1px] bg-offWhite dark:bg-offBlack" />
          <BtnChoose to="/about" text="About" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ModeChange = () => {
  const [darkmode, setdarkmode] = useState(document.getElementById("tailwind-mode")?.classList?.contains("dark"));

  const modeChange = () => {
    document.getElementById("tailwind-mode").classList.toggle("dark");
    setdarkmode(document.getElementById("tailwind-mode").classList.contains("dark"));
  };

  return (
    <div onClick={modeChange} className="sm:mx-[10px] h-[40px] w-[40px] relative overflow-hidden">
      <AnimatePresence>
        {!darkmode && (
          <motion.div
            className="w-fit h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute"
            initial={{ top: "150%" }}
            animate={{ top: "50%" }}
            exit={{ top: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FiSun className={`fill-offWhite cursor-pointer w-[15px] md:w-[20px] h-[15px] md:h-[20px] `} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {darkmode && (
          <motion.div
            className="w-fit h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute"
            initial={{ top: "150%" }}
            animate={{ top: "50%" }}
            exit={{ top: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FiMoon className={`fill-offBlack stroke-0 cursor-pointer w-[15px] md:w-[20px] h-[15px] md:h-[20px] `} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
