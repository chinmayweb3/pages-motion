import React from "react";
import { Link } from "react-router-dom";
import { framerComponent } from "../components/HOC/framerComponent";

const Home = () => {
  return (
    <div className="h-screen grid place-content-center bg-slate-500">
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default framerComponent(Home);
