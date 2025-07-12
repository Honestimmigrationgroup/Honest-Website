"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Star } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16">
          {/* Company Info */}
          <div className="-mt-4">
            <div className="flex flex-col items-start mb-6">
              <button onClick={scrollToTop} className="hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-Photoroom-WjhmHw0EOQAGOxBVwF6Ajzci54uA4H.png"
                  alt="Honest Immigration Group Logo"
                  width={100}
                  height={40}
                  className="mb-2"
                />
              </button>
              <span className="text-lg font-semibold text-white">Honest Immigration Services</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transform your educational aspirations into reality with India's most trusted overseas education
              consultancy.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/HIGRAJKOT/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:bg-[#166FE5] transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/hig_rajkot/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FFDC80] flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center hover:bg-[#004182] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="mailto:rjt@honestimmigrationgroup.in"
                className="w-10 h-10 rounded-full bg-[#EA4335] flex items-center justify-center hover:bg-[#D33B2C] transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>

            {/* Google Reviews Capsule */}
            <a
              href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDM2rEhLzsk1YLRSNagwtjS1TE40Sks2NzRMNbBIsTKoSEuxNLUwtTAxTDQAyRh5yWfk56UWlyhk5uZmphcllmTm5ymkF-WXFigUJWZl55cAAGAsG7M&q=honest+immigration+group+rajkot&rlz=1C1CHZN_enIN994IN994&oq=h&gs_lcrp=EgZjaHJvbWUqFQgDEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MgYIARBFGDwyBggCEEUYPDIVCAMQLhgnGK8BGMcBGIAEGIoFGI4FMgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNTk2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white rounded-full px-4 py-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-900 font-semibold">4.8</span>
                <span className="text-xs text-gray-600">Reviews</span>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div className="ml-0 md:ml-8">
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500 after:-bottom-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/study-abroad"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500 after:-bottom-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#service-1"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Counselling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-2"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-3"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  University Selection
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-4"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-5"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-6"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-7"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Education Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-8"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Visa Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#service-9"
                  className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer relative z-10 block py-1"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Allied Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-orange-500 after:-bottom-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  2nd Floor, Keshav Arcade, Main Road, Kalavad Rd, near Bonanza Salon, Royal Park Corner, Opposite State
                  Bank Of Hyderabad, Royal Park, Rajkot, Gujarat 360005
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <a href="tel:02812588121" className="text-gray-400 hover:text-orange-500 transition-colors">
                  0281 258 8121
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:rjt@honestimmigrationgroup.in"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  rjt@honestimmigrationgroup.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Honest Immigration Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors cursor-pointer relative z-10 block py-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors cursor-pointer relative z-10 block py-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
