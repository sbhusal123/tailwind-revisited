/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // NOTE: note the directory, as we are serving from public directory so it must be added here
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}