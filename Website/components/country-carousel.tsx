"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const countries = [
  {
    name: "Australia",
    image: "/placeholder.svg?height=250&width=350&text=Australia",
    universities: "40+ Universities",
    courses: "1000+ Courses",
    slug: "australia",
  },
  {
    name: "USA",
    image: "/placeholder.svg?height=250&width=350&text=USA",
    universities: "100+ Universities",
    courses: "2000+ Courses",
    slug: "usa",
  },
  {
    name: "United Kingdom",
    image: "/placeholder.svg?height=250&width=350&text=UK",
    universities: "50+ Universities",
    courses: "1500+ Courses",
    slug: "united-kingdom",
  },
  {
    name: "Canada",
    image: "/placeholder.svg?height=250&width=350&text=Canada",
    universities: "30+ Universities",
    courses: "800+ Courses",
    slug: "canada",
  },
  {
    name: "Dubai",
    image: "/placeholder.svg?height=250&width=350&text=Dubai",
    universities: "15+ Universities",
    courses: "500+ Courses",
    slug: "dubai",
  },
  {
    name: "New Zealand",
    image: "/placeholder.svg?height=250&width=350&text=New+Zealand",
    universities: "8+ Universities",
    courses: "400+ Courses",
    slug: "new-zealand",
  },
]

const CountryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1280) {
        setVisibleItems(3)
      } else {
        setVisibleItems(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems >= countries.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, countries.length - visibleItems) : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="flex justify-end space-x-2 mb-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            width: `${(countries.length / visibleItems) * 100}%`,
          }}
        >
          {countries.map((country, index) => (
            <div key={country.name} className="px-2" style={{ width: `${(100 / countries.length) * visibleItems}%` }}>
              <Link href={`/study-abroad/${country.slug}`}>
                <div className="card group h-full">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={country.image || "/placeholder.svg"}
                      alt={`Study in ${country.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">{country.name}</h3>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{country.universities}</span>
                      <span>{country.courses}</span>
                    </div>
                    <div className="mt-4 flex justify-center">
                      <span className="text-orange-500 font-medium text-sm flex items-center group-hover:underline">
                        Explore Options
                        <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryCarousel
