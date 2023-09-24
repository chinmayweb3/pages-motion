import React from "react";
import { Link } from "react-router-dom";
import { framerComponent } from "../components/HOC/framerComponent";

const About = () => {
  return (
    <div className="h-screen grid place-content-center bg-slate-500">
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default framerComponent(About);
