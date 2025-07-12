"use client"

import React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  GraduationCap,
  MapPin,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Globe,
  Star,
  CheckCircle,
  FileText,
  Calendar,
  Plane,
  Building,
  DollarSign,
  X,
  Search,
} from "lucide-react"

// Data from the brochure
const whyStudyUSA = [
  {
    icon: <Star className="w-6 h-6 text-blue-600" />,
    title: "Most Prestigious Universities",
    description: "Home to world's top-ranked universities in global rankings",
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Highest Scholarships Available",
    description: "Extensive scholarship opportunities for international students",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Flexible Admission & Curriculum",
    description: "Diverse admission pathways and flexible curriculum options",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "12-36 Months Work Visa",
    description: "Post-graduation work opportunities with OPT programs",
  },
]

const universities = [
  // California
  { name: "UC Berkeley", location: "California" },
  { name: "Stanford University", location: "California" },
  { name: "University of Southern California", location: "California" },
  { name: "UC Davis", location: "California" },
  { name: "UC Riverside", location: "California" },
  { name: "UC Los Angeles", location: "California" },
  { name: "UC San Diego", location: "California" },
  { name: "UC Irvine", location: "California" },
  { name: "San Diego State University", location: "California" },
  { name: "CSU Long Beach", location: "California" },
  { name: "CSU East Bay", location: "California" },
  { name: "CSU San Bernardino", location: "California" },
  { name: "CSU Sacramento", location: "California" },
  { name: "Santa Clara University", location: "California" },
  { name: "Northwestern Polytechnic University", location: "California" },

  // Texas
  { name: "University of Texas at Austin", location: "Texas" },
  { name: "Texas A&M University", location: "Texas" },
  { name: "University of Texas at Dallas", location: "Texas" },
  { name: "University of Texas at Arlington", location: "Texas" },
  { name: "University of Texas at Kingsville", location: "Texas" },
  { name: "University of North Texas", location: "Texas" },
  { name: "Texas Tech University", location: "Texas" },
  { name: "University of Houston", location: "Texas" },

  // New York
  { name: "Columbia University", location: "New York" },
  { name: "New York University", location: "New York" },
  { name: "Pace University", location: "New York" },
  { name: "Fordham University", location: "New York" },
  { name: "SUNY Buffalo", location: "New York" },
  { name: "SUNY Stony Brook", location: "New York" },
  { name: "Syracuse University", location: "New York" },
  { name: "NYIT", location: "New York" },
  { name: "SUNY Binghamton", location: "New York" },

  // Michigan
  { name: "University of Michigan - Ann Arbor", location: "Michigan" },
  { name: "University of Michigan - Dearborn", location: "Michigan" },
  { name: "University of Michigan - Flint", location: "Michigan" },
  { name: "Michigan State University", location: "Michigan" },
  { name: "Michigan Tech University", location: "Michigan" },
  { name: "Wayne State University", location: "Michigan" },
  { name: "Lawrence Technological University", location: "Michigan" },
  { name: "Ferris State University", location: "Michigan" },

  // Florida
  { name: "University of Florida", location: "Florida" },
  { name: "University of South Florida", location: "Florida" },
  { name: "Florida Institute of Technology", location: "Florida" },
  { name: "Florida International University", location: "Florida" },
  { name: "University of Central Florida", location: "Florida" },
  { name: "University of Tampa", location: "Florida" },
  { name: "Embry Riddle University", location: "Florida" },
  { name: "University of North Florida", location: "Florida" },

  // Ohio
  { name: "Ohio State University", location: "Ohio" },
  { name: "University of Cincinnati", location: "Ohio" },
  { name: "Cleveland State University", location: "Ohio" },
  { name: "University of Dayton", location: "Ohio" },
  { name: "Wright State University", location: "Ohio" },
  { name: "Kent State University", location: "Ohio" },
  { name: "Youngstown State University", location: "Ohio" },
  { name: "University of Findlay", location: "Ohio" },

  // Massachusetts
  { name: "Harvard University", location: "Massachusetts" },
  { name: "MIT", location: "Massachusetts" },
  { name: "Boston University", location: "Massachusetts" },
  { name: "Northeastern University", location: "Massachusetts" },
  { name: "University of Massachusetts", location: "Massachusetts" },
  { name: "Worcester Polytechnic Institute", location: "Massachusetts" },

  // Illinois
  { name: "University of Chicago", location: "Illinois" },
  { name: "Northwestern University", location: "Illinois" },
  { name: "University of Illinois at Chicago", location: "Illinois" },
  { name: "Illinois Institute of Technology", location: "Illinois" },
  { name: "DePaul University", location: "Illinois" },

  // Pennsylvania
  { name: "University of Pennsylvania", location: "Pennsylvania" },
  { name: "Carnegie Mellon University", location: "Pennsylvania" },
  { name: "Penn State University", location: "Pennsylvania" },
  { name: "Drexel University", location: "Pennsylvania" },
  { name: "Temple University", location: "Pennsylvania" },

  // Washington
  { name: "University of Washington", location: "Washington" },
  { name: "Washington State University", location: "Washington" },
  { name: "Seattle University", location: "Washington" },

  // Georgia
  { name: "Georgia Institute of Technology", location: "Georgia" },
  { name: "University of Georgia", location: "Georgia" },
  { name: "Georgia State University", location: "Georgia" },

  // North Carolina
  { name: "Duke University", location: "North Carolina" },
  { name: "University of North Carolina", location: "North Carolina" },
  { name: "NC State University", location: "North Carolina" },

  // Virginia
  { name: "University of Virginia", location: "Virginia" },
  { name: "Virginia Tech", location: "Virginia" },
  { name: "George Mason University", location: "Virginia" },

  // Arizona
  { name: "Arizona State University", location: "Arizona" },
  { name: "University of Arizona", location: "Arizona" },

  // Colorado
  { name: "University of Colorado Boulder", location: "Colorado" },
  { name: "Colorado State University", location: "Colorado" },

  // Maryland
  { name: "University of Maryland", location: "Maryland" },
  { name: "Johns Hopkins University", location: "Maryland" },

  // Minnesota
  { name: "University of Minnesota", location: "Minnesota" },

  // Wisconsin
  { name: "University of Wisconsin-Madison", location: "Wisconsin" },

  // Indiana
  { name: "Purdue University", location: "Indiana" },
  { name: "Indiana University", location: "Indiana" },

  // Tennessee
  { name: "Vanderbilt University", location: "Tennessee" },
  { name: "University of Tennessee", location: "Tennessee" },

  // Missouri
  { name: "Washington University in St. Louis", location: "Missouri" },
  { name: "University of Missouri", location: "Missouri" },
]

