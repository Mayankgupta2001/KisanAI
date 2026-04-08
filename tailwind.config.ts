import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        kisan: {
          green: '#1a5c2e',
          'green-light': '#2d8a4e',
          'green-pale': '#edf7f1',
          'green-dark': '#123d1e',
          gold: '#f5a623',
          'gold-light': '#fff8ee',
          'gold-dark': '#c4841a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
}
export default config