/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      ...colors,
      primary: '#FF5A6F'
    },
    zIndex: {
      '-10': '-10',
    }
  },
  variants: {},
  plugins: []
}
