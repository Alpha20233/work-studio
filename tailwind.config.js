/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#F5E41B'
      },
      fontFamily:{
        'italic':['Light italic', 'serif']
        
      }
    },
  },
  plugins: [],
}