"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface ServiceCardProps {
  title: string
  icon: React.ReactNode
  description: string
  bgColor?: string
  textColor?: string
}

const ServiceCard = ({
  title,
  icon,
  description,
  bgColor = "bg-white",
  textColor = "text-gray-700",
}: ServiceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={`card p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${bgColor}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div
          className={`w-12 h-12 ${bgColor === "bg-gray-900" ? "bg-gray-800" : "bg-orange-500/10"} rounded-full flex items-center justify-center mb-4 ${bgColor === "bg-gray-900" ? "text-orange-500" : "text-orange-500"}`}
        >
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
        <p className={`${bgColor === "bg-gray-900" ? "text-gray-300" : "text-gray-600"} line-clamp-2`}>{description}</p>
        <div className="mt-4">
          <span className="text-orange-500 text-sm font-medium">Learn more</span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <div className="mb-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500">
                {icon}
              </div>
            </div>
            <p className="text-gray-700 mb-6">{description}</p>

            {/* Additional content based on service type */}
            {title === "Counselling" && (
              <div className="space-y-2 text-gray-700">
                <p>• One-on-one sessions with expert counselors</p>
                <p>• Comprehensive profile evaluation</p>
                <p>• Personalized study abroad roadmap</p>
                <p>• Career path guidance and planning</p>
              </div>
            )}

            {title === "Test Preparation" && (
              <div className="space-y-2 text-gray-700">
                <p>• Specialized coaching for IELTS, PTE, TOEFL</p>
                <p>• Preparation for SAT, GMAT, and GRE</p>
                <p>• Mock tests and performance analysis</p>
                <p>• Small batch sizes for personalized attention</p>
              </div>
            )}

            {title === "University Selection" && (
              <div className="space-y-2 text-gray-700">
                <p>• Profile-based university recommendations</p>
                <p>• Course and program selection guidance</p>
                <p>• Budget and location considerations</p>
                <p>• Ranking and accreditation analysis</p>
              </div>
            )}

            {title === "Applications" && (
              <div className="space-y-2 text-gray-700">
                <p>• Statement of Purpose (SOP) writing</p>
                <p>• Letter of Recommendation (LOR) guidance</p>
                <p>• Resume and CV preparation</p>
                <p>• Application form completion and submission</p>
              </div>
            )}

            {title === "Admissions" && (
              <div className="space-y-2 text-gray-700">
                <p>• Interview preparation and mock sessions</p>
                <p>• Document verification and authentication</p>
                <p>• Enrollment and registration guidance</p>
                <p>• Communication with university admissions</p>
              </div>
            )}

            {title === "Scholarships" && (
              <div className="space-y-2 text-gray-700">
                <p>• Scholarship research and identification</p>
                <p>• Application assistance and essay writing</p>
                <p>• Merit and need-based scholarship guidance</p>
                <p>• Financial aid application support</p>
              </div>
            )}

            {title === "Education Loan" && (
              <div className="space-y-2 text-gray-700">
                <p>• Loan eligibility assessment</p>
                <p>• Documentation and paperwork assistance</p>
                <p>• Bank and financial institution liaison</p>
                <p>• Loan disbursement coordination</p>
              </div>
            )}

            {title === "Visa Guidance" && (
              <div className="space-y-2 text-gray-700">
                <p>• Visa application form completion</p>
                <p>• Document checklist and preparation</p>
                <p>• Interview preparation and coaching</p>
                <p>• Visa status tracking and follow-up</p>
              </div>
            )}

            {title === "Allied Services" && (
              <div className="space-y-2 text-gray-700">
                <p>• Accommodation and housing assistance</p>
                <p>• Foreign exchange and remittance</p>
                <p>• Travel insurance and health coverage</p>
                <p>• Pre-departure and post-arrival support</p>
              </div>
            )}

            <button className="btn-primary w-full mt-6" onClick={() => setIsModalOpen(false)}>
              Contact for Details
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ServiceCard
