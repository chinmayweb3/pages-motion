import React from "react";
import { Link } from "react-router-dom";
import { framerComponent } from "../components/HOC/framerComponent";

const Home = () => {
  return (
    <main className="h-[100vh] flex justify-center items-center">
      <div className="basis-[50%] h-screen flex flex-col justify-center bg-offWhite"></div>
      <div className="basis-[50%] h-full bg-offBlack z-[1]"></div>
    </main>
  );
};

export default framerComponent(Home);
