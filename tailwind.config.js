/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        offBlack: "#111115",
        offWhite: "#eef2f2",
        offGold: "#d5c455",
        offGray: "#222222",
      },
    },

    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      rajdhani: ["Rajdhani", "sans-serif"],
    },
  },
  plugins: [],
};
