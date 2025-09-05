import Link from 'next/link';
import FeaturedProducts from '@/components/sections/FeaturedProducts';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-background py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-brand-brown mb-6">
            A Taste of Serendib in Every Sip
          </h1>
          <p className="text-lg md:text-xl text-brand-text mb-8 max-w-2xl mx-auto">
            Experience the finest Sri Lankan coffee, carefully sourced and roasted to perfection. 
            Delivered fresh to your door across Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="bg-brand-brown text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200"
            >
              Shop Coffee
            </Link>
            <Link 
              href="/subscription" 
              className="border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-md font-medium hover:bg-brand-brown hover:text-white transition-all duration-200"
            >
              Start Subscription
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-brown mb-12">
            Why Choose Coco Espresso?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-brand-text">Hand-picked beans from the finest plantations in Sri Lanka.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Fresh Roasted</h3>
              <p className="text-brand-text">Roasted in small batches and delivered within days of roasting.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Australia Wide</h3>
              <p className="text-brand-text">Free shipping across Australia for orders over $50.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-brown py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-semibold text-white mb-6">
            Ready to Experience Sri Lankan Coffee?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of Australians who have discovered the rich flavors of Ceylon coffee.
          </p>
          <Link 
            href="/shop" 
            className="bg-white text-brand-brown px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-200 inline-block"
          >
            Start Your Coffee Journey
          </Link>
        </div>
      </section>
    </div>
  );
}