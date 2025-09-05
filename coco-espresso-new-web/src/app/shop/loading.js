export default function ShopLoading() {
  return (
    <div className="min-h-screen bg-brand-background px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-brand-border overflow-hidden">
              <div className="h-64 bg-gray-300 animate-pulse"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}