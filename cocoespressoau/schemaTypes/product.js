// schemaTypes/product.js
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }, // Corrected for plain JS projects
    {
        name: 'variations',
        title: 'Variations',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'weight', title: 'Weight (e.g., 250g)', type: 'string'},
                {name: 'price', title: 'Price (AUD)', type: 'number'},
                {name: 'sku', title: 'SKU', type: 'string'}
            ]
        }]
    }
  ],
};