module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      33: '8.25rem',
      32:'8rem',
      16: '4rem',
      18: '4.5rem',
      8: '2rem',
      14: '3.5rem',
      2: '0.5rem',
      0.5: '0.125rem',
      screen: '100vh',
      60: '15rem'
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}