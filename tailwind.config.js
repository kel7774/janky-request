module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'facebookBlue': '#0C86EF',
        'instagramPink': '#A93796',
        'venmoBlue': '#3192C8',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
