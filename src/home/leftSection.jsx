import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const LeftSection = () => {
  return (
    <div className="basis-[100%] xl:basis-[50%] h-screen flex justify-center flex-col z-[1]">
      <p className="text-offGold font-orbitron font-bold tracking-[2px] text-[16px]">UI Developer</p>
      <h1 className=" text-[54px] lg:text-[72px] font-rajdhani font-black text-offBlack dark:text-offWhite d-mode leading-[1.1] sm:leading-[1]">
        Lorem Lipsum <br /> Lorem Lipsu
      </h1>
      <button className="w-fit px-[25px] text-[18px] whitespace-nowrap font-bold flex-center gap-[10px] font-rajdhani py-[10px] mt-[20px] text-offBlack dark:text-offWhite bg-offWhite dark:bg-offBlack shadow-[0_20px_45px_#00000030] dark:shadow-[0_20px_45px_#ffffff30] duration-500 hover:shadow-[0_0_45px_#00000026] dark:hover:shadow-[0_0_45px_#ffffff26] ">
        HIRE ME ! <AiOutlineArrowRight strokeWidth={35} className="fill-offBlack dark:fill-offWhite stroke-offBlack dark:stroke-offWhite" />
      </button>
    </div>
  );
};

export default LeftSection;
