import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-white shadow-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="font-heading text-2xl font-semibold text-brand-brown">
              Coco Espresso AU
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/shop" 
              className="text-brand-text hover:text-brand-brown transition-colors duration-200 font-medium"
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="text-brand-text hover:text-brand-brown transition-colors duration-200 font-medium"
            >
              Our Story
            </Link>
            <Link 
              href="/subscription" 
              className="text-brand-text hover:text-brand-brown transition-colors duration-200 font-medium"
            >
              Subscription
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="text-brand-text hover:text-brand-brown transition-colors duration-200"
            >
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9M7 13l-1.5 9m11.5-9v9a2 2 0 01-2 2H9a2 2 0 01-2-2v-9m11.5 0H16" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-brand-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}