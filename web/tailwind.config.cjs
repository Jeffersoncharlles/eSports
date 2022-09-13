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
      },
      colors: {

      }
    },
  },
  plugins: [],
}
