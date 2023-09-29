import React from "react";
import { framerComponent } from "../components/HOC/framerComponent";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

const Home = () => {
  return (
    <main className="h-[100vh] flex-center">
      <div className="basis-[50%] h-screen bg-offWhite dark:bg-offBlack d-mode"></div>
      <div className="basis-[50%] h-screen bg-offBlack dark:bg-offWhite d-mode "></div>

      <div className="absolute w-[90%] h-[100px] flex-center">
        <LeftSection />
        <RightSection />
      </div>
    </main>
  );
};

export default framerComponent(Home);
