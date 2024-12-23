module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#343E69",
        darkBlueHover: "#5B6D9D",
        lightGreen: "#C7DC9F",
        lightGreenHover: "#A5C1A5",
        orange: "#DD5217",
        orangeHover: "#F2A365",
        yellow: "#F5DA79",
        yellowHover: "#F7E9A3",
        white: "#FFFFFF",
      },
      fontFamily: {
        base: ["'Noto Sans Japanese'", "sans-serif"],
      },
      fontSize: {
        heading: "2.4rem",
        base: "1rem",
        small: "0.7rem",
      },
    },
  },
  plugins: [],
};
