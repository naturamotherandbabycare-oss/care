/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EF',
        'warm-white': '#FDF9F4',
        blush: '#F2D9CE',
        'dusty-rose': '#D9A89A',
        terracotta: '#C4715A',
        'deep-clay': '#8B4A38',
        sage: '#8DA88A',
        'soft-sage': '#C8DABC',
        charcoal: '#2C2422',
        'warm-gray': '#7A6E6B',
        'light-gray': '#E8E0DC',
        primary: {
          50:  '#fdf4f1',
          100: '#fce8e0',
          200: '#f5c9bb',
          300: '#eea898',
          400: '#e08370',
          500: '#C4715A',
          600: '#b05f4a',
          700: '#8B4A38',
          800: '#6d3a2c',
          900: '#4f2a20',
          950: '#321a13',
        },
        accent: {
          50:  '#fdf6f4',
          100: '#f9ece7',
          200: '#f2d0c6',
          300: '#eab0a1',
          400: '#D9A89A',
          500: '#c98a79',
          600: '#b57060',
          700: '#935748',
          800: '#6e4137',
          900: '#4a2d25',
        },
        dark: {
          50:  '#FAF6EF',
          100: '#F2D9CE',
          200: '#E8E0DC',
          300: '#D9A89A',
          400: '#7A6E6B',
          500: '#64746b',
          600: '#475461',
          700: '#334050',
          800: '#2C2422',
          900: '#1a1412',
          950: '#0d0a09',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'pulse-blob': 'pulseBlob 8s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        pulseBlob: {
          'from': { transform: 'scale(1) rotate(0deg)' },
          'to': { transform: 'scale(1.08) rotate(6deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
