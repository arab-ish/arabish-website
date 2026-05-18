/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        arabishBlack: '#070706',
        arabishCharcoal: '#15130f',
        arabishGold: '#b89a55',
        arabishCream: '#f5efe4',
        arabishStone: '#d8cbb8',
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0,0,0,.22)',
      },
    },
  },
  plugins: [],
};
