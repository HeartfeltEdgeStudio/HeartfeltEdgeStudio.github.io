module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        Bebas: ["Bebas Neue", "sans-serif"],
        work_sans: ["Work Sans", "sans-serif"]
       },
    },
  },
  plugins: [],
}