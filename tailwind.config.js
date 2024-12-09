module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#241915",
        blackHover: "#1D1410",
        lightBlue: "#52A5AD",
        pink: "#D9526A",
        pinkHover: "#C0485F",
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
