"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ArrowRight, Star, Award, Trophy, Medal, Crown, Sparkles } from "lucide-react"
import CounterAnimation from "@/components/counter-animation"

// Types
interface SuccessStory {
  id: number
  name: string
  image: string
  achievement: string
  category: "student-visa" | "spouse-visa" | "other" | "test-score"
  country: string
  university?: string
  course?: string
  intake?: string
  year: number
  month: string
  description: string
}

// Country images mapping
const countryImages: { [key: string]: string } = {
  "United States": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
  USA: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
  "United Kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
  UK: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
  Canada: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
  Australia: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  "New Zealand": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
  Germany: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
  France: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=600&h=400&fit=crop",
  Dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
  Ireland: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&h=400&fit=crop",
  India: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
}

// Helper function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase()
}

// Helper function to format intake date
const formatIntakeDate = (intakeStr: string): { year: number; month: string; intake: string } => {
  if (!intakeStr) {
    return { year: 2024, month: "January", intake: "Jan-24" }
  }

  const date = new Date(intakeStr)
  const year = date.getFullYear()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const month = monthNames[date.getMonth()]
  const shortMonth = month.substring(0, 3)
  const shortYear = year.toString().substring(2)
  const intake = `${shortMonth}-${shortYear}`

  return { year, month, intake }
}

