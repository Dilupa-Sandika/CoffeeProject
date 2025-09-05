import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-heading text-6xl font-semibold text-brand-brown mb-4">404</h1>
          <h2 className="font-heading text-2xl font-semibold text-brand-text mb-4">Page Not Found</h2>
          <p className="text-brand-text mb-8 max-w-md">
            Sorry, we couldn't find the page you're looking for. Perhaps you'd like to explore our coffee collection instead?
          </p>
        </div>
        
        <div className="space-x-4">
          <Link 
            href="/" 
            className="bg-brand-brown text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-200 inline-block"
          >
            Go Home
          </Link>
          <Link 
            href="/shop" 
            className="border-2 border-brand-brown text-brand-brown px-6 py-3 rounded-md font-medium hover:bg-brand-brown hover:text-white transition-all duration-200 inline-block"
          >
            Shop Coffee
          </Link>
        </div>
      </div>
    </div>
  );
}