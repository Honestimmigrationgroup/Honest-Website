"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, X, Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react"

const FloatingCTA = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/movwgook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name} (Floating CTA)`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
        // Auto-close modal after 3 seconds on success
        setTimeout(() => {
          setIsContactOpen(false)
          setSubmitStatus("idle")
        }, 3000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Contact Button with Tooltip - positioned to align with menu button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsContactOpen(!isContactOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 relative"
          aria-label="Contact us"
        >
          <MessageCircle size={20} className="text-white" />

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap animate-fade-in">
              Contact Us
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </button>
      </div>

      {/* Full Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <button onClick={() => setIsContactOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-gray-600 text-sm">
                          2nd Floor, Keshav Arcade, Main Road, Kalavad Rd, near Bonanza Salon, Royal Park Corner,
                          Opposite State Bank Of Hyderabad, Royal Park, Rajkot, Gujarat 360005
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-600">0281 258 8121</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-gray-600">
                          <a href="mailto:inquiries.hig@gmail.com" className="hover:text-orange-500 transition-colors">
                            inquiries.hig@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Send us a Message</h3>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <div>
                        <p className="text-green-800 font-medium text-sm">Message sent successfully!</p>
                        <p className="text-green-600 text-xs">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
                      <AlertCircle className="text-red-500 mr-2" size={16} />
                      <div>
                        <p className="text-red-800 font-medium text-sm">Failed to send message</p>
                        <p className="text-red-600 text-xs">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                      />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                      >
                        <option value="">Select a service</option>
                        <option value="counselling">Counselling</option>
                        <option value="coaching">Test Preparation</option>
                        <option value="university-selection">University Selection</option>
                        <option value="application-assistance">Applications</option>
                        <option value="visa-guidance">Visa Guidance</option>
                        <option value="scholarships">Scholarships</option>
                        <option value="education-loan">Education Loan</option>
                      </select>
                    </div>

                    <textarea
                      name="message"
                      placeholder="Tell us about your study abroad goals..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                    ></textarea>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingCTA
