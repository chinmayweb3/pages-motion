import React from "react";

const images = [
  "https://www.pngall.com/wp-content/uploads/14/Itachi-PNG-Photos.png",
  "https://www.pngplay.com/wp-content/uploads/12/Kakashi-Wallpaper-PNG-Free-File-Download.png",
  "https://www.pngmart.com/files/22/Kakashi-Hatake-PNG-Image.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50c50d7f-c2d0-4deb-9f11-e23bb7720612/dey3415-a5637acf-853d-4ad4-9fd5-6f514a7d851c.png/v1/fill/w_1920,h_1920/satoru_gojo_render_iv__jujutsu_kaisen__by_aazi333_dey3415-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzUwYzUwZDdmLWMyZDAtNGRlYi05ZjExLWUyM2JiNzcyMDYxMlwvZGV5MzQxNS1hNTYzN2FjZi04NTNkLTRhZDQtOWZkNS02ZjUxNGE3ZDg1MWMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gZ6waSGPVNIhMlSUv-fpjjGYmp_C8zFt98WSLgBXqGI",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9ed4816-c11c-48b1-9f8e-00c3a5ade0a8/dewzsjo-0581130f-c95f-40d2-a1dd-618c9572670a.png/v1/fill/w_1062,h_752/tanjiro_kamado_render_png_1_by_karmicraze_dewzsjo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODgwIiwicGF0aCI6IlwvZlwvZjllZDQ4MTYtYzExYy00OGIxLTlmOGUtMDBjM2E1YWRlMGE4XC9kZXd6c2pvLTA1ODExMzBmLWM5NWYtNDBkMi1hMWRkLTYxOGM5NTcyNjcwYS5wbmciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.du5eKgI4d9qgOKSTUBrp7ThFNXOIx6QGr1_UL2Z5mmY",
];
const RightSection = () => {
  return (
    <div className="absolute xl:relative basis-[50%] h-screen flex items-end justify-center overflow-hidden">
      <div className="flex-center w-full max-h-[500px]">
        <img
          className="object-contain w-full h-full  drop-shadow-[0_0_15px_#ffffff50] dark:drop-shadow-[0_0_15px_#00000090] md:px-[20px] px-0"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9ed4816-c11c-48b1-9f8e-00c3a5ade0a8/dewzsjo-0581130f-c95f-40d2-a1dd-618c9572670a.png/v1/fill/w_1062,h_752/tanjiro_kamado_render_png_1_by_karmicraze_dewzsjo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODgwIiwicGF0aCI6IlwvZlwvZjllZDQ4MTYtYzExYy00OGIxLTlmOGUtMDBjM2E1YWRlMGE4XC9kZXd6c2pvLTA1ODExMzBmLWM5NWYtNDBkMi1hMWRkLTYxOGM5NTcyNjcwYS5wbmciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.du5eKgI4d9qgOKSTUBrp7ThFNXOIx6QGr1_UL2Z5mmY"
        />
      </div>
    </div>
  );
};

export default RightSection;
