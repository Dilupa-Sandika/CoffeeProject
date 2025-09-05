export const metadata = {
  title: 'Coffee Subscription - Coco Espresso AU',
  description: 'Never run out of premium Sri Lankan coffee. Choose from our flexible subscription plans.',
};

export default function SubscriptionPage() {
  const plans = [
    {
      name: "Discovery Plan",
      price: 29.95,
      frequency: "Monthly",
      description: "Perfect for coffee explorers who want to try different Sri Lankan origins",
      features: [
        "250g bag of featured coffee",
        "Rotating selection of origins",
        "Tasting notes & brewing guide",
        "Free shipping Australia-wide",
        "Cancel anytime"
      ]
    },
    {
      name: "Connoisseur Plan",
      price: 54.95,
      frequency: "Monthly",
      description: "For serious coffee lovers who appreciate premium quality and variety",
      features: [
        "500g bag of premium coffee",
        "Access to limited edition blends",
        "Detailed origin stories",
        "Priority customer support",
        "Free shipping Australia-wide",
        "Cancel anytime"
      ],
      popular: true
    },
    {
      name: "Family Plan", 
      price: 79.95,
      frequency: "Monthly",
      description: "Ideal for households that can't start the day without great coffee",
      features: [
        "Two 500g bags (1kg total)",
        "Mix of origins and roast levels",
        "Bulk pricing savings",
        "Perfect for offices too",
        "Free shipping Australia-wide",
        "Cancel anytime"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Section */}
      <section className="bg-brand-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-brand-brown mb-6">
            Coffee Subscription
          </h1>
          <p className="text-xl text-brand-text leading-relaxed mb-8">
            Never run out of exceptional Sri Lankan coffee. Our subscription service delivers 
            freshly roasted beans to your door every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-brand-text">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Skip or cancel anytime
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Australia-wide shipping
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Roasted to order
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-brown mb-12">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg border-2 ${plan.popular ? 'border-brand-brown' : 'border-brand-border'} p-6 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-brown text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-semibold text-brand-brown mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-brand-brown">${plan.price}</span>
                    <span className="text-brand-text">/{plan.frequency.toLowerCase()}</span>
                  </div>
                  <p className="text-brand-text text-sm">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-brand-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-md font-medium transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-brand-brown text-white hover:bg-opacity-90' 
                      : 'border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white'
                  }`}
                >
                  Start {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-brown mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Choose Your Plan</h3>
              <p className="text-brand-text text-sm">
                Select the subscription plan that matches your coffee consumption and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">We Roast & Ship</h3>
              <p className="text-brand-text text-sm">
                Every month, we carefully roast your coffee and ship it fresh to your door.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Enjoy & Repeat</h3>
              <p className="text-brand-text text-sm">
                Enjoy your premium Sri Lankan coffee and let us handle the rest automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}