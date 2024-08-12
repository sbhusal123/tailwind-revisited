/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ["Nunito"]
      },
      screens: {
        'mobile': {'max': '450px'},
        'gt-mobile': {'min': '450px'}
      },
      fontSize: {
        'xs': ['0.6rem']
      }
    },
  },
  plugins: [],
}
