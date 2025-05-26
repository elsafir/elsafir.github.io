// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', 
        secondary: '#F472B6', 
        accent: '#34D399', 
        background: '#FDFCFB', 
        dark: '#111827', 
      },
    },
  },
  plugins: [],
};
