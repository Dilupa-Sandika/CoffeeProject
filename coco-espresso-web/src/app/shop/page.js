'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartSidebar from '../../components/CartSidebar';
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../../sanity/client';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData || []);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-background">
        <Header />
        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="h-12 bg-brand-white/50 rounded-medium w-64 mx-auto mb-6 animate-pulse"></div>
              <div className="h-6 bg-brand-white/50 rounded-medium w-96 mx-auto animate-pulse"></div>
            </div>
            
            {/* Loading Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-brand-white/50 rounded-large mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-6 bg-brand-white/50 rounded w-3/4"></div>
                    <div className="h-4 bg-brand-white/50 rounded w-full"></div>
                    <div className="h-4 bg-brand-white/50 rounded w-1/2"></div>
                    <div className="h-6 bg-brand-white/50 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
        <CartSidebar />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-brand-background">
        <Header />
        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center py-20">
              <div className="mb-8">
                <span className="text-6xl">😔</span>
              </div>
              <h2 className="text-3xl font-bold font-heading text-brand-text mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-brand-text-light text-lg mb-8">
                {error}
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-brand-brown text-brand-white rounded-medium font-semibold hover:bg-brand-brown-dark transition-colors duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        </main>
        <Footer />
        <CartSidebar />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          
          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-brand-text mb-6 leading-tight">
              Shop Our Coffee
            </h1>
            <p className="text-xl text-brand-text-light max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium Sri Lankan coffee blends, 
              each one roasted to perfection and delivered fresh to your door.
            </p>
          </div>

          {/* Products Grid */}
          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-8">
                <span className="text-6xl">☕</span>
              </div>
              <h2 className="text-2xl font-semibold font-heading text-brand-text mb-4">
                No products available
              </h2>
              <p className="text-brand-text-light">
                We're working on adding more amazing coffee blends. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {products.map((product, index) => (
                <div 
                  key={product._id} 
                  className="animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {/* Call to Action Section */}
          <div className="mt-24 text-center bg-brand-white rounded-xl p-12 shadow-lifted">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold font-heading text-brand-text mb-4">
                Can't decide?
              </h2>
              <p className="text-brand-text-light text-lg mb-8">
                Try our coffee discovery bundle with samples from each of our signature blends. 
                Perfect for finding your new favorite cup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-brand-brown text-brand-white rounded-medium font-semibold hover:bg-brand-brown-dark shadow-button hover:shadow-button-hover transition-all duration-300">
                  Shop Discovery Bundle
                </button>
                <button className="px-8 py-4 border-2 border-brand-brown text-brand-brown rounded-medium font-semibold hover:bg-brand-brown hover:text-brand-white transition-all duration-300">
                  Learn About Our Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <CartSidebar />
    </div>
  );
}