const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  // tailwind.config.js
  theme: {
    extend: {
      fontSize: { '7xl': '5rem' },
      fontFamily: {
        default: ['Montserrat', 'sans-serif'],
        breadText: ['Roboto', 'sans-serif'],
      },
      colors: {
        black: { default: '#111111', light: '#222222' },
        purple: {
          100: '#e6bdff',
          200: '#d591ff',
          300: '#c464ff',
          400: '#b338ff',
          500: '#aa22ff',
          600: '#881bcc',
          700: '#661499',
          800: '#440e66',
          900: '#220733',
        },
        blue: {
          100: '#e5efff',
          200: '#b3d0ff',
          300: '#80b1ff',
          400: '#4d92ff',
          500: '#1a73ff',
          600: '#0059e6',
          700: '#0045b3',
          800: '#003180',
          900: '#001e4d',
        },
      },
      height: {
        '2px': '2px',
      },
      maxWidth: {
        50: '50%',
        45: '45%',
        15: '15%',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        wave: {
          '0%': { transform: 'rotate(0)' },
          '50%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0)' },
        },
        dropDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease',
        wave: 'wave .5s ease 1s 3',
        'drop-down': 'dropDown .5s ease',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'focus'],
    flexDirection: ['even'],
    backgroundColor: ['even', 'hover', 'disabled'],
    opacity: ['hover', 'group-hover'],
    cursor: ['disabled'],
  },
  plugins: [],
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
};
