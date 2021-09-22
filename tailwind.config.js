module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'facebookBlue': '#0C86EF',
        'instagramPink': '#A93796',
        'venmoBlue': '#3192C8',
        'jazzPurple': '#382787',
        'jazzLightPurp': '#9F2CAD',
        'jazzBlue': '#04c4c7'
      },
      screens: {
        'xs': '480px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
