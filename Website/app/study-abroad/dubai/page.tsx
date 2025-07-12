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
  Sun,
} from "lucide-react"

// Data for Dubai/UAE
const whyStudyDubai = [
  {
    icon: <Award className="w-6 h-6 text-green-600" />,
    title: "Global Business Hub",
    description: "Study in one of the world's leading business and financial centers",
  },
  {
    icon: <Globe className="w-6 h-6 text-green-600" />,
    title: "Tax-Free Income",
    description: "Benefit from tax-free salaries and excellent career opportunities",
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Multicultural Environment",
    description: "Experience diverse cultures with students from 200+ nationalities",
  },
  {
    icon: <Sun className="w-6 h-6 text-green-600" />,
    title: "Modern Infrastructure",
    description: "World-class universities with state-of-the-art facilities",
  },
]

const universities = [
  { name: "American University of Sharjah", location: "Sharjah" },
  { name: "United Arab Emirates University", location: "Al Ain" },
  { name: "Khalifa University", location: "Abu Dhabi" },
  { name: "American University of Dubai", location: "Dubai" },
  { name: "Heriot-Watt University Dubai", location: "Dubai" },
  { name: "Murdoch University Dubai", location: "Dubai" },
  { name: "University of Wollongong Dubai", location: "Dubai" },
  { name: "Middlesex University Dubai", location: "Dubai" },
  { name: "Curtin University Dubai", location: "Dubai" },
  { name: "SP Jain School of Global Management", location: "Dubai" },
  { name: "Manipal Academy of Higher Education", location: "Dubai" },
  { name: "Amity University Dubai", location: "Dubai" },
  { name: "Canadian University Dubai", location: "Dubai" },
  { name: "Emirates Aviation University", location: "Dubai" },
  { name: "Zayed University", location: "Dubai" },
  { name: "University of Dubai", location: "Dubai" },
]

