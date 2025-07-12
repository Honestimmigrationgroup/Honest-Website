"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Rahul Sharma",
    university: "University of Toronto",
    country: "Canada",
    image: "/placeholder.svg?height=80&width=80&text=RS",
    quote:
      "Honest Immigration Group made my dream of studying in Canada come true. Their guidance throughout the process was invaluable.",
  },
  {
    name: "Priya Patel",
    university: "University of Melbourne",
    country: "Australia",
    image: "/placeholder.svg?height=80&width=80&text=PP",
    quote:
      "From IELTS preparation to visa approval, HIG supported me at every step. I'm now pursuing my Master's in Australia!",
  },
  {
    name: "Amit Singh",
    university: "University of California",
    country: "USA",
    image: "/placeholder.svg?height=80&width=80&text=AS",
    quote:
      "Thanks to HIG's scholarship guidance, I received a 50% tuition waiver for my program at UC. Forever grateful!",
  },
  {
    name: "Neha Gupta",
    university: "University of British Columbia",
    country: "Canada",
    image: "/placeholder.svg?height=80&width=80&text=NG",
    quote:
      "The counselors at HIG are extremely knowledgeable. They helped me choose the perfect program and university.",
  },
  {
    name: "Vikram Mehta",
    university: "University of Sydney",
    country: "Australia",
    image: "/placeholder.svg?height=80&width=80&text=VM",
    quote: "My visa application was approved in record time thanks to the expert guidance from the HIG team.",
  },
  {
    name: "Ananya Reddy",
    university: "University of Manchester",
    country: "UK",
    image: "/placeholder.svg?height=80&width=80&text=AR",
    quote:
      "HIG made the entire process smooth and stress-free. I highly recommend their services to anyone planning to study abroad.",
  },
]

const TestimonialSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Create multiple copies for seamless infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="relative overflow-hidden testimonial-container">
      <div
        className="flex animate-scroll-testimonials"
        style={{
          width: `${(extendedTestimonials.length / slidesToShow) * 100}%`,
        }}
      >
        {extendedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 px-3"
            style={{ width: `${100 / extendedTestimonials.length}%` }}
          >
            <div className="bg-gray-900 text-white rounded-xl p-4 h-full flex flex-col">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-300">{testimonial.university}</p>
                  <p className="text-xs text-orange-500">{testimonial.country}</p>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-300 italic text-sm">"{testimonial.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
