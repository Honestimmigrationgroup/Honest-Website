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
} from "lucide-react"

// Data from the pamphlet
const whyStudyCanada = [
  {
    icon: <Award className="w-6 h-6 text-red-600" />,
    title: "World-Class Education",
    description: "Top 10 globally for education quality",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-red-600" />,
    title: "Affordable Tuition",
    description: "CAD $16,000 - $20,000 per year",
  },
  {
    icon: <Globe className="w-6 h-6 text-red-600" />,
    title: "Work Opportunities",
    description: "Post-graduation work permits available",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-red-600" />,
    title: "High Visa Success",
    description: "Nearly 100% success ratio",
  },
]

const colleges = [
  { name: "Algonquin College", location: "Ottawa" },
  { name: "Sheridan College", location: "Brampton" },
  { name: "Durham College", location: "Oshawa" },
  { name: "Fleming College", location: "Peterborough" },
  { name: "Cambrian College", location: "Sudbury" },
  { name: "Conestoga College", location: "Kitchener" },
  { name: "Fanshawe College", location: "London" },
  { name: "Humber College", location: "Toronto" },
  { name: "Lambton College", location: "Sarnia" },
  { name: "Seneca College", location: "Toronto" },
  { name: "Georgian College", location: "Barrie" },
  { name: "George Brown College", location: "Toronto" },
  { name: "Mohawk College", location: "Hamilton" },
  { name: "Centennial College", location: "Toronto" },
  { name: "St.Lawrence College", location: "Kingston" },
  { name: "St.Clair College", location: "Windsor" },
  { name: "Loyalist College", location: "Belleville" },
  { name: "Niagara College", location: "Niagara" },
  { name: "Northern College", location: "Timmins" },
  { name: "Confederation College", location: "Thunder Bay" },
]

