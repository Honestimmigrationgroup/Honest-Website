interface TestimonialCardProps {
  name: string
  university: string
  country: string
  image: string
  quote: string
}

const TestimonialCard = ({ name, university, country, image, quote }: TestimonialCardProps) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{university}</p>
          <p className="text-xs text-orange-500">{country}</p>
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-gray-700 italic">"{quote}"</p>
      </div>
    </div>
  )
}

export default TestimonialCard
