/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#828282',
        secondary: '#143F6B',
        'tertiary': '#C1CF17',
      },
      fontSize: {
        '10xl': '11.25rem',
      },
      lineHeight: {
        '0.8': '0.8',
      },
      zIndex: {
        '-1': '-1',
      },
      margin: {
        'df': '3.7vh',
        'top': '3.7vh 0 0 0',
        'right': '0 3.7vh 0 0',
        'bottom': '0 0 3.7vh 0',
        'left': '0 0 0 3.7vh',
        'x': '0 3.7vh',
        'y': '3.7vh 0',
      },
      padding: {
        'df': '3.7vh',
        'top': '3.7vh 0 0 0',
        'right': '0 3.7vh 0 0',
        'bottom': '0 0 3.7vh 0',
        'left': '0 0 0 3.7vh',
        'x': '0 3.7vh',
        'y': '3.7vh 0',
        'main': '7.455vh 0 0 0'
      }
    },
  },
  plugins: [],
}
