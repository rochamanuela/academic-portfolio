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
      },
      scale: {
        '50': '0.5'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
      },
      height: {
        '100': '500px' 
      }
    },
  },
  plugins: [],
}