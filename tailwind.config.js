/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        MabryProLight: "'MabryProLight', serif",
        MabryProRegular: "'MabryProRegular', serif",
        MabryProMedium: "'MabryProMedium', serif",
        MabryProBold: "'MabryProBold', serif",
        MabryProBlack: "'MabryProBlack', serif",
      },
      spacing: {
        529: "529px",
      },
      colors: {
        "deezer-background-white": "#FFFFFF",
        "deezer-font-white": "#FFFFFF",
        "deezer-font-black": "#1E1E1E",
        "deezer-font-grey": "#BEBEC7",
        "deezer-orange": "#EF5466",
        "deezer-light-grey": "#ECECEC",
        "deezer-purple": "#2B0A60",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
