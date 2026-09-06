/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f4f7fa',
          100: '#e6edf3',
          200: '#cbd7e2',
          300: '#9aabba',
          400: '#667b8e',
          500: '#425b72',
          600: '#29445d',
          700: '#19354f',
          800: '#0f2942',
          900: '#071d35',
          950: '#041321',
        },
        steel: {
          50: '#f6f7f8',
          100: '#eceef1',
          200: '#d5d9df',
          300: '#b0b8c2',
          400: '#8693a3',
          500: '#67768a',
          600: '#52606f',
          700: '#434e5a',
          800: '#3a434d',
          900: '#343a42',
        },
        gold: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f47b20',
          600: '#d8610c',
          700: '#b54708',
          800: '#92370b',
          900: '#762d0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
