import React from "react";
import { Link } from "react-router-dom";
import BtnChoose from "./btnChoose";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-offBlack z-[20] flex">
      <div className="h-[40px] my-auto w-[90%] m-auto flex justify-between items-center text-offWhite">
        <h1>Logo</h1>
        <div className="flex justify-center items-center text-[16px] font-rajdhani font-normal tracking-[2px]">
          <BtnChoose to="/" text="Home" />

          <hr className="h-[40px] w-[1px] bg-slate-50" />
          <BtnChoose to="/about" text="About" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
