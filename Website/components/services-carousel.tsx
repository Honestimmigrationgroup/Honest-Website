"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "Counselling",
    icon: <GraduationCap size={24} />,
    description:
      "Personalized counseling sessions to understand your goals and recommend the best educational pathways.",
  },
  {
    id: 2,
    title: "Test Preparation",
    icon: <BookOpen size={24} />,
    description: "Expert coaching for IELTS, PTE, TOEFL, SAT, GMAT, and GRE to help you achieve your target scores.",
  },
  {
    id: 3,
    title: "University Selection",
    icon: <Globe2 size={24} />,
    description:
      "Strategic university selection based on your academic profile, career goals, and budget considerations.",
  },
  {
    id: 4,
    title: "Applications",
    icon: <FileCheck size={24} />,
    description:
      "End-to-end application assistance including SOP, LOR, resume preparation, and application submission.",
  },
  {
    id: 5,
    title: "Admissions",
    icon: <UserCheck size={24} />,
    description:
      "Complete admissions support including interview preparation, document verification, and enrollment guidance.",
  },
  {
    id: 6,
    title: "Scholarships",
    icon: <Award size={24} />,
    description: "Guidance on available scholarships and assistance with scholarship application process.",
  },
  {
    id: 7,
    title: "Education Loan",
    icon: <CreditCard size={24} />,
    description: "Assistance with education loan process and documentation from partner financial institutions.",
  },
  {
    id: 8,
    title: "Visa Guidance",
    icon: <FileText size={24} />,
    description: "Complete visa guidance including documentation, application submission, and interview preparation.",
  },
  {
    id: 9,
    title: "Allied Services",
    icon: <Briefcase size={24} />,
    description: "Additional services including accommodation, forex, travel insurance, and post-landing assistance.",
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, services.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleServiceClick = (serviceId: number) => {
    // Store the service ID in sessionStorage to trigger modal on services page
    sessionStorage.setItem("openServiceModal", serviceId.toString())
    window.location.href = `/services#service-${serviceId}`
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 -ml-6"
        aria-label="Previous services"
      >
        <ChevronLeft size={20} className="text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 -mr-6"
        aria-label="Next services"
      >
        <ChevronRight size={20} className="text-gray-600" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {services.map((service) => (
            <div key={service.id} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
              <div
                onClick={() => handleServiceClick(service.id)}
                className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                role="article"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 flex-grow text-sm line-clamp-3">{service.description}</p>
                <div className="mt-4">
                  <span className="text-orange-500 text-sm font-medium">Learn more →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
