/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#e0e9ff',
          200: '#c2d2ff',
          300: '#9ab5ff',
          400: '#6d90ff',
          500: '#4b73ff',
          600: '#2f5bff', // core brand blue
          700: '#2447cc',
          800: '#1e3aa6',
          900: '#182f85'
        },
        ink: '#0B1B2B'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 20px 50px rgba(47,91,255,0.18)',
        glow: '0 0 0 10px rgba(47,91,255,0.08), 0 0 0 30px rgba(47,91,255,0.06)'
      },
      backgroundImage: {
        heroGradient: 'linear-gradient(180deg, #f6f9ff 0%, #e9f0ff 28%, #dfe8ff 55%, #dbe6ff 100%)',
        blueRadial: 'radial-gradient(60% 60% at 50% 0%, rgba(47,91,255,0.18) 0%, rgba(47,91,255,0) 60%)',
        deepBlue: 'linear-gradient(160deg, #2f5bff 0%, #2447cc 60%, #1e3aa6 100%)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
}



