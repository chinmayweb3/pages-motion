import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnChoose from "./btnChoose";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-offBlack dark:bg-offWhite z-[20] flex">
      <div className="h-[40px] my-auto max-width flex justify-between items-center text-offWhite">
        <h1>Logo</h1>
        <div className="flex-center text-[16px] font-rajdhani font-normal tracking-[2px]">
          <h1
            onClick={() => {
              document.getElementById("tailwind-mode").classList.toggle("dark");
            }}
          >
            d
          </h1>
          <BtnChoose to="/" text="Home" />

          <hr className="h-[40px] w-[1px] bg-slate-50" />
          <BtnChoose to="/about" text="About" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
