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
  Clock,
  Users,
} from "lucide-react"

// Data from the brochure - page 3
const whyStudyUK = [
  {
    icon: <Award className="w-6 h-6 text-purple-800" />,
    title: "World-Class Education",
    description: "Home to world's oldest universities with rich academic heritage",
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-800" />,
    title: "Shorter Duration",
    description: "1-year Master's programs and 3-year Bachelor's degrees",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-800" />,
    title: "Post-Study Work Visa",
    description: "2-year Graduate Route visa for international students",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-800" />,
    title: "Research Excellence",
    description: "Leading research facilities and innovation hubs",
  },
]

// Universities with internship (carousel universities)
const featuredUniversities = [
  { name: "London South Bank University", location: "London" },
  { name: "University of East London", location: "London" },
  { name: "University of Greenwich", location: "London" },
  { name: "University of Bedfordshire", location: "Bedfordshire" },
  { name: "University of Coventry", location: "Coventry" },
  { name: "University of Hertfordshire", location: "Hertfordshire" },
  { name: "University of Leeds", location: "Leeds" },
  { name: "University of Essex", location: "Essex" },
  { name: "Kings College London", location: "London" },
  { name: "University of Central Lancashire", location: "Preston" },
  { name: "Northumbria University", location: "Newcastle" },
  { name: "Queen Mary University", location: "London" },
  { name: "Oxford Brookes University", location: "Oxford" },
  { name: "University of West London", location: "London" },
  { name: "Middlesex University", location: "London" },
  { name: "BPP University", location: "London" },
  { name: "De Montfort University", location: "Leicester" },
  { name: "Ulster University Birmingham Branch", location: "Birmingham" },
  { name: "St. Mary's University London", location: "London" },
  { name: "University of Law", location: "London" },
  { name: "Anglia Ruskin University", location: "Cambridge" },
  { name: "Heriot-Watt University", location: "Edinburgh" },
  { name: "Nottingham Trent University", location: "Nottingham" },
  { name: "Teesside University", location: "Middlesbrough" },
  { name: "York St John University", location: "York" },
]

// All universities (carousel + additional universities)
const allUniversities = [
  // Featured universities (with internship)
  ...featuredUniversities,

  // Additional universities
  { name: "Aberdeen University", location: "Aberdeen" },
  { name: "Aston University", location: "Birmingham" },
  { name: "Bath Spa University", location: "Bath" },
  { name: "Birkbeck University of London", location: "London" },
  { name: "Birmingham City University", location: "Birmingham" },
  { name: "Bolton University", location: "Bolton" },
  { name: "Bournemouth University", location: "Bournemouth" },
  { name: "Bradford University", location: "Bradford" },
  { name: "Brighton University", location: "Brighton" },
  { name: "Bristol University", location: "Bristol" },
  { name: "Brunel University", location: "London" },
  { name: "Buckingham University", location: "Buckingham" },
  { name: "Cardiff Metropolitan University", location: "Cardiff" },
  { name: "City University", location: "London" },
  { name: "Canfield University", location: "Sheffield" },
  { name: "Cambridge Education Group", location: "Cambridge" },
  { name: "Durham University", location: "Durham" },
  { name: "Dundee University", location: "Dundee" },
  { name: "East Anglia University", location: "Norwich" },
  { name: "Edinburgh Business School", location: "Edinburgh" },
  { name: "Edinburgh Napier University", location: "Edinburgh" },
  { name: "Edinburgh University", location: "Edinburgh" },
  { name: "Exeter University", location: "Exeter" },
  { name: "Glasgow University", location: "Glasgow" },
  { name: "Glasgow Caledonian University", location: "Glasgow" },
  { name: "Gloucestershire University", location: "Gloucester" },
  { name: "Huddersfield University", location: "Huddersfield" },
  { name: "Salford University", location: "Manchester" },
  { name: "Hull University", location: "Hull" },
  { name: "Sheffield Hallam University", location: "Sheffield" },
  { name: "Kaplan (All Centers)", location: "Multiple Locations" },
  { name: "Sheffield University", location: "Sheffield" },
  { name: "Kent University", location: "Canterbury" },
  { name: "Southampton Solent University", location: "Southampton" },
  { name: "King's College London", location: "London" },
  { name: "Southampton University", location: "Southampton" },
  { name: "Kingston University", location: "Kingston upon Thames" },
  { name: "Staffordshire University", location: "Stoke-on-Trent" },
  { name: "Lancaster University", location: "Lancaster" },
  { name: "Sterling University", location: "Stirling" },
  { name: "Leicester University", location: "Leicester" },
  { name: "Strathclyde University", location: "Glasgow" },
  { name: "Lincoln University", location: "Lincoln" },
  { name: "Sunderland University", location: "Sunderland" },
  { name: "Liverpool Hope University", location: "Liverpool" },
  { name: "Sunderland University (London Campus)", location: "London" },
  { name: "Liverpool University", location: "Liverpool" },
  { name: "Surrey University", location: "Guildford" },
  { name: "Liverpool John Moore University", location: "Liverpool" },
  { name: "Sussex University", location: "Brighton" },
  { name: "Liverpool University (London Campus)", location: "London" },
  { name: "Swansea University of Wales", location: "Swansea" },
  { name: "London Metropolitan University", location: "London" },
  { name: "University of Roehampton London", location: "London" },
  { name: "Loughborough University", location: "Loughborough" },
  { name: "University of Derby", location: "Derby" },
  { name: "Manchester Metropolitan University", location: "Manchester" },
  { name: "University of Worcester", location: "Worcester" },
  { name: "Newcastle University", location: "Newcastle" },
  { name: "University of Bangor", location: "Bangor" },
  { name: "Northampton University", location: "Northampton" },
  { name: "Ulster University Coleraine Campus", location: "Coleraine" },
  { name: "Plymouth University", location: "Plymouth" },
  { name: "University College Birmingham", location: "Birmingham" },
  { name: "Portsmouth University", location: "Portsmouth" },
  { name: "University of South Wales", location: "Cardiff" },
  { name: "Queen Margaret University", location: "Edinburgh" },
  { name: "University of Suffolk", location: "Ipswich" },
  { name: "Queen's University Belfast", location: "Belfast" },
  { name: "University of West of Scotland", location: "Paisley" },
  { name: "Reading University", location: "Reading" },
  { name: "West of England University (Bristol)", location: "Bristol" },
  { name: "Regents University London", location: "London" },
  { name: "Westminster University", location: "London" },
  { name: "Robert Gordon University", location: "Aberdeen" },
  { name: "Worcester University", location: "Worcester" },
  { name: "Royal Holloway University of London", location: "London" },
  { name: "York University", location: "York" },
]

