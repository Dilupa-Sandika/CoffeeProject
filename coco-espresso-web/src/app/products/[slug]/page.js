'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Minus, Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CartSidebar from '../../../components/CartSidebar';
import { useCartStore } from '../../../store/cart';
import { getProducts, urlFor } from '../../../../sanity/client';

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { addItem, openCart } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsData = await getProducts();
        const foundProduct = productsData?.find(p => 
          p.slug?.current === params.slug || p._id === params.slug
        );
        
        if (foundProduct) {
          setProduct(foundProduct);
          if (foundProduct.variations?.length > 0) {
            setSelectedVariation(foundProduct.variations[0]);
          }
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Error loading product:', err);
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

  const handleAddToCart = () => {
    if (product && selectedVariation) {
      addItem(product, selectedVariation, quantity);
      openCart();
      
      // Trigger cart icon animation
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
      <div className="min-h-screen bg-brand-background">
        <Header />
        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-square bg-brand-white/50 rounded-large animate-pulse"></div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="h-12 bg-brand-white/50 rounded-medium animate-pulse"></div>
                  <div className="h-6 bg-brand-white/50 rounded w-3/4 animate-pulse"></div>
                  <div className="h-6 bg-brand-white/50 rounded w-full animate-pulse"></div>
                </div>
                <div className="h-16 bg-brand-white/50 rounded-medium animate-pulse"></div>
                <div className="h-12 bg-brand-white/50 rounded-medium animate-pulse"></div>
                <div className="h-14 bg-brand-white/50 rounded-medium animate-pulse"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <CartSidebar />
      </div>
    );
  }

  if (error || !product) {
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
                Product Not Found
              </h2>
              <p className="text-brand-text-light text-lg mb-8">
                The product you're looking for doesn't exist or has been moved.
              </p>
              <Link 
                href="/shop"
                className="inline-flex items-center px-8 py-3 bg-brand-brown text-brand-white rounded-medium font-semibold hover:bg-brand-brown-dark transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Shop
              </Link>
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
          
          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-in">
            <nav className="flex items-center space-x-2 text-sm text-brand-text-light">
              <Link href="/" className="hover:text-brand-brown transition-colors duration-200">
                Home
              </Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-brand-brown transition-colors duration-200">
                Shop
              </Link>
              <span>/</span>
              <span className="text-brand-text font-medium">{product.name}</span>
            </nav>
          </div>

          {/* Back to Shop */}
          <div className="mb-8 animate-fade-in">
            <Link 
              href="/shop"
              className="inline-flex items-center text-brand-brown hover:text-brand-brown-dark transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Shop
            </Link>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Product Image */}
            <div className="animate-fade-in">
              <div className="aspect-square w-full rounded-large overflow-hidden bg-brand-white shadow-lifted">
                {product.image ? (
                  <img 
                    src={urlFor(product.image).width(600).height(600).url()}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lifted bg-brand-background">
                        <span className="text-6xl">☕</span>
                      </div>
                      <p className="font-semibold text-lg font-heading text-brand-brown">
                        Premium Coffee Package
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Product Information & Action Panel */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              
              {/* Product Name & Description */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold font-heading text-brand-text leading-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed text-brand-text-light">
                  {product.description}
                </p>
              </div>
              
              {/* Variation Selector */}
              {product.variations && product.variations.length > 0 && (
                <div className="space-y-4">
                  <label className="block text-lg font-semibold font-heading text-brand-text">
                    Choose Size:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.variations.map((variation) => (
                      <button
                        key={variation._id}
                        onClick={() => setSelectedVariation(variation)}
                        className={`px-6 py-3 rounded-medium font-medium text-base transition-all duration-300 border-2 ${
                          selectedVariation?._id === variation._id
                            ? 'bg-brand-brown text-brand-white border-brand-brown shadow-button'
                            : 'bg-brand-white text-brand-brown border-brand-border hover:border-brand-brown hover:shadow-lifted'
                        }`}
                      >
                        <span className="font-semibold">{variation.weight}</span>
                        <span className="ml-2 text-sm">${variation.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Price Display */}
              <div>
                <div className="text-4xl sm:text-5xl font-bold font-heading text-brand-brown">
                  ${selectedVariation?.price ? (selectedVariation.price * quantity).toFixed(2) : '0.00'}
                </div>
                <p className="text-base mt-2 text-brand-text-light">
                  {quantity > 1 ? `${quantity} × $${selectedVariation?.price?.toFixed(2)} each` : 'per package'}
                </p>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="w-12 h-12 rounded-medium border-2 flex items-center justify-center transition-all duration-300 disabled:opacity-50 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-white disabled:hover:bg-transparent disabled:hover:text-brand-brown"
                >
                  <Minus className="w-5 h-5" />
                </button>
                
                <span className="text-2xl font-bold px-4 font-heading text-brand-text min-w-[3rem] text-center">
                  {quantity}
                </span>
                
                <button
                  onClick={increaseQuantity}
                  className="w-12 h-12 rounded-medium border-2 flex items-center justify-center transition-all duration-300 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-white"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedVariation}
                className="w-full py-4 px-8 rounded-medium text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed bg-brand-brown text-brand-white hover:bg-brand-brown-dark shadow-button hover:shadow-button-hover transition-all duration-300 font-heading"
              >
                {selectedVariation 
                  ? `Add to Cart - $${(selectedVariation.price * quantity).toFixed(2)}`
                  : 'Select Size First'
                }
              </button>

              {/* Product Features */}
              <div className="pt-4 border-t border-brand-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-brand-text-light">
                    <span>🇱🇰</span>
                    <span>Sourced from Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-text-light">
                    <span>📦</span>
                    <span>Free shipping over $50</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-text-light">
                    <span>⚡</span>
                    <span>Fresh roasted to order</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-text-light">
                    <span>♻️</span>
                    <span>Sustainably sourced</span>
                  </div>
                </div>
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