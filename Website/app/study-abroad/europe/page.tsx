"use client"

import React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Globe, Clock, GraduationCap, DollarSign, Building } from "lucide-react"

// Data from the brochure - page 3
const whyStudyEurope = [
  {
    icon: <Award className="w-6 h-6 text-yellow-600" />,
    title: "World-Class Education",
    description: "Home to world's oldest universities with rich academic heritage",
  },
  {
    icon: <Clock className="w-6 h-6 text-yellow-600" />,
    title: "Cultural Diversity",
    description: "Experience multiple cultures and languages in one continent",
  },
  {
    icon: <Globe className="w-6 h-6 text-yellow-600" />,
    title: "Affordable Education",
    description: "Many countries offer quality education at reasonable costs",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-yellow-600" />,
    title: "Career Opportunities",
    description: "Access to European job markets and excellent prospects",
  },
]

// European destinations data
const europeDestinations = [
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    description:
      "Europe's economic powerhouse offering world-class engineering and research programs. Known for its strong industrial base and innovation in technology.",
    whys: [
      "No tuition fees at public universities",
      "Strong job market and post-study work opportunities",
      "World-renowned engineering and technology programs",
      "Central location in Europe for travel and networking",
    ],
    universities: [
      "Technical University of Munich (TUM)",
      "Ludwig Maximilian University of Munich",
      "Heidelberg University",
      "Humboldt University of Berlin",
      "RWTH Aachen University",
    ],
    courses: [
      "Engineering & Technology",
      "Computer Science",
      "Business Administration",
      "Medicine",
      "Physics & Chemistry",
      "Automotive Engineering",
    ],
    fees: {
      tuition: "€0 - €20,000/year",
      living: "€800 - €1,200/month",
      total: "€10,000 - €35,000/year",
    },
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    description:
      "Home to prestigious institutions and rich cultural heritage. France offers excellent programs in arts, business, and sciences with a vibrant student life.",
    whys: [
      "Affordable education with excellent quality",
      "Rich cultural and artistic heritage",
      "Strong alumni networks globally",
      "Gateway to European job markets",
    ],
    universities: [
      "Sorbonne University",
      "École Normale Supérieure",
      "Sciences Po",
      "HEC Paris",
      "École Polytechnique",
    ],
    courses: [
      "Business & Management",
      "Arts & Humanities",
      "Fashion Design",
      "Culinary Arts",
      "International Relations",
      "Engineering",
    ],
    fees: {
      tuition: "€2,770 - €25,000/year",
      living: "€900 - €1,400/month",
      total: "€13,000 - €42,000/year",
    },
  },
  {
    id: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    description:
      "Progressive education system with high percentage of English-taught programs. Known for innovative teaching methods and excellent research facilities.",
    whys: [
      "High percentage of English-taught programs",
      "Innovative teaching methods and research",
      "Excellent work-life balance culture",
      "Strategic location for European business",
    ],
    universities: [
      "University of Amsterdam",
      "Delft University of Technology",
      "Leiden University",
      "Erasmus University Rotterdam",
      "Utrecht University",
    ],
    courses: [
      "Engineering & Technology",
      "Business & Economics",
      "International Law",
      "Environmental Science",
      "Data Science",
      "Medicine",
    ],
    fees: {
      tuition: "€8,000 - €20,000/year",
      living: "€900 - €1,300/month",
      total: "€18,000 - €36,000/year",
    },
  },
  {
    id: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    description:
      "Innovation hub with sustainable development focus. Sweden offers world-class education with emphasis on research and technology advancement.",
    whys: [
      "No tuition fees for EU students",
      "World leader in innovation and sustainability",
      "High quality of life and work opportunities",
      "Strong focus on research and development",
    ],
    universities: [
      "KTH Royal Institute of Technology",
      "Lund University",
      "University of Gothenburg",
      "Stockholm School of Economics",
      "Karolinska Institute",
    ],
    courses: [
      "Engineering & Technology",
      "Sustainability Studies",
      "IT & Computer Science",
      "Business & Economics",
      "Design & Innovation",
      "Medicine",
    ],
    fees: {
      tuition: "€0 - €15,000/year",
      living: "€900 - €1,200/month",
      total: "€11,000 - €30,000/year",
    },
  },
  {
    id: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    description:
      "Premium education with stunning Alpine backdrop. Home to world's top-ranked universities offering excellent research opportunities and career prospects.",
    whys: [
      "World's top-ranked universities",
      "Excellent research opportunities",
      "High employment rates post-graduation",
      "Beautiful natural environment",
    ],
    universities: [
      "ETH Zurich",
      "EPFL (École Polytechnique Fédérale)",
      "University of Zurich",
      "IMD Business School",
      "University of Geneva",
    ],
    courses: [
      "Engineering & Technology",
      "Finance & Banking",
      "Hospitality Management",
      "Medicine",
      "Physics & Mathematics",
      "Business Administration",
    ],
    fees: {
      tuition: "€1,000 - €4,000/year",
      living: "€1,500 - €2,000/month",
      total: "€19,000 - €28,000/year",
    },
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    description:
      "Rich history meets modern education excellence. Italy offers affordable education with strong programs in arts, design, architecture, and business.",
    whys: [
      "Affordable tuition fees",
      "Rich cultural and historical heritage",
      "Strong programs in arts and design",
      "Beautiful cities and lifestyle",
    ],
    universities: [
      "University of Bologna",
      "Sapienza University of Rome",
      "Politecnico di Milano",
      "Bocconi University",
      "University of Milan",
    ],
    courses: ["Arts & Design", "Architecture", "Fashion Design", "Business & Economics", "Engineering", "Medicine"],
    fees: {
      tuition: "€900 - €4,000/year",
      living: "€700 - €1,100/month",
      total: "€9,000 - €17,000/year",
    },
  },
  {
    id: "spain",
    name: "Spain",
    flag: "🇪🇸",
    description:
      "Vibrant culture with excellent educational opportunities. Spain offers diverse programs with affordable living costs and beautiful Mediterranean lifestyle.",
    whys: [
      "Affordable tuition and living costs",
      "Rich cultural diversity and lifestyle",
      "Growing tech and business sectors",
      "Beautiful climate and cities",
    ],
    universities: [
      "IE University",
      "Universidad Complutense Madrid",
      "University of Barcelona",
      "Pompeu Fabra University",
      "Universidad Autónoma de Madrid",
    ],
    courses: [
      "Business Administration",
      "International Relations",
      "Tourism Management",
      "Engineering",
      "Medicine",
      "Arts & Humanities",
    ],
    fees: {
      tuition: "€750 - €18,000/year",
      living: "€600 - €1,000/month",
      total: "€8,000 - €30,000/year",
    },
  },
  {
    id: "austria",
    name: "Austria",
    flag: "🇦🇹",
    description:
      "Central European excellence with strong academic traditions. Austria combines quality education with beautiful Alpine scenery and rich cultural heritage.",
    whys: [
      "Low tuition fees for quality education",
      "Strong research and innovation focus",
      "Central European location",
      "High quality of life",
    ],
    universities: [
      "University of Vienna",
      "Vienna University of Technology",
      "University of Salzburg",
      "Johannes Kepler University Linz",
      "University of Innsbruck",
    ],
    courses: [
      "Engineering & Technology",
      "Business & Economics",
      "Music & Arts",
      "Medicine",
      "Environmental Science",
      "Psychology",
    ],
    fees: {
      tuition: "€726 - €15,000/year",
      living: "€800 - €1,200/month",
      total: "€10,000 - €30,000/year",
    },
  },
  {
    id: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    description:
      "Scandinavian innovation with focus on sustainability and design. Denmark offers progressive education with strong emphasis on research and student welfare.",
    whys: [
      "Innovative teaching methods",
      "Strong focus on sustainability",
      "Excellent student support services",
      "High employment rates",
    ],
    universities: [
      "University of Copenhagen",
      "Technical University of Denmark",
      "Aarhus University",
      "Copenhagen Business School",
      "Aalborg University",
    ],
    courses: [
      "Engineering & Technology",
      "Design & Architecture",
      "Business & Economics",
      "Environmental Science",
      "Medicine",
      "Renewable Energy",
    ],
    fees: {
      tuition: "€0 - €16,000/year",
      living: "€1,000 - €1,400/month",
      total: "€12,000 - €35,000/year",
    },
  },
  {
    id: "norway",
    name: "Norway",
    flag: "🇳🇴",
    description:
      "Nordic excellence with stunning natural beauty. Norway offers tuition-free education at public universities with strong focus on research and innovation.",
    whys: [
      "No tuition fees at public universities",
      "World-class research facilities",
      "Beautiful natural environment",
      "Strong economy and job prospects",
    ],
    universities: [
      "University of Oslo",
      "Norwegian University of Science and Technology",
      "University of Bergen",
      "Norwegian School of Economics",
      "Arctic University of Norway",
    ],
    courses: [
      "Engineering & Technology",
      "Marine Sciences",
      "Energy Studies",
      "Business & Economics",
      "Environmental Science",
      "Arctic Studies",
    ],
    fees: {
      tuition: "€0 - €2,000/year",
      living: "€1,200 - €1,600/month",
      total: "€14,000 - €21,000/year",
    },
  },
]

