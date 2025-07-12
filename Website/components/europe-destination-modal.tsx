"use client"
import { X, MapPin, GraduationCap, DollarSign, Building } from "lucide-react"

interface University {
  name: string
  ranking?: string
}

interface DestinationData {
  name: string
  flag: string
  description: string
  universities: University[]
  popularCourses: string[]
  pricing: {
    tuitionRange: string
    livingCost: string
    totalBudget: string
  }
  highlights: string[]
}

interface EuropeDestinationModalProps {
  destination: DestinationData | null
  isOpen: boolean
  onClose: () => void
}

const EuropeDestinationModal = ({ destination, isOpen, onClose }: EuropeDestinationModalProps) => {
  if (!isOpen || !destination) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-yellow-400 relative">
        {/* Bubble effect */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="absolute -top-1 -right-3 w-4 h-4 bg-yellow-300 rounded-full"></div>
        <div className="absolute -bottom-2 -left-3 w-5 h-5 bg-yellow-300 rounded-full"></div>
        <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-6 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-gray-700 transition-colors bg-white rounded-full p-2"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{destination.flag}</span>
            <div>
              <h2 className="text-2xl font-bold">{destination.name}</h2>
              <p className="text-gray-800 mt-1">{destination.description}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Universities Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="text-yellow-600" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">Top Universities</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {destination.universities.map((uni, index) => (
                <div key={index} className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <p className="font-medium text-gray-800">{uni.name}</p>
                  {uni.ranking && <p className="text-sm text-gray-600">{uni.ranking}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-yellow-600" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">Popular Courses</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {destination.popularCourses.map((course, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="text-yellow-600" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">Cost Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-1">Tuition Fees</p>
                <p className="font-semibold text-yellow-800">{destination.pricing.tuitionRange}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-1">Living Cost</p>
                <p className="font-semibold text-yellow-800">{destination.pricing.livingCost}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-1">Total Budget</p>
                <p className="font-semibold text-yellow-800">{destination.pricing.totalBudget}</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-yellow-600" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">Why Choose {destination.name}?</h3>
            </div>
            <ul className="space-y-2">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-yellow-200">
            <button className="btn-primary w-full bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500">
              Get Free Consultation for {destination.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EuropeDestinationModal
