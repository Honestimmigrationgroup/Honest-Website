import { ContactProvider } from "@/components/contact-provider"
import FloatingCTA from "@/components/floating-cta"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ScrollToTopHandler from "@/components/ScrollToTopHandler"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Honest Immigration Group - Your Global Education Partner",
    template: "%s | Honest Immigration Group",
  },
  description:
    "Transform your educational aspirations into reality with India's most trusted overseas education consultancy. We've guided over 1000+ students to their dream universities across 6 countries including USA, Canada, Australia, UK, Dubai, and New Zealand.",
  keywords: [
    "study abroad",
    "overseas education",
    "visa assistance",
    "IELTS coaching",
    "PTE preparation",
    "TOEFL training",
    "SAT coaching",
    "GMAT preparation",
    "GRE coaching",
    "immigration consultancy",
    "university admission",
    "student visa",
    "education loan",
    "scholarship guidance",
    "Rajkot",
    "Gujarat",
    "India",
    "USA universities",
    "Canada universities",
    "Australia universities",
    "UK universities",
    "Dubai universities",
    "New Zealand universities",
  ],
  authors: [{ name: "Honest Immigration Group" }],
  creator: "Honest Immigration Group",
  publisher: "Honest Immigration Group",
  category: "Education",
  classification: "Education Consultancy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://honestimmigration.com",
    siteName: "Honest Immigration Group",
    title: "Honest Immigration Group - Your Global Education Partner",
    description:
      "Transform your educational aspirations into reality with India's most trusted overseas education consultancy. Expert guidance for studying in USA, Canada, Australia, UK, Dubai, and New Zealand.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Honest Immigration Group - Study Abroad Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honest Immigration Group - Your Global Education Partner",
    description:
      "Expert overseas education consultancy services. Study abroad in USA, Canada, Australia, UK, Dubai, New Zealand.",
    images: ["/og-image.jpg"],
    creator: "@honestimmigration",
    site: "@honestimmigration",
  },
  facebook: {
    appId: "your-facebook-app-id",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-domain-verification",
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://honestimmigration.com",
    languages: {
      "en-US": "https://honestimmigration.com",
      "hi-IN": "https://honestimmigration.com/hi",
      "gu-IN": "https://honestimmigration.com/gu",
    },
  },
  other: {
    "google-site-verification": "your-google-site-verification",
    "facebook-domain-verification": "your-facebook-domain-verification",
    "p:domain_verify": "your-pinterest-verification",
  },
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FF7A00",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={inter.className}>
        <ContactProvider>
          <ScrollToTopHandler />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </ContactProvider>
      </body>
    </html>
  )
}
