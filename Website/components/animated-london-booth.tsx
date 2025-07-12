"use client"

import { useEffect } from "react"

const CrownAnimation = () => {
  useEffect(() => {
    const createBooths = () => {
      const boothsContainer = document.querySelector(".crown-container")
      if (!boothsContainer) return

      // Create multiple booths - same quantity as other countries
      for (let i = 0; i < 10; i++) {
        const booth = document.createElement("div")
        booth.className = "animated-crown"
        booth.innerHTML = "👑"

        // Random positioning
        booth.style.left = Math.random() * 100 + "%"
        booth.style.top = Math.random() * 100 + "%"
        booth.style.fontSize = Math.random() * 1.5 + 0.8 + "rem"

        // Random animation delay
        booth.style.animationDelay = Math.random() * 3 + "s"

        boothsContainer.appendChild(booth)

        // Remove booth after animation cycle
        setTimeout(() => {
          if (booth.parentNode) {
            booth.parentNode.removeChild(booth)
          }
        }, 4000)
      }
    }

    // Create initial booths
    createBooths()

    // Create booths periodically - same frequency as other countries
    const boothsInterval = setInterval(createBooths, 2500)

    return () => {
      clearInterval(boothsInterval)
    }
  }, [])

  return (
    <div className="crown-container absolute inset-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        .animated-crown {
          position: absolute;
          opacity: 0;
          animation: crownFloat 4s ease-in-out forwards;
          pointer-events: none;
        }

        @keyframes crownFloat {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          20% {
            opacity: 0.6;
            transform: translateY(0px) scale(1);
          }
          80% {
            opacity: 0.6;
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.8);
          }
        }
      `}</style>
    </div>
  )
}

export default CrownAnimation
