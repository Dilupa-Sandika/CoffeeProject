'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartSidebar from '../../components/CartSidebar';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-brand-text mb-6 leading-tight animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl text-brand-text-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              From the misty highlands of Sri Lanka to your morning cup — 
              discover the journey behind every bean.
            </p>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            
            {/* The Beginning */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-3xl font-bold font-heading text-brand-text">
                    The Beginning
                  </h2>
                  <p className="text-lg text-brand-text-light leading-relaxed">
                    Our story begins in the verdant tea plantations of Kandy, Sri Lanka, where coffee has been 
                    grown alongside Ceylon tea for generations. What started as a passion for sharing the authentic 
                    taste of Serendib has grown into a mission to bring the world's finest coffee to Australia.
                  </p>
                  <p className="text-lg text-brand-text-light leading-relaxed">
                    Founded by coffee enthusiasts who fell in love with Sri Lankan coffee culture, 
                    Coco Espresso AU bridges continents to deliver an extraordinary coffee experience 
                    that honors tradition while embracing innovation.
                  </p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  <div className="aspect-[4/3] rounded-large overflow-hidden shadow-lifted bg-brand-white">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-brown-100 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-8xl mb-4 block">🇱🇰</span>
                        <p className="text-lg font-semibold font-heading text-brand-brown">
                          Born in Sri Lanka's Highlands
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  <div className="aspect-[4/3] rounded-large overflow-hidden shadow-lifted bg-brand-white">
                    <div className="w-full h-full bg-gradient-to-br from-brown-100 to-orange-100 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-8xl mb-4 block">☕</span>
                        <p className="text-lg font-semibold font-heading text-brand-brown">
                          Roasted to Perfection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
                  <h2 className="text-3xl font-bold font-heading text-brand-text">
                    Our Process
                  </h2>
                  <p className="text-lg text-brand-text-light leading-relaxed">
                    We work directly with small-scale farmers in Sri Lanka's coffee-growing regions, 
                    ensuring fair prices and sustainable practices. Our beans are carefully selected, 
                    processed using traditional methods, and then shipped fresh to Australia.
                  </p>
                  <p className="text-lg text-brand-text-light leading-relaxed">
                    Each batch is small-roasted in Australia to preserve the unique characteristics of 
                    Ceylon coffee — its bright acidity, full body, and distinctive flavor notes that 
                    reflect the island's diverse microclimates.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Promise */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading text-brand-text mb-6 animate-fade-in">
                  Our Promise
                </h2>
                <p className="text-xl text-brand-text-light animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  Every cup tells a story of quality, sustainability, and authentic flavor.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🌱",
                    title: "Sustainable Sourcing",
                    description: "We partner with farmers who practice environmentally responsible cultivation, ensuring the land remains fertile for future generations."
                  },
                  {
                    icon: "⚡",
                    title: "Freshness Guaranteed",
                    description: "Your coffee is roasted within 48 hours of shipping, delivering maximum freshness and flavor to your doorstep."
                  },
                  {
                    icon: "🤝",
                    title: "Fair Trade Ethics",
                    description: "We believe in fair compensation for our farmers, supporting rural communities and preserving traditional coffee culture."
                  }
                ].map((promise, index) => (
                  <div 
                    key={index}
                    className="bg-brand-white rounded-large p-8 shadow-lifted hover:shadow-card-hover transition-all duration-300 text-center animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <div className="text-4xl mb-4">{promise.icon}</div>
                    <h3 className="text-xl font-semibold font-heading text-brand-text mb-4">
                      {promise.title}
                    </h3>
                    <p className="text-brand-text-light leading-relaxed">
                      {promise.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Vision */}
            <div className="mb-20 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-heading text-brand-text mb-8 animate-fade-in">
                  Our Vision
                </h2>
                <blockquote className="text-xl italic text-brand-text-light leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  "To make Sri Lankan coffee as beloved in Australia as Ceylon tea is around the world. 
                  We envision a future where every coffee lover knows the unique taste of Serendib."
                </blockquote>
                <div className="w-24 h-px bg-brand-brown mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}></div>
                <p className="text-lg text-brand-text-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                  Join us on this journey as we bring the authentic taste of Sri Lankan coffee to Australia, 
                  one cup at a time.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-brand-white rounded-xl p-12 text-center shadow-lifted animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              <h3 className="text-2xl font-bold font-heading text-brand-text mb-4">
                Ready to Experience Ceylon Coffee?
              </h3>
              <p className="text-brand-text-light text-lg mb-8">
                Discover our carefully curated selection of premium Sri Lankan coffee blends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/shop"
                  className="inline-block px-8 py-4 bg-brand-brown text-brand-white rounded-medium font-semibold hover:bg-brand-brown-dark shadow-button hover:shadow-button-hover transition-all duration-300"
                >
                  Shop Our Coffee
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 border-2 border-brand-brown text-brand-brown rounded-medium font-semibold hover:bg-brand-brown hover:text-brand-white transition-all duration-300"
                >
                  Get in Touch
                </Link>
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