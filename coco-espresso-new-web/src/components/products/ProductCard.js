import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const basePrice = product.variations?.[0]?.price || 0;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-brand-border overflow-hidden hover:shadow-md transition-all duration-300 group">
      <Link href={`/products/${product.slug?.current}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image || '/images/products/ceylon-gold-250g.jpg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {product.featured && (
            <div className="absolute top-2 right-2 bg-brand-brown text-white px-2 py-1 text-xs font-medium rounded">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-heading text-lg font-semibold text-brand-brown mb-2 group-hover:text-opacity-80 transition-colors">
            {product.name}
          </h3>
          <p className="text-brand-text text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-brand-brown font-semibold">
              From ${basePrice.toFixed(2)} AUD
            </div>
            <div className="text-xs text-gray-500">
              {product.roastLevel}
            </div>
          </div>
          
          {product.tastingNotes && (
            <div className="mt-2 flex flex-wrap gap-1">
              {product.tastingNotes.slice(0, 2).map((note, index) => (
                <span 
                  key={index}
                  className="inline-block bg-brand-background text-brand-text text-xs px-2 py-1 rounded"
                >
                  {note}
                </span>
              ))}
              {product.tastingNotes.length > 2 && (
                <span className="inline-block text-xs text-gray-500 px-1">
                  +{product.tastingNotes.length - 2} more
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}