"use client"

import { useState, useEffect } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

const CounterAnimation = ({ end, duration = 2000, suffix = "", className = "" }: CounterAnimationProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true)
      const startTime = Date.now()
      const startCount = 0

      const updateCount = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startCount + (end - startCount) * easeOutQuart)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [end, duration, hasAnimated])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}

export default CounterAnimation
