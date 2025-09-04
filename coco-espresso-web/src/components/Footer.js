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
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/">
              <h3 className="text-2xl font-semibold font-heading text-brand-brown cursor-pointer">
                Coco Espresso AU
              </h3>
            </Link>
            <p className="text-brand-text-light leading-relaxed">
              Experience the authentic taste of Serendib with our premium Sri Lankan coffee blends, 
              carefully roasted and delivered fresh to your door across Australia.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-3 text-brand-text-light">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@cocoespresso.au</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-text-light">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+61 2 8123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading text-brand-text">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-brand-text-light hover:text-brand-brown transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading text-brand-text">
              Stay Connected
            </h4>
            <p className="text-brand-text-light text-sm">
              Follow us for coffee tips, brewing guides, and the latest updates.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-background rounded-medium flex items-center justify-center text-brand-brown hover:bg-brand-brown hover:text-brand-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 text-sm border border-brand-border rounded-l-medium focus:outline-none focus:ring-2 focus:ring-brand-brown focus:border-transparent"
                />
                <button className="px-4 py-2 bg-brand-brown text-brand-white text-sm font-medium rounded-r-medium hover:bg-brand-brown-dark transition-colors duration-200">
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
        <div className="py-6 border-t border-brand-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-brand-text-light">
              © {currentYear} Coco Espresso AU. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-brand-text-light flex items-center">
                Made with <span className="text-red-500 mx-1">♥</span> in Australia
              </span>
              <span className="text-sm text-brand-text-light">
                🇱🇰 Sourced from Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