// Real success stories data from XML
const realSuccessStories: SuccessStory[] = [
  {
    id: 5,
    name: "Zuveriya Kashmani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Zuveriya Kashmani")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Nottingham Trent University",
    course: "BSc (Hons) Construction Management",
    ...formatIntakeDate("2025-09-01"),
  },
  {
    id: 6,
    name: "Devanshi Makwana",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Devanshi Makwana")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Ulster University",
    course: "MSc International Business with Data Analytics with Advance Practice",
    ...formatIntakeDate("2025-09-01"),
  },
  {
    id: 1,
    name: "Dharmik Dhudhat",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dharmik Dhudhat")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "RMIT University",
    course: "Master of Information Technology",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 2,
    name: "Insiya Makda",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Insiya Makda")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "RMIT University",
    course: "Master in Professional Accounting",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 3,
    name: "Dhrumil Shah",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dhrumil Shah")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "RMIT University",
    course: "Masters in Information Technology",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 4,
    name: "Mohit Vaghela",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Mohit Vaghela")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "RMIT University",
    course: "Master of Engineering (Electrical Engineering)",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 7,
    name: "Kunj Rudani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Kunj Rudani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Masters in Information Technology",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 8,
    name: "Shivangi Kasundra",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Shivangi Kasundra")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Griffith University",
    course: "Masters in Biotechnology",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 9,
    name: "Meet Vaghani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Meet Vaghani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters in Advanced Robotics and Artificial Intelligence",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 10,
    name: "Parth Vekariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Parth Vekariya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters in Advanced Robotics and Artificial Intelligence",
    ...formatIntakeDate("2025-07-01"),
  },
  {
    id: 11,
    name: "Krutish Bhadiyadra",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krutish Bhadiyadra")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Royal Melbourne Institute of Technology",
    course: "Masters in Professional Accounting",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 12,
    name: "Prachi Patel",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Prachi Patel (With Spouse)")}`,
    achievement: "Australia Student Visa Approved (With Spouse)",
    category: "student-visa",
    country: "Australia",
    university: "University of Technology Sydney",
    course: "Masters in Architecture",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 13,
    name: "Om Vekariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Om Vekariya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Griffith University",
    course: "Bachelor of Cybersecurity",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 14,
    name: "Jenil Vaghani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jenil Vaghani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Macquarie University",
    course: "Master of Information Technology in Artificial Intelligence",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 15,
    name: "Tirth Gorasiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Tirth Gorasiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Masters of Data Science",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 16,
    name: "Jenil Vaghani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jenil Vaghani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Macquarie University",
    course: "Master of Information Technology in Artificial Intelligence",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 17,
    name: "Hemal Thakker",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Hemal Thakker")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Griffith University",
    course: "Masters in Information Technology",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 18,
    name: "Vanditu Nandani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Vanditu Nandani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Flinders University",
    course: "Master of Information technology (Network and Cybersecurity Systems)",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 19,
    name: "Bhavya Bhingradiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Bhavya Bhingradiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "De Montfort University",
    course: "Masters of Data Science",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 23,
    name: "Abhishek Vaghasiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Abhishek Vaghasiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Royal Melbourne Institute of Technology",
    course: "Masters of Information Technology",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 24,
    name: "Palak Varsani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Palak Varsani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "University of Technology, Sydney",
    course: "Masters of Business Analytics(Extension)",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 26,
    name: "Darshan Popatbhai Sutariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Darshan Popatbhai Sutariya(With Spouse)")}`,
    achievement: "Australia Student Visa Approved (With Spouse)",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters in Professional Engineering (Civil Engineering)",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 28,
    name: "Rutvik Sidapara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rutvik Sidapara")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters of Professional Engineering(Civil Engineering)",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 29,
    name: "Harsh Lunagariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Harsh Lunagariya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters of Information Technology",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 33,
    name: "Varun Dhanani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Varun Dhanani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "University of Technology Sydent",
    course: "Masters in Medical Biotechnology(Extension)",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 35,
    name: "Dharmik Gondaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dharmik Gondaliya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Masters in Banking and Finance",
    ...formatIntakeDate("2025-02-01"),
  },
  {
    id: 20,
    name: "Manan Bechra",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Manan Bechra")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "BA (Hons) Business Management",
    ...formatIntakeDate("2025-01-01"),
  },
  {
    id: 21,
    name: "Ayush Pambhar",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Ayush Pambhar")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "BA (Hons) Business Management",
    ...formatIntakeDate("2025-01-01"),
  },
  {
    id: 22,
    name: "Rajan Vadodariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rajan Vadodariya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "Global MBA",
    ...formatIntakeDate("2025-01-01"),
  },
  {
    id: 31,
    name: "Kiara Phillips",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Kiara Phillips")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Bow Valley College",
    course: "Business Administration Diploma",
    ...formatIntakeDate("2025-01-01"),
  },
  {
    id: 27,
    name: "Aayush Panara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Aayush Panara")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Griffith University",
    course: "Bachelors in Business",
    ...formatIntakeDate("2024-11-01"),
  },
  {
    id: 30,
    name: "Dev Dalsaniya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dev Dalsaniya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Griffith University",
    course: "Bachelors in Business",
    ...formatIntakeDate("2024-11-01"),
  },
  {
    id: 32,
    name: "Stuti Raval",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Stuti Raval")}`,
    achievement: "Dubai Student Visa Approved",
    category: "student-visa",
    country: "Dubai",
    university: "Britts Imperial University College",
    course: "BBA in International Management",
    ...formatIntakeDate("2024-11-01"),
  },
  {
    id: 36,
    name: "Vrajkumar Darji",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Vrajkumar Darji")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Yorkville University",
    course: "Bachelor of Business Administration(General)",
    ...formatIntakeDate("2024-10-01"),
  },
  {
    id: 34,
    name: "Kruti Sondarva",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Kruti Sondarva")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Edinburgh Napier University",
    course: "MSC GLOBAL HOSPITALITY MANAGEMENT (EXTENDED)",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 37,
    name: "Parin Gajera",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Parin Gajera")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "University of Greenwich",
    course: "BA (Hons) Business Management",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 38,
    name: "Drashti Zala",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Drashti Zala")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Coventry University",
    course: "MSc Nursing",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 39,
    name: "Kinjal Thanki",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Kinjal Thanki")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "BSc Hons Accounting and Finance",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 40,
    name: "Mitul Sachania",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Mitul Sachania")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "University of Greenwich",
    course: "BA Hons Business Management",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 41,
    name: "Dweep Sanghavi",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dweep Sanghavi")}`,
    achievement: "Germany Student Visa Approved",
    category: "student-visa",
    country: "Germany",
    university: "WHU Otto Beisheim School of Management",
    course: "MSc Entrepreneurship",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 42,
    name: "Mihir Bathwar",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Mihir Bathwar")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "University of Salford",
    course: "MSc Drug Design & Discover",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 43,
    name: "Varun Madam",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Varun Madam")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "University of Exeter",
    course: "MSc Engineering Business Management",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 44,
    name: "Harshil Kasundra",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Harshil Kasundra")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "University of Lethbridge",
    course: "Bachelor of Management(International",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 50,
    name: "Jagdish Rakholiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jagdish Rakholiya")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Laurentian University",
    course: "Master of Engineering",
    ...formatIntakeDate("2024-09-01"),
  },
  {
    id: 45,
    name: "Dr. Mahima Kumar",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dr. Mahima Kumar")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Master of Public Health",
    ...formatIntakeDate("2024-07-01"),
  },
  {
    id: 48,
    name: "Vaibhav Italiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Vaibhav Italiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Professional Accounting (Extended)",
    ...formatIntakeDate("2024-07-01"),
  },
  {
    id: 25,
    name: "Prem Chaudhari",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Prem Chaudhari")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Holmes Institute of Technology",
    course: "Masters in Information System",
    ...formatIntakeDate("2024-03-01"),
  },
  {
    id: 46,
    name: "Ronak Kathrotiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Ronak Kathrotiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Information Technology(Professional Computing)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 49,
    name: "Divyarajsinh Dabhi",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Divyarajsinh Dabhi")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Bachelor of Engineering (Honours)(Civil Engineering)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 51,
    name: "Nency Rakholiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Nency Rakholiya(With Spouse)")}`,
    achievement: "Australia Student Visa Approved (With Spouse)",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Public Health",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 52,
    name: "Bhavyaraj Dethaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Bhavyaraj Dethaliya (With Spouse)")}`,
    achievement: "Australia Student Visa Approved (With Spouse)",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Social Work (Qualifying)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 53,
    name: "Jeet Vasoya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jeet Vasoya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Public Health",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 54,
    name: "Dhara Dholariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dhara Dholariya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Information Technology",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 55,
    name: "Juli Kavathiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Juli Kavathiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Information Technology",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 58,
    name: "Dhruvisha Dabhi",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dhruvisha Dabhi")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Griffith University",
    course: "Master of Biotechnology",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 59,
    name: "Arsh Ukani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Arsh Ukani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "University of Technology,Sydney",
    course: "Master of Business Analytics(Extension)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 60,
    name: "Vrinda Ganatra",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Vrinda Ganatra")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Master of Biotechnology",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 61,
    name: "Harshil Thummar",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Harshil Thummar")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Deakin University",
    course: "Master of Public Health",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 62,
    name: "Shivam Makwana",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Shivam Makwana")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Professional Engineering(Mechanical)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 65,
    name: "Niral Lakhani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Niral Lakhani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters in Public Health",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 72,
    name: "Shrey Satodia",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Shrey Satodia")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Information Technology",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 73,
    name: "Parth Vasani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Parth Vasani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Business (Professional Accounting)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 75,
    name: "Krishna Limbasiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krishna Limbasiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Krishna Limbasiya",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 76,
    name: "Niraj Anghan",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Niraj Anghan")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Information Technology(Professional Computing)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 78,
    name: "Kevin Vaghela",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Kevin Vaghela")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Royal Melbourne Institute of Technology",
    course: "Master of Engineering(Electrical Engineering)",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 79,
    name: "Nidhi Chotaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Nidhi Chotaliya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Business Information System",
    ...formatIntakeDate("2024-02-01"),
  },
  {
    id: 47,
    name: "Dipti Pipaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dipti Pipaliya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "Artificial Intelligence-MSC",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 56,
    name: "Krupa Radadiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krupa Radadiya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "University of Greenwich",
    course: "Msc Food Innovation",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 57,
    name: "Rupesh Panaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rupesh Panaliya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "Energy Engineering Msc",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 63,
    name: "Khushal Bhuva",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Khushal Bhuva")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Sheffield Hallam University",
    course: "Msc Food and Nutrition Sciences with Work Placement",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 64,
    name: "Pradip Dhorajiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Pradip Dhorajiya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Bournemouth University",
    course: "MSc Engineering Project Management",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 67,
    name: "Preyash Padaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Preyash Padaliya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Queen Mary University of London",
    course: "MSc FT Banking and Finance (Conversion)",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 68,
    name: "Paril Makani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Paril Makani")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Georgian College",
    course: "Graduate Certificate - Project Management",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 69,
    name: "Gautam Khandelwal",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Gautam Khandelwal")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Georgian College",
    course: "Graduate Certificate - Project Management",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 70,
    name: "Ankit Shetty",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Ankit Shetty")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Georgian College",
    course: "Graduate Certificate - Project Management",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 71,
    name: "Anjali Gosai",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Anjali Gosai")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Conestoga College",
    course: "Health Care Administration Management - Nursing Leadership-PG",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 74,
    name: "Pavak Jobanputra",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Pavak Jobanputra")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "New York Institute of Technology",
    course: "MBA-Business Analytics",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 77,
    name: "Aditya Rupareliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Aditya Rupareliya")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Niagara College",
    course: "UG - Motive Power Technician - Automotive",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 81,
    name: "Pritesh Dobariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Pritesh Dobariya")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Conestoga College",
    course: "Process Quality Engineering-PG Certificate",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 92,
    name: "Panth Shah",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Panth Shah")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Algoma University",
    course: "Bachelor of Computer Science (General)",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 94,
    name: "Vandan Patel",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Vandan Patel")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Algoma University",
    course: "PG in Project Management",
    ...formatIntakeDate("2024-01-01"),
  },
  {
    id: 82,
    name: "Brijesh Bhuva",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Brijesh Bhuva")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "CQ University",
    course: "Master of Management for Engineers",
    ...formatIntakeDate("2023-11-01"),
  },
  {
    id: 87,
    name: "Grish Zinzuvadiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Grish Zinzuvadiya")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Yorkville University",
    course: "Bachelor of Business Administration-General",
    ...formatIntakeDate("2023-10-01"),
  },
  {
    id: 100,
    name: "Mehul Shiroya (ONSHORE Student)",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Mehul Shiroya (ONSHORE Student)")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Cambrian College",
    course: "Supply Chain Management - PG",
    ...formatIntakeDate("2023-10-01"),
  },
  {
    id: 83,
    name: "Abhishek Satodiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Abhishek Satodiya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "Accounting and Finance MSc",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 84,
    name: "Krupali Goswami",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krupali Goswami")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "Marketing Management Msc",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 85,
    name: "Kishan Majetiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Kishan Majetiya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "De Montfort University",
    course: "Cyber Security Msc",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 86,
    name: "Rajan Savaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rajan Savaliya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Kingston University",
    course: "MArch Architecture",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 88,
    name: "Harin Joshi",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Harin Joshi")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Transfer to University of Regina from Algoma University",
    course: "Bachelor of Music",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 89,
    name: "Kavya Parsana",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Kavya Parsana")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Nottingham Trent University",
    course: "BA (Hons) International Fashion Business (1 year top-up) FT",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 90,
    name: "Harsh Viradiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Harsh Viradiya")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "University of Westminster",
    course: "International Business BA Honours",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 91,
    name: "Abhay Sardhara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Abhay Sardhara")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "University of Westminster",
    course: "Accounting and Business Management BA Honours",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 93,
    name: "iliyaz Pattan",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("iliyaz Pattan")}`,
    achievement: "UK Student Visa Approved",
    category: "student-visa",
    country: "UK",
    university: "Middlesex University",
    course: "Msc Investment and Finance",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 95,
    name: "Hardik Pipaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Hardik Pipaliya")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Conestoga College",
    course: "PG in Process Quality Engineering",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 96,
    name: "Nimit Lekhani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Nimit Lekhani")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Niagara College",
    course: "Bachelor in Acting for Film and Digital Media",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 97,
    name: "Diya Vithalani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Diya Vithalani")}`,
    achievement: "France Student Visa Approved",
    category: "student-visa",
    country: "France",
    university: "Sup de Luxe-Paris",
    course: "Global Luxury Brand Management MSc 1",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 98,
    name: "Hinal Pujara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Hinal Pujara")}`,
    achievement: "USA Student Visa Approved",
    category: "student-visa",
    country: "USA",
    university: "Pace University - New York City",
    course: "Master's in Computer Sciences",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 99,
    name: "Krisha Gadhiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krisha Gadhiya")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Trent University",
    course: "Bachelor of Arts-Communications and Critical Thinking",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 101,
    name: "Uday Buddhdev",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Uday Buddhdev")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "University of Regina",
    course: "Bachelor of Computer Science",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 123,
    name: "Tushar Dhaduk",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Tushar Dhaduk")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Algonquin College",
    course: "PG in Energy Management with Co-op",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 134,
    name: "Hiloni Dhamecha",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Hiloni Dhamecha")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Georgian College",
    course: "PG in Marketing Management",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 135,
    name: "Satyam Makwana",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Satyam Makwana")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Algoma University",
    course: "Project Management",
    ...formatIntakeDate("2023-09-01"),
  },
  {
    id: 103,
    name: "Pavan Pujara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Pavan Pujara")}`,
    achievement: "USA Student Visa Approved",
    category: "student-visa",
    country: "USA",
    university: "University at Albany, State University of New York",
    course: "Master's in Computer and Information Sciences, General",
    ...formatIntakeDate("2023-08-01"),
  },
  {
    id: 137,
    name: "Aryan Ravaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Aryan Ravaliya")}`,
    achievement: "USA Student Visa Approved",
    category: "student-visa",
    country: "USA",
    university: "Central Michigan University",
    course: "Bsc Exercise Science-Kinesiology",
    ...formatIntakeDate("2023-08-01"),
  },
  {
    id: 102,
    name: "Akshay Borad",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Akshay Borad")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Construction and Infrastructure Management",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 104,
    name: "Chintan Ashara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Chintan Ashara")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Construction and Infrastructure Management",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 105,
    name: "Dharmil Talshibhai Sutariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dharmil Talshibhai Sutariya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Information Technology(Professional Computing)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 106,
    name: "Vidhi Chetankumar Maniya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Vidhi Chetankumar Maniya (With Spouse)")}`,
    achievement: "Australia Student Visa Approved (With Spouse)",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Health, Safety and Environment (Occupational Health and Safety)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 107,
    name: "Darshit Chandubhai Gajera",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Darshit Chandubhai Gajera")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Engineering and Master of Project Management",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 108,
    name: "Sujitkumar Bavanjibhai Ghaunva",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Sujitkumar Bavanjibhai Ghaunva")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Professional Engineering(Civil)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 109,
    name: "Mankumar Rakeshbhai Patel",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Mankumar Rakeshbhai Patel")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Diploma leading to Bachelor of Public Health",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 110,
    name: "Krishkumar Sanjaybhai Padaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krishkumar Sanjaybhai Padaliya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters of Business(Professional Accounting)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 111,
    name: "Dirang Dhansukhbhai Makani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dirang Dhansukhbhai Makani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Macquarie University",
    course: "Masters of Business Analytics",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 112,
    name: "Parth Dineshkumar Monapara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Parth Dineshkumar Monapara")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Bachelor of Finance",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 113,
    name: "Perin Mukeshkumar Nathani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Perin Mukeshkumar Nathani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters of Engineering Management and Master of Project Management",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 114,
    name: "Dhrumil Bhaveshbhai Boghani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dhrumil Bhaveshbhai Boghani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters of Business (Professional Accounting)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 115,
    name: "Jaydeep  Jiyanee",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jaydeep  Jiyanee")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Masters of Construction and Infrastructure Management",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 116,
    name: "Uchit Jaydeepbhai Vyas",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Uchit Jaydeepbhai Vyas")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Masters in Professional Engineering(Engineering Management)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 117,
    name: "Milankumar Chandubhai Godhani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Milankumar Chandubhai Godhani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "La Trobe University",
    course: "Masters in Information Technology",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 118,
    name: "Harshil Haribhai Bera",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Harshil Haribhai Bera")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters in Health, Safety and Environment",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 119,
    name: "Manthan Pravinbhai Maniya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Manthan Pravinbhai Maniya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "La Trobe University",
    course: "Masters in Business Analytics",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 120,
    name: "Dhruv Nevil Desai",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dhruv Nevil Desai")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Griffith University",
    course: "Masters in Design",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 121,
    name: "Aniruddh Murasiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Aniruddh Murasiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Masters in Engineering Science (Electrical)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 122,
    name: "Saurav Bhila",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Saurav Bhila")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Masters in Cyber Security",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 124,
    name: "Alkesh Mangukiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Alkesh Mangukiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Masters in Engineering Management and Project Management",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 125,
    name: "Ansh Kotadiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Ansh Kotadiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Bachelor of Engineering (Civil)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 126,
    name: "Darpha Dobariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Darpha Dobariya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Health, Safety and Environment",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 127,
    name: "Rushit Mavani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rushit Mavani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Business Information System",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 128,
    name: "Urvi Thummar",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Urvi Thummar (With Spouse)")}`,
    achievement: "Australia Student Visa Approved (With Spouse)",
    category: "student-visa",
    country: "Australia",
    university: "La Trobe University",
    course: "Master of Cyber Secutity (Computer Science)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 129,
    name: "Bhavdip Dobariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Bhavdip Dobariya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Health, Safety and Environment",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 130,
    name: "Gaurav Jetani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Gaurav Jetani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Engineering Science (Electrical)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 132,
    name: "Jenil Gadhiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jenil Gadhiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Western Sydney University",
    course: "Master of Business Analytics",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 133,
    name: "Rushabhkumar Rachhadiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rushabhkumar Rachhadiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Master of Professional Engineering (Chemical Engineering)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 136,
    name: "Karan Desai",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Karan Desai")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Business Information System",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 138,
    name: "Shreey Fofaria",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Shreey Fofaria")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Monash University",
    course: "Bachelor of Science and Bachelor of Computer Science",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 139,
    name: "Brijeshkumar Virani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Brijeshkumar Virani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Queensland University of Technology",
    course: "Master of Business (Professional Accounting)",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 140,
    name: "Jignesh Delawala",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jignesh Delawala")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Swinburne University of Technology",
    course: "Master of Business Information System",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 142,
    name: "Akshar Miyani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Akshar Miyani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "La Trobe University",
    course: "Bachelor of Information Technology",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 146,
    name: "Parth Viradiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Parth Viradiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "CQ University, Melbourne",
    course: "Master of Management for Engineers",
    ...formatIntakeDate("2023-07-01"),
  },
  {
    id: 131,
    name: "Archan Chovatiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Archan Chovatiya")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Conestoga College",
    course: "Web Development and Internet Applications Fundamentals",
    ...formatIntakeDate("2023-05-01"),
  },
  {
    id: 143,
    name: "Rutvik  Padsala",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rutvik  Padsala")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Conestoga College",
    course: "Applied Energy Management",
    ...formatIntakeDate("2023-05-01"),
  },
  {
    id: 147,
    name: "Karan Gandhi",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Karan Gandhi")}`,
    achievement: "Canada Student Visa Approved",
    category: "student-visa",
    country: "Canada",
    university: "Conestoga College",
    course: "Web Development",
    ...formatIntakeDate("2023-05-01"),
  },
  {
    id: 141,
    name: "Jhansi Sorathiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jhansi Sorathiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Torrens University",
    course: "Bachelor of Applied social Science",
    ...formatIntakeDate("2023-04-01"),
  },
  {
    id: 145,
    name: "Jil Khokhara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jil Khokhara")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "La Trobe University",
    course: "Master of Business Information System",
    ...formatIntakeDate("2023-03-01"),
  },
  {
    id: 144,
    name: "Ravikumar Rakholiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Ravikumar Rakholiya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "Flinders University",
    course: "Master of Environmental Management",
    ...formatIntakeDate("2023-02-01"),
  },
  {
    id: 148,
    name: "Pradipkumar Chauhan",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Pradipkumar Chauhan")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "CQ University",
    course: "Master of Management for Engineers",
    ...formatIntakeDate("2023-02-01"),
  },
  {
    id: 149,
    name: "Gautam Savaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Gautam Savaliya")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "CQ University",
    course: "Master of Management for Engineers",
    ...formatIntakeDate("2023-02-01"),
  },
  {
    id: 150,
    name: "Abhishek Nathwani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Abhishek Nathwani")}`,
    achievement: "Australia Student Visa Approved",
    category: "student-visa",
    country: "Australia",
    university: "La Trobe College",
    course: "La Trobe College",
    ...formatIntakeDate("2023-02-01"),
  },
  {
    id: 66,
    name: "Pooja Savaliya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Pooja Savaliya")}`,
    achievement: "UK Spouse Visa Approved",
    category: "spouse-visa",
    country: "UK",
    university: "",
    course: "",
    ...formatIntakeDate(""),
  },
  {
    id: 80,
    name: "Purvisha Satodiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Purvisha Satodiya")}`,
    achievement: "UK Spouse Visa Approved",
    category: "spouse-visa",
    country: "UK",
    university: "",
    course: "",
    ...formatIntakeDate(""),
  },
  // IELTS Success Stories - 2025
  {
    id: 151,
    name: "Krish Patoria",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krish Patoria")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 7.0, opening doors to top universities worldwide.",
  },
  {
    id: 152,
    name: "Tanasvi Bhatt",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Tanasvi Bhatt")}`,
    achievement: "IELTS Overall Band 6.5 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 6.5, meeting requirements for international study programs.",
  },
  {
    id: 153,
    name: "Nikunj Khunt",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Nikunj Khunt")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, demonstrating excellent English proficiency for global opportunities.",
  },
  {
    id: 154,
    name: "Nikhil Prithiani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Nikhil Prithiani")}`,
    achievement: "IELTS Overall Band 8.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Outstanding achievement of IELTS Overall Band 8.0, qualifying for the most prestigious international programs.",
  },
  {
    id: 155,
    name: "Insiya Makda",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Insiya Makda")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 7.0, paving the way for international academic pursuits.",
  },
  {
    id: 156,
    name: "Grishma Hirapara",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Grishma Hirapara")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, demonstrating strong English language skills for global education.",
  },
  {
    id: 157,
    name: "Geetsal Vagadiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Geetsal Vagadiya")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, meeting requirements for top international universities.",
  },
  {
    id: 158,
    name: "Zuveriya Kashmani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Zuveriya Kashmani")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 7.0, opening pathways to international academic excellence.",
  },
  {
    id: 159,
    name: "Rajan Vadodariya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Rajan Vadodariya")}`,
    achievement: "IELTS Overall Band 6.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 6.0, qualifying for international study opportunities.",
  },
  {
    id: 160,
    name: "Stuti Raval",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Stuti Raval")}`,
    achievement: "IELTS Overall Band 7.5 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Excellent achievement of IELTS Overall Band 7.5, demonstrating superior English proficiency for global opportunities.",
  },
  {
    id: 161,
    name: "Arya Kothari",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Arya Kothari")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, meeting requirements for prestigious international programs.",
  },
  {
    id: 162,
    name: "Tanmay Butani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Tanmay Butani")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 7.0, paving the way for international academic success.",
  },
  {
    id: 163,
    name: "Drashtiben Zala",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Drashtiben Zala")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 7.0, demonstrating excellent English language proficiency.",
  },
  {
    id: 164,
    name: "Mahima Laldas",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Mahima Laldas")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, qualifying for top international universities worldwide.",
  },
  {
    id: 165,
    name: "Dhruv Raiyani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Dhruv Raiyani")}`,
    achievement: "IELTS Overall Band 6.5 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 6.5, meeting requirements for international study programs.",
  },
  {
    id: 166,
    name: "Harshit Sinroja",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Harshit Sinroja")}`,
    achievement: "IELTS Overall Band 6.5 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 6.5, opening doors to international educational opportunities.",
  },
  {
    id: 167,
    name: "Poorva Kachhadiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Poorva Kachhadiya")}`,
    achievement: "IELTS Overall Band 6.5 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 6.5, qualifying for international academic programs.",
  },
  {
    id: 168,
    name: "Krupa Radadiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Krupa Radadiya")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, demonstrating strong English proficiency for global education.",
  },
  {
    id: 169,
    name: "Vandan Pandya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Vandan Pandya")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, meeting requirements for prestigious international universities.",
  },
  {
    id: 170,
    name: "Jayjeetsinh Rayjada",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jayjeetsinh Rayjada")}`,
    achievement: "IELTS Overall Band 6.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 6.0, qualifying for international study opportunities.",
  },
  {
    id: 171,
    name: "Jayvardhansih Rathod",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Jayvardhansih Rathod")}`,
    achievement: "IELTS Overall Band 6.5 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description: "Successfully achieved IELTS Overall Band 6.5, opening pathways to international academic excellence.",
  },
  {
    id: 172,
    name: "Ajit Bhuptani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Ajit Bhuptani")}`,
    achievement: "IELTS Overall Band 7.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 7.0, demonstrating excellent English language skills for global opportunities.",
  },
  {
    id: 173,
    name: "Daxil Chandrani",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Daxil Chandrani")}`,
    achievement: "IELTS Overall Band 7.5 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Excellent achievement of IELTS Overall Band 7.5, qualifying for the most competitive international programs.",
  },
  {
    id: 174,
    name: "Abhishek Satodiya",
    image: `/placeholder.svg?height=200&width=200&text=${getInitials("Abhishek Satodiya")}`,
    achievement: "IELTS Overall Band 6.0 Achieved",
    category: "test-score",
    country: "India",
    university: "",
    course: "",
    year: 2025,
    month: "January",
    intake: "Jan-25",
    description:
      "Successfully achieved IELTS Overall Band 6.0, meeting requirements for international educational opportunities.",
  },
]

