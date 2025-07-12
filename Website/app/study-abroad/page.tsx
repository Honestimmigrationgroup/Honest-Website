"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, ChevronRight, Globe, TrendingUp, Heart, ArrowDown, BookOpen } from "lucide-react"
import WorldMap from "@/components/world-map"
import CounterAnimation from "@/components/counter-animation"

const destinations = [
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    universities: "40+",
    courses: "1000+",
    slug: "australia",
    color: "from-blue-600/20 to-purple-600/30",
  },
  {
    name: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
    universities: "100+",
    courses: "2000+",
    slug: "usa",
    color: "from-red-600/20 to-blue-600/30",
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    universities: "50+",
    courses: "1500+",
    slug: "united-kingdom",
    color: "from-blue-800/20 to-red-600/30",
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
    universities: "30+",
    courses: "800+",
    slug: "canada",
    color: "from-red-600/20 to-red-800/30",
  },
  {
    name: "Dubai (UAE)",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    universities: "15+",
    courses: "500+",
    slug: "dubai",
    color: "from-yellow-500/20 to-orange-600/30",
  },
  {
    name: "New Zealand",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    universities: "8+",
    courses: "400+",
    slug: "new-zealand",
    color: "from-green-600/20 to-blue-600/30",
  },
  {
    name: "Europe",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&h=400&fit=crop",
    universities: "200+",
    courses: "3000+",
    slug: "europe",
    color: "from-purple-600/20 to-indigo-600/30",
  },
]

export default function StudyAbroad() {
  // Animation on scroll - same as dashboard
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById("destinations")
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* 1. Hero Section with Interactive World Map */}
      <section className="relative bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-left">
              <h1 className="hero-title-responsive font-bold mb-6 leading-tight">
                <span className="hero-title-1 block text-orange-500">Choose Your</span>
                <span className="hero-title-2 block">Dream Destination</span>
              </h1>
              <p className="hero-subtitle text-xl text-gray-600 mb-6 leading-relaxed">
                Explore world-class education opportunities across global destinations.
                <span className="font-semibold text-gray-800 ml-1">
                  Click on any location to discover the opportunities.
                </span>
              </p>

              {/* Explore Destinations CTA with Live Beats Effect */}
              <div className="hero-buttons mb-8">
                <button
                  onClick={scrollToDestinations}
                  className="relative btn-primary inline-flex items-center justify-center overflow-hidden group animate-pulse hover:animate-none"
                >
                  {/* Pulsing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Beating heart effect */}
                  <div className="absolute inset-0 bg-orange-500 animate-ping opacity-20 rounded-lg"></div>

                  {/* Button content */}
                  <span className="relative z-10 flex items-center">
                    Explore Destinations
                    <ArrowDown size={18} className="ml-2 animate-bounce" />
                  </span>
                </button>
              </div>

              {/* Quick Stats and View Services */}
              <div className="hero-buttons flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-left">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      <CounterAnimation end={1000} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-600">Students Placed</div>
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      <CounterAnimation end={250} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                </div>

                {/* View Services Button */}
                <Link href="/services" className="btn-outline inline-flex items-center justify-center">
                  View Our Services
                </Link>
              </div>
            </div>

            {/* World Map - Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full animate-on-scroll">
                <WorldMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Study Abroad Section - White BG with Why Choose styling */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="why-study-abroad-title">
        <div className="container mx-auto px-4">
          <h2 id="why-study-abroad-title" className="section-title animate-on-scroll animate-title">
            Why <span className="text-orange-500">Study Abroad</span>?
          </h2>
          <p className="section-subtitle animate-on-scroll animate-subtitle">
            Studying abroad opens doors to endless opportunities and transforms your perspective on life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 stagger-children">
            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110 icon-container">
                <GraduationCap
                  className="text-blue-500 group-hover:text-white transition-colors duration-300"
                  size={32}
                />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  World-Class Education
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Access to top-ranked universities and cutting-edge research facilities.
                </p>
              </div>
            </article>

            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-110 icon-container">
                <Globe className="text-green-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                  Global Exposure
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Experience diverse cultures and build an international network.
                </p>
              </div>
            </article>

            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-110 icon-container">
                <TrendingUp
                  className="text-purple-500 group-hover:text-white transition-colors duration-300"
                  size={32}
                />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Career Growth
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Enhanced career prospects with international qualifications.
                </p>
              </div>
            </article>

            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110 icon-container">
                <Heart className="text-orange-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <div className="card-content">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  Personal Development
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Build independence, confidence, and life-long memories.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Popular Study Destinations - Simplified */}
      <section id="destinations" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Popular <span className="text-orange-500">Study Destinations</span>
            </h2>
          </div>

          {/* Compact Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Link key={destination.slug} href={`/study-abroad/${destination.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={`Study in ${destination.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${destination.color} group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>

                    {/* Black Translucent Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Black Translucent Overlay - Hover State */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>

                    {/* Country Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 drop-shadow-md">
                        {destination.name}
                      </h3>
                    </div>
                  </div>

                  {/* Compact Content Section */}
                  <div className="p-5 bg-gradient-to-br from-white to-gray-50/50">
                    {/* Stats - Only Universities and Courses */}
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
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ready to Start Your Journey? - Reduced padding */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get personalized guidance from our expert counselors and take the first step towards your dream education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="relative bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center min-h-[56px] group overflow-hidden"
            >
              {/* Pop effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Ripple effect on hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300"></div>

              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center">Book Consultation</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center min-h-[56px]"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
