/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#050B14', // Deeper, more tech-like dark background
        darkCard: '#0A1220',
        lightBg: '#f8fafc',
        lightCard: '#ffffff',
        accentBg: '#0ea5e9', // Electric Blue
        accentHover: '#0284c7', 
        neonGreen: '#39ff14',
        electricBlue: '#00f3ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'], // For code-style cards
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 243, 255, 0.5)',
        'glow-green': '0 0 15px rgba(57, 255, 20, 0.5)',
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
        'circuit-pattern': "url('/circuit-board.svg')", // placeholder if needed
      }
    },
  },
  plugins: [],
}
