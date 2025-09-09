/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF8',
          100: '#FDF9F1',
          200: '#F9F0E3',
          300: '#F5E7D5',
          400: '#F1DEC7',
          500: '#EDD5B9',
        },
        brown: {
          600: '#8B4513',
          700: '#6B3410',
          800: '#4A240B',
          900: '#2A1506',
        },
        rose: {
          300: '#F8BBD9',
          400: '#F48FB1',
          500: '#F06292',
          600: '#EC407A',
        },
        gold: {
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};