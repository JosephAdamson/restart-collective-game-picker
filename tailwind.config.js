/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snesLightPurple: "#b5b6e3",
        snesPurple: "#4f42ae",
        snesLightGrey: "#cec9cc",
        snesGrey: "#908a99",
        snesAlyGrey: "#bab6b9",
        gameboybutton: "#47161f",
        cartridge: "#7a7a7a"
      },
      fontFamily: {
        pixelify: ["Pixelify Sans", "system-ui"],
        play: ["play", "system-ui"]
      }
    },
  },
  plugins: [],
}

