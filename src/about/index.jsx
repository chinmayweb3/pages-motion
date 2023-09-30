import React from "react";
import { framerComponent } from "../components/HOC/framerComponent";

const About = () => (
  <main className="h bg-offWhite dark:bg-offBlack d-mode mt-[60px] sm:mt-[80px]">
    <div className="mx-auto w-[90%] ">
      <h1 className="text-[42px] sm:text-[56px] font-rajdhani font-bold text-offBlack dark:text-offWhite d-mode text-center pt-[60px] sm:pt-[100px] sm:pb-[40px]">
        About Us
      </h1>

      <div className="py-[50px] grid xl:grid-cols-2 gap-[40px] relative">
        <ColorShade />
        <LeftSide />
        <RightSide />
      </div>
    </div>
  </main>
);

export default framerComponent(About);

const ColorShade = () => (
  <div className="absolute top-[-30%] left-0 w-full h-full blur-[50px]">
    <div
      style={{
        clipPath: "polygon(98% 9%, 99% 15%, 100% 43%, 67% 37%, 94% 63%, 1% 86%, 1% 34%, 77% 77%, 91% 27%, 58% 29%)",
      }}
      className="bg-cyan-600 bg-gradient-to-tr from-[#f28500] dark:from-[#bd62a2] to-[#c2bf27] dark:to-[#0a82fa] w-[70%] h-[100%] opacity-40 mx-auto"
    />
  </div>
);

const LeftSide = () => (
  <div className="grid grid-cols-2 gap-[20px] h-fit text-offBlack dark:text-offWhite font-rajdhani text-[28px] z-[1]">
    <div className="w-full h-[150px] bg-white shadow-2xl dark:bg-offGray d-mode flex-center flex-col animate-shake-1">
      <p className="font-bold font-orbitron text-offGold">990</p>
      <p className="text-[22px]">Client</p>
    </div>
    <div className="w-full h-[150px] bg-white shadow-2xl dark:bg-offGray d-mode flex-center flex-col animate-shake-2 ">
      <p className="font-bold font-orbitron text-offGold">990</p>
      <p className="text-[22px]">Client</p>
    </div>
    <div className="w-full h-[150px] bg-white shadow-2xl dark:bg-offGray d-mode flex-center flex-col animate-shake-3 ">
      <p className="font-bold font-orbitron text-offGold">990</p>
      <p className="text-[22px]">Client</p>
    </div>
    <div className="w-full h-[150px] bg-white shadow-2xl dark:bg-offGray d-mode flex-center flex-col animate-shake-4 ">
      <p className="font-bold font-orbitron text-offGold">990</p>
      <p className="text-[22px]">Client</p>
    </div>
  </div>
);

const RightSide = () => (
  <div className=" text-offBlack dark:text-offWhite d-mode font-rajdhani z-[1]">
    <h2 className="text-offGold font-orbitron font-bold text-[16px] tracking-[2px]">About me</h2>
    <h2 className="pt-[15px] font-rajdhani text-[42px] font-semibold leading-[1.2]">A Full Stack Web Developer Based in India</h2>
    <p className="font-rajdhani text-[18px] pt-[15px] text-[#999999]">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
    </p>
    <div className="grid xl:grid-cols-2 gap-x-[30px] gap-y-[20px] pt-[40px] text-[16px] font-semibold">
      <div className="grid grid-cols-[1fr_1.5fr] gap-[10px]">
        <p>Name:</p>
        <p className="font-bold text-offGold">Clyde Nowitzki</p>
        <p>Date of birth :</p>
        <p className="font-bold text-offGold">January 01, 1990</p>
        <p>Address:</p>
        <p className="font-bold text-offGold">San Francisco CA 97987 USA</p>
      </div>
      <div className="grid grid-cols-[1fr_1.5fr] gap-[10px]">
        <p>Zip code:</p>
        <p className="font-bold text-offGold">1000</p>
        <p>Email:</p>
        <p className="font-bold text-offGold">cydenowitzki@gmail.com</p>
        <p>Phone:</p>
        <p className="font-bold text-offGold">+1-2234-5678-9-0</p>
      </div>
    </div>

    <button className="uppercase bg-offGold px-[30px] text-[18px] py-[10px] font-rajdhani tracking-[2px] font-bold mt-[60px]">download cv</button>
  </div>
);
