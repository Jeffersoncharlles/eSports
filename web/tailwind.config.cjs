/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/fundo.svg')",
        'nlw-gradient': "linear-gradient(89.86deg, #9572FC 10.08%, #43E7AD 70.94%, #E1D55D 100.57%)",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      colors: {

      },
      fontFamily:{
        sans:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
