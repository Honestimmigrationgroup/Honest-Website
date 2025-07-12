import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center">
        <div className="text-center space-y-6">
          <Skeleton className="h-16 w-96 mx-auto bg-green-800/30" />
          <Skeleton className="h-8 w-80 mx-auto bg-green-800/30" />
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-12 w-48 bg-green-800/30" />
            <Skeleton className="h-12 w-48 bg-green-800/30" />
          </div>
        </div>
      </div>

      {/* Quick Stats Skeleton */}
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-12 w-16 mx-auto" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4 p-6 border rounded-lg">
              <Skeleton className="h-16 w-16 mx-auto rounded-full" />
              <Skeleton className="h-6 w-32 mx-auto" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
