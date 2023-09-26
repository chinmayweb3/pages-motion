/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offBlack: "#111115",
        offWhite: "#eef2f2",
      },
    },

    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      rajdhani: ["Rajdhani", "sans-serif"],
    },
  },
  plugins: [],
};