export default function StudyInEurope() {
  const [currentWhySlide, setCurrentWhySlide] = useState(0)
  const [activeDestination, setActiveDestination] = useState("germany")

  // Animation on scroll
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

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Add auto-scroll effect
  useEffect(() => {
    // Auto-advance for why study cards (mobile)
    const whyInterval = setInterval(() => {
      setCurrentWhySlide((prev) => (prev + 1) % whyStudyEurope.length)
    }, 3000) // Change card every 3 seconds

    return () => {
      clearInterval(whyInterval)
    }
  }, [])

  const currentDestination = europeDestinations.find((dest) => dest.id === activeDestination) || europeDestinations[0]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 section-padding" style={{ padding: "80px 0" }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="hero-title-responsive font-bold mb-12">
            <span className="hero-title-1 block text-gray-800">Study in</span>
            <span className="hero-title-2 block text-yellow-600 font-black">Europe</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-yellow-600 text-white hover:bg-yellow-700">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              onClick={() => {
                const whySection = document.getElementById("why-choose")
                if (whySection) {
                  whySection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="btn-primary bg-white text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Study in Europe - Mobile Carousel */}
      <section id="why-choose" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyStudyEurope.map((reason, index) => (
              <article key={index} className="why-choose-card card p-6 text-center h-full group">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110 icon-container">
                  <div className="text-yellow-500 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Card-by-Card Carousel */}
          <div className="md:hidden">
            <div className="flex justify-center">
              <div className="w-80 mx-4">
                <article className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center h-full transition-all duration-500 ease-in-out">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-yellow-500">{whyStudyEurope[currentWhySlide].icon}</div>
                  </div>
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">{whyStudyEurope[currentWhySlide].title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{whyStudyEurope[currentWhySlide].description}</p>
                </article>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {whyStudyEurope.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentWhySlide ? "bg-yellow-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Study Destinations</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore top European countries offering exceptional educational opportunities
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {europeDestinations.map((destination) => (
              <button
                key={destination.id}
                onClick={() => setActiveDestination(destination.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeDestination === destination.id
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-yellow-100 hover:text-yellow-600"
                }`}
              >
                <span>{destination.flag}</span>
                <span>{destination.name}</span>
              </button>
            ))}
          </div>

          {/* Destination Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{currentDestination.flag}</span>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">{currentDestination.name}</h3>
                <p className="text-gray-600 mt-2">{currentDestination.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Why Choose This Country */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="text-yellow-600" size={20} />
                  <h4 className="text-xl font-semibold text-gray-800">Why Choose {currentDestination.name}?</h4>
                </div>
                <ul className="space-y-2">
                  {currentDestination.whys.map((why, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span className="text-gray-700">{why}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Universities */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building className="text-yellow-600" size={20} />
                  <h4 className="text-xl font-semibold text-gray-800">Top Universities</h4>
                </div>
                <ul className="space-y-2">
                  {currentDestination.universities.map((university, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span className="text-gray-700">{university}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Courses */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="text-white" size={20} />
                  <h4 className="text-xl font-semibold text-white">Popular Courses</h4>
                </div>
                <div className="bg-yellow-600 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-2">
                    {currentDestination.courses.map((course, index) => (
                      <span key={index} className="bg-white text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fees */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="text-white" size={20} />
                  <h4 className="text-xl font-semibold text-white">Cost Information</h4>
                </div>
                <div className="bg-yellow-600 p-4 rounded-lg space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Tuition Fees</p>
                    <p className="font-semibold text-yellow-800">{currentDestination.fees.tuition}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Living Cost</p>
                    <p className="font-semibold text-yellow-800">{currentDestination.fees.living}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Total Budget</p>
                    <p className="font-semibold text-yellow-800">{currentDestination.fees.total}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="btn-primary bg-yellow-600 text-white hover:bg-yellow-700 inline-flex items-center gap-2"
              >
                Interested? Talk to Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
