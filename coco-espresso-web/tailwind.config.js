/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F8F6F0',
        'brand-brown': '#8B4513',
        'brand-brown-dark': '#6B3410',
        'brand-brown-light': '#A0522D',
        'brand-accent': '#D2691E',
        'brand-text': '#2C1810',
        'brand-text-light': 'rgba(44, 24, 16, 0.7)',
        'brand-text-muted': 'rgba(44, 24, 16, 0.5)',
        'brand-white': '#FFFFFF',
        'brand-cream': '#FFF8DC',
        'brand-gold': '#DAA520',
        'brand-border': 'rgba(139, 69, 19, 0.1)',
        'brand-border-light': 'rgba(139, 69, 19, 0.05)',
      },
      fontFamily: {
        // Use the CSS variables we defined in layout.js
        heading: ['var(--font-raleway)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'subtle': '8px',
        'medium': '12px',
        'large': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'lifted': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'floating': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'dramatic': '0 16px 64px rgba(0, 0, 0, 0.16)',
        'card': '0 4px 20px rgba(139, 69, 19, 0.08)',
        'card-hover': '0 12px 40px rgba(139, 69, 19, 0.15)',
        'button': '0 4px 16px rgba(139, 69, 19, 0.2)',
        'button-hover': '0 8px 32px rgba(139, 69, 19, 0.3)',
        'glow': '0 0 32px rgba(218, 165, 32, 0.3)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'cart-shake': 'cartShake 0.6s ease-in-out',
      },
      keyframes: {
         fadeIn: {
           '0%': { opacity: '0', transform: 'translateY(20px)' },
           '100%': { opacity: '1', transform: 'translateY(0)' },
         },
         float: {
           '0%, 100%': { transform: 'translateY(0px)' },
           '50%': { transform: 'translateY(-10px)' },
         },
         glow: {
           '0%': { boxShadow: '0 0 5px rgba(218, 165, 32, 0.5)' },
           '100%': { boxShadow: '0 0 20px rgba(218, 165, 32, 0.8)' },
         },
         slideUp: {
           '0%': { opacity: '0', transform: 'translateY(30px)' },
           '100%': { opacity: '1', transform: 'translateY(0)' },
         },
         'scale-in': {
           '0%': { opacity: '0', transform: 'scale(0.9)' },
           '100%': { opacity: '1', transform: 'scale(1)' },
         },
         'slide-in-right': {
           '0%': { opacity: '0', transform: 'translateX(100%)' },
           '100%': { opacity: '1', transform: 'translateX(0)' },
         },
         cartShake: {
           '0%, 100%': { transform: 'translateX(0)' },
           '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
           '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
         },
       },
    },
  },
  plugins: [],
};