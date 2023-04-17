/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light': '#DCD7C9', 
        'accent': '#A27B5C',
        'dark-500': '#3F4E4F',
        'dark-600': '#2C3639',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
