"use client"

import React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  MapPin,
  GraduationCap,
  DollarSign,
  CheckCircle,
  Award,
  Globe,
  FileText,
  Calendar,
  Plane,
  Building,
  BookOpen,
  ArrowRight,
  X,
  Search,
  Users,
} from "lucide-react"

// Data from the brochure
const whyStudyNewZealand = [
  {
    icon: <Award className="w-6 h-6 text-gray-800" />,
    title: "World-Class Education",
    description: "Globally ranked universities with excellent facilities",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-gray-800" />,
    title: "Affordable Tuition",
    description: "Competitive tuition fees compared to other destinations",
  },
  {
    icon: <Globe className="w-6 h-6 text-gray-800" />,
    title: "Work Opportunities",
    description: "Post-study work options and pathways to residency",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-gray-800" />,
    title: "Safe Environment",
    description: "A safe and welcoming environment for international students",
  },
]

const universities = [
  { name: "University of Auckland", location: "Auckland" },
  { name: "Auckland University of Technology", location: "Auckland" },
  { name: "University of Waikato", location: "Hamilton" },
  { name: "Massey University", location: "Palmerston North" },
  { name: "Victoria University of Wellington", location: "Wellington" },
  { name: "University of Canterbury", location: "Christchurch" },
  { name: "Lincoln University", location: "Lincoln" },
  { name: "University of Otago", location: "Dunedin" },
  { name: "Unitec Institute of Technology", location: "Auckland" },
  { name: "Manukau Institute of Technology", location: "Auckland" },
  { name: "Otago Polytechnic", location: "Dunedin" },
  { name: "Southern Institute of Technology", location: "Invercargill" },
  { name: "Christchurch Polytechnic Institute of Technology", location: "Christchurch" },
  { name: "Wellington Institute of Technology", location: "Wellington" },
  { name: "Waikato Institute of Technology", location: "Hamilton" },
  { name: "Bay of Plenty Polytechnic", location: "Tauranga" },
  { name: "Eastern Institute of Technology", location: "Napier" },
  { name: "Nelson Marlborough Institute of Technology", location: "Nelson" },
  { name: "Northland Polytechnic", location: "Whangarei" },
  { name: "Tairawhiti Polytechnic", location: "Gisborne" },
  { name: "Universal College of Learning", location: "Palmerston North" },
  { name: "Whitireia Community Polytechnic", location: "Porirua" },
  { name: "Western Institute of Technology at Taranaki", location: "New Plymouth" },
  { name: "Aoraki Polytechnic", location: "Timaru" },
]

