/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-like behavior
  poweredByHeader: false,
  // Development indicators are disabled by default in production
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
