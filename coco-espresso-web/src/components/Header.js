'use client';

import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cart';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Our Story', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 glass border-b border-brand-gold/20 shadow-floating">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-accent to-brand-brown"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center py-6">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link href="/" onClick={closeMobileMenu}>
                <div className="group cursor-pointer">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide font-heading heading-gradient group-hover:scale-105 transition-transform duration-300">
                    Coco Espresso AU
                  </h1>
                  <div className="h-0.5 bg-gradient-to-r from-brand-gold to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="relative text-lg font-semibold text-brand-text hover:text-brand-brown transition-all duration-300 group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-accent group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}
            </nav>
            
            {/* Right Side - Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Shopping Cart Icon */}
              <button
                onClick={handleCartClick}
                className="relative p-3 rounded-xl glass group cart-icon text-brand-brown hover:shadow-glow transition-all duration-300"
                aria-label="Shopping cart"
              >
                <ShoppingBag 
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                />
                
                {/* Cart Badge */}
                {totalItems > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-glow bg-gradient-to-r from-brand-gold to-brand-accent animate-pulse"
                  >
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-brand-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-3 rounded-xl glass text-brand-brown hover:shadow-glow transition-all duration-300 group"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-brand-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 backdrop-blur-md"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 glass shadow-dramatic transform transition-all duration-500 ease-out animate-slide-in-right">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold via-brand-accent to-brand-brown"></div>
            
            <div className="flex flex-col h-full relative">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-8 border-b border-brand-gold/20">
                <div>
                  <h2 className="text-2xl font-bold font-heading heading-gradient">
                    Menu
                  </h2>
                  <p className="text-sm text-brand-text-muted mt-1">Navigate our coffee world</p>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-3 rounded-xl glass text-brand-brown hover:shadow-glow transition-all duration-300 group"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex-1 px-8 py-8">
                <div className="space-y-4">
                  {navigation.map((item, index) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="group block"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-4 rounded-xl glass hover:shadow-card transition-all duration-300 animate-slide-up">
                        <span className="text-xl font-semibold text-brand-text group-hover:text-brand-brown transition-colors duration-300">
                          {item.name}
                        </span>
                        <div className="h-0.5 bg-gradient-to-r from-brand-gold to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-2"></div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Mobile Menu Footer */}
                <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-brand-gold/10 to-brand-accent/10 border border-brand-gold/20">
                  <div className="text-center">
                    <div className="text-2xl mb-2">☕</div>
                    <p className="text-sm font-semibold text-brand-brown mb-1">Premium Ceylon Coffee</p>
                    <p className="text-xs text-brand-text-muted">Sourced from Sri Lanka</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}