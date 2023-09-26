import React from "react";
import { framerComponent } from "../components/HOC/framerComponent";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <main className="h-[100vh] flex-center">
      <div className="basis-[50%] h-screen bg-offWhite"></div>
      <div className="basis-[50%] h-screen bg-offBlack "></div>

      <div className="absolute w-[90%] h-[100px] flex-center">
        <div className="basis-[50%] h-screen flex justify-center flex-col">
          <p className="text-[#f4cd58] font-orbitron font-semibold tracking-[2px] text-[16px]">UI Developer</p>
          <h1 className="text-[72px] font-rajdhani font-black text-offBlack leading-[1]">
            Lorem Lipsum <br /> Lorem Lipsu
          </h1>
          <button className="w-fit px-[25px] text-[18px] whitespace-nowrap font-bold flex-center gap-[10px] font-rajdhani py-[10px] mt-[20px] shadow-[0_20px_45px_#00000030] duration-500 hover:shadow-[0_0_45px_#00000026] ">
            HIRE ME ! <AiOutlineArrowRight strokeWidth={35} fill="#111115" />
          </button>
        </div>
        <div className="basis-[50%] h-screen "></div>
      </div>
    </main>
  );
};

export default framerComponent(Home);