const programs = [
  {
    title: "Business & Management",
    icon: <Building className="w-8 h-8" />,
    overview: "World-class business programs with focus on international markets and entrepreneurship.",
    universities: [
      "American University of Sharjah",
      "American University of Dubai",
      "SP Jain School of Global Management",
      "Canadian University Dubai",
    ],
    courses: [
      "MBA",
      "Business Administration",
      "International Business",
      "Finance",
      "Marketing",
      "Entrepreneurship",
      "Supply Chain Management",
      "Digital Marketing",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Engineering & Technology",
    icon: <Award className="w-8 h-8" />,
    overview: "Cutting-edge engineering programs with industry partnerships and modern laboratories.",
    universities: [
      "Khalifa University",
      "American University of Sharjah",
      "Heriot-Watt University Dubai",
      "Curtin University Dubai",
    ],
    courses: [
      "Computer Science",
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Petroleum Engineering",
      "Aerospace Engineering",
      "Software Engineering",
      "Data Science",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Hospitality & Tourism",
    icon: <Users className="w-8 h-8" />,
    overview: "Premier hospitality programs in the world's leading tourism and business destination.",
    universities: [
      "Emirates Aviation University",
      "University of Dubai",
      "Murdoch University Dubai",
      "Middlesex University Dubai",
    ],
    courses: [
      "Hotel Management",
      "Tourism Management",
      "Event Management",
      "Culinary Arts",
      "Aviation Management",
      "Travel & Tourism",
      "Restaurant Management",
      "Hospitality Marketing",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Medicine & Healthcare",
    icon: <Sun className="w-8 h-8" />,
    overview: "Comprehensive medical programs with state-of-the-art facilities and clinical training.",
    universities: [
      "United Arab Emirates University",
      "Khalifa University",
      "American University of Sharjah",
      "University of Sharjah",
    ],
    courses: [
      "Medicine (MBBS)",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Public Health",
      "Physiotherapy",
      "Medical Laboratory Sciences",
      "Radiology Technology",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    title: "Arts & Design",
    icon: <BookOpen className="w-8 h-8" />,
    overview: "Creative programs combining traditional arts with modern digital design techniques.",
    universities: [
      "American University of Dubai",
      "Zayed University",
      "Middlesex University Dubai",
      "Heriot-Watt University Dubai",
    ],
    courses: [
      "Architecture",
      "Interior Design",
      "Fashion Design",
      "Graphic Design",
      "Media Studies",
      "Fine Arts",
      "Digital Arts",
      "Photography",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Aviation & Logistics",
    icon: <Plane className="w-8 h-8" />,
    overview: "Specialized programs in aviation and logistics, leveraging Dubai's position as a global hub.",
    universities: [
      "Emirates Aviation University",
      "American University of Sharjah",
      "Heriot-Watt University Dubai",
      "University of Wollongong Dubai",
    ],
    courses: [
      "Aviation Management",
      "Logistics & Supply Chain",
      "Airport Management",
      "Air Traffic Management",
      "Aircraft Maintenance",
      "Cargo Management",
      "Maritime Studies",
      "Transportation Planning",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
]

const processSteps = [
  { step: 1, title: "University Selection", icon: <FileText className="w-6 h-6" /> },
  { step: 2, title: "Application Submission", icon: <Calendar className="w-6 h-6" /> },
  { step: 3, title: "Receive Offer Letter", icon: <Award className="w-6 h-6" /> },
  { step: 4, title: "Student Visa Application", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 5, title: "Medical Test", icon: <DollarSign className="w-6 h-6" /> },
  { step: 6, title: "Emirates ID", icon: <Plane className="w-6 h-6" /> },
  { step: 7, title: "Visa Approval", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 8, title: "Pre-Departure", icon: <Plane className="w-6 h-6" /> },
  { step: 9, title: "University Enrollment", icon: <GraduationCap className="w-6 h-6" /> },
]

const admissionChecklist = [
  "Education Documents (10 + 12 + Bachelor + PG) - Whatever Applicable",
  "Degree Certificate",
  "IELTS/TOEFL Test Score Sheet",
  "Detailed and Updated CV",
  "Work Experience Document (If applicable)",
  "Statement of Purpose",
  "Two Letters of Recommendations",
]

export default function StudyInDubai() {
  const [showUniversitiesModal, setShowUniversitiesModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [showCoursesModal, setShowCoursesModal] = useState(false)
  const [showPartnerUniversitiesModal, setShowPartnerUniversitiesModal] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [currentWhySlide, setCurrentWhySlide] = useState(0)
  const [currentProgramSlide, setCurrentProgramSlide] = useState(0)

  // Animation on scroll
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  // Add auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(universities.length / 4))
    }, 3000) // Auto-scroll every 3 seconds

    // Auto-advance for why study cards (mobile)
    const whyInterval = setInterval(() => {
      setCurrentWhySlide((prev) => (prev + 1) % whyStudyDubai.length)
    }, 3000) // Change card every 3 seconds

    // Auto-advance for programs carousel
    const programInterval = setInterval(() => {
      setCurrentProgramSlide((prev) => (prev + 1) % Math.ceil(programs.length / 3))
    }, 4000) // Change programs every 4 seconds

    return () => {
      clearInterval(interval)
      clearInterval(whyInterval)
      clearInterval(programInterval)
    }
  }, [])

  const scrollToPrograms = () => {
    const programsSection = document.getElementById("programs")
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" })
    }
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
      <section className="relative bg-white text-gray-800 section-padding" style={{ padding: "80px 0" }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="hero-title-responsive font-bold mb-12">
            <span className="hero-title-1 block text-gray-800">Study in</span>
            <span className="hero-title-2 block text-green-600 font-black">Dubai</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-green-600 text-white hover:bg-green-700">
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
              className="btn-primary bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
            >
              Explore Universities
            </button>
            <button
              onClick={scrollToPrograms}
              className="btn-primary bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Why Study in Dubai - Mobile Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyStudyDubai.map((reason, index) => (
              <article key={index} className="why-choose-card card p-6 text-center h-full group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-110 icon-container">
                  <div className="text-green-500 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-500">{whyStudyDubai[currentWhySlide].icon}</div>
                  </div>
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">{whyStudyDubai[currentWhySlide].title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{whyStudyDubai[currentWhySlide].description}</p>
                </article>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {whyStudyDubai.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentWhySlide ? "bg-green-600" : "bg-gray-300"
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
                Top <span className="text-green-600">Universities</span>
              </h2>
              <p className="section-subtitle animate-on-scroll">UAE's leading institutes</p>
            </div>
            <button
              onClick={() => setShowUniversitiesModal(true)}
              className="btn-primary bg-green-600 hover:bg-green-700"
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
                          className="bg-green-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-white"
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
              Popular <span className="text-green-600">Programs</span>
            </h2>
            <p className="section-subtitle animate-on-scroll text-gray-400">
              Explore our comprehensive program offerings
            </p>
          </div>

          <div className="relative animate-on-scroll">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProgramSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(programs.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {programs.slice(slideIndex * 3, slideIndex * 3 + 3).map((program, index) => (
                        <div key={index} className="group relative">
                          <div className="card p-8 h-full bg-gray-800 border border-gray-700 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="p-3 bg-green-600/20 rounded-lg backdrop-blur-sm text-green-500">
                                {program.icon}
                              </div>
                              <h3 className="text-xl font-bold">{program.title}</h3>
                            </div>

                            <p className="text-gray-300 mb-6">{program.overview}</p>

                            <div className="space-y-3">
                              <button
                                onClick={() => {
                                  setSelectedProgram(program)
                                  setShowCoursesModal(true)
                                }}
                                className="w-full btn-primary bg-green-600 hover:bg-green-700 text-white"
                              >
                                <BookOpen className="w-4 h-4 mr-2" />
                                Available Courses
                              </button>

                              <button
                                onClick={() => {
                                  setSelectedProgram(program)
                                  setShowPartnerUniversitiesModal(true)
                                }}
                                className="w-full btn-outline border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-green-500"
                              >
                                <Building className="w-4 h-4 mr-2" />
                                Partner Universities
                              </button>

                              <Link
                                href="/contact"
                                className="w-full btn-primary bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
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
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              {Array.from({ length: Math.ceil(programs.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProgramSlide(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === currentProgramSlide
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {index + 1}
                </button>
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
              Your Path to <span className="text-green-600">Dubai</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Everything you need to know about the application process and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll">
            {/* Application Process */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-green-600" />
                Application Process
              </h3>
              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
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
                <CheckCircle className="w-6 h-6 text-green-600" />
                Document Checklist
              </h3>
              <div className="space-y-3">
                {admissionChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
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
                <DollarSign className="w-6 h-6 text-green-600" />
                Financial Requirements
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-semibold text-green-800 mb-1">Tuition Fees</div>
                  <div className="text-2xl font-bold text-green-600">AED 30,000 - 80,000</div>
                  <div className="text-xs text-green-700">Per annum (Approximate)</div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-1">Living Expenses</div>
                  <div className="text-2xl font-bold text-blue-600">AED 25,000 - 40,000</div>
                  <div className="text-xs text-blue-700">Per year (Estimated)</div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="font-semibold text-orange-800 mb-1">Visa Application Fee</div>
                  <div className="text-lg font-bold text-orange-600">AED 3,000</div>
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
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-green-600 to-green-700">
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
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-green-600" />
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
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-green-600 to-green-700">
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
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-green-600" />
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
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
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-green-600" />
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
