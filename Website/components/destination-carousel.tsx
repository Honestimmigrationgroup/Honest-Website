"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, GraduationCap, BookOpen } from "lucide-react"

const destinations = [
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    universities: "40+ Universities",
    courses: "1000+ Courses",
    slug: "australia",
    color: "from-blue-600/20 to-purple-600/30",
  },
  {
    name: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
    universities: "100+ Universities",
    courses: "2000+ Courses",
    slug: "usa",
    color: "from-red-600/20 to-blue-600/30",
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    universities: "50+ Universities",
    courses: "1500+ Courses",
    slug: "united-kingdom",
    color: "from-blue-800/20 to-red-600/30",
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
    universities: "30+ Universities",
    courses: "800+ Courses",
    slug: "canada",
    color: "from-red-600/20 to-red-800/30",
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    universities: "15+ Universities",
    courses: "500+ Courses",
    slug: "dubai",
    color: "from-yellow-500/20 to-orange-600/30",
  },
  {
    name: "New Zealand",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    universities: "8+ Universities",
    courses: "400+ Courses",
    slug: "new-zealand",
    color: "from-green-600/20 to-blue-600/30",
  },
  {
    name: "Europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
    universities: "200+ Universities",
    courses: "3000+ Courses",
    slug: "europe",
    color: "from-purple-600/20 to-indigo-600/30",
  },
]

const DestinationCarousel = () => {
  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Create multiple copies for seamless infinite scroll
  const extendedDestinations = [...destinations, ...destinations, ...destinations, ...destinations]

  return (
    <div className="relative pb-8">
      <div className="overflow-hidden destination-container">
        <div
          className="flex animate-scroll-destinations"
          style={{
            width: `${(extendedDestinations.length / visibleItems) * 100}%`,
          }}
        >
          {extendedDestinations.map((destination, index) => (
            <div
              key={`${destination.name}-${index}`}
              className="flex-shrink-0 px-3 pb-4"
              style={{ width: `${100 / extendedDestinations.length}%` }}
            >
              <Link href={`/study-abroad/${destination.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={`Study in ${destination.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle Gradient Overlay with Black Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${destination.color} group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>

                    {/* Black Translucent Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Black Translucent Overlay - Default and Hover States */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>

                    {/* Country Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 drop-shadow-md">
                        {destination.name}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>Study Destination</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 bg-gradient-to-br from-white to-gray-50/50">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <GraduationCap size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Universities</p>
                          <p className="text-sm font-bold text-gray-800">{destination.universities.split("+")[0]}+</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <BookOpen size={16} className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Courses</p>
                          <p className="text-sm font-bold text-gray-800">{destination.courses.split("+")[0]}+</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-orange-500 font-semibold text-sm group-hover:text-orange-600 transition-colors">
                        Explore Programs
                      </span>
                      <div className="w-8 h-8 rounded-full bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
                        <ChevronRight size={16} className="text-orange-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* View All Destinations Link */}
      <div className="text-center mt-8">
        <Link
          href="/study-abroad"
          className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors hover:underline"
          aria-label="View all study destinations"
        >
          View All Study Destinations
          <ChevronRight className="ml-1" size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

export default DestinationCarousel
