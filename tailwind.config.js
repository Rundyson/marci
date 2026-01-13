/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure all your React files are included
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
      },
      screens: {
        sm: { min: '300px', max: '779px' },

        md: '780px',

        lg: '1366px',
      },
    },
  },
  plugins: [],
};
