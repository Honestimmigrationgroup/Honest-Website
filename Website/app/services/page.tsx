"use client"

import React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  Globe2,
  FileCheck,
  UserCheck,
  Award,
  CreditCard,
  FileText,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Users,
  Star,
  X,
  Clock,
  DollarSign,
  Calendar,
  Target,
  MapPin,
  Phone,
  Mail,
  Building,
  TrendingUp,
  Shield,
  Banknote,
  Plane,
  Home,
  Heart,
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "Counselling",
    icon: <GraduationCap size={24} />,
    description:
      "Personalized counseling sessions to understand your goals and recommend the best educational pathways.",
    features: [
      "One-on-one sessions with expert counselors",
      "Comprehensive profile evaluation",
      "Personalized study abroad roadmap",
      "Career path guidance and planning",
    ],
  },
  {
    id: 2,
    title: "Test Preparation",
    icon: <BookOpen size={24} />,
    description: "Expert coaching for IELTS, PTE, TOEFL, SAT, GMAT, and GRE to help you achieve your target scores.",
    features: [
      "Specialized coaching for IELTS, PTE, TOEFL",
      "Preparation for SAT, GMAT, and GRE",
      "Mock tests and performance analysis",
      "Small batch sizes for personalized attention",
    ],
  },
  {
    id: 3,
    title: "University Selection",
    icon: <Globe2 size={24} />,
    description:
      "Strategic university selection based on your academic profile, career goals, and budget considerations.",
    features: [
      "Profile-based university recommendations",
      "Course and program selection guidance",
      "Budget and location considerations",
      "Ranking and accreditation analysis",
    ],
  },
  {
    id: 4,
    title: "Applications",
    icon: <FileCheck size={24} />,
    description:
      "End-to-end application assistance including SOP, LOR, resume preparation, and application submission.",
    features: [
      "Statement of Purpose (SOP) writing",
      "Letter of Recommendation (LOR) guidance",
      "Resume and CV preparation",
      "Application form completion and submission",
    ],
  },
  {
    id: 5,
    title: "Admissions",
    icon: <UserCheck size={24} />,
    description:
      "Complete admissions support including interview preparation, document verification, and enrollment guidance.",
    features: [
      "Interview preparation and mock sessions",
      "Document verification and authentication",
      "Enrollment and registration guidance",
      "Communication with university admissions",
    ],
  },
  {
    id: 6,
    title: "Scholarships",
    icon: <Award size={24} />,
    description: "Guidance on available scholarships and assistance with scholarship application process.",
    features: [
      "Scholarship research and identification",
      "Application assistance and essay writing",
      "Merit and need-based scholarship guidance",
      "Financial aid application support",
    ],
  },
  {
    id: 7,
    title: "Education Loan",
    icon: <CreditCard size={24} />,
    description: "Assistance with education loan process and documentation from partner financial institutions.",
    features: [
      "Loan eligibility assessment",
      "Documentation and paperwork assistance",
      "Bank and financial institution liaison",
      "Loan disbursement coordination",
    ],
  },
  {
    id: 8,
    title: "Visa Guidance",
    icon: <FileText size={24} />,
    description: "Complete visa guidance including documentation, application submission, and interview preparation.",
    features: [
      "Visa application form completion",
      "Document checklist and preparation",
      "Interview preparation and coaching",
      "Visa status tracking and follow-up",
    ],
  },
  {
    id: 9,
    title: "Allied Services",
    icon: <Briefcase size={24} />,
    description: "Additional services including accommodation, forex, travel insurance, and post-landing assistance.",
    features: [
      "Accommodation and housing assistance",
      "Foreign exchange and remittance",
      "Travel insurance and health coverage",
      "Pre-departure and post-arrival support",
    ],
  },
]

const whyChooseReasons = [
  {
    icon: <Users size={32} />,
    title: "Expert Team",
    description: "Experienced counselors with deep knowledge of global education",
    bgColor: "bg-blue-100",
    hoverBg: "group-hover:bg-blue-500",
    iconColor: "text-blue-500",
    hoverIconColor: "group-hover:text-white",
    titleHoverColor: "group-hover:text-blue-600",
  },
  {
    icon: <Star size={32} />,
    title: "Proven Track Record",
    description: "100% success rate with 1000+ students placed globally",
    bgColor: "bg-green-100",
    hoverBg: "group-hover:bg-green-500",
    iconColor: "text-green-500",
    hoverIconColor: "group-hover:text-white",
    titleHoverColor: "group-hover:text-green-600",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "End-to-End Support",
    description: "Complete assistance from counseling to post-arrival support",
    bgColor: "bg-purple-100",
    hoverBg: "group-hover:bg-purple-500",
    iconColor: "text-purple-500",
    hoverIconColor: "group-hover:text-white",
    titleHoverColor: "group-hover:text-purple-600",
  },
  {
    icon: <ArrowRight size={32} />,
    title: "Quick Processing",
    description: "Fast-track applications with our streamlined processes",
    bgColor: "bg-orange-100",
    hoverBg: "group-hover:bg-orange-500",
    iconColor: "text-orange-500",
    hoverIconColor: "group-hover:text-white",
    titleHoverColor: "group-hover:text-orange-600",
  },
]

