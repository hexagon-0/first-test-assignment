/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      form: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'line-tone': '#CDCDCD',
        'line-tone-faint': 'rgba(205, 205, 205, 0.6)',
        'faint-blue': 'rgba(36, 105, 246, 0.1)',
      },
      boxShadow: {
        shape: '0px 8px 15px 0px #1414141F, 0px 0px 4px 0px #1414141A',
        'inset-border': 'inset 0px 0px 0px 1px #EEEEEE',
      },
      backgroundImage: {
        check: 'url(/check.svg)',
        'check-dark': 'url(/check-dark.svg)',
        'check-white': 'url(/check-white.svg)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

