/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <- MUITO IMPORTANTE pro next-themes
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