const programs = [
  {
    title: "Engineering & Technology",
    icon: <BookOpen className="w-8 h-8" />,
    overview: "Comprehensive IT programs covering modern technologies, AI, and software engineering.",
    universities: ["University of Auckland", "University of Otago", "Victoria University of Wellington"],
    courses: [
      "Computer Science",
      "Information Technology",
      "Software Engineering",
      "Data Science",
      "Cybersecurity",
      "Artificial Intelligence",
      "Machine Learning",
      "Information Systems",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Business & Management",
    icon: <Building className="w-8 h-8" />,
    overview: "World-class engineering programs with cutting-edge research facilities and industry partnerships.",
    universities: ["University of Auckland", "University of Canterbury", "Massey University", "University of Waikato"],
    courses: [
      "MBA",
      "Business Administration",
      "Finance",
      "Marketing",
      "International Business",
      "Supply Chain Management",
      "Entrepreneurship",
      "Business Analytics",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    title: "Agriculture & Environmental Sciences",
    icon: <Users className="w-8 h-8" />,
    overview: "Comprehensive business programs designed to develop future leaders and entrepreneurs.",
    universities: [
      "Lincoln University",
      "Massey University",
      "University of Waikato",
      "Auckland University of Technology",
    ],
    courses: [
      "Agriculture",
      "Environmental Science",
      "Horticulture",
      "Viticulture",
      "Sustainable Development",
      "Ecology",
      "Conservation",
      "Marine Biology",
    ],
    color: "from-blue-600 to-red-500",
  },
]

const processSteps = [
  { step: 1, title: "Register with Us", icon: <FileText className="w-6 h-6" /> },
  { step: 2, title: "University Shortlisting", icon: <Calendar className="w-6 h-6" /> },
  { step: 3, title: "Application Submission", icon: <Award className="w-6 h-6" /> },
  { step: 4, title: "Receive Offer Letter", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 5, title: "Visa Application", icon: <DollarSign className="w-6 h-6" /> },
  { step: 6, title: "Visa Interview", icon: <Plane className="w-6 h-6" /> },
  { step: 7, title: "Visa Approval", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 8, title: "Pre-Departure", icon: <Plane className="w-6 h-6" /> },
  { step: 9, title: "University Enrollment", icon: <GraduationCap className="w-6 h-6" /> },
]

const admissionChecklist = [
  "Education Documents (10 + 12 + Bachelor + PG) - Whatever Applicable",
  "Degree Certificate",
  "IELTS/TOEFL/PTE Test Score Sheet",
  "Detailed and Updated CV",
  "Work Experience Document (If applicable)",
  "Statement of Purpose",
  "Two Letters of Recommendations",
]

export default function StudyInNewZealand() {
  const [showUniversitiesModal, setShowUniversitiesModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [showCoursesModal, setShowCoursesModal] = useState(false)
  const [showPartnerUniversitiesModal, setShowPartnerUniversitiesModal] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [currentProgramSlide, setCurrentProgramSlide] = useState(0)
  const [currentUniversitySlide, setCurrentUniversitySlide] = useState(0)
  const [currentWhySlide, setCurrentWhySlide] = useState(0)

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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(universities.length / 4))
    }, 3000) // Auto-scroll every 3 seconds

    const programInterval = setInterval(() => {
      setCurrentProgramSlide((prev) => (prev + 1) % Math.ceil(programs.length / 3))
    }, 4000) // Auto-scroll every 4 seconds

    // Auto-advance for why study cards (mobile)
    const whyInterval = setInterval(() => {
      setCurrentWhySlide((prev) => (prev + 1) % whyStudyNewZealand.length)
    }, 3000) // Change card every 3 seconds

    return () => {
      clearInterval(interval)
      clearInterval(programInterval)
      clearInterval(whyInterval)
    }
  }, [])

  const scrollToPrograms = () => {
    const programsSection = document.getElementById("programs")
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToUniversities = () => {
    const element = document.getElementById("universities-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextUniversitySlide = () => {
    setCurrentUniversitySlide((prev) => (prev + 1) % Math.ceil(universities.length / 3))
  }

  const prevUniversitySlide = () => {
    setCurrentUniversitySlide(
      (prev) => (prev - 1 + Math.ceil(universities.length / 3)) % Math.ceil(universities.length / 3),
    )
  }

  const nextProgramSlide = () => {
    setCurrentProgramSlide((prev) => (prev + 1) % Math.ceil(programs.length / 3))
  }

  const prevProgramSlide = () => {
    setCurrentProgramSlide((prev) => (prev - 1 + Math.ceil(programs.length / 3)) % Math.ceil(programs.length / 3))
  }

  // Filter universities based on search term
  const filteredUniversities = universities.filter(
    (university) =>
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="text-gray-900 section-padding" style={{ padding: "80px 0" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title-responsive font-bold mb-12">
            <span className="hero-title-1 block text-gray-900">Study in</span>
            <span className="hero-title-2 block text-gray-800 font-black">New Zealand</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-gray-800 text-white hover:bg-gray-900">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              onClick={() => {
                const universitiesSection = document.getElementById("universities")
                if (universitiesSection) {
                  universitiesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="btn-primary bg-white text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white"
            >
              Explore Universities
            </button>
            <button
              onClick={scrollToPrograms}
              className="btn-primary bg-white text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Why Study in New Zealand - Mobile Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyStudyNewZealand.map((reason, index) => (
              <article key={index} className="why-choose-card card p-6 text-center h-full group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-all duration-300 group-hover:scale-110 icon-container">
                  <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-800 transition-colors duration-300">
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
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-gray-600">{whyStudyNewZealand[currentWhySlide].icon}</div>
                  </div>
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">{whyStudyNewZealand[currentWhySlide].title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {whyStudyNewZealand[currentWhySlide].description}
                  </p>
                </article>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {whyStudyNewZealand.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentWhySlide ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities Carousel */}
      <section id="universities" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="section-title animate-on-scroll">
                Top <span className="text-gray-800">Universities</span>
              </h2>
              <p className="section-subtitle animate-on-scroll">New Zealand's leading institutes</p>
            </div>
            <button
              onClick={() => setShowUniversitiesModal(true)}
              className="btn-primary bg-gray-800 hover:bg-gray-900"
            >
              View All Universities
            </button>
          </div>

          <div className="relative animate-on-scroll">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(universities.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {universities.slice(slideIndex * 4, slideIndex * 4 + 4).map((university, index) => (
                        <div
                          key={index}
                          className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-white"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-white text-sm">{university.name}</h3>
                              <p className="text-xs text-white/80 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {university.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title animate-on-scroll text-white">
              Popular <span className="text-white">Programs</span>
            </h2>
            <p className="section-subtitle animate-on-scroll text-gray-400">
              Explore our comprehensive program offerings
            </p>
          </div>

          <div className="relative animate-on-scroll">
            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="group relative">
                  <div className="card p-8 h-full bg-gray-800 border border-gray-700 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-gray-800">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gray-800/20 rounded-lg backdrop-blur-sm text-gray-600">{program.icon}</div>
                      <h3 className="text-xl font-bold">{program.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6">{program.overview}</p>

                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setSelectedProgram(program)
                          setShowCoursesModal(true)
                        }}
                        className="w-full btn-primary bg-gray-800 hover:bg-gray-900 text-white"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Available Courses
                      </button>

                      <button
                        onClick={() => {
                          setSelectedProgram(program)
                          setShowPartnerUniversitiesModal(true)
                        }}
                        className="w-full btn-outline border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-800"
                      >
                        <Building className="w-4 h-4 mr-2" />
                        Partner Universities
                      </button>

                      <Link
                        href="/contact"
                        className="w-full btn-primary bg-gray-800 hover:bg-gray-900 text-white flex items-center justify-center"
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combined Process, Admission & Financial Requirements */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title animate-on-scroll">
              Your Path to <span className="text-gray-800">New Zealand</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Everything you need to know about the application process and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll">
            {/* Application Process */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-gray-800" />
                Application Process
              </h3>
              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">{step.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-gray-800" />
                Document Checklist
              </h3>
              <div className="space-y-3">
                {admissionChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <CheckCircle className="w-4 h-4 text-gray-800 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs font-medium text-yellow-800">
                  <strong>Note:</strong> All documents must be notarized.
                </p>
              </div>
            </div>

            {/* Financial Requirements */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-gray-800" />
                Financial Requirements
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-semibold text-green-800 mb-1">Tuition Fees</div>
                  <div className="text-2xl font-bold text-green-600">NZD $25,000 - $40,000</div>
                  <div className="text-xs text-green-700">Per annum (Approximate)</div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-1">Living Expenses</div>
                  <div className="text-2xl font-bold text-blue-600">NZD $15,000 - $20,000</div>
                  <div className="text-xs text-blue-700">Per year (Estimated)</div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="font-semibold text-orange-800 mb-1">Visa Application Fee</div>
                  <div className="text-lg font-bold text-orange-600">NZD $330</div>
                  <div className="text-xs text-orange-700">Student Visa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Courses Modal */}
      {showCoursesModal && selectedProgram && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-gray-800 to-gray-900">
              <h3 className="text-2xl font-bold text-white">{selectedProgram.title} - Available Courses</h3>
              <button
                onClick={() => setShowCoursesModal(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid md:grid-cols-2 gap-4">
                {selectedProgram.courses.map((course, index) => (
                  <div
                    key={index}
                    className="card p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-gray-800" />
                      </div>
                      <span className="font-medium text-gray-800">{course}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Partner Universities Modal */}
      {showPartnerUniversitiesModal && selectedProgram && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-gray-800 to-gray-900">
              <h3 className="text-2xl font-bold text-white">{selectedProgram.title} - Partner Universities</h3>
              <button
                onClick={() => setShowPartnerUniversitiesModal(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-3">
                {selectedProgram.universities.map((universityName, index) => {
                  const university = universities.find((u) => u.name === universityName)
                  return (
                    <div
                      key={index}
                      className="card p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-gray-800" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{universityName}</h4>
                          {university && (
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {university.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Universities Modal - List View with Search */}
      {showUniversitiesModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">All Partner Universities</h3>
              <button
                onClick={() => setShowUniversitiesModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none"
                />
              </div>
            </div>

            {/* List View */}
            <div className="overflow-y-auto max-h-[50vh]">
              {filteredUniversities.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {filteredUniversities.map((university, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{university.name}</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {university.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No universities found matching your search.</p>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="p-4 border-t bg-gray-50 text-sm text-gray-600">
              Showing {filteredUniversities.length} of {universities.length} universities
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
