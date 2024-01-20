/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
