'use client';

import { urlFor } from '../../sanity/client';

const products = [
  {
    _id: '1',
    name: 'Morning Bliss Blend',
    image: null,
    price: 28.00,
  },
  {
    _id: '2',
    name: 'Midnight Velvet Roast',
    image: null,
    price: 32.00,
  },
  {
    _id: '3',
    name: 'Serendipity Single Origin',
    image: null,
    price: 35.00,
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-brown">Explore Our Coffee Collection</h2>
          <p className="text-lg text-brand-text mt-4">Hand-picked and roasted to perfection.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-large bg-brand-background">
                {product.image ? (
                  <img
                    src={urlFor(product.image).width(400).height(400).url()}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">☕</span>
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold font-heading text-brand-brown">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-brand-text">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
