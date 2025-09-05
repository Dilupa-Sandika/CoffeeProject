export const sampleProducts = [
  {
    _id: "ceylon-gold",
    name: "Ceylon Gold",
    slug: { current: "ceylon-gold" },
    description: "A premium single-origin coffee from the misty highlands of Nuwara Eliya. This exceptional brew offers bright acidity with notes of citrus and honey, delivering the authentic taste of Ceylon's finest coffee heritage.",
    image: "/images/products/ceylon-gold-250g.jpg",
    featured: true,
    variations: [
      {
        _id: "ceylon-gold-250g",
        weight: "250g",
        price: 28.50
      },
      {
        _id: "ceylon-gold-500g", 
        weight: "500g",
        price: 52.00
      }
    ],
    origin: "Nuwara Eliya, Sri Lanka",
    roastLevel: "Medium",
    tastingNotes: ["Citrus", "Honey", "Floral", "Bright Acidity"],
    brewingMethods: ["Pour Over", "French Press", "Espresso"]
  },
  {
    _id: "mountain-mist",
    name: "Mountain Mist",
    slug: { current: "mountain-mist" },
    description: "Grown in the cloud forests of Kandy at 1,200m elevation. This full-bodied coffee delivers rich chocolate undertones with a smooth finish, perfect for those who appreciate depth and complexity in their morning cup.",
    image: "/images/products/mountain-mist-250g.jpg",
    featured: true,
    variations: [
      {
        _id: "mountain-mist-250g",
        weight: "250g", 
        price: 32.00
      },
      {
        _id: "mountain-mist-500g",
        weight: "500g",
        price: 58.00
      }
    ],
    origin: "Kandy, Sri Lanka",
    roastLevel: "Medium-Dark",
    tastingNotes: ["Chocolate", "Caramel", "Nutty", "Full Body"],
    brewingMethods: ["Espresso", "Moka Pot", "French Press"]
  },
  {
    _id: "royal-kandy",
    name: "Royal Kandy",
    slug: { current: "royal-kandy" },
    description: "A regal blend from the ancient kingdom of Kandy. This sophisticated coffee combines beans from multiple estates to create a balanced cup with wine-like complexity and a lingering finish fit for royalty.",
    image: "/images/products/royal-kandy-250g.jpg",
    featured: false,
    variations: [
      {
        _id: "royal-kandy-250g",
        weight: "250g",
        price: 35.00
      },
      {
        _id: "royal-kandy-500g",
        weight: "500g",
        price: 65.00
      }
    ],
    origin: "Kandy Region, Sri Lanka",
    roastLevel: "Medium",
    tastingNotes: ["Wine-like", "Complex", "Fruity", "Elegant"],
    brewingMethods: ["Pour Over", "Chemex", "Aeropress"]
  },
  {
    _id: "espresso-blend",
    name: "Serendib Espresso Blend",
    slug: { current: "serendib-espresso-blend" },
    description: "Our signature espresso blend crafted from the finest Sri Lankan beans. Roasted to perfection for rich crema and bold flavor, this blend delivers the intensity and smoothness that espresso lovers crave.",
    image: "/images/products/espresso-blend-250g.jpg",
    featured: true,
    variations: [
      {
        _id: "espresso-blend-250g",
        weight: "250g",
        price: 30.00
      },
      {
        _id: "espresso-blend-500g",
        weight: "500g",
        price: 55.00
      }
    ],
    origin: "Multi-Region, Sri Lanka",
    roastLevel: "Dark",
    tastingNotes: ["Bold", "Rich Crema", "Smoky", "Intense"],
    brewingMethods: ["Espresso Machine", "Moka Pot", "Turkish"]
  }
];

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return sampleProducts.filter(product => product.featured);
};

// Helper function to get product by slug
export const getProductBySlug = (slug) => {
  return sampleProducts.find(product => product.slug.current === slug);
};

// Helper function to get all products
export const getAllProducts = () => {
  return sampleProducts;
};