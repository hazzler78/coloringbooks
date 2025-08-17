/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        pantone7542: '#A4BCC2', // blue
        pantone7528: '#C5B9AC', // beige
        pantone8021: '#8C6A2A', // brown
      },
    },
  },
  plugins: [],
} 