export default function Loading() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section Skeleton */}
      <section
        className="relative bg-white text-gray-800 section-padding overflow-hidden"
        style={{ padding: "80px 0" }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 rounded-lg mb-12 mx-auto max-w-md"></div>
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
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section Skeleton */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 max-w-md"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-32 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