const programs = [
  {
    title: "Business & Management",
    icon: <Building className="w-8 h-8" />,
    overview: "World-renowned business programs with strong industry connections and global recognition.",
    universities: [
      "Kings College London",
      "Queen Mary University",
      "University of Leeds",
      "London South Bank University",
      "BPP University",
      "University of Law",
    ],
    courses: [
      "MBA",
      "Business Administration",
      "International Business",
      "Finance",
      "Marketing",
      "Management",
      "Entrepreneurship",
      "Business Analytics",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Engineering & Technology",
    icon: <Award className="w-8 h-8" />,
    overview: "Cutting-edge engineering programs with world-class research facilities and industry partnerships.",
    universities: [
      "University of Leeds",
      "Northumbria University",
      "University of Greenwich",
      "University of Hertfordshire",
      "Teesside University",
      "University of Coventry",
    ],
    courses: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Computer Science",
      "Aerospace Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Software Engineering",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Medicine & Life Sciences",
    icon: <Users className="w-8 h-8" />,
    overview: "Prestigious medical and life sciences programs with excellent clinical training opportunities.",
    universities: [
      "Kings College London",
      "Queen Mary University",
      "University of Greenwich",
      "St. Mary's University London",
      "Anglia Ruskin University",
      "University of Bedfordshire",
    ],
    courses: [
      "Medicine",
      "Biomedical Sciences",
      "Pharmacy",
      "Dentistry",
      "Veterinary Medicine",
      "Public Health",
      "Biotechnology",
      "Neuroscience",
    ],
    color: "from-green-500 to-green-600",
  },
]

const processSteps = [
  { step: 1, title: "Document Preparation", icon: <FileText className="w-6 h-6" /> },
  { step: 2, title: "University Application", icon: <Calendar className="w-6 h-6" /> },
  { step: 3, title: "Offer Letter", icon: <Award className="w-6 h-6" /> },
  { step: 4, title: "CAS Statement", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 5, title: "Financial Documentation", icon: <DollarSign className="w-6 h-6" /> },
  { step: 6, title: "Visa Application", icon: <Plane className="w-6 h-6" /> },
  { step: 7, title: "Visa Interview", icon: <Users className="w-6 h-6" /> },
  { step: 8, title: "Visa Grant", icon: <CheckCircle className="w-6 h-6" /> },
  { step: 9, title: "Pre-Departure", icon: <Plane className="w-6 h-6" /> },
  { step: 10, title: "University Enrollment", icon: <GraduationCap className="w-6 h-6" /> },
]

const admissionChecklist = [
  "Education Documents (10 + 12 + Bachelor + PG) - Whatever Applicable",
  "Degree Certificate",
  "IELTS/TOEFL Test Score Sheet",
  "Detailed and Updated CV",
  "Work Experience Document (If applicable)",
  "Statement of Purpose",
  "Two Letters of Recommendations",
  "Portfolio (for creative courses)",
]

export default function StudyInUnitedKingdom() {
  const [showUniversitiesModal, setShowUniversitiesModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [showCoursesModal, setShowCoursesModal] = useState(false)
  const [showPartnerUniversitiesModal, setShowPartnerUniversitiesModal] = useState(false)
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
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredUniversities.length / 4))
    }, 3000) // Auto-scroll every 3 seconds

    // Auto-advance for why study cards (mobile)
    const whyInterval = setInterval(() => {
      setCurrentWhySlide((prev) => (prev + 1) % whyStudyUK.length)
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

  // Filter universities based on search term
  const filteredUniversities = allUniversities.filter(
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
            <span className="hero-title-2 block text-purple-800 font-black">United Kingdom</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-purple-800 text-white hover:bg-purple-900">
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
              className="btn-primary bg-white text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white"
            >
              Explore Universities
            </button>
            <button
              onClick={scrollToPrograms}
              className="btn-primary bg-white text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Why Study in UK - Mobile Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyStudyUK.map((reason, index) => (
              <article key={index} className="why-choose-card card p-6 text-center h-full group">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-all duration-300 group-hover:scale-110 icon-container">
                  <div className="text-purple-700 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-800 transition-colors duration-300">
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
                  <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-700">{whyStudyUK[currentWhySlide].icon}</div>
                  </div>
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">{whyStudyUK[currentWhySlide].title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{whyStudyUK[currentWhySlide].description}</p>
                </article>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {whyStudyUK.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentWhySlide ? "bg-purple-800" : "bg-gray-300"
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
                Universities with <span className="text-purple-800">Internship</span>
              </h2>
              <p className="section-subtitle animate-on-scroll">Practical experience with your studies</p>
            </div>
            <button
              onClick={() => setShowUniversitiesModal(true)}
              className="btn-primary bg-purple-800 hover:bg-purple-900"
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
                {Array.from({ length: Math.ceil(featuredUniversities.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {featuredUniversities.slice(slideIndex * 4, slideIndex * 4 + 4).map((university, index) => (
                        <div
                          key={index}
                          className="bg-purple-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-white"
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
              Popular <span className="text-purple-800">Programs</span>
            </h2>
            <p className="section-subtitle animate-on-scroll text-gray-400">
              Explore our comprehensive program offerings
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 stagger-children">
            {programs.map((program, index) => (
              <div key={index} className="group relative">
                <div className="card p-8 h-full bg-gray-800 border border-gray-700 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-800/20 rounded-lg backdrop-blur-sm text-purple-700">
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
                      className="w-full btn-primary bg-purple-800 hover:bg-purple-900 text-white"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Available Courses
                    </button>

                    <button
                      onClick={() => {
                        setSelectedProgram(program)
                        setShowPartnerUniversitiesModal(true)
                      }}
                      className="w-full btn-outline border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-purple-700"
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Partner Universities
                    </button>

                    <Link
                      href="/contact"
                      className="w-full btn-primary bg-purple-800 hover:bg-purple-900 text-white flex items-center justify-center"
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
              Your Path to <span className="text-purple-800">United Kingdom</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Everything you need to know about the application process and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-on-scroll">
            {/* Application Process */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-800" />
                Application Process
              </h3>
              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
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
                  <div className="text-2xl font-bold text-green-600">£15,000 - £35,000</div>
                  <div className="text-xs text-green-700">Per annum (Approximate)</div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-1">Living Expenses</div>
                  <div className="text-2xl font-bold text-blue-600">£12,000 - £15,000</div>
                  <div className="text-xs text-blue-700">Per year (Outside London)</div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="font-semibold text-orange-800 mb-1">Visa Application Fee</div>
                  <div className="text-lg font-bold text-orange-600">£363</div>
                  <div className="text-xs text-orange-700">Student Visa (Tier 4)</div>
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
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-purple-800 to-purple-900">
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
                      <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-purple-800" />
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
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-purple-800 to-purple-900">
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
                  const university = allUniversities.find((u) => u.name === universityName)
                  return (
                    <div
                      key={index}
                      className="card p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-purple-800" />
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:border-purple-700 outline-none"
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
                      <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-purple-800" />
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
              Showing {filteredUniversities.length} of {allUniversities.length} universities
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
