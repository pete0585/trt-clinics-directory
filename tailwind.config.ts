import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E3A5F',
          'navy-light': '#2A4E7A',
          blue: '#2D7DD2',
          'blue-light': '#4A96E8',
          orange: '#F97316',
          'orange-dark': '#EA6900',
          dark: '#0D1B2A',
          slate: '#374151',
          steel: '#64748B',
          light: '#F1F5F9',
          'light-2': '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D1B2A 0%, #1E3A5F 50%, #2D7DD2 100%)',
        'card-gradient': 'linear-gradient(180deg, #1E3A5F 0%, #0D1B2A 100%)',
      },
    },
  },
  plugins: [],
}

export default config