const programs = [
  {
    title: "Computer Science & IT",
    icon: <BookOpen className="w-8 h-8" />,
    overview: "Comprehensive IT programs covering modern technologies, AI, and software engineering.",
    universities: [
      "UC Berkeley",
      "Stanford University",
      "University of Southern California",
      "University of Texas at Austin",
      "Columbia University",
      "New York University",
    ],
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
    title: "Engineering",
    icon: <Building className="w-8 h-8" />,
    overview: "World-class engineering programs with cutting-edge research facilities and industry partnerships.",
    universities: [
      "UC Berkeley",
      "Stanford University",
      "University of Texas at Austin",
      "Texas A&M University",
      "University of Michigan - Ann Arbor",
      "Michigan Tech University",
    ],
    courses: [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Biomedical Engineering",
      "Environmental Engineering",
      "Industrial Engineering",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    title: "Business & Management",
    icon: <Users className="w-8 h-8" />,
    overview: "Comprehensive business programs designed to develop future leaders and entrepreneurs.",
    universities: [
      "Stanford University",
      "University of Southern California",
      "Columbia University",
      "New York University",
      "University of Texas at Austin",
      "University of Michigan - Ann Arbor",
    ],
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
    color: "from-blue-600 to-red-500",
  },
]

const processSteps = [
  { step: 1, title: "Register with Us", icon: <FileText className="w-6 h-6" /> },
  { step: 2, title: "University Shortlisting", icon: <Calendar className="w-6 h-6" /> },
  { step: 3, title: "Application Submission", icon: <Award className="w-6 h-6" /> },
  { step: 4, title: "Receive I-20", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 5, title: "Visa Application", icon: <DollarSign className="w-6 h-6" /> },
  { step: 6, title: "Visa Interview", icon: <Plane className="w-6 h-6" /> },
  { step: 7, title: "Visa Approval", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 8, title: "Pre-Departure", icon: <Plane className="w-6 h-6" /> },
  { step: 9, title: "University Enrollment", icon: <GraduationCap className="w-6 h-6" /> },
]

const admissionChecklist = [
  "Education Documents (10 + 12 + Bachelor + PG) - Whatever Applicable",
  "Degree Certificate",
  "IELTS/TOEFL/GRE/GMAT/SAT Test Score Sheet",
  "Detailed and Updated CV",
  "Work Experience Document (If applicable)",
  "Statement of Purpose",
  "Three Letters of Recommendations",
]

export default function StudyInUSA() {
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
      setCurrentWhySlide((prev) => (prev + 1) % whyStudyUSA.length)
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
      <section className="relative bg-white text-gray-800 section-padding" style={{ padding: "80px 0" }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="hero-title-responsive font-bold mb-12">
            <span className="hero-title-1 block text-gray-800">Study in</span>
            <span className="hero-title-2 block text-blue-600 font-black">USA</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-blue-600 text-white hover:bg-blue-700">
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
              className="btn-primary bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Explore Universities
            </button>
            <button
              onClick={scrollToPrograms}
              className="btn-primary bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Why Study in USA - Mobile Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyStudyUSA.map((reason, index) => (
              <article key={index} className="why-choose-card card p-6 text-center h-full group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110 icon-container">
                  <div className="text-blue-500 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-500">{whyStudyUSA[currentWhySlide].icon}</div>
                  </div>
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">{whyStudyUSA[currentWhySlide].title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{whyStudyUSA[currentWhySlide].description}</p>
                </article>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {whyStudyUSA.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentWhySlide ? "bg-blue-600" : "bg-gray-300"
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
                Top <span className="text-blue-600">Universities</span>
              </h2>
              <p className="section-subtitle animate-on-scroll">America's leading institutes</p>
            </div>
            <button
              onClick={() => setShowUniversitiesModal(true)}
              className="btn-primary bg-blue-600 hover:bg-blue-700"
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
                          className="bg-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-white"
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
              Popular <span className="text-blue-600">Programs</span>
            </h2>
            <p className="section-subtitle animate-on-scroll text-gray-400">
              Explore our comprehensive program offerings
            </p>
          </div>

          <div className="relative animate-on-scroll">
            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="group relative">
                  <div className="card p-8 h-full bg-gray-800 border border-gray-700 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-600/20 rounded-lg backdrop-blur-sm text-blue-500">{program.icon}</div>
                      <h3 className="text-xl font-bold">{program.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6">{program.overview}</p>

                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setSelectedProgram(program)
                          setShowCoursesModal(true)
                        }}
                        className="w-full btn-primary bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Available Courses
                      </button>

                      <button
                        onClick={() => {
                          setSelectedProgram(program)
                          setShowPartnerUniversitiesModal(true)
                        }}
                        className="w-full btn-outline border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-blue-500"
                      >
                        <Building className="w-4 h-4 mr-2" />
                        Partner Universities
                      </button>

                      <Link
                        href="/contact"
                        className="w-full btn-primary bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
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
              Your Path to <span className="text-blue-600">USA</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Everything you need to know about the application process and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll">
            {/* Application Process */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                Application Process
              </h3>
              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
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
                  <div className="font-semibold text-green-800 mb-1">Application Fee</div>
                  <div className="text-2xl font-bold text-green-600">$50 - $130</div>
                  <div className="text-xs text-green-700">Per university (Approximate)</div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-1">Visa Application Fee</div>
                  <div className="text-2xl font-bold text-blue-600">$185</div>
                  <div className="text-xs text-blue-700">F-1 Student Visa</div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="font-semibold text-orange-800 mb-1">SEVIS Fee</div>
                  <div className="text-lg font-bold text-orange-600">$350</div>
                  <div className="text-xs text-orange-700">Student Exchange Visitor Information System</div>
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
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700">
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
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-blue-600" />
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
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700">
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
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
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
              <h3 className="text-2xl font-bold text-gray-800">Top Universities</h3>
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
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
