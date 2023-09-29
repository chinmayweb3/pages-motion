import React from "react";
import { framerComponent } from "../components/HOC/framerComponent";

const About = () => {
  return (
    <main className="min-h-[100vh] bg-offWhite dark:bg-offBlack d-mode mt-[80px]">
      <div className="mx-auto w-[90%]">
        <h1 className="text-[56px] font-rajdhani font-semibold text-offBlack dark:text-offWhite d-mode text-center py-[40px]">About Us</h1>
      </div>
    </main>
  );
};

export default framerComponent(About);
