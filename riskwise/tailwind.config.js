/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#7e5bef",
      },
      fontFamily: {
        "main-font": ["Graphik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
