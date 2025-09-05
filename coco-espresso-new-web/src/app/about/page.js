import Image from 'next/image';

export const metadata = {
  title: 'Our Story - Coco Espresso AU',
  description: 'Learn about our journey bringing premium Sri Lankan coffee to Australia. From the highlands of Ceylon to your cup.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-brand-brown mb-6">
            Our Story
          </h1>
          <p className="text-xl text-brand-text leading-relaxed">
            A journey from the misty highlands of Sri Lanka to the hearts of Australian coffee lovers
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-brand-border mb-8">
              <h2 className="font-heading text-2xl font-semibold text-brand-brown mb-4">
                The Beginning
              </h2>
              <p className="text-brand-text leading-relaxed mb-4">
                Our story begins in the cloud-kissed plantations of Sri Lanka, where coffee has been cultivated for over 150 years. 
                The island's unique climate, with its monsoon rains and mountain mists, creates the perfect conditions for growing 
                exceptional coffee beans.
              </p>
              <p className="text-brand-text leading-relaxed">
                Founded by coffee enthusiasts with deep roots in both Sri Lanka and Australia, Coco Espresso AU was born from 
                a simple desire: to share the extraordinary flavors of Ceylon coffee with fellow Australians who appreciate 
                quality and authenticity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-brand-border mb-8">
              <h2 className="font-heading text-2xl font-semibold text-brand-brown mb-4">
                Our Mission
              </h2>
              <p className="text-brand-text leading-relaxed mb-4">
                We believe that great coffee is more than just a beverage—it's a moment of connection, a daily ritual, 
                and a bridge between cultures. Our mission is to bring you the finest Sri Lankan coffee, roasted with care 
                and delivered fresh to your door.
              </p>
              <p className="text-brand-text leading-relaxed">
                Every bag of Coco Espresso coffee represents our commitment to quality, sustainability, and the rich heritage 
                of Sri Lankan coffee cultivation. We work directly with plantation owners who share our values of excellence 
                and environmental responsibility.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-brand-border">
              <h2 className="font-heading text-2xl font-semibold text-brand-brown mb-4">
                Why Sri Lankan Coffee?
              </h2>
              <p className="text-brand-text leading-relaxed mb-4">
                Sri Lankan coffee, once known as Ceylon coffee, has a distinguished history and unique characteristics 
                that set it apart from other origins. Grown at high altitudes in the central highlands, our beans develop 
                complex flavors with bright acidity and distinctive aromatic profiles.
              </p>
              <p className="text-brand-text leading-relaxed">
                The combination of rich volcanic soil, perfect altitude, and skilled cultivation techniques passed down 
                through generations creates coffee that is truly exceptional. Each cup tells the story of its terroir—
                the land, climate, and people who nurture it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-brown mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-brand-text">
                We never compromise on quality. Every bean is carefully selected and roasted to perfection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-brand-text">
                We support sustainable farming practices that protect the environment and support local communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Passion</h3>
              <p className="text-brand-text">
                Coffee is our passion, and we love sharing the rich heritage and flavors of Sri Lankan coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-brown">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-semibold text-white mb-6">
            Ready to Experience Our Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Taste the heritage, quality, and passion in every cup of Coco Espresso coffee.
          </p>
          <a 
            href="/shop"
            className="bg-white text-brand-brown px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Explore Our Coffee
          </a>
        </div>
      </section>
    </div>
  );
}