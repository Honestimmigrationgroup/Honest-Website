import { Star, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GoogleReviewsCard() {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-white to-gray-50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Google Reviews</h3>
              <p className="text-sm text-gray-500">What our clients say</p>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl font-bold text-gray-900">4.8</div>
          <div className="flex flex-col">
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-600">224 reviews</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm">Based on authentic Google Reviews from our satisfied clients</p>
      </CardContent>
    </Card>
  )
}
