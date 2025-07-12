export default function Loading() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section Skeleton */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 rounded-lg mb-8 mx-auto max-w-md"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 bg-gray-200 rounded-lg w-48"></div>
              <div className="h-12 bg-gray-200 rounded-lg w-48"></div>
              <div className="h-12 bg-gray-200 rounded-lg w-48"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Section Skeleton */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section Skeleton */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="flex justify-between items-center mb-12">
              <div>
                <div className="h-8 bg-gray-200 rounded w-64 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-48"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg p-6 h-24"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section Skeleton */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="text-center mb-16">
              <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-48 mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-8 h-96"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
