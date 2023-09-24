import React from "react";
import { Link } from "react-router-dom";
import { framerComponent } from "../components/HOC/framerComponent";

const Home = () => {
  return (
    <main className="h-[100vh] grid place-content-center bg-slate-500">
      <Link to={"/about"}>About</Link>
    </main>
  );
};

export default framerComponent(Home);
