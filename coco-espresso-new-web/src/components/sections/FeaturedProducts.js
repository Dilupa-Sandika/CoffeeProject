import ProductCard from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}