import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo-project', // This is read from your .env.local file
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',   // This is read from your .env.local file
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Initialize image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source) => {
  return builder.image(source);
};

// Mock product data for development
const mockProducts = [
  {
    _id: 'mock-product',
    name: 'Premium Coffee Blend',
    slug: { current: 'premium-coffee-blend' },
    description: 'A rich, full-bodied coffee with notes of chocolate and caramel. Sourced from the finest coffee beans in Sri Lanka.',
    image: null,
    variations: [
      { _id: 'var1', weight: '250g', price: 24.99 },
      { _id: 'var2', weight: '500g', price: 44.99 },
      { _id: 'var3', weight: '1kg', price: 79.99 }
    ]
  }
];

// Query to fetch ALL products
export const getProducts = async () => {
  // If Sanity credentials aren't configured, return mock data immediately
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'demo-project') {
    console.log('Sanity not configured - using mock product data for development...');
    return mockProducts;
  }

  try {
    // This query now fetches every document of the type "product"
    const products = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        slug,
        description,
        image,
        variations[]{
          _id,
          weight,
          price
        }
      }
    `);
    
    // Return mock data if no products are found
    if (!products || products.length === 0) {
      console.log('No products found in Sanity - using mock data...');
      return mockProducts;
    }
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    console.log('Using mock product data for development...');
    return mockProducts; // Return mock data if there's an error
  }
};