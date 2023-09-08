/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    none: 'none',
  },
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.11ty.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

