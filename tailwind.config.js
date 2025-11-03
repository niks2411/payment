/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#eef4ff',
  				'100': '#e0e9ff',
  				'200': '#c2d2ff',
  				'300': '#9ab5ff',
  				'400': '#6d90ff',
  				'500': '#4b73ff',
  				'600': '#2f5bff',
  				'700': '#2447cc',
  				'800': '#1e3aa6',
  				'900': '#182f85',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			ink: '#0B1B2B',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
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
  			xl2: '1.25rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}



