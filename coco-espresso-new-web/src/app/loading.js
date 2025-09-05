export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-brown mx-auto mb-4"></div>
        <p className="text-brand-text font-medium">Loading...</p>
      </div>
    </div>
  );
}