import React from "react";
import { framerComponent } from "../components/HOC/framerComponent";

const About = () => {
  return (
    <main className="min-h-[100vh] bg-offWhite dark:bg-offBlack d-mode mt-[80px]">
      <div className="mx-auto w-[90%]">
        <h1 className="text-[56px] font-rajdhani font-bold text-offBlack dark:text-offWhite d-mode text-center pt-[100px] pb-[40px]">About Us</h1>

        <div className="py-[50px] grid grid-cols-2 gap-[40px]">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </main>
  );
};

export default framerComponent(About);

const LeftSide = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px] h-fit">
      <div className="w-full h-[150px] bg-white shadow-md dark:bg-black d-mode flex-center flex-col">
        <p>0</p>
        <p>Client</p>
      </div>
      <div className="w-full h-[150px] bg-white shadow-md dark:bg-black d-mode flex-center flex-col">
        <p>0</p>
        <p>Client</p>
      </div>
      <div className="w-full h-[150px] bg-white shadow-md dark:bg-black d-mode flex-center flex-col">
        <p>0</p>
        <p>Client</p>
      </div>
      <div className="w-full h-[150px] bg-white shadow-md dark:bg-black d-mode flex-center flex-col">
        <p>0</p>
        <p>Client</p>
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className=" text-offBlack dark:text-offWhite d-mode font-rajdhani">
      <h2 className="text-offGold font-orbitron font-bold text-[16px] tracking-[2px]">About me</h2>
      <h2 className="pt-[15px] font-rajdhani text-[42px] font-semibold leading-[1.2]">A UI/UX Designer & Web Developer Based in Philippines</h2>
      <p className="font-rajdhani text-[18px] pt-[15px] text-offGray">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="grid grid-cols-2 gap-x-[30px] gap-y-[20px] pt-[40px] text-[16px] font-semibold">
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
};
