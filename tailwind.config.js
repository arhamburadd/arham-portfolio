/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#020202',   // Deep Space Obsidian
        lime: '#CCFF00',       // Cyber Lime
        ghost: '#F0F0F0',      // Ghost White
        cyberGray: '#151515',  // Slight off-obsidian for panels
        gridLine: 'rgba(204, 255, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace', 'Fira Code'],
      },
      backgroundImage: {
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
      },
      animation: {
        'fast-pulse': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 3s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(204, 255, 0, 0.8))' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4', filter: 'none' },
        }
      }
    },
  },
  plugins: [],
}
