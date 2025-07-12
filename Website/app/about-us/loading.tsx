export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-200 rounded-full w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto mb-8 animate-pulse"></div>
          <div className="flex gap-4 justify-center">
            <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        </div>

        {/* Founders Section Skeleton */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-48 mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-32 mx-auto animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section Skeleton */}
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-16 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
