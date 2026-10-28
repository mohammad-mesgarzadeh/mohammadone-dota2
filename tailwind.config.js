/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070605',
          900: '#0b0a09',
          850: '#100e0c',
          800: '#15120f',
          700: '#1d1915',
          600: '#2a231d',
          500: '#3a312a',
        },
        ember: {
          400: '#e8744f',
          500: '#d6452c',
          600: '#b8341f',
          700: '#932617',
          800: '#6e1b10',
        },
        gold: {
          300: '#e8d4a8',
          400: '#d4b878',
          500: '#b89552',
          600: '#937238',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        mega: '0.35em',
        ultra: '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slow-pan': 'slowPan 30s ease-in-out infinite alternate',
        'ember-flicker': 'emberFlicker 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.05) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1.5%)' },
        },
        emberFlicker: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
