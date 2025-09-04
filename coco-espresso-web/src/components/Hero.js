'use client';

import { useState, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '../store/cart';
import { getProducts, urlFor } from '../../sanity/client';

export default function Hero() {
  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const { addItem, openCart } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsData = await getProducts();
        const firstProduct = productsData && productsData.length > 0 ? productsData[0] : null;
        setProduct(firstProduct);
        if (firstProduct?.variations?.length > 0) {
          setSelectedVariation(firstProduct.variations[0]);
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    if (product && selectedVariation) {
      addItem(product, selectedVariation, quantity);
      openCart();
      
      const cartIcon = document.querySelector('.cart-icon');
      if (cartIcon) {
        cartIcon.classList.add('animate-cart-shake');
        setTimeout(() => cartIcon.classList.remove('animate-cart-shake'), 600);
      }
    }
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));

  if (loading) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-100 rounded-subtle animate-pulse"></div>
            <div className="space-y-6">
              <div className="h-12 bg-gray-100 rounded-subtle animate-pulse"></div>
              <div className="h-6 bg-gray-100 rounded-subtle animate-pulse"></div>
              <div className="h-6 bg-gray-100 rounded-subtle w-3/4 animate-pulse"></div>
              <div className="h-16 bg-gray-100 rounded-subtle animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-text">Unable to load product. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-brand-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-brand-text leading-tight mb-6">
                A Taste of Serendib in Every Sip
              </h1>
              <p className="text-xl sm:text-2xl leading-relaxed text-brand-text-light mb-8">
                Experience the authentic flavors of premium Sri Lankan coffee, 
                roasted fresh and delivered to your door across Australia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-brand-brown text-brand-white rounded-medium text-lg font-semibold hover:bg-brand-brown-dark shadow-button hover:shadow-button-hover transition-all duration-300"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border-2 border-brand-brown text-brand-brown rounded-medium text-lg font-semibold hover:bg-brand-brown hover:text-brand-white transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="aspect-square w-full max-w-lg mx-auto lg:mx-0 rounded-large overflow-hidden bg-brand-white shadow-lifted">
              {product.image ? (
                <img 
                  src={urlFor(product.image).width(600).height(600).url()}
                  alt="Premium Sri Lankan Coffee"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl mb-4 block">☕</span>
                    <p className="text-lg font-semibold font-heading text-brand-brown">
                      Premium Ceylon Coffee
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Quick Product Showcase */}
        {product && (
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="bg-brand-white rounded-xl p-8 shadow-lifted">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold font-heading text-brand-text mb-2">
                  Featured: {product.name}
                </h2>
                <p className="text-brand-text-light">
                  {product.description}
                </p>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Size Options */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold font-heading text-brand-text">
                    Choose Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variations?.slice(0, 3).map((variation) => (
                      <button
                        key={variation._id}
                        onClick={() => setSelectedVariation(variation)}
                        className={`px-4 py-2 rounded-medium font-medium text-sm transition-all duration-300 border-2 ${
                          selectedVariation?._id === variation._id
                            ? 'bg-brand-brown text-brand-white border-brand-brown'
                            : 'bg-brand-white text-brand-brown border-brand-border hover:border-brand-brown'
                        }`}
                      >
                        <span className="font-semibold">{variation.weight}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold font-heading text-brand-text">
                    Quantity:
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="w-8 h-8 rounded-medium border-2 flex items-center justify-center transition-all duration-300 disabled:opacity-50 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-white"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="text-lg font-bold px-3 font-heading text-brand-text min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    
                    <button
                      onClick={increaseQuantity}
                      className="w-8 h-8 rounded-medium border-2 flex items-center justify-center transition-all duration-300 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-white"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Price & Action */}
                <div className="space-y-4">
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold font-heading text-brand-brown">
                      ${selectedVariation?.price ? (selectedVariation.price * quantity).toFixed(2) : '24.99'}
                    </div>
                    <p className="text-sm text-brand-text-light">
                      {quantity > 1 ? `${quantity} packages` : 'per package'}
                    </p>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedVariation}
                    className="w-full py-3 px-6 rounded-medium text-base font-semibold bg-brand-brown text-brand-white hover:bg-brand-brown-dark shadow-button hover:shadow-button-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {selectedVariation ? 'Add to Cart' : 'Quick Add to Cart'}
                  </button>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Link
                  href={`/products/${product.slug?.current || product._id}`}
                  className="inline-flex items-center text-brand-brown hover:text-brand-brown-dark font-medium transition-colors duration-200"
                >
                  View Full Details →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}