const programs = [
  {
    title: "PG in IT/Computing",
    icon: <BookOpen className="w-8 h-8" />,
    overview: "Advanced computing programs focusing on modern technologies and industry-relevant skills.",
    colleges: [
      "Algonquin College",
      "Sheridan College",
      "Durham College",
      "Fleming College",
      "Cambrian College",
      "Conestoga College",
      "Fanshawe College",
      "Humber College",
      "Lambton College",
      "Seneca College",
      "Georgian College",
      "George Brown College",
      "Mohawk College",
    ],
    courses: [
      "Computer Programming",
      "Software Development",
      "Cybersecurity",
      "Data Analytics",
      "Web Development",
      "Mobile App Development",
      "Network Administration",
      "Database Management",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "PG in Business/Management",
    icon: <Building className="w-8 h-8" />,
    overview: "Comprehensive business programs designed to develop leadership and management skills.",
    colleges: [
      "Algonquin College",
      "Sheridan College",
      "Durham College",
      "Fleming College",
      "Cambrian College",
      "Conestoga College",
      "Fanshawe College",
      "Centennial College",
      "St.Lawrence College",
      "Humber College",
      "Lambton College",
      "Seneca College",
      "Georgian College",
      "George Brown College",
      "Mohawk College",
      "St.Clair College",
    ],
    courses: [
      "Business Administration",
      "Project Management",
      "Human Resources",
      "Marketing Management",
      "Supply Chain Management",
      "International Business",
      "Financial Planning",
      "Digital Marketing",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    title: "PG in Engineering",
    icon: <GraduationCap className="w-8 h-8" />,
    overview: "Engineering technology programs combining theoretical knowledge with practical applications.",
    colleges: [
      "Algonquin College",
      "Fleming College",
      "Cambrian College",
      "Conestoga College",
      "Fanshawe College",
      "Centennial College",
      "Lambton College",
      "Humber College",
      "Georgian College",
      "Seneca College",
      "Sheridan College",
      "George Brown College",
    ],
    courses: [
      "Civil Engineering Technology",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Environmental Engineering",
      "Project Management",
      "Health/Safety Engineering",
      "Architecture Technology",
    ],
    color: "from-purple-500 to-purple-600",
  },
]

const processSteps = [
  { step: 1, title: "Document Preparation", icon: <FileText className="w-6 h-6" /> },
  { step: 2, title: "Application Process", icon: <Calendar className="w-6 h-6" /> },
  { step: 3, title: "Offer Letter", icon: <Award className="w-6 h-6" /> },
  { step: 4, title: "Medical Examination", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 5, title: "GIC Account Opening", icon: <DollarSign className="w-6 h-6" /> },
  { step: 6, title: "Visa Application", icon: <Plane className="w-6 h-6" /> },
  { step: 7, title: "Visa Grant", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 8, title: "Pre-Departure", icon: <Plane className="w-6 h-6" /> },
  { step: 9, title: "College Enrollment", icon: <GraduationCap className="w-6 h-6" /> },
]

const admissionChecklist = [
  "Education Documents (10 + 12 + Bachelor + PG) - Whatever Applicable",
  "Degree Certificate",
  "IELTS Test Score Sheet",
  "Detailed and Updated CV",
  "Work Experience Document (If applicable)",
  "Statement of Purpose",
  "Two Letters of Recommendations",
]

export default function StudyInCanada() {
  const [showCollegesModal, setShowCollegesModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [showCoursesModal, setShowCoursesModal] = useState(false)
  const [showPartnerCollegesModal, setShowPartnerCollegesModal] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(null)
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
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(colleges.length / 4))
    }, 3000) // Auto-scroll every 3 seconds

    // Auto-advance for why study cards (mobile)
    const whyInterval = setInterval(() => {
      setCurrentWhySlide((prev) => (prev + 1) % whyStudyCanada.length)
    }, 3000) // Change card every 3 seconds

    return () => {
      clearInterval(interval)
      clearInterval(whyInterval)
    }
  }, [])

  const scrollToPrograms = () => {
    const programsSection = document.getElementById("programs")
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Filter colleges based on search term
  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 section-padding" style={{ padding: "80px 0" }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="hero-title-responsive font-bold mb-12">
            <span className="hero-title-1 block text-gray-800">Study in</span>
            <span className="hero-title-2 block text-red-600 font-black">Canada</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-red-600 text-white hover:bg-red-700">
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
              className="btn-primary bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
            >
              Explore Universities
            </button>
            <button
              onClick={scrollToPrograms}
              className="btn-primary bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Why Study in Canada - Mobile Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyStudyCanada.map((reason, index) => (
              <article key={index} className="why-choose-card card p-6 text-center h-full group">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-all duration-300 group-hover:scale-110 icon-container">
                  <div className="text-red-500 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
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
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-red-500">{whyStudyCanada[currentWhySlide].icon}</div>
                  </div>
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">{whyStudyCanada[currentWhySlide].title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{whyStudyCanada[currentWhySlide].description}</p>
                </article>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {whyStudyCanada.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentWhySlide ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Colleges Carousel */}
      <section id="universities" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="section-title animate-on-scroll">
                Our <span className="text-red-600">Partner Colleges</span>
              </h2>
              <p className="section-subtitle animate-on-scroll">Top-ranked institutions across Canada</p>
            </div>
            <button onClick={() => setShowCollegesModal(true)} className="btn-primary bg-red-600 hover:bg-red-700">
              View All Colleges
            </button>
          </div>

          <div className="relative animate-on-scroll">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(colleges.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {colleges.slice(slideIndex * 4, slideIndex * 4 + 4).map((college, index) => (
                        <div
                          key={index}
                          className="bg-red-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-white"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-white text-sm">{college.name}</h3>
                              <p className="text-xs text-white/80 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {college.location}
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
              Popular <span className="text-red-600">Programs</span>
            </h2>
            <p className="section-subtitle animate-on-scroll text-gray-400">
              Explore our comprehensive program offerings
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 stagger-children">
            {programs.map((program, index) => (
              <div key={index} className="group relative">
                <div className="card p-8 h-full bg-gray-800 border border-gray-700 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-600/20 rounded-lg backdrop-blur-sm text-red-500">{program.icon}</div>
                    <h3 className="text-xl font-bold">{program.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6">{program.overview}</p>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setSelectedProgram(program)
                        setShowCoursesModal(true)
                      }}
                      className="w-full btn-primary bg-red-600 hover:bg-red-700 text-white"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Available Courses
                    </button>

                    <button
                      onClick={() => {
                        setSelectedProgram(program)
                        setShowPartnerCollegesModal(true)
                      }}
                      className="w-full btn-outline border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-red-500"
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Partner Colleges
                    </button>

                    <Link
                      href="/contact"
                      className="w-full btn-primary bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
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
      </section>

      {/* Combined Process, Admission & Financial Requirements */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title animate-on-scroll">
              Your Path to <span className="text-red-600">Canada</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Everything you need to know about the application process and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll">
            {/* Application Process */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-red-600" />
                Application Process
              </h3>
              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
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
                  <div className="text-2xl font-bold text-green-600">CAD $16,000 - $20,000</div>
                  <div className="text-xs text-green-700">Per annum (Approximate)</div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-1">GIC Requirement</div>
                  <div className="text-2xl font-bold text-blue-600">CAD $20,635</div>
                  <div className="text-xs text-blue-700">Guaranteed Investment Certificate</div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="font-semibold text-orange-800 mb-1">Living Expenses</div>
                  <div className="text-lg font-bold text-orange-600">CAD $12,000 - $15,000</div>
                  <div className="text-xs text-orange-700">Per year (Estimated)</div>
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
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-red-600 to-red-700">
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
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-red-600" />
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

      {/* Partner Colleges Modal */}
      {showPartnerCollegesModal && selectedProgram && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-red-600 to-red-700">
              <h3 className="text-2xl font-bold text-white">{selectedProgram.title} - Partner Colleges</h3>
              <button
                onClick={() => setShowPartnerCollegesModal(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-3">
                {selectedProgram.colleges.map((collegeName, index) => {
                  const college = colleges.find((c) => c.name === collegeName)
                  return (
                    <div
                      key={index}
                      className="card p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{collegeName}</h4>
                          {college && (
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {college.location}
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

      {/* Colleges Modal - List View with Search */}
      {showCollegesModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">All Partner Colleges</h3>
              <button
                onClick={() => setShowCollegesModal(false)}
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
                  placeholder="Search colleges by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                />
              </div>
            </div>

            {/* List View */}
            <div className="overflow-y-auto max-h-[50vh]">
              {filteredColleges.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {filteredColleges.map((college, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{college.name}</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {college.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No colleges found matching your search.</p>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="p-4 border-t bg-gray-50 text-sm text-gray-600">
              Showing {filteredColleges.length} of {colleges.length} colleges
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
