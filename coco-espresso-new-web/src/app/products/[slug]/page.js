import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getAllProducts } from '@/data/products';

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found - Coco Espresso AU',
    };
  }

  return {
    title: `${product.name} - Coco Espresso AU`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-brand-text mb-8">
          <Link href="/" className="hover:text-brand-brown transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-brand-brown transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-brown">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src={product.image || '/images/products/ceylon-gold-250g.jpg'}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail gallery - for future enhancement */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative aspect-square rounded overflow-hidden bg-white border-2 border-transparent hover:border-brand-brown transition-colors cursor-pointer">
                  <Image
                    src={product.image || '/images/products/ceylon-gold-250g.jpg'}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-semibold text-brand-brown mb-2">
                {product.name}
              </h1>
              <p className="text-brand-text text-lg">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg p-6 border border-brand-border">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-brand-text">Origin:</span>
                  <p className="text-brand-brown">{product.origin}</p>
                </div>
                <div>
                  <span className="font-medium text-brand-text">Roast Level:</span>
                  <p className="text-brand-brown">{product.roastLevel}</p>
                </div>
              </div>
            </div>

            {/* Tasting Notes */}
            {product.tastingNotes && (
              <div>
                <h3 className="font-heading text-lg font-semibold text-brand-brown mb-3">
                  Tasting Notes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tastingNotes.map((note, index) => (
                    <span 
                      key={index}
                      className="bg-brand-background text-brand-text px-3 py-1 rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Brewing Methods */}
            {product.brewingMethods && (
              <div>
                <h3 className="font-heading text-lg font-semibold text-brand-brown mb-3">
                  Recommended Brewing Methods
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.brewingMethods.map((method, index) => (
                    <span 
                      key={index}
                      className="bg-white border border-brand-border text-brand-text px-3 py-1 rounded text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Variations & Add to Cart */}
            <div className="bg-white rounded-lg p-6 border border-brand-border">
              <h3 className="font-heading text-lg font-semibold text-brand-brown mb-4">
                Choose Your Size
              </h3>
              
              <div className="space-y-3">
                {product.variations?.map((variation) => (
                  <div key={variation._id} className="flex items-center justify-between p-3 border border-brand-border rounded hover:bg-brand-background transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name="variation" 
                        value={variation._id}
                        defaultChecked={variation === product.variations[0]}
                        className="text-brand-brown"
                      />
                      <span className="font-medium">{variation.weight}</span>
                    </div>
                    <span className="font-semibold text-brand-brown">
                      ${variation.price.toFixed(2)} AUD
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-brand-brown text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-200 mt-6">
                Add to Cart
              </button>
              
              <p className="text-sm text-gray-600 text-center mt-3">
                Free shipping on orders over $50
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section - for future enhancement */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-semibold text-brand-brown mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="text-center text-brand-text">
            <p>Related products coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
}