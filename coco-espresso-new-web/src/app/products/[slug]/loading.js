export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-brand-background px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb skeleton */}
        <div className="h-4 bg-gray-300 rounded w-64 mb-8 animate-pulse"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image skeleton */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-300 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
          
          {/* Product info skeleton */}
          <div className="space-y-6">
            <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            </div>
            <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}