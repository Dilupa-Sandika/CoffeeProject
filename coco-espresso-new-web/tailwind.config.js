/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F5EFE6',
        'brand-brown': '#6B4F4B',
        'brand-text': '#333333',
        'brand-white': '#FFFFFF',
        'brand-border': 'rgba(107, 79, 75, 0.1)',
      },
      fontFamily: {
        heading: ['var(--font-raleway)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};