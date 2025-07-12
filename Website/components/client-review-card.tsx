"use client"

import { Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface ClientReviewCardProps {
  name: string
  timeAgo: string
  review: string
}

export default function ClientReviewCard({ name, timeAgo, review }: ClientReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to truncate text to approximately 3 lines (around 150 characters)
  const truncateText = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  const shouldTruncate = review.length > 150

  return (
    <Card
      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full cursor-pointer group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-sm text-gray-500 mb-2">{timeAgo}</p>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <p
            className={`text-gray-600 leading-relaxed text-sm transition-all duration-300 ${
              isExpanded ? "max-h-none" : "max-h-[4.5rem] line-clamp-3"
            }`}
          >
            {isExpanded || !shouldTruncate ? review : truncateText(review)}
          </p>
          {shouldTruncate && !isExpanded && (
            <div className="mt-2">
              <span className="text-orange-500 text-xs font-medium">Hover to read more</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
