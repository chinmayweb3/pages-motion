import React from "react";
import { Link } from "react-router-dom";
import { framerComponent } from "../components/HOC/framerComponent";

const Home = () => {
  return (
    <main className="h-[100vh] flex-center">
      <div className="basis-[50%] h-screen bg-offWhite"></div>
      <div className="basis-[50%] h-screen bg-offBlack "></div>

      <div className="absolute w-[90%] h-[100px] flex-center">
        <div className="basis-[50%] h-screen flex justify-center flex-col">
          <p className="text-orange-500 font-orbitron font-semibold tracking-[2px] text-[16px]">UI Developer</p>
          <h1 className="text-[72px] font-rajdhani font-black text-offBlack leading-[1]">
            Lorem Lipsum <br /> Lorem Lipsu
          </h1>
        </div>
        <div className="basis-[50%] h-screen "></div>
      </div>
    </main>
  );
};

export default framerComponent(Home);
