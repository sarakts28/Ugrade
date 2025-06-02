/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      colors: {
        primary: {
          NavyBlue: "#0A2628",
          "dark-green": "#003C3F",
          "background-color": "rgba(243,245,247,1)",
        },
        secondary: {},
        // Add your custom colors here
        brand: {},
      },
    },
  },
  plugins: [],
};
