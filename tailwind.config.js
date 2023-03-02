/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'red': '#E33B41',
        'redS': '#ed5357',
        'silver': '#9d9d9d',
        'mSilver': '#6c757d',
        'mBlack': '#3d3d3d',
        '51': '#515151',
        'mBlue': '#007bff'
      }
    },
    // fontSize: {
    //   twXs: '10px',
    // }
  },
  plugins: [],
}
