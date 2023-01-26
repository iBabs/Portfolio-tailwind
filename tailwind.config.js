/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '984px',
      xl: '1440px'
    },
    extend: {
      colors:{
        brightRed: '#FE0404',
        brightRedLight: '#F25F55',
        brightRedSuperLight: '#FF9B94',
        brightPurple: '#A30EE3',
        greyPurple:'#9d5eb8',
        darkPurple: '#4c2c59',
        greyDark: '#82718a',
        darkBlue: '#02194a'
      }
    },
  },
  plugins: [],
}
