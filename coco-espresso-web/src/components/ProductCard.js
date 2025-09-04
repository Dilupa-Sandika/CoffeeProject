'use client';

import Link from 'next/link';
import { urlFor } from '../../sanity/client';

export default function ProductCard({ product }) {
  if (!product) return null;

  const startingPrice = product.variations?.length > 0 
    ? Math.min(...product.variations.map(v => v.price))
    : 0;

  return (
    <Link href={`/products/${product.slug?.current || product._id}`}>
      <div className="group cursor-pointer">
        {/* Product Image */}
        <div className="aspect-square w-full rounded-large overflow-hidden bg-brand-white mb-3 sm:mb-4 lg:mb-6 shadow-card group-hover:shadow-card-hover transition-all duration-300">
          {product.image ? (
            <img 
              src={urlFor(product.image).width(400).height(400).url()}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-background">
              <span className="text-6xl">☕</span>
            </div>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-brand-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-brand-brown font-semibold font-heading bg-brand-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-medium shadow-lifted transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              View Product
            </span>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="space-y-1.5 sm:space-y-2">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold font-heading text-brand-text group-hover:text-brand-brown transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="text-brand-text-light text-xs sm:text-sm line-clamp-2">
              {product.description}
            </p>
          )}
          
          <div className="flex items-center justify-between pt-1 sm:pt-2">
            <span className="text-base sm:text-lg font-bold font-heading text-brand-brown">
              From ${startingPrice.toFixed(2)}
            </span>
            
            {product.variations && product.variations.length > 1 && (
              <span className="text-xs text-brand-text-light">
                {product.variations.length} sizes
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}