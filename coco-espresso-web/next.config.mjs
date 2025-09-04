/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-like behavior
  poweredByHeader: false,
  // Optimize for modern browsers
  experimental: {
    optimizeCss: true,
  },
  // Better image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
