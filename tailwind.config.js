/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },
      colors: {
        'rich-black': '#0D1117',
        'wisteria': '#BC96E6',
        'baby-powder': '#FFFCF9',
        'celeste': '#B1EDE8',
        'murrey': '#950952',
      }
    },
  },
plugins: [],
}