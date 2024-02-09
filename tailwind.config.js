/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'montserrat'  : 'Montserrat,sans-serif',
        'inter' : 'Inter,sans-serif'
      },
      backgroundColor :{
        'red-cream' : '#EB455F',
        'cream' : '#FCFFE7',
        'sky-cream' : '#BAD7E9',
        'navy-cream' : '#2B3467',
        'deepWtr' : '#172774',
      },
      colors : {
        'deepWtr' : '#172774',
        'pinkSky' : '#FF0075',
        'cream' : '#FCFFE7',

      }
    },
  },
  plugins: [],
}