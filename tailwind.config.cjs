/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "text-dark": "#666666",
        "line": "#BBBBBB",
        "text-footer": "#16161D",
        "footer": "#BDBDBD"
      },
    },
  },
  plugins: [],
}
