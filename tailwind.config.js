const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/*.{html,js}'],

theme: {
  fontFamily: {
    'sans': ['Roca', 'sans-serif'],
    'glacial': ['GlacialIndifference', 'sans-serif'],
    'robot': ['Roboto', 'sans-serif'],
},

 


  extend: {
    colors :{
    roxo: {
      200: '#BB56F0',
      400: '#8E16CD',
      500: '#7918AD',
      900: '#efccef',
      },

      dourado: {
        200: '#FFF6D7',
        500: '#E4CA6F',
        900: '#BEA039',
      },

    },
    keyframes: {
      fadeInDown: {
        '0%': { opacity: '0', transform: 'translate3d(0, -20px, 0)' },
        '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
      },
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
        '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
      },
      fadeInRight: {
        '0%': { opacity: '0', transform: 'translate3d(20px, 0, 0)' },
        '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
      },
      fadeInLeft: {
        '0%': { opacity: '0', transform: 'translate3d(-20px, 0, 0)' },
        '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
      },
    },
    animation: {
      'fade-in-down': 'fadeInDown 0.8s ease-out',
      'fade-in-up': 'fadeInUp 0.8s ease-out',
      'fade-in-right': 'fadeInRight 0.8s ease-out',
      'fade-in-left': 'fadeInLeft 0.8s ease-out',
    },

    

  }

},
plugins:[]

};