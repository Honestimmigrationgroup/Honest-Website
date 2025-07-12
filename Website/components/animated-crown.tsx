"use client"

import { useEffect } from "react"

const CrownAnimation = () => {
  useEffect(() => {
    const createCrown = () => {
      const crown = document.createElement("div")
      crown.innerHTML = "👑"
      crown.style.position = "absolute"
      crown.style.fontSize = "24px"
      crown.style.pointerEvents = "none"
      crown.style.zIndex = "1"
      crown.style.opacity = "0.7"

      // Random horizontal position
      crown.style.left = Math.random() * 100 + "%"
      crown.style.bottom = "0px"

      // Add to the animation container
      const container = document.querySelector(".crown-animation-container")
      if (container) {
        container.appendChild(crown)

        // Animate the crown
        let position = 0
        let opacity = 0.7
        let scale = 1

        const animate = () => {
          position += 1
          opacity -= 0.005
          scale += 0.002

          crown.style.bottom = position + "px"
          crown.style.opacity = opacity.toString()
          crown.style.transform = `scale(${scale})`

          if (opacity > 0 && position < window.innerHeight + 100) {
            requestAnimationFrame(animate)
          } else {
            crown.remove()
          }
        }

        requestAnimationFrame(animate)
      }
    }

    // Create crowns periodically
    const interval = setInterval(createCrown, 2500)

    return () => {
      clearInterval(interval)
      // Clean up any remaining crowns
      const container = document.querySelector(".crown-animation-container")
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [])

  return <div className="crown-animation-container absolute inset-0 overflow-hidden pointer-events-none" />
}

export default CrownAnimation
