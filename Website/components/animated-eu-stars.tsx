"use client"

import { useEffect, useState } from "react"

const AnimatedEUStars = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string; size: string }>>([])

  useEffect(() => {
    const newStars = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${0.8 + Math.random() * 0.4}rem`,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-yellow-400 animate-twinkle-success"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            fontSize: star.size,
          }}
        >
          ⭐
        </div>
      ))}
    </div>
  )
}

export default AnimatedEUStars
