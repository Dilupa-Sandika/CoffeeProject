'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartSidebar from '../../components/CartSidebar';
import { getProducts, urlFor } from '../../../sanity/client';
import { useCartStore } from '../../store/cart';
import { Plus, Minus } from 'lucide-react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariations, setSelectedVariations] = useState({});
  const [quantities, setQuantities] = useState({});
  
  const { addItem, openCart } = useCartStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        
        // Initialize selected variations and quantities
        const initialVariations = {};
        const initialQuantities = {};
        
        productsData.forEach(product => {
          if (product.variations && product.variations.length > 0) {
            initialVariations[product._id] = product.variations[0];
            initialQuantities[product._id] = 1;
          }
        });
        
        setSelectedVariations(initialVariations);
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const selectedVariation = selectedVariations[product._id];
    const quantity = quantities[product._id];
    
    if (product && selectedVariation) {
      addItem(product, selectedVariation, quantity);
      openCart();
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-2xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Discover our carefully curated collection of premium coffee blends
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product._id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Product Image */}
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                    {product.image ? (
                      <img 
                        src={urlFor(product.image).width(400).height(400).url()}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <span className="text-4xl">☕</span>
                          </div>
                          <p className="text-amber-800 font-medium">Premium Coffee</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay with quick add button */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-white text-amber-900 px-6 py-3 rounded-xl font-bold hover:bg-amber-50 transition-all duration-200 transform hover:scale-105"
                      >
                        Quick Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-amber-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Size Selection */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-amber-900 mb-2">
                        Size:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {product.variations?.map((variation) => (
                          <button
                            key={variation._id}
                            onClick={() => setSelectedVariations(prev => ({ ...prev, [product._id]: variation }))}
                            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                              selectedVariations[product._id]?._id === variation._id
                                ? 'bg-amber-900 text-white'
                                : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                            }`}
                          >
                            <div className="text-center">
                              <div className="font-bold">{variation.weight}</div>
                              <div className="text-xs">${variation.price}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-3xl font-heading font-bold text-amber-900">
                        ${selectedVariations[product._id]?.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(product._id, (quantities[product._id] || 1) - 1)}
                          className="w-8 h-8 bg-amber-100 hover:bg-amber-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                          disabled={quantities[product._id] <= 1}
                        >
                          <Minus className="w-4 h-4 text-amber-900" />
                        </button>
                        
                        <span className="font-bold text-amber-900 min-w-[2rem] text-center">
                          {quantities[product._id] || 1}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(product._id, (quantities[product._id] || 1) + 1)}
                          className="w-8 h-8 bg-amber-100 hover:bg-amber-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4 text-amber-900" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-gradient-to-r from-amber-900 to-orange-800 text-white px-6 py-2 rounded-xl font-bold hover:from-amber-800 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-br from-white to-amber-25 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-amber-900 mb-4">
                Why Choose Our Coffee?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-bold text-amber-900 mb-2">Ethically Sourced</h3>
                <p className="text-sm text-gray-600">Direct trade with Sri Lankan farmers</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="font-bold text-amber-900 mb-2">Fresh Roasted</h3>
                <p className="text-sm text-gray-600">Small batches roasted weekly</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-bold text-amber-900 mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Shipped within 48 hours</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-bold text-amber-900 mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">30-day satisfaction promise</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
}