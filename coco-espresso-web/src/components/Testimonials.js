'use client';

const testimonials = [
  {
    quote: "The best coffee I've ever had. The aroma alone is enough to transport you to the beautiful hills of Sri Lanka. I'm a customer for life!",
    name: 'Emily Carter',
    location: 'Sydney, NSW',
  },
  {
    quote: "I was so impressed with the quality and taste of this coffee. It's smooth, rich, and has a unique flavor that I can't get enough of. Highly recommended!",
    name: 'David Chen',
    location: 'Melbourne, VIC',
  },
  {
    quote: "As a coffee connoisseur, I'm always on the lookout for new and exciting blends. Coco Espresso AU did not disappoint. This is a truly special coffee.",
    name: 'Sophia Rodriguez',
    location: 'Brisbane, QLD',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-brown">What Our Customers Are Saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-white p-8 rounded-large shadow-lifted">
              <p className="text-brand-text text-lg italic">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold font-heading text-brand-brown">{testimonial.name}</p>
                <p className="text-sm text-brand-text/70">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
