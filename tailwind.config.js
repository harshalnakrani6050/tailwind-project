/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    /* Add this to your tailwind.config.js file */  

    colors: {  
      teal: {  
       500: '#2F4F4F',  
       700: '#1A3C3C',  
      },  
    },
    screens:{
          sm: "340px",
          md: "540",
          lg: "768",
          xl: "1180"
    },
    extend: {},
  },
  plugins: [],
  }