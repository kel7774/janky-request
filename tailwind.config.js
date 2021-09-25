module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'facebookBlue': '#0C86EF',
        'instagramPink': '#A93796',
        'venmoBlue': '#3192C8',
        'spotifyGreen': '#1CCC5B',
        'tiktokMaroon': '#E21C4E',
        'peytonPink': '#270961',
        'jazzPurple': '#382787',
        'jazzLightPurp': '#9F2CAD',
        'jazzBlue': '#04c4c7'
      },
      screens: {
        'xs': '480px'
      },
      margin: {
        'zeroAuto': '0 auto',
        'autoZero': 'auto 0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
