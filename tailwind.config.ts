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
          gold: '#f5a623',
          'gold-light': '#fff8ee',
        },
      },
    },
  },
  plugins: [],
}
export default config