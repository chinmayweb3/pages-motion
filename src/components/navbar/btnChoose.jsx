import React from "react";
import { Link } from "react-router-dom";

const BtnChoose = (props) => {
  return (
    <Link className="px-[20px] h-[40px] overflow-hidden hover:bg-white/5 group flex items-center relative" to={props.to}>
      {props.text}
      <div
        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        className="absolute group-hover:top-0 group-hover:left-0 duration-150 ease-in top-[100%] left-0 bg-offWhite w-[100%] h-[100%]"
      >
        <div className="absolute top-0 right-0 text-offBlack font-semibold w-full h-full flex justify-center items-center">{props.text}</div>
      </div>
      <div
        style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
        className="absolute group-hover:bottom-0 group-hover:right-0 duration-150 ease-in bottom-[100%] right-0 bg-offWhite w-[100%] h-[100%]"
      >
        <div className="absolute top-0 right-0 text-offBlack font-semibold w-full h-full flex justify-center items-center">{props.text}</div>
      </div>
    </Link>
  );
};
const BtnChoose2 = (props) => {
  return (
    <Link className="px-[20px] h-[40px] overflow-hidden hover:bg-white/5 group flex items-center relative" to={props.to}>
      {props.text}
      <div
        style={{ clipPath: "polygon(0 0, 0% 100%, 50% 50%)" }} //left
        className="absolute group-hover:left-0 duration-[250ms] ease-in top-0 left-[-100%] bg-offWhite w-[100%] h-[100%]"
      >
        <div className="absolute top-0 right-0 text-offBlack font-semibold w-full h-full flex justify-center items-center">{props.text}</div>
      </div>
      <div
        style={{ clipPath: "polygon(0 0, 50% 50%, 100% 0)" }} //top
        className="absolute group-hover:top-0 duration-[250ms] ease-in top-[-100%] left-0 bg-offWhite w-[100%] h-[100%]"
      >
        <div className="absolute top-0 right-0 text-offBlack font-semibold w-full h-full flex justify-center items-center">{props.text}</div>
      </div>

      <div
        style={{ clipPath: "polygon(100% 0, 50% 50%, 100% 100%)" }} //right
        className="absolute group-hover:right-0 duration-[250ms] ease-in top-0 right-[-100%] bg-offWhite w-[100%] h-[100%]"
      >
        <div className="absolute top-0 right-0 text-offBlack font-semibold w-full h-full flex justify-center items-center">{props.text}</div>
      </div>
      <div
        style={{ clipPath: "polygon(0 100%, 50% 50%, 100% 100%)" }} // bottom
        className="absolute group-hover:bottom-0 duration-[250ms] ease-in bottom-[-100%] left-0 bg-offWhite w-[100%] h-[100%]"
      >
        <div className="absolute top-0 right-0 text-offBlack font-semibold w-full h-full flex justify-center items-center">{props.text}</div>
      </div>
    </Link>
  );
};

export default BtnChoose;
