'use client';

import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cart';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const { getTotalItems, toggleCart } = useCartStore();
  const totalItems = getTotalItems();

  const handleCartClick = () => {
    toggleCart();
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('animate-cart-shake');
      setTimeout(() => cartIcon.classList.remove('animate-cart-shake'), 600);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-white/90 backdrop-blur-soft border-b border-brand-brown/10 shadow-sm animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide font-heading text-brand-brown cursor-pointer">
                Coco Espresso AU
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-lg font-medium text-brand-text hover:text-brand-brown transition-colors duration-200">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
          
          {/* Shopping Cart Icon */}
          <button
            onClick={handleCartClick}
            className="relative p-3 rounded-medium group cart-icon text-brand-brown"
            aria-label="Shopping cart"
          >
            <ShoppingBag 
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
            />
            
            {/* Cart Badge */}
            {totalItems > 0 && (
              <span 
                className="absolute -top-1 -right-1 text-brand-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg bg-brand-brown"
              >
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}