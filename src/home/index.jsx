import React from "react";
import { framerComponent } from "../components/HOC/framerComponent";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

const Home = () => {
  return (
    <main className="h-[100vh] flex-center">
      <div className="basis-[50%] h-screen bg-offWhite dark:bg-offBlack d-mode"></div>
      <div className="basis-[50%] h-screen bg-offBlack dark:bg-offWhite d-mode "></div>
      <div className="absolute top-0 left-0 w-full h-full flex">
        <div
          style={{
            clipPath: "polygon(20% 38%, 0 0, 0 54%, 47% 26%, 36% 59%, 95% 81%, 100% 59%, 100% 100%, 63% 48%, 57% 93%, 19% 50%, 77% 28%)",
          }}
          className="dark:opacity-0 opacity-30 w-[50%] h-full bg-gradient-to-tr from-yellow-600 to-cyan-600"
        />
        <div
          style={{
            transform: "rotateY(180deg)",
            clipPath: "polygon(20% 38%, 0 0, 0 54%, 47% 26%, 36% 59%, 95% 81%, 100% 59%, 100% 100%, 63% 48%, 57% 93%, 19% 50%, 77% 28%)",
          }}
          className="opacity-0 dark:opacity-30 w-[50%] h-full bg-gradient-to-tr dark:from-pink-800 dark:to-amber-800"
        />
      </div>

      <div className="absolute w-[90%] h-[100px] flex-center">
        <LeftSection />
        <RightSection />
      </div>
    </main>
  );
};

export default framerComponent(Home);
