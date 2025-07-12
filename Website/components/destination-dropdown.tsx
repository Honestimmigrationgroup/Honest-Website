"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const destinations = [
  { name: "Australia", flag: "🇦🇺", slug: "australia" },
  { name: "USA", flag: "🇺🇸", slug: "usa" },
  { name: "United Kingdom", flag: "🇬🇧", slug: "united-kingdom" },
  { name: "Canada", flag: "🇨🇦", slug: "canada" },
  { name: "Dubai (UAE)", flag: "🇦🇪", slug: "dubai" },
  { name: "New Zealand", flag: "🇳🇿", slug: "new-zealand" },
  { name: "Europe", flag: "🇪🇺", slug: "europe" },
]

const DestinationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        Explore Destinations
        <ChevronDown size={18} className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="py-2">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/study-abroad/${destination.slug}`}
                className="flex items-center px-4 py-3 hover:bg-orange-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl mr-3">{destination.flag}</span>
                <span className="font-medium text-gray-800">{destination.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DestinationDropdown
