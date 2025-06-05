/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        sans: ['Sora'], 
      },
      colors: {
        primary: {
         NavyBlue: '#0A2628',
         darkGreen: "#113025",
         secondaryGreen: "#003C3F",
        },
        secondary: {
        lightGreen:"#E9F1F3",
        grayNeutral:"#111927",
        },
        // Add your custom colors here
        brand: {
          grayNatural200:"#E5E7EB",
          grayNatural500:"#6C737F",
           grayNatural600:"#4D5761",
        },
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.svg-icon': {
          stroke: 'var(--svg-stroke-color, currentColor)',
          fill: 'var(--svg-fill-color, none)'
        }
      })
    }
  ]
}