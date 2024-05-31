// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2647",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Onest-Thin", "sans-serif"],
        pextralight: ["Onest-ExtraLight", "sans-serif"],
        plight: ["Onest-Light", "sans-serif"],
        pregular: ["Onest-Regular", "sans-serif"],
        pmedium: ["Onest-Medium", "sans-serif"],
        psemibold: ["Onest-SemiBold", "sans-serif"],
        pbold: ["Onest-Bold", "sans-serif"],
        pextrabold: ["Onest-ExtraBold", "sans-serif"],
        pblack: ["Onest-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
