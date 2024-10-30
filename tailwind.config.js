/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./distribution/*.html"],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
      },
    },
  },
  plugins: [],
}

