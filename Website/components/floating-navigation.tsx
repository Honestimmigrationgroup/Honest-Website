"use client"

import { useState, useEffect } from "react"
import { Home, Users, Globe, Briefcase, GraduationCap } from "lucide-react"

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const sections = [
    { id: "hero", name: "Home", icon: Home, type: "scroll" },
    { id: "why-choose", name: "Why Us", icon: Users, type: "scroll" },
    { id: "destinations", name: "Destinations", icon: Globe, type: "scroll" },
    { id: "services", name: "Services", icon: Briefcase, type: "scroll" },
    { id: "study-abroad", name: "Study Abroad", icon: GraduationCap, type: "navigate", href: "/study-abroad" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Show navigation after scrolling past hero
      setIsVisible(scrollPosition > 300)

      // Determine active section (only for scroll sections)
      const scrollSections = sections.filter((section) => section.type === "scroll")
      const sectionElements = scrollSections.map((section) => document.getElementById(section.id))
      let currentSection = 0

      sectionElements.forEach((element, index) => {
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = index
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionClick = (section: any, index: number) => {
    if (section.type === "scroll") {
      const element = document.getElementById(section.id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (section.type === "navigate") {
      // Scroll to top and navigate
      window.scrollTo(0, 0)
      window.location.href = section.href
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg p-2 space-y-2">
        {sections.map((section, index) => {
          const IconComponent = section.icon
          const isActive = section.type === "scroll" && activeSection === index

          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section, index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group relative cursor-pointer ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-orange-100 hover:text-orange-500"
              }`}
              title={section.name}
            >
              <IconComponent size={20} />
              <span className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.name}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FloatingNavigation
