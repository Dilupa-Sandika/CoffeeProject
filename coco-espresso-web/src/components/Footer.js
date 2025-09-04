'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Our Story', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-brand-white border-t border-brand-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-brand-brown cursor-pointer">
                Coco Espresso AU
              </h3>
            </Link>
            <p className="text-brand-text-light leading-relaxed text-sm sm:text-base">
              Experience the authentic taste of Serendib with our premium Sri Lankan coffee blends, 
              carefully roasted and delivered fresh to your door across Australia.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-3 sm:pt-4">
              <div className="flex items-center space-x-3 text-brand-text-light">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">hello@cocoespresso.au</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-text-light">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+61 2 8123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold font-heading text-brand-text">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm sm:text-base text-brand-text-light hover:text-brand-brown transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold font-heading text-brand-text">
              Stay Connected
            </h4>
            <p className="text-brand-text-light text-xs sm:text-sm">
              Follow us for coffee tips, brewing guides, and the latest updates.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-background rounded-medium flex items-center justify-center text-brand-brown hover:bg-brand-brown hover:text-brand-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="pt-3 sm:pt-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 sm:px-4 py-2 text-sm border border-brand-border rounded-medium sm:rounded-l-medium sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent"
                />
                <button className="px-3 sm:px-4 py-2 bg-brand-brown text-brand-white text-sm font-medium rounded-medium sm:rounded-l-none sm:rounded-r-medium hover:bg-brand-brown-dark transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-brand-text-light mt-2">
                Get brewing tips and exclusive offers delivered to your inbox.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border pt-4 sm:pt-6 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-brand-text-light text-center md:text-left">
              © {currentYear} Coco Espresso AU. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm text-brand-text-light">
              <span className="flex items-center">
                Made with <span className="text-red-500 mx-1">♥</span> in Australia
              </span>
              <span className="flex items-center">
                🇱🇰 Sourced from Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
