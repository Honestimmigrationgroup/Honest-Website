"use client"

import { useEffect } from "react"

const StarsAnimation = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector(".stars-container")
      if (!starsContainer) return

      // Create multiple stars
      for (let i = 0; i < 12; i++) {
        const star = document.createElement("div")
        star.className = "animated-star"
        star.innerHTML = "⭐"

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
    createStars()

    // Create stars periodically
    const starsInterval = setInterval(createStars, 2500)

    return () => {
      clearInterval(starsInterval)
    }
  }, [])

  return (
    <div className="stars-container absolute inset-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        .animated-star {
          position: absolute;
          opacity: 0;
          animation: starFloat 4s ease-in-out forwards;
          pointer-events: none;
        }

        @keyframes starFloat {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          20% {
            opacity: 0.8;
            transform: translateY(0px) scale(1);
          }
          80% {
            opacity: 0.8;
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

export default StarsAnimation
