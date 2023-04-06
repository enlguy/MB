/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbrown: "#E3C770",
        orange: "#FFAE6D",
        yellow: "#FECD70",
        tan: "#F3E0B5",
        grey: "#ededed",
        lightblue: "#88E1F2",
        "deep-blue": "#21243D",
        "dark-grey": "#757575",
        "opaque-black": "rga(0,0,0,0.35)"
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        crafty: ["Crafty Girls", "cursive"],
      },
    }
  },
  plugins: [],
}
