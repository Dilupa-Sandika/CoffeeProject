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
        'brand-background': '#F5EFE6', // Primary Background - Light Beige
        'brand-brown': '#6B4F4B',      // Primary Action - Rich Brown
        'brand-brown-dark': '#5a423e', // Darker brown for hover states
        'brand-text': '#333333',       // Primary Text - Soft Black/Dark Gray
        'brand-text-light': 'rgba(51, 51, 51, 0.7)', // Lighter text variant
        'brand-white': '#FFFFFF',      // Accent/Card Background - White
        'brand-border': 'rgba(107, 79, 75, 0.1)', // Light border color
      },
      fontFamily: {
        heading: ['var(--font-raleway)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'subtle': '8px',
        'medium': '12px',
        'large': '16px',
        'xl': '20px',
      },
      boxShadow: {
        'lifted': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'lifted-hover': '0 10px 20px rgba(0, 0, 0, 0.07)',
        'button': '0 4px 12px rgba(107, 79, 75, 0.2)',
        'button-hover': '0 8px 20px rgba(107, 79, 75, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'cart-shake': 'cartShake 0.6s ease-in-out',
        'skeleton-loading': 'loading 1.5s infinite',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        cartShake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        loading: {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
};