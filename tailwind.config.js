/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0b0a',
        panel: '#111311',
        panel2: '#0f1110',
        line: '#26291f',
        bone: '#e8eae0',
        ash: '#8b9183',
        faint: '#5a5f52',
        acid: '#C8FF00',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
