/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "netflix-red": "#e50914",
        "netflix-dark": "#141414",
        "netflix-light-gray": "#757575",
        "netflix-dark-light": "#1f1f1f",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
};