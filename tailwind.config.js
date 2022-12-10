/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [


    './src/**/*.{html,ts}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,ts}'


  ],
  theme: {
    colors:{
      saran:{
        400 : "#dba39a",
        600 : "#b15e51",
        500 : "#c6796d",
        900 : "#683b34",
        700 : "#944c41",
        800 : "#7b4239"
      },
      peach:{
        500 : "#be7575",
        600 : "#a85a5a",
        700 : "#8c4949"

      }

    },
    extend: {},
  },
  plugins: [],
}
