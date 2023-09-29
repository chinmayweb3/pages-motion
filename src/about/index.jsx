import React from "react";
import { Link } from "react-router-dom";
import { framerComponent } from "../components/HOC/framerComponent";

const About = () => {
  return (
    <main className="min-h-[100vh] bg-slate-500">
      <h1 className="text-[64px] font-orbitron font-semibold">About Us</h1>
    </main>
  );
};

export default framerComponent(About);