// Services Carousel Component
const ServicesCarousel = () => {
  const [visibleItems, setVisibleItems] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 768) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3)
      } else if (window.innerWidth < 1280) {
        setVisibleItems(4)
      } else {
        setVisibleItems(5)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Create multiple copies for seamless infinite scroll
  const extendedServices = [...services, ...services, ...services, ...services]

  return (
    <div className="relative pb-8">
      <div className="overflow-hidden services-container">
        <div
          className="flex animate-scroll-services"
          style={{
            width: `${(extendedServices.length / visibleItems) * 100}%`,
          }}
        >
          {extendedServices.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / extendedServices.length}%` }}
            >
              <div className="card p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gray-900 text-white h-full flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3 md:mb-4 text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-lg font-bold text-white">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Mobile Why Choose Carousel
const WhyChooseMobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1 >= whyChooseReasons.length ? 0 : prevIndex + 1))
    }, 4000) // Auto-advance every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {whyChooseReasons.map((reason, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center px-8">
              <article className="why-choose-card card p-5 text-center group w-64">
                <div
                  className={`w-14 h-14 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${reason.hoverBg} transition-all duration-300 group-hover:scale-110 icon-container`}
                >
                  <div className={`${reason.iconColor} ${reason.hoverIconColor} transition-colors duration-300`}>
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className={`text-lg font-bold mb-2 ${reason.titleHoverColor} transition-colors duration-300`}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("IELTS")

  const testData = {
    IELTS: {
      fullName: "International English Language Testing System",
      description: "Designed to assess language ability for study/work where English is the language of communication",
      fee: "₹17,000",
      validity: "2 years",
      results: "13 working days (PBT & CBT) | 3-6 hours (Computer-based)",
      scoreRange: "0-9 Bands",
      authorities: "British Council & IDP",
      sections: [
        { name: "Listening", content: "40 Questions", time: "30 minutes (+ 10 min transfer)" },
        { name: "Reading", content: "40 Questions", time: "60 minutes" },
        { name: "Writing", content: "2 Tasks", time: "60 minutes" },
        { name: "Speaking", content: "3 Parts", time: "11-14 minutes" },
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
    },
    PTE: {
      fullName: "Pearson Test of English Academic",
      description:
        "The English test for study abroad and immigration, with results typically available in five business days",
      fee: "₹17,000",
      validity: "2 years",
      results: "3-5 working days",
      scoreRange: "10-90 Points",
      totalDuration: "2 hours 15 minutes",
      sections: [
        { name: "Introduction", content: "Personal Introduction", time: "Not Scored" },
        { name: "Speaking & Writing", content: "Integrated Skills", time: "54-67 minutes" },
        { name: "Reading", content: "Multiple Choice, Fill Blanks", time: "29-30 minutes" },
        { name: "Listening", content: "Summarize, MCQ, Fill Blanks", time: "30-43 minutes" },
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
    },
    TOEFL: {
      fullName: "Test of English as a Foreign Language",
      description: "Widely accepted English proficiency test for academic purposes worldwide",
      fee: "₹15,500",
      validity: "2 years",
      results: "4-8 days",
      scoreRange: "0-120 Points",
      totalDuration: "3 hours",
      sections: [
        { name: "Reading", content: "Academic Passages", time: "54-72 minutes" },
        { name: "Listening", content: "Lectures & Conversations", time: "41-57 minutes" },
        { name: "Speaking", content: "4 Tasks", time: "17 minutes" },
        { name: "Writing", content: "2 Tasks", time: "50 minutes" },
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
    },
    SAT: {
      fullName: "Scholastic Assessment Test",
      description: "Standardized test for undergraduate college admissions in the United States",
      fee: "₹5,000",
      validity: "5 years",
      results: "2-4 weeks",
      scoreRange: "400-1600",
      totalDuration: "3 hours",
      sections: [
        { name: "Reading", content: "52 Questions", time: "65 minutes" },
        { name: "Writing & Language", content: "44 Questions", time: "35 minutes" },
        { name: "Math (No Calculator)", content: "20 Questions", time: "25 minutes" },
        { name: "Math (Calculator)", content: "38 Questions", time: "55 minutes" },
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
    },
    GMAT: {
      fullName: "Graduate Management Admission Test",
      description: "Standardized test for MBA and business school admissions worldwide",
      fee: "₹23,000",
      validity: "5 years",
      results: "Immediately (unofficial)",
      scoreRange: "200-800",
      totalDuration: "3 hours 7 minutes",
      sections: [
        { name: "Analytical Writing", content: "1 Essay", time: "30 minutes" },
        { name: "Integrated Reasoning", content: "12 Questions", time: "30 minutes" },
        { name: "Quantitative", content: "31 Questions", time: "62 minutes" },
        { name: "Verbal", content: "36 Questions", time: "65 minutes" },
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500",
    },
    GRE: {
      fullName: "Graduate Record Examination",
      description: "Standardized test for graduate school admissions in various fields",
      fee: "₹18,500",
      validity: "5 years",
      results: "10-15 days",
      scoreRange: "130-170 (V&Q), 0-6 (AW)",
      totalDuration: "3 hours 45 minutes",
      sections: [
        { name: "Analytical Writing", content: "2 Tasks", time: "60 minutes" },
        { name: "Verbal Reasoning", content: "40 Questions", time: "60 minutes" },
        { name: "Quantitative Reasoning", content: "40 Questions", time: "70 minutes" },
      ],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
    },
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
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

  useEffect(() => {
    // Handle anchor links
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 100)
      }
    }
  }, [])

  // Check for service modal to open from homepage redirect
  useEffect(() => {
    const serviceToOpen = sessionStorage.getItem("openServiceModal")
    if (serviceToOpen) {
      const serviceId = Number.parseInt(serviceToOpen)
      setSelectedService(serviceId)
      sessionStorage.removeItem("openServiceModal")
    }
  }, [])

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById("comprehensive-services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentTest = testData[activeTab as keyof typeof testData]

  const renderServiceModal = () => {
    if (!selectedService) return null

    const service = services.find((s) => s.id === selectedService)
    if (!service) return null

    // Test Preparation Modal (existing)
    if (selectedService === 2) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <BookOpen size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                      Test Preparation Coaching
                    </h2>
                    <p className="text-sm sm:text-base text-orange-100">
                      Expert coaching from British Council trained faculty
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              {/* Test Tabs */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6 bg-gray-800 p-2 rounded-xl">
                  {Object.keys(testData).map((test) => (
                    <button
                      key={test}
                      onClick={() => setActiveTab(test)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        activeTab === test
                          ? `${testData[test as keyof typeof testData].bgColor} text-white shadow-lg`
                          : "text-gray-400 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      {test}
                    </button>
                  ))}
                </div>

                {/* Active Test Content */}
                <div className="bg-gray-800 rounded-2xl p-6">
                  {/* Test Header */}
                  <div className={`bg-gradient-to-r ${currentTest.color} rounded-xl p-6 mb-6`}>
                    <h4 className="text-2xl font-bold text-white mb-2">{activeTab}</h4>
                    <h5 className="text-lg text-white/90 mb-2">{currentTest.fullName}</h5>
                    <p className="text-white/80 text-sm">{currentTest.description}</p>
                  </div>

                  {/* Test Overview Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <DollarSign size={24} className="text-orange-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{currentTest.fee}</div>
                      <div className="text-xs text-gray-400">Test Fee</div>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <Calendar size={24} className="text-blue-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">{currentTest.validity}</div>
                      <div className="text-xs text-gray-400">Validity</div>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <Target size={24} className="text-green-500 mx-auto mb-2" />
                      <div className="text-sm font-bold text-white">{currentTest.scoreRange}</div>
                      <div className="text-xs text-gray-400">Score Range</div>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <Clock size={24} className="text-purple-500 mx-auto mb-2" />
                      <div className="text-sm font-bold text-white">{currentTest.results}</div>
                      <div className="text-xs text-gray-400">Results</div>
                    </div>
                  </div>

                  {/* Test Sections */}
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                      <FileText size={20} className="text-orange-500 mr-2" />
                      Test Structure
                    </h5>
                    <div className="space-y-3">
                      {currentTest.sections.map((section, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg p-4 flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-white">{section.name}</div>
                            <div className="text-sm text-gray-400">{section.content}</div>
                          </div>
                          <div className="text-orange-500 font-semibold text-sm">{section.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  {currentTest.totalDuration && (
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <Clock size={20} className="text-orange-500 mr-2" />
                        <span className="text-white font-semibold">Total Duration: </span>
                        <span className="text-orange-500 ml-1">{currentTest.totalDuration}</span>
                      </div>
                    </div>
                  )}

                  {currentTest.authorities && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <Award size={20} className="text-blue-500 mr-2" />
                        <span className="text-white font-semibold">Exam Authorities: </span>
                        <span className="text-blue-500 ml-1">{currentTest.authorities}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Section */}
                <div className="mt-6 sm:mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 sm:p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to Achieve Your Target Score?</h3>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                    Join thousands of successful students who achieved their dreams with our expert coaching
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      onClick={() => window.scrollTo(0, 0)}
                      className="bg-white text-orange-500 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                    >
                      Get Expert Guidance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Counselling Modal
    if (selectedService === 1) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                      Study Abroad Counselling
                    </h2>
                    <p className="text-sm sm:text-base text-blue-100">
                      Personalized guidance for your educational journey
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Counselling Process */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Users size={20} className="text-orange-500 mr-2" />
                    Our Counselling Process
                  </h5>
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h6 className="font-semibold text-white mb-1">Profile Assessment</h6>
                          <p className="text-gray-300 text-sm">
                            Comprehensive evaluation of your academic background, career goals, and personal preferences
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h6 className="font-semibold text-white mb-1">Goal Setting</h6>
                          <p className="text-gray-300 text-sm">
                            Define clear academic and career objectives aligned with your aspirations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h6 className="font-semibold text-white mb-1">Roadmap Creation</h6>
                          <p className="text-gray-300 text-sm">
                            Develop a personalized step-by-step plan for your study abroad journey
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <div>
                          <h6 className="font-semibold text-white mb-1">Ongoing Support</h6>
                          <p className="text-gray-300 text-sm">
                            Continuous guidance and support throughout your application process
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What We Cover */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-2" />
                    What Our Counselling Covers
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Country & University Selection</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Course & Program Guidance</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Career Path Planning</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Budget & Financial Planning</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Test Preparation Strategy</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Application Timeline</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Scholarship Opportunities</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Post-Study Work Options</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Session Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <Clock size={24} className="text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">60-90 min</div>
                    <div className="text-xs text-gray-400">Session Duration</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <Users size={24} className="text-green-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">1-on-1</div>
                    <div className="text-xs text-gray-400">Personal Attention</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <Award size={24} className="text-purple-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Expert</div>
                    <div className="text-xs text-gray-400">Counselors</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to Start Your Journey?</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Book a personalized counselling session with our expert advisors today
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-blue-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Book Counselling Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // University Selection Modal
    if (selectedService === 3) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-green-500 to-teal-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <Globe2 size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">University Selection</h2>
                    <p className="text-sm sm:text-base text-green-100">
                      Find the perfect university for your academic goals
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Selection Criteria */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Target size={20} className="text-orange-500 mr-2" />
                    Our Selection Criteria
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <TrendingUp size={16} className="text-blue-500 mr-2" />
                        Academic Excellence
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• University rankings & reputation</li>
                        <li>• Program accreditation</li>
                        <li>• Faculty expertise</li>
                        <li>• Research opportunities</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <DollarSign size={16} className="text-green-500 mr-2" />
                        Financial Factors
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Tuition fees & living costs</li>
                        <li>• Scholarship availability</li>
                        <li>• Part-time work opportunities</li>
                        <li>• Return on investment</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <MapPin size={16} className="text-purple-500 mr-2" />
                        Location & Lifestyle
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Climate & geography</li>
                        <li>• Cultural diversity</li>
                        <li>• Safety & security</li>
                        <li>• Student life quality</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Briefcase size={16} className="text-orange-500 mr-2" />
                        Career Prospects
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Employment rates</li>
                        <li>• Industry connections</li>
                        <li>• Alumni network</li>
                        <li>• Post-study work visas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Popular Destinations */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Globe2 size={20} className="text-orange-500 mr-2" />
                    Popular Study Destinations
                  </h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🇺🇸</div>
                      <div className="font-semibold text-white text-sm">USA</div>
                      <div className="text-xs text-gray-400">100+ Universities</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🇨🇦</div>
                      <div className="font-semibold text-white text-sm">Canada</div>
                      <div className="text-xs text-gray-400">30+ Universities</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🇦🇺</div>
                      <div className="font-semibold text-white text-sm">Australia</div>
                      <div className="text-xs text-gray-400">40+ Universities</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🇬🇧</div>
                      <div className="font-semibold text-white text-sm">UK</div>
                      <div className="text-xs text-gray-400">50+ Universities</div>
                    </div>
                  </div>
                </div>

                {/* Our Process */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-2" />
                    Our Selection Process
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Profile Analysis</div>
                        <div className="text-sm text-gray-400">Academic background, test scores, and preferences</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">University Shortlisting</div>
                        <div className="text-sm text-gray-400">
                          Curated list of 8-12 universities matching your profile
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Final Selection</div>
                        <div className="text-sm text-gray-400">Choose 5-6 universities for applications</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Find Your Perfect University Match</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get personalized university recommendations based on your profile and goals
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-green-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Get University Recommendations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Applications Modal
    if (selectedService === 4) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-purple-500 to-pink-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <FileCheck size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                      Application Assistance
                    </h2>
                    <p className="text-sm sm:text-base text-purple-100">
                      Complete support for your university applications
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Application Components */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <FileText size={20} className="text-orange-500 mr-2" />
                    Application Components We Handle
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <FileText size={16} className="text-blue-500 mr-2" />
                        Statement of Purpose (SOP)
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Compelling narrative writing</li>
                        <li>• Goal articulation</li>
                        <li>• University-specific customization</li>
                        <li>• Multiple revisions included</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Mail size={16} className="text-green-500 mr-2" />
                        Letters of Recommendation
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• LOR strategy & planning</li>
                        <li>• Recommender guidance</li>
                        <li>• Draft preparation</li>
                        <li>• Follow-up coordination</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Users size={16} className="text-purple-500 mr-2" />
                        Resume/CV Preparation
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Academic format optimization</li>
                        <li>• Achievement highlighting</li>
                        <li>• Skills presentation</li>
                        <li>• ATS-friendly formatting</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Building size={16} className="text-orange-500 mr-2" />
                        Application Forms
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Common App assistance</li>
                        <li>• University-specific forms</li>
                        <li>• Essay questions</li>
                        <li>• Submission coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Application Timeline */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Calendar size={20} className="text-orange-500 mr-2" />
                    Application Timeline
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">Document Preparation</div>
                          <div className="text-sm text-gray-400">SOP, Resume, Essays</div>
                        </div>
                        <div className="text-blue-500 font-semibold text-sm">4-6 weeks</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">LOR Coordination</div>
                          <div className="text-sm text-gray-400">Recommender outreach & follow-up</div>
                        </div>
                        <div className="text-green-500 font-semibold text-sm">2-3 weeks</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">Application Submission</div>
                          <div className="text-sm text-gray-400">Form completion & final review</div>
                        </div>
                        <div className="text-purple-500 font-semibold text-sm">1-2 weeks</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-2" />
                    Documents You'll Need
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Academic Transcripts</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Test Scores (IELTS/TOEFL/GRE/GMAT)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Passport Copy</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Work Experience Letters</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Financial Documents</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Portfolio (if required)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Research Proposal (for PhD)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Extracurricular Certificates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to Submit Winning Applications?</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Let our experts craft compelling applications that get you noticed by admissions committees
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-purple-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Start Application Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Admissions Modal
    if (selectedService === 5) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-indigo-500 to-blue-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <UserCheck size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">Admissions Support</h2>
                    <p className="text-sm sm:text-base text-indigo-100">
                      Complete guidance through the admissions process
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Admissions Process */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-2" />
                    Our Admissions Process Support
                  </h5>
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Phone size={16} className="text-blue-500 mr-2" />
                        Interview Preparation
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Mock interview sessions</li>
                        <li>• Common questions practice</li>
                        <li>• Confidence building techniques</li>
                        <li>• Video interview setup guidance</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <FileCheck size={16} className="text-green-500 mr-2" />
                        Document Verification
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Academic credential verification</li>
                        <li>• Document authentication</li>
                        <li>• Translation services</li>
                        <li>• Apostille assistance</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Building size={16} className="text-purple-500 mr-2" />
                        University Communication
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Direct liaison with admissions offices</li>
                        <li>• Status updates and follow-ups</li>
                        <li>• Deadline management</li>
                        <li>• Query resolution</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <GraduationCap size={16} className="text-orange-500 mr-2" />
                        Enrollment Guidance
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Offer letter evaluation</li>
                        <li>• Enrollment procedures</li>
                        <li>• Fee payment guidance</li>
                        <li>• Course registration support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Interview Types */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Users size={20} className="text-orange-500 mr-2" />
                    Interview Preparation Types
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <Phone size={24} className="text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-white mb-1">Phone Interviews</div>
                      <div className="text-xs text-gray-400">Voice clarity & communication</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <Users size={24} className="text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-white mb-1">Video Interviews</div>
                      <div className="text-xs text-gray-400">Technical setup & presentation</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <Building size={24} className="text-purple-500 mx-auto mb-2" />
                      <div className="font-semibold text-white mb-1">In-Person</div>
                      <div className="text-xs text-gray-400">Body language & etiquette</div>
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <TrendingUp size={20} className="text-orange-500 mr-2" />
                    Our Success Record
                  </h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-500 mb-1">95%</div>
                      <div className="text-xs text-gray-400">Interview Success Rate</div>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-500 mb-1">100%</div>
                      <div className="text-xs text-gray-400">Document Verification</div>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-500 mb-1">24hrs</div>
                      <div className="text-xs text-gray-400">Response Time</div>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-1">1000+</div>
                      <div className="text-xs text-gray-400">Students Enrolled</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Secure Your University Admission</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get expert support through every step of the admissions process
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-indigo-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Get Admissions Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Scholarships Modal
    if (selectedService === 6) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-yellow-500 to-orange-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <Award size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">Scholarship Guidance</h2>
                    <p className="text-sm sm:text-base text-yellow-100">Maximize your funding opportunities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Scholarship Types */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Award size={20} className="text-orange-500 mr-2" />
                    Types of Scholarships Available
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <TrendingUp size={16} className="text-blue-500 mr-2" />
                        Merit-Based Scholarships
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Academic excellence awards</li>
                        <li>• Test score based funding</li>
                        <li>• Research scholarships</li>
                        <li>• Leadership awards</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Heart size={16} className="text-green-500 mr-2" />
                        Need-Based Aid
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Financial need assessment</li>
                        <li>• Family income consideration</li>
                        <li>• Emergency funding</li>
                        <li>• Work-study programs</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Globe2 size={16} className="text-purple-500 mr-2" />
                        Country-Specific Scholarships
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Government scholarships</li>
                        <li>• Bilateral agreements</li>
                        <li>• Cultural exchange programs</li>
                        <li>• Regional funding</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Building size={16} className="text-orange-500 mr-2" />
                        University Scholarships
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Institutional awards</li>
                        <li>• Department-specific funding</li>
                        <li>• Alumni scholarships</li>
                        <li>• Diversity scholarships</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Popular Scholarships */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Star size={20} className="text-orange-500 mr-2" />
                    Popular Scholarship Programs
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">Fulbright Scholarship</div>
                          <div className="text-sm text-gray-400">USA - Full funding for graduate studies</div>
                        </div>
                        <div className="text-yellow-500 font-semibold text-sm">100% Funding</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">Chevening Scholarship</div>
                          <div className="text-sm text-gray-400">UK - One-year master's degree funding</div>
                        </div>
                        <div className="text-yellow-500 font-semibold text-sm">100% Funding</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">Australia Awards</div>
                          <div className="text-sm text-gray-400">Australia - Development scholarships</div>
                        </div>
                        <div className="text-yellow-500 font-semibold text-sm">100% Funding</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">Vanier Canada Graduate</div>
                          <div className="text-sm text-gray-400">Canada - Doctoral scholarship program</div>
                        </div>
                        <div className="text-yellow-500 font-semibold text-sm">$50,000/year</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Process */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-2" />
                    Our Scholarship Process
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Eligibility Assessment</div>
                        <div className="text-sm text-gray-400">Profile evaluation for scholarship matching</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Research & Identification</div>
                        <div className="text-sm text-gray-400">Find relevant scholarship opportunities</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Application Preparation</div>
                        <div className="text-sm text-gray-400">Essay writing and document preparation</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Submission & Follow-up</div>
                        <div className="text-sm text-gray-400">Application submission and status tracking</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Unlock Your Scholarship Potential</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Let us help you find and secure scholarships to fund your education dreams
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-orange-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Explore Scholarships
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Education Loan Modal
    if (selectedService === 7) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <CreditCard size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                      Education Loan Assistance
                    </h2>
                    <p className="text-sm sm:text-base text-emerald-100">
                      Secure funding for your education with expert guidance
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Loan Types */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Banknote size={20} className="text-orange-500 mr-2" />
                    Types of Education Loans
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Building size={16} className="text-blue-500 mr-2" />
                        Secured Loans
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Lower interest rates</li>
                        <li>• Higher loan amounts</li>
                        <li>• Collateral required</li>
                        <li>• Longer repayment terms</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Shield size={16} className="text-green-500 mr-2" />
                        Unsecured Loans
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• No collateral needed</li>
                        <li>• Quick processing</li>
                        <li>• Higher interest rates</li>
                        <li>• Limited loan amounts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Partner Banks */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Building size={20} className="text-orange-500 mr-2" />
                    Our Partner Financial Institutions
                  </h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="font-semibold text-white text-sm mb-1">SBI</div>
                      <div className="text-xs text-gray-400">Up to ₹1.5 Cr</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="font-semibold text-white text-sm mb-1">HDFC Bank</div>
                      <div className="text-xs text-gray-400">Up to ₹1 Cr</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="font-semibold text-white text-sm mb-1">ICICI Bank</div>
                      <div className="text-xs text-gray-400">Up to ₹1 Cr</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <div className="font-semibold text-white text-sm mb-1">Axis Bank</div>
                      <div className="text-xs text-gray-400">Up to ₹75 Lakh</div>
                    </div>
                  </div>
                </div>

                {/* Loan Process */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-2" />
                    Loan Application Process
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Eligibility Assessment</div>
                        <div className="text-sm text-gray-400">Evaluate loan eligibility and amount</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Bank Selection</div>
                        <div className="text-sm text-gray-400">Choose best bank based on your profile</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Documentation</div>
                        <div className="text-sm text-gray-400">Prepare and submit required documents</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Approval & Disbursement</div>
                        <div className="text-sm text-gray-400">Loan approval and fund disbursement</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <FileText size={20} className="text-orange-500 mr-2" />
                    Required Documents
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Admission Letter</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Academic Transcripts</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Income Proof (Co-applicant)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Bank Statements</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Property Documents (if secured)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Identity & Address Proof</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Course Fee Structure</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Test Scores (IELTS/TOEFL)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loan Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <DollarSign size={24} className="text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Up to ₹1.5 Cr</div>
                    <div className="text-xs text-gray-400">Maximum Loan Amount</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <Clock size={24} className="text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">15 Years</div>
                    <div className="text-xs text-gray-400">Repayment Period</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <TrendingUp size={24} className="text-purple-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">8.5% onwards</div>
                    <div className="text-xs text-gray-400">Interest Rate</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Secure Your Education Funding</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get expert assistance in securing the best education loan for your study abroad plans
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-emerald-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Apply for Education Loan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Visa Guidance Modal
    if (selectedService === 8) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-red-500 to-pink-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <FileText size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">Visa Guidance</h2>
                    <p className="text-sm sm:text-base text-red-100">
                      Complete support for your student visa application
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Visa Types by Country */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Globe2 size={20} className="text-orange-500 mr-2" />
                    Student Visa Types by Country
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <span className="text-lg mr-2">🇺🇸</span>
                        USA - F1 Visa
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Academic study visa</li>
                        <li>• SEVIS fee required</li>
                        <li>• Interview mandatory</li>
                        <li>• OPT work authorization</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <span className="text-lg mr-2">🇨🇦</span>
                        Canada - Study Permit
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Study permit + TRV</li>
                        <li>• Biometrics required</li>
                        <li>• Medical exam (if needed)</li>
                        <li>• PGWP eligibility</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <span className="text-lg mr-2">🇦🇺</span>
                        Australia - Subclass 500
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Student visa subclass 500</li>
                        <li>• Health insurance mandatory</li>
                        <li>• English proficiency required</li>
                        <li>• Work rights included</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <span className="text-lg mr-2">🇬🇧</span>
                        UK - Student Visa
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Tier 4 replacement</li>
                        <li>• CAS from university</li>
                        <li>• Financial requirements</li>
                        <li>• Graduate route available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Visa Process */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <CheckCircle size={20} className="text-orange-500 mr-2" />
                    Our Visa Application Process
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Document Preparation</div>
                        <div className="text-sm text-gray-400">Complete checklist and document verification</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Application Submission</div>
                        <div className="text-sm text-gray-400">Online application and fee payment</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Interview Preparation</div>
                        <div className="text-sm text-gray-400">Mock interviews and question practice</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Visa Decision</div>
                        <div className="text-sm text-gray-400">Status tracking and result notification</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Common Documents */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <FileText size={20} className="text-orange-500 mr-2" />
                    Common Visa Documents
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Valid Passport</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Admission Letter/I-20/CAS</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Financial Proof</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Academic Transcripts</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">English Test Scores</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Statement of Purpose</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Medical Examination</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Visa Application Form</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Rates */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-500 mb-1">98%</div>
                    <div className="text-xs text-gray-400">Visa Success Rate</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-1">15-30</div>
                    <div className="text-xs text-gray-400">Processing Days</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-500 mb-1">1000+</div>
                    <div className="text-xs text-gray-400">Visas Approved</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
                    <div className="text-xs text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Get Your Student Visa Approved</h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Expert guidance to ensure your visa application is successful and stress-free
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-red-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Start Visa Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Allied Services Modal
    if (selectedService === 9) {
      return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl transform animate-fade-in">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm">
                    <Briefcase size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">Allied Services</h2>
                    <p className="text-sm sm:text-base text-cyan-100">Complete support for your study abroad journey</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center min-h-[40px] flex-1 sm:flex-none"
                  >
                    Let's discuss
                  </Link>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-4 sm:p-6 pb-8 sm:pb-12">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                {/* Service Categories */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Briefcase size={20} className="text-orange-500 mr-2" />
                    Our Allied Services
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Home size={16} className="text-blue-500 mr-2" />
                        Accommodation Services
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• University dormitory booking</li>
                        <li>• Private housing assistance</li>
                        <li>• Homestay arrangements</li>
                        <li>• Temporary accommodation</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <DollarSign size={16} className="text-green-500 mr-2" />
                        Foreign Exchange
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Currency exchange services</li>
                        <li>• International money transfer</li>
                        <li>• Forex cards and accounts</li>
                        <li>• Best exchange rates</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Shield size={16} className="text-purple-500 mr-2" />
                        Travel Insurance
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Comprehensive health coverage</li>
                        <li>• Emergency medical assistance</li>
                        <li>• Travel protection plans</li>
                        <li>• Student-specific policies</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <h6 className="font-semibold text-white mb-2 flex items-center">
                        <Plane size={16} className="text-orange-500 mr-2" />
                        Travel Assistance
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Flight booking assistance</li>
                        <li>• Airport pickup arrangements</li>
                        <li>• Travel itinerary planning</li>
                        <li>• Baggage guidelines</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pre-Departure Services */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Plane size={20} className="text-orange-500 mr-2" />
                    Pre-Departure Orientation
                  </h5>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Cultural orientation sessions</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Academic system overview</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Banking and finance guidance</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Health and safety briefing</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Local laws and regulations</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Emergency contact information</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Student support services</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300">Networking opportunities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post-Arrival Support */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Users size={20} className="text-orange-500 mr-2" />
                    Post-Arrival Support
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Airport Reception</div>
                        <div className="text-sm text-gray-400">Meet and greet at destination airport</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Initial Settlement</div>
                        <div className="text-sm text-gray-400">Help with accommodation and basic necessities</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">University Enrollment</div>
                        <div className="text-sm text-gray-400">Assistance with registration and orientation</div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Ongoing Support</div>
                        <div className="text-sm text-gray-400">24/7 helpline for any issues or queries</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <Home size={24} className="text-cyan-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">500+</div>
                    <div className="text-xs text-gray-400">Accommodations</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <Shield size={24} className="text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">100%</div>
                    <div className="text-xs text-gray-400">Insurance Coverage</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <DollarSign size={24} className="text-green-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Best</div>
                    <div className="text-xs text-gray-400">Exchange Rates</div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 text-center">
                    <Phone size={24} className="text-purple-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">24/7</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Complete Your Study Abroad Preparation
                </h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get comprehensive support for all aspects of your international education journey
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-cyan-600 font-semibold py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    Get Complete Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Services Carousel */}
          <div className="mb-8 animate-on-scroll">
            <ServicesCarousel />
          </div>

          {/* Header Text */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title-responsive font-bold mb-6 leading-tight">
              <span className="hero-title-1 block text-orange-500">Comprehensive</span>
              <span className="hero-title-2 block">Study Abroad Services</span>
            </h1>
            <p className="hero-subtitle text-xl text-gray-600 mb-8 leading-relaxed">
              From initial counseling to post-arrival support, we provide end-to-end assistance for your overseas
              education journey. Our expert team guides you through every step with personalized attention.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <button onClick={scrollToServices} className="btn-outline inline-flex items-center justify-center">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="comprehensive-services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-on-scroll">
              Our <span className="text-orange-500">Expert Services</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Comprehensive support tailored to your unique study abroad requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children" role="list">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                onClick={() => handleServiceClick(service.id)}
                className="card p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gray-900 text-white h-full"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 line-clamp-2">{service.description}</p>
                <div className="mt-4">
                  <span className="text-orange-500 text-sm font-medium">Learn more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-on-scroll">
              Why Choose <span className="text-orange-500">Our Services</span>?
            </h2>
          </div>

          {isMobile ? (
            <WhyChooseMobileCarousel />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 stagger-children">
              {whyChooseReasons.map((reason, index) => (
                <article key={index} className="why-choose-card card p-6 text-center h-full group">
                  <div
                    className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${reason.hoverBg} transition-all duration-300 group-hover:scale-110 icon-container`}
                  >
                    <div className={`${reason.iconColor} ${reason.hoverIconColor} transition-colors duration-300`}>
                      {reason.icon}
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className={`text-xl font-bold mb-2 ${reason.titleHoverColor} transition-colors duration-300`}>
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a consultation with our expert counselors and get personalized guidance for your study abroad plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              Book Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="/study-abroad"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Render Service Modals */}
      {renderServiceModal()}
    </div>
  )
}
