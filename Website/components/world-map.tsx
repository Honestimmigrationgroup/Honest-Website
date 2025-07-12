"use client"
import Image from "next/image"
import Link from "next/link"

interface Country {
  name: string
  code: string
  slug: string
  position: { x: number; y: number }
}

const countries: Country[] = [
  {
    name: "USA",
    code: "US",
    slug: "usa",
    position: { x: 18, y: 42 }, // Exact US pin position
  },
  {
    name: "Canada",
    code: "CA",
    slug: "canada",
    position: { x: 15, y: 22 }, // Exact CA pin position
  },
  {
    name: "United Kingdom",
    code: "UK",
    slug: "united-kingdom",
    position: { x: 48, y: 25 }, // Exact UK pin position
  },
  {
    name: "Europe",
    code: "EU",
    slug: "europe",
    position: { x: 55, y: 28 }, // Exact EU pin position
  },
  {
    name: "Dubai",
    code: "AE",
    slug: "dubai",
    position: { x: 62, y: 45 }, // Exact AE pin position
  },
  {
    name: "Australia",
    code: "AU",
    slug: "australia",
    position: { x: 82, y: 68 }, // Exact AU pin position
  },
  {
    name: "New Zealand",
    code: "NZ",
    slug: "new-zealand",
    position: { x: 91, y: 82 }, // Moved down-right from previous position (was x: 88, y: 78)
  },
]

const WorldMap = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* World Map with Clickable Pins */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/world-map-final.png"
          alt="World Map with Study Destinations"
          width={960}
          height={480}
          className="w-full h-auto"
          priority
        />

        {/* Clickable Pin Areas - Adjusted for larger map */}
        {countries.map((country) => (
          <Link
            key={country.code}
            href={`/study-abroad/${country.slug}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${country.position.x}%`,
              top: `${country.position.y}%`,
              width: "60px",
              height: "60px",
            }}
            title={`Study in ${country.name}`}
          >
            {/* Clickable area with subtle hover effect */}
            <div className="w-full h-full rounded-full hover:bg-orange-500/20 transition-colors duration-300 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-transparent group-hover:bg-orange-500/10 transition-colors duration-300 -ml-2"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default WorldMap
