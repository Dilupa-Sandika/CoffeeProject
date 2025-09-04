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
    <section className="min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: '#F8F6F0'}}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-brown/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-accent/5 to-brand-brown/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Hero Text Content */}
          <div className="space-y-8 sm:space-y-10 animate-slide-up text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-gold/20 to-brand-accent/20 rounded-full border border-brand-gold/30 backdrop-blur-sm">
                <span className="text-sm font-medium text-brand-brown">🇱🇰 Premium Ceylon Coffee</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
                <span className="heading-gradient text-shadow">
                  A Taste of Serendib
                </span>
                <br />
                <span className="text-brand-text">
                  in Every Sip
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-brand-text-light font-light max-w-2xl mx-auto lg:mx-0">
                Experience the <span className="font-semibold text-brand-brown">authentic flavors</span> of premium Sri Lankan coffee, 
                roasted fresh and delivered to your door across Australia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <Link
                href="/shop"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Now
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-brown-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/about"
                className="btn-secondary group"
              >
                <span className="flex items-center justify-center gap-2">
                  Our Story
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-scale-in order-1 lg:order-2" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 via-brand-accent/20 to-brand-brown/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
              
              {/* Main Image Container */}
              <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <div className="card-modern p-4 h-full animate-float">
                  {product.image ? (
                    <div className="relative h-full rounded-xl overflow-hidden">
                      <img 
                        src={urlFor(product.image).width(600).height(600).url()}
                        alt="Premium Sri Lankan Coffee"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 glass px-3 py-2 rounded-full">
                        <span className="text-xs font-semibold text-brand-brown flex items-center gap-1">
                          ⭐ Premium
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-cream to-brand-background">
                      <div className="text-center space-y-4">
                        <div className="relative">
                          <span className="text-6xl sm:text-7xl lg:text-8xl block animate-float">☕</span>
                          <div className="absolute -inset-2 bg-brand-gold/20 rounded-full blur-lg animate-glow"></div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-lg sm:text-xl font-bold font-heading heading-gradient">
                            Premium Ceylon Coffee
                          </p>
                          <p className="text-sm text-brand-text-muted">
                            Sourced from Sri Lanka
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Product Showcase */}
        {product && (
          <div className="mt-20 lg:mt-24 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="bg-brand-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lifted">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-brand-brown">FEATURED PRODUCT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading heading-gradient mb-6">
                  {product.name}
                </h2>
                <p className="text-lg sm:text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
                  {product.description}
                </p>
              </div>
            
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Product Variations */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-gold to-brand-accent flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-brand-brown">Choose Your Size</h4>
                  </div>
                  <div className="grid gap-3">
                    {product.variations?.map((variation, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedVariation(variation)}
                        className={`group relative overflow-hidden p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedVariation?._id === variation._id
                            ? 'border-brand-gold bg-gradient-to-r from-brand-gold/10 to-brand-accent/10 shadow-glow'
                            : 'border-gray-200 hover:border-brand-brown/50 hover:shadow-card'
                        }`}
                      >
                        <div className="flex justify-between items-center relative z-10">
                          <div className="text-left">
                            <span className="font-bold text-lg text-brand-brown">{variation.weight}</span>
                            <p className="text-sm text-brand-text-muted mt-1">
                              Perfect for daily brewing
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-brand-brown">
                              ${variation.price}
                            </span>
                            {selectedVariation?._id === variation._id && (
                              <div className="flex items-center gap-1 mt-1">
                                <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                                <span className="text-xs font-semibold text-brand-gold">SELECTED</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {selectedVariation?._id === variation._id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-brand-accent/5 animate-glow"></div>
                        )}
                      </button>
                    )) || (
                      <div className="card-modern p-4">
                        <div className="flex justify-between items-center">
                          <div className="text-left">
                            <span className="font-bold text-lg text-brand-brown">250g</span>
                            <p className="text-sm text-brand-text-muted mt-1">
                              Perfect for 1-2 weeks of daily brewing
                            </p>
                          </div>
                          <span className="text-2xl font-bold text-brand-brown">$24.99</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Quantity & Cart Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-gold to-brand-accent flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-brand-brown">Select Quantity</h4>
                  </div>
                  
                  {/* Quantity Selector */}
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-semibold text-brand-brown">Quantity</span>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={decreaseQuantity}
                          disabled={quantity <= 1}
                          className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-brown to-brand-dark flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                        <div className="w-16 h-12 bg-brand-white rounded-lg border-2 border-brand-gold flex items-center justify-center">
                          <span className="text-2xl font-bold text-brand-brown">{quantity}</span>
                        </div>
                        <button
                          onClick={increaseQuantity}
                          className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-brown to-brand-dark flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 group"
                        >
                          <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Price Display */}
                    <div className="border-t border-brand-border pt-6">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-lg text-brand-text-muted">Total Price:</span>
                        <div className="text-right">
                          <span className="text-3xl font-bold heading-gradient">
                            ${selectedVariation ? (selectedVariation.price * quantity).toFixed(2) : '24.99'}
                          </span>
                          <p className="text-sm text-brand-text-muted mt-1">Free shipping included</p>
                        </div>
                      </div>
                      
                      {/* Add to Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        disabled={!selectedVariation}
                        className="btn-primary w-full group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                          {selectedVariation ? 'Add to Cart' : 'Quick Add to Cart'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
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