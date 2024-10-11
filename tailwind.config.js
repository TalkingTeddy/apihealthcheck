/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        // You can add more font families here if needed
      },
    },
  },
  plugins: [flowbite.plugin()],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html", flowbite.content()],
};
