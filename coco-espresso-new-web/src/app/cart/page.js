import Link from 'next/link';

export const metadata = {
  title: 'Shopping Cart - Coco Espresso AU',
  description: 'Review your selected Sri Lankan coffee before checkout.',
};

export default function CartPage() {
  // For now, we'll show an empty cart
  // Later this will be connected to Zustand store
  const isCartEmpty = true;

  if (isCartEmpty) {
    return (
      <div className="min-h-screen bg-brand-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="font-heading text-3xl font-semibold text-brand-brown mb-8 text-center">
            Shopping Cart
          </h1>
          
          <div className="bg-white rounded-lg p-12 text-center border border-brand-border">
            <div className="w-24 h-24 bg-brand-background rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-brand-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9M7 13l-1.5 9m11.5-9v9a2 2 0 01-2 2H9a2 2 0 01-2-2v-9m11.5 0H16" />
              </svg>
            </div>
            
            <h2 className="font-heading text-xl font-semibold text-brand-brown mb-4">
              Your cart is empty
            </h2>
            <p className="text-brand-text mb-8">
              Looks like you haven't added any coffee to your cart yet. 
              Discover our premium Sri Lankan coffee collection.
            </p>
            
            <div className="space-x-4">
              <Link 
                href="/shop" 
                className="bg-brand-brown text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-200 inline-block"
              >
                Shop Coffee
              </Link>
              <Link 
                href="/subscription" 
                className="border-2 border-brand-brown text-brand-brown px-6 py-3 rounded-md font-medium hover:bg-brand-brown hover:text-white transition-all duration-200 inline-block"
              >
                Try Subscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // This section will be implemented later with actual cart functionality
  return (
    <div className="min-h-screen bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="font-heading text-3xl font-semibold text-brand-brown mb-8">
          Shopping Cart
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-brand-border p-6">
              <h2 className="font-heading text-lg font-semibold mb-4">Cart Items</h2>
              {/* Cart items will be rendered here */}
              <p className="text-brand-text">Cart functionality coming soon...</p>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-brand-border p-6 sticky top-4">
              <h2 className="font-heading text-lg font-semibold mb-4">Order Summary</h2>
              {/* Order summary will be rendered here */}
              <p className="text-brand-text mb-4">Summary coming soon...</p>
              
              <button 
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-md font-medium cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}