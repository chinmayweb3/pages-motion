import React from "react";
import { Link } from "react-router-dom";
import { framerComponent } from "../components/HOC/framerComponent";

const About = () => {
  return (
    <main className="h-[100vh] grid place-content-center bg-slate-500">
      <Link to={"/"}>Home</Link>
    </main>
  );
};

export default framerComponent(About);
