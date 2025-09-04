'use client';

import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { urlFor } from '../../sanity/client';

export default function CartSidebar() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    getSubtotal 
  } = useCartStore();

  const subtotal = getSubtotal();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed right-0 top-0 h-full w-full max-w-md shadow-2xl z-50 flex flex-col bg-brand-white transform transition-transform duration-400 ease-smooth ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-brown/10">
          <h2 className="text-2xl font-semibold tracking-wide font-heading text-brand-brown">
            Your Cart
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 rounded-medium transition-all duration-200 text-brand-brown hover:bg-brand-brown/10"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto bg-brand-background">
                <span className="text-4xl">🛒</span>
              </div>
              <p className="text-lg mb-4 text-brand-text">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="font-medium transition-all duration-300 font-heading text-brand-brown hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center space-x-4 p-4 rounded-large border border-brand-brown/10 hover:shadow-lifted transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="w-16 h-16 rounded-medium flex-shrink-0 overflow-hidden bg-brand-background">
                    {item.product.image ? (
                      <img 
                        src={urlFor(item.product.image).width(64).height(64).url()}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-2xl">☕</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate mb-1 font-heading text-brand-text">
                      {item.product.name}
                    </h3>
                    <p className="text-sm mb-1 text-brand-text/70">
                      {item.variation.weight}
                    </p>
                    <p className="text-sm font-semibold font-heading text-brand-brown">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-medium border flex items-center justify-center transition-all duration-300 disabled:opacity-50 border-brand-brown text-brand-brown hover:bg-brand-brown/10"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="w-8 text-center text-sm font-semibold font-heading text-brand-text">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-medium border flex items-center justify-center transition-all duration-300 border-brand-brown text-brand-brown hover:bg-brand-brown/10"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 rounded-medium flex items-center justify-center hover:bg-red-50 transition-all duration-300"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with Checkout */}
        {items.length > 0 && (
          <div className="border-t p-6 border-brand-brown/10 bg-brand-background">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold font-heading text-brand-text">
                Subtotal:
              </span>
              <span className="text-2xl font-bold font-heading text-brand-brown">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            
            <button 
              className="w-full py-4 px-6 rounded-medium text-lg font-semibold bg-brand-brown text-brand-white hover:bg-brand-brown-dark shadow-button hover:shadow-button-hover transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
