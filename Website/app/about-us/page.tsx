"use client"

import { setupScrollAnimations } from "@/app/utils/animation"
import ClientReviewCard from "@/components/client-review-card"
import CounterAnimation from "@/components/counter-animation"
import GoogleReviewsCard from "@/components/google-reviews-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  Calendar,
  CheckCircle,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    const cleanup = setupScrollAnimations()
    return cleanup
  }, [])

  // Golden Star Animation Effect
  useEffect(() => {
    const createGoldenStars = () => {
      const starsContainer = document.querySelector(".golden-stars-container")
      if (!starsContainer) return

      // Create multiple golden stars
      for (let i = 0; i < 12; i++) {
        const star = document.createElement("div")
        star.className = "golden-star"
        star.innerHTML = "★"

        // Random positioning
        star.style.left = Math.random() * 100 + "%"
        star.style.top = Math.random() * 100 + "%"
        star.style.fontSize = Math.random() * 1.5 + 0.8 + "rem"

        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + "s"

        starsContainer.appendChild(star)

        // Remove star after animation cycle
        setTimeout(() => {
          if (star.parentNode) {
            star.parentNode.removeChild(star)
          }
        }, 4000)
      }
    }

    // Create initial stars
    createGoldenStars()

    // Create stars periodically
    const starsInterval = setInterval(createGoldenStars, 2500)

    return () => {
      clearInterval(starsInterval)
    }
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const founders = [
    {
      name: "Mayur Patel",
      title: "Co-Founder",
      image: "/mayur-patel.png",
      bio: "Mayur Patel is a seasoned immigration expert with over a decade of experience in international education consulting. Renowned as one of Australia's leading immigration specialists, he has guided thousands of students toward successful academic and migration outcomes. With a personalized approach and innovative systems, Mayur ensures high visa approval rates and efficient processing.",
      expertise: ["Visa", "University Counselling", "Education Planning"],
      linkedin: "#",
      certification: "Education Agent Training Course (EATC) by ICEF Academy",
    },
    {
      name: "Parth Sanghani",
      title: "Co-Founder",
      image: "/parth-sanghani.jpeg",
      bio: "Parth Sanghani, a distinguished Global MBA graduate from the UK, is a seasoned career counsellor and education consultant with 7+ years of international experience. He has guided over 3,000 students and enabled 1,000+ successful global migrations. Known for his dynamic counselling style and deep industry insights, Parth brings innovative, student-centric strategies to every interaction.",
      expertise: ["Student Counseling", "Test Preparation", "Career Guidance"],
      linkedin: "https://www.linkedin.com/in/parthsanghani/",
      certification: "Fundamentals of US Education and Admissions by AIRC",
    },
  ]

  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      number: 3000,
      suffix: "+",
      label: "Students Guided*",
      description: "Successfully guided students to their dream destinations",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      number: 20,
      suffix: "+",
      label: "Countries*",
      description: "Partnerships across major study destinations",
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-500" />,
      number: 98,
      suffix: "%",
      label: "Success Rate*",
      description: "Visa approval success rate",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      number: 650,
      suffix: "+",
      label: "University Partners*",
      description: "Direct partnerships with top universities",
    },
  ]

  const whyHonest = [
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Transparent Process",
      description:
        "Complete transparency in our processes with no hidden charges. We believe in honest communication at every step.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Personalized Guidance",
      description:
        "Every student is unique. We provide customized solutions based on individual goals, budget, and preferences.",
    },
    {
      icon: <Heart className="w-12 h-12 text-cyan-500" />,
      title: "Student-Centric Approach",
      description: "Your success is our success. We go above and beyond to ensure you achieve your educational dreams.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
      title: "End-to-End Support",
      description: "From initial counseling to post-arrival support, we're with you throughout your entire journey.",
    },
  ]

  const clientReviews = [
    {
      name: "Kunj Rudani",
      timeAgo: "a week ago",
      review: "Good support and give clear guidance. Friendly and trustworthy",
    },
    {
      name: "Zuveriya Kashmani",
      timeAgo: "a week ago",
      review:
        "It was a nice experience with the team. They were humble and helped me throughout my process and got me into a good university in the UK. Thank you guys for helping me out.",
    },
    {
      name: "Meet Vaghani",
      timeAgo: "2 months ago",
      review:
        "I recently received my Student visa for Australia under the consultancy of Honest Immigration. I had a very nice and warming experience. All the team members were welcoming from the first day, they were very supportive at every place and knowledgeable at every point. Khushali Ma'am and Mayur sir were very helpful from finding the college, applying to it, till getting the visa. Under their expertise I received my visa just under 18 days. Their process was very easy, seamless and totally transparent. I would highly recommend you if you're planning for higher studies abroad. Thank you so much Honest Immigration group and specially thanks to khushali ma'am and Mayur sir",
    },
    {
      name: "Vanditu Nandani",
      timeAgo: "4 months ago",
      review:
        "Very smooth and upto the point support was provided throughout the procedure :) overall I had the best experience with Honest Immigration for getting admission to receiving the student visa. Thank you so much for the support as always.",
    },
    {
      name: "Abhi Vaghasiya",
      timeAgo: "6 months ago",
      review:
        "I am overjoyed to share that I have finally received my visa! Surprise thing is that I have received my visa with auto grant. I am incredibly grateful to Mayur Sir and Khushali Mam for their unwavering dedication and expertise. I highly recommend Honest immigration to all who are seeking a professional service. The main point is that I am from Surat, so don't worry about the documents and anything. Thank you so much Honest Group.",
    },
    {
      name: "Mihir Bathwar",
      timeAgo: "10 months ago",
      review:
        "I completed my preparation of IELTS and also got my desired score. And also has a good experience in the consultation of study visa and higher success ratio. Moreover, they do have really experienced and skilled staff, who give their best and I got my student visa within a short span of time, under the consultancy of Mr.Parth Sanghani Sir, who has a great knowledge and experience in this field. Furthermore, I would like to thank to Nikunj Sir, Keval Sir and Khushi ma'am who supported me a lot during this journey.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        {/* Golden Stars Animation Container */}
        <div className="golden-stars-container absolute inset-0 pointer-events-none"></div>

        <div className="absolute inset-0 bg-[url('/world-map-final.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="hero-title-responsive font-bold mb-6 leading-tight">
              <span className="hero-title-1 block text-orange-500">Honest Immigration Group</span>
              <span className="hero-title-2 block">Our Name, Our Motto</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We transform overseas aspirations into reality. With years of expertise and a commitment to transparency,
              we've become one of the most trusted overseas education consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => scrollToSection("founders-section")}
              >
                <Users className="mr-2" size={20} />
                Meet Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                onClick={() => scrollToSection("achievements-section")}
              >
                <TrendingUp className="mr-2" size={20} />
                Our Achievements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leaders */}
      <section id="founders-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Leadership Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visionary leaders with a passion for education and a commitment to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="animate-on-scroll border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                    <p className="text-orange-500 font-semibold mb-4">{founder.title}</p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>

                  {/* Certification Badge */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg">
                      <Award className="w-4 h-4 mr-2" />
                      {founder.certification}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                    >
                      Connect on LinkedIn
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Honest */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Honest Immigration Group?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand apart through our commitment to honesty, transparency, and student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyHonest.map((item, index) => (
              <Card
                key={index}
                className="animate-on-scroll border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section id="achievements-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Our Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="animate-on-scroll border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">{achievement.icon}</div>
                  <div className="mb-2">
                    <CounterAnimation
                      end={achievement.number}
                      suffix={achievement.suffix}
                      className="text-3xl font-bold text-gray-900"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success - Google Reviews & Testimonials */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Client Success
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real clients who achieved their dreams with our guidance
            </p>
          </div>

          {/* Google Reviews Card */}
          <div className="flex justify-center mb-16 animate-on-scroll">
            <div className="w-full max-w-md">
              <GoogleReviewsCard />
            </div>
          </div>

          {/* Client Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clientReviews.map((review, index) => (
              <div key={index} className="animate-on-scroll">
                <ClientReviewCard name={review.name} timeAgo={review.timeAgo} review={review.review} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-on-scroll">
            <Link href="/success-stories">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Award className="mr-2" size={20} />
                View All Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-blue-500 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful students who trusted us with their dreams. Let's make your study abroad
              aspirations a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                  <MapPin className="mr-2" size={20} />
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                >
                  <Calendar className="mr-2" size={20} />
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
