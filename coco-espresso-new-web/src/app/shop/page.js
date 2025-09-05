import ProductCard from '@/components/products/ProductCard';
import { getAllProducts } from '@/data/products';

export const metadata = {
  title: 'Shop Coffee - Coco Espresso AU',
  description: 'Discover our premium collection of Sri Lankan coffee beans. From single-origin Ceylon Gold to our signature espresso blend.',
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header Section */}
      <section className="bg-brand-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl font-semibold text-brand-brown mb-4">
            Our Coffee Collection
          </h1>
          <p className="text-lg text-brand-text max-w-2xl mx-auto">
            Discover the rich flavors of Sri Lankan coffee. Each blend is carefully sourced 
            from the finest plantations and roasted to perfection.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-heading text-2xl font-semibold text-brand-brown">
              All Products ({products.length})
            </h2>
            
            {/* Filter Options - for future enhancement */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-brand-text">Sort by:</span>
              <select className="border border-brand-border rounded px-3 py-1 text-sm bg-white">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-brown py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-semibold text-white mb-4">
            Can't Decide? Try Our Subscription
          </h2>
          <p className="text-gray-200 mb-6">
            Get a curated selection of our best coffees delivered monthly. Cancel anytime.
          </p>
          <button className="bg-white text-brand-brown px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
            Explore Subscription Plans
          </button>
        </div>
      </section>
    </div>
  );
}