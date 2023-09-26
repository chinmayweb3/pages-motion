import React from "react";
import { framerComponent } from "../components/HOC/framerComponent";
import { AiOutlineArrowRight } from "react-icons/ai";

const images = [
  "https://www.pngall.com/wp-content/uploads/14/Itachi-PNG-Photos.png",
  "https://www.pngplay.com/wp-content/uploads/12/Kakashi-Wallpaper-PNG-Free-File-Download.png",
  "https://www.pngmart.com/files/22/Kakashi-Hatake-PNG-Image.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50c50d7f-c2d0-4deb-9f11-e23bb7720612/dey3415-a5637acf-853d-4ad4-9fd5-6f514a7d851c.png/v1/fill/w_1920,h_1920/satoru_gojo_render_iv__jujutsu_kaisen__by_aazi333_dey3415-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzUwYzUwZDdmLWMyZDAtNGRlYi05ZjExLWUyM2JiNzcyMDYxMlwvZGV5MzQxNS1hNTYzN2FjZi04NTNkLTRhZDQtOWZkNS02ZjUxNGE3ZDg1MWMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gZ6waSGPVNIhMlSUv-fpjjGYmp_C8zFt98WSLgBXqGI",
];

const Home = () => {
  return (
    <main className="h-[100vh] flex-center">
      <div className="basis-[50%] h-screen bg-offWhite"></div>
      <div className="basis-[50%] h-screen bg-offBlack "></div>

      <div className="absolute w-[90%] h-[100px] flex-center">
        <div className="basis-[50%] h-screen flex justify-center flex-col">
          <p className="text-[#f4cd58] font-orbitron font-semibold tracking-[2px] text-[16px]">UI Developer</p>
          <h1 className="text-[72px] font-rajdhani font-black text-offBlack leading-[1]">
            Lorem Lipsum <br /> Lorem Lipsu
          </h1>
          <button className="w-fit px-[25px] text-[18px] whitespace-nowrap font-bold flex-center gap-[10px] font-rajdhani py-[10px] mt-[20px] shadow-[0_20px_45px_#00000030] duration-500 hover:shadow-[0_0_45px_#00000026] ">
            HIRE ME ! <AiOutlineArrowRight strokeWidth={35} fill="#111115" />
          </button>
        </div>
        <div className="basis-[50%] h-screen flex items-end justify-center overflow-hidden">
          <div className="flex-center w-full max-h-[500px]">
            <img
              className="object-contain w-full h-full  drop-shadow-[0_0_15px_#ffffff50] p-[30px]"
              src="https://static.wikia.nocookie.net/jujutsu-kaisen/images/f/fe/Satoru_Gojo_%28Jump_GIGA%29.png/revision/latest/scale-to-width-down/250?cb=20210901230616"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default framerComponent(Home);