// Twinkling Icons Component
const TwinklingIcons = () => {
  const icons = [Star, Award, Trophy, Medal, Crown, Sparkles]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 15 }, (_, i) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)]
        const delay = Math.random() * 4
        const duration = 2 + Math.random() * 3
        const size = 16 + Math.random() * 8
        const left = Math.random() * 100
        const top = Math.random() * 100

        return (
          <div
            key={i}
            className="absolute animate-twinkle-success"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <Icon size={size} className="text-orange-400 drop-shadow-lg" />
          </div>
        )
      })}
    </div>
  )
}

// Success Stories Carousel Component with Flip Animation
const SuccessStoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Use first 6 stories for carousel
  const carouselStories = realSuccessStories.slice(0, 6)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1 >= carouselStories.length ? 0 : prevIndex + 1))
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [carouselStories.length])

  const currentStory = carouselStories[currentIndex]

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-80 perspective-1000">
        <div
          key={currentIndex}
          className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden animate-flip-in"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={countryImages[currentStory.country] || countryImages["India"]}
              alt={`${currentStory.country}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-red-600/70"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
              <h3 className="font-bold text-lg text-center drop-shadow-md mb-3">{currentStory.name}</h3>
              <div className="bg-gray-900 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-white">{currentStory.country}</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-sm mb-2 line-clamp-2">{currentStory.achievement}</h4>
            <p className="text-gray-600 text-xs mb-3 line-clamp-3">{currentStory.description}</p>
            <div className="flex items-center justify-between">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide">
                {currentStory.category.replace("-", " ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SuccessStories() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  // Track if this is the initial page load
  const isInitialLoad = useRef(true)
  const hasUserInteracted = useRef(false)

  const storiesPerPage = 12

  // Get unique values for filters - include 2025
  const years = Array.from(new Set(realSuccessStories.map((story) => story.year))).sort((a, b) => b - a)

  // Filter stories
  const filteredStories = useMemo(() => {
    return realSuccessStories.filter((story) => {
      const matchesSearch =
        story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.achievement.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (story.university && story.university.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (story.course && story.course.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesYear = selectedYear === "all" || story.year.toString() === selectedYear

      return matchesSearch && matchesYear
    })
  }, [searchTerm, selectedYear])

  // Pagination
  const totalPages = Math.ceil(filteredStories.length / storiesPerPage)
  const startIndex = (currentPage - 1) * storiesPerPage
  const paginatedStories = filteredStories.slice(startIndex, startIndex + storiesPerPage)

  // Reset page when filters change (but don't scroll on initial load)
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      return
    }

    // Only reset to page 1 if user has interacted with filters
    if (hasUserInteracted.current) {
      setCurrentPage(1)
    }
  }, [searchTerm, selectedYear])

  // Scroll to success stories section ONLY when page changes (pagination)
  useEffect(() => {
    // Don't scroll on initial load or when going to page 1
    if (isInitialLoad.current || currentPage === 1) {
      return
    }

    // Only scroll if user has interacted and is navigating through pages
    if (hasUserInteracted.current) {
      const successStoriesSection = document.getElementById("success-stories-section")
      if (successStoriesSection) {
        successStoriesSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [currentPage])

  // Mark that user has interacted when they use filters or pagination
  const handleFilterChange = (setter: (value: string) => void, value: string) => {
    hasUserInteracted.current = true
    setter(value)
  }

  const handlePageChange = (page: number) => {
    hasUserInteracted.current = true
    setCurrentPage(page)
  }

  const handleClearFilters = () => {
    hasUserInteracted.current = true
    setSearchTerm("")
    setSelectedYear("all")
  }

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Scroll to success stories section
  const scrollToSuccessStories = () => {
    const successStoriesSection = document.getElementById("success-stories-section")
    if (successStoriesSection) {
      successStoriesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-16 overflow-hidden">
        {/* Twinkling Icons Background */}
        <TwinklingIcons />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-left">
              <h1 className="hero-title-responsive font-bold mb-6 leading-tight">
                <span className="hero-title-1 block text-orange-500">Success Stories</span>
              </h1>
              <p className="hero-subtitle text-xl text-gray-600 mb-6 leading-relaxed">
                Celebrating the achievements of our students who have successfully realized their study abroad dreams.
                From visa approvals to scholarship wins, these are the stories that inspire us every day.
              </p>

              {/* Single Stat */}
              <div className="hero-buttons mb-8">
                <div className="inline-flex items-center bg-orange-100 rounded-lg px-6 py-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-1">
                      <CounterAnimation end={174} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-600">Success Stories</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <button
                  onClick={scrollToSuccessStories}
                  className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Our Success
                </button>
              </div>
            </div>

            {/* Success Stories Carousel - Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full animate-on-scroll">
                <SuccessStoriesCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title animate-on-scroll text-gray-900">
              Our <span className="text-orange-500">Success Stories</span>
            </h2>
            <p className="text-gray-600 mb-8">Browse through inspiring stories of our successful students</p>
          </div>

          {/* Compact Search and Filters Row */}
          <div className="bg-gray-100 rounded-xl shadow-md p-4 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 min-w-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => handleFilterChange(setSearchTerm, e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={selectedYear}
                  onChange={(e) => handleFilterChange(setSelectedYear, e.target.value)}
                  className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                >
                  <option value="all">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleClearFilters}
                  className="px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear
                </button>
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-600 whitespace-nowrap">{filteredStories.length} stories</div>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {paginatedStories.map((story) => (
              <div
                key={story.id}
                className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* Country Image Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={countryImages[story.country] || countryImages["India"]}
                      alt={`${story.country}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-red-600/70"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
                    <h3 className="font-bold text-center text-sm mb-2 drop-shadow-md">{story.name}</h3>
                    <div className="bg-gray-900 px-3 py-1 rounded-full flex items-center justify-center mb-2">
                      <span className="text-xs font-medium text-white">{story.country}</span>
                    </div>
                    {story.university && (
                      <div className="text-xs text-center text-white/90 drop-shadow-md line-clamp-1">
                        {story.university}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-gray-800">
                  <h4 className="font-semibold text-sm mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 text-white">
                    {story.achievement}
                  </h4>
                  {story.course && (
                    <p className="text-gray-400 text-xs mb-2 line-clamp-1">
                      <strong>Course:</strong> {story.course}
                    </p>
                  )}
                  {story.intake && (
                    <p className="text-gray-400 text-xs mb-3">
                      <strong>Intake:</strong> {story.intake}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold uppercase tracking-wide">
                      {story.category.replace("-", " ")}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {story.month} {story.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors text-gray-900"
              >
                Previous
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-orange-500 text-white"
                        : "border border-gray-300 hover:bg-gray-100 text-gray-900"
                    }`}
                  >
                    {page}
                  </button>
                )
              })}

              {totalPages > 5 && (
                <>
                  <span className="px-2 text-gray-600">...</span>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === totalPages
                        ? "bg-orange-500 text-white"
                        : "border border-gray-300 hover:bg-gray-100 text-gray-900"
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors text-gray-900"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved their study abroad dreams with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
