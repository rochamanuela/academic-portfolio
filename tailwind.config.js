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
      fontSize: {
        xxs: '10px'
      },
      colors: {
        'rich-black': '#0D1117',
        'wisteria': '#BC96E6',
        'baby-powder': '#FFFCF9',
        'celeste': '#B1EDE8',
        'murrey': '#950952',
        'custom-bg': 'linear-gradient(180deg, rgba(13, 17, 23, 0.7) 0%, rgba(13, 17, 23, 0) 100%)'
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
        '100': '500px',
        '90vh': '90vh',
      },
      screens: {
        'in': '916px',
        '445': '445px',
        '564': '564px',
      },
      backdropBlur: {
        35: '35px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #2F2B3F 0%, #11161E 50%, #290F23 100%)',
      },
    },
  },
  plugins: [],
}