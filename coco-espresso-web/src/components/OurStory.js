export default function OurStory() {
  return (
    <section className="bg-gradient-to-br from-white via-amber-25 to-orange-25 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-amber-700 bg-clip-text text-transparent mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-amber-900 mb-3">Sustainably Sourced</h3>
            <p className="text-gray-600">
              From the lush highlands of Sri Lanka, our beans are ethically sourced from sustainable farms.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-amber-900 mb-3">Small Batch Roasted</h3>
            <p className="text-gray-600">
              Each batch is carefully roasted to perfection, ensuring maximum flavor and freshness.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-amber-900 mb-3">Fresh Delivery</h3>
            <p className="text-gray-600">
              Delivered fresh to your doorstep within 48 hours of roasting for peak flavor.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-100">
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
            "Born from a passion for exceptional coffee, every cup tells a story of tradition, 
            craftsmanship, and the pursuit of perfection."
          </blockquote>
          
          <p className="text-lg md:text-xl font-heading font-bold bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
            Experience the authentic taste of Serendib, one sip at a time.
          </p>
        </div>
      </div>
    </section>
  );
}