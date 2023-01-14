const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'brand-lg': '730px',
        'brand-md': '480px',
      },
      colors: {
        brand: {
          white: '#FFFFFF',
          violet: {
            DEFAULT: '#7C5DFA',
            ghost: '#F9FAFE',
            highlight: '#DFE3FA',
            light: '#9277FF',
            muted: '#7E88C3',
          },
          red: {
            DEFAULT: '#EC5757',
            light: '#FF9797',
          },
          orange: {
            DEFAULT: '#FF8F00',
            ghost: 'rgba(255, 143, 0, 0.0571)',
          },
          green: {
            DEFAULT: '#33D69F',
            ghost: 'rgba(51, 214, 159, 0.0571)',
          },
          gray: {
            'light-ghost': 'rgba(223, 227, 250, 0.0571)',
            dark: '#1E2139',
            DEFAULT: '#373B53',
            ghost: 'rgba(55, 59, 83, 0.0571)',
            light: '#494E6E',
            muted: '#252945',
          },
          text: {
            DEFAULT: '#0C0E16',
            light: '#858BB2',
            muted: '#888EB0',
          },
          bg: {
            dark: '#141625',
            DEFAULT: '#F8F8FB',
            'dark-ghost': 'rgba(0, 0, 0, 0.4984)',
          },
        },
      },
      boxShadow: {
        'brand-md': '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)',
        'brand-lg': '0px 10px 20px rgba(72, 84, 159, 0.25)',
      },
      fontSize: {
        xs: [
          '11px',
          { lineHeight: '18px', fontWeight: '500', letterSpacing: '-0.23px' },
        ],
        sm: [
          '12px',
          { lineHeight: '15px', fontWeight: '500', lineHeight: '-0.25px' },
        ],
        base: [
          '16px',
          { lineHeight: '24px', fontWeight: '700', lineHeight: '-0.8px' },
        ],
        lg: [
          '20px',
          { lineHeight: '22px', fontWeight: '500', lineHeight: '-0.63px' },
        ],
        xl: [
          '32px',
          { lineHeight: '36px', fontWeight: '500', letterSpacing: '-1px' },
        ],
      },
      fontFamily: {
        sans: [
          'Spartan',
          'Prevent Layout Shift',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
