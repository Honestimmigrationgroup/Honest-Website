"use client"

import { useEffect, useState } from "react"

export default function AnimatedKiwi() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
      })
    }, 3000)

    const visibilityInterval = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearInterval(visibilityInterval)
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-10 transition-all duration-1000 ${
        isVisible ? "opacity-70" : "opacity-20"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="text-6xl animate-bounce">🥝</div>
    </div>
  )
}
