"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

const Navbar = () => {
  const [isFloatingOpen, setIsFloatingOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is md breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleFloatingClick = () => {
    setIsFloatingOpen(!isFloatingOpen)
  }

  const navLinks = [
    { name: "Home", href: "/", isHome: true },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "Services", href: "/services" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "About Us", href: "/about-us" },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-1" : "py-2"}`}>
      <div className="container mx-auto px-4">
        {/* Desktop Navbar - using JavaScript logic */}
        {!isMobile && (
          <div
            className={`flex justify-between items-center h-16 transition-all duration-300 ${
              scrolled ? "opacity-0 pointer-events-none absolute" : "opacity-100"
            }`}
          >
            <Link href="/" className="flex items-center h-full" onClick={() => window.scrollTo(0, 0)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-Photoroom-WjhmHw0EOQAGOxBVwF6Ajzci54uA4H.png"
                alt="Honest Immigration Group Logo"
                width={80}
                height={32}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <nav className="flex items-center space-x-8 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-bold text-sm tracking-wide transition-all duration-300 hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full text-gray-800 uppercase flex items-center h-full"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Mobile Logo - using JavaScript logic, disappears when scrolled */}
        {isMobile && !scrolled && (
          <div className="flex justify-start items-center h-16 px-4 transition-all duration-300 relative z-40">
            <Link href="/" className="flex items-center h-full relative z-50" onClick={() => window.scrollTo(0, 0)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-Photoroom-WjhmHw0EOQAGOxBVwF6Ajzci54uA4H.png"
                alt="Honest Immigration Group Logo"
                width={60}
                height={24}
                className="transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
        )}

        {/* Floating Hamburger Menu */}
        <div
          className={`fixed top-6 right-6 z-50 transition-all duration-300 ${
            scrolled ? "opacity-100" : isMobile ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative group">
            <button
              onClick={handleFloatingClick}
              onMouseEnter={() => setIsFloatingOpen(true)}
              onMouseLeave={() => setIsFloatingOpen(false)}
              className="w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <Menu size={20} className="text-white" />
            </button>

            {/* Floating Menu Bubble */}
            <div
              className={`absolute top-0 right-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 ease-out transform origin-right ${
                isFloatingOpen
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-95 translate-x-4 pointer-events-none"
              }`}
              onMouseEnter={() => setIsFloatingOpen(true)}
              onMouseLeave={() => setIsFloatingOpen(false)}
            >
              <div className="p-4 min-w-[200px]">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="font-bold text-sm tracking-wide text-gray-800 hover:text-orange-500 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-orange-50 uppercase cursor-pointer"
                      onClick={() => {
                        setIsFloatingOpen(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Arrow pointing to the button */}
              <div className="absolute top-6 -right-2 w-4 h-4 bg-white/95 backdrop-blur-md transform rotate-45 border-r border-b border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
