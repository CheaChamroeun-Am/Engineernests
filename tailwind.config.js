/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        covers : "url('/cover.png')",
      },
      backgroundColor : {
        'gradient-color' : 'rgba(250, 244, 244, 0.5)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#F3F6FF",
        primary1: "#3E64FF",
        primary2: "#1C2D73",
        primary3 : "#483EB5"
      },
    },
    darkMode: "class",
  },
};
