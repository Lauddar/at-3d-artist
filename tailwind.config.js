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
        primary: '#143F6B',
        secondary: '#82DD8D',
      },
      fontSize: {
        '10xl': '11.25rem',
      }
    },
  },
  plugins: [],
}
