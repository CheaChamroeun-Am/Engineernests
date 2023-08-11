/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#F3F6FF",
        primary1: "#3E64FF",
        primary2: "#1C2D73",
      },
    },
    darkMode: "class",
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
  
};
