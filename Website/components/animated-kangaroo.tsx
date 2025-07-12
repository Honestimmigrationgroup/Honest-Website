"use client"

import { useEffect } from "react"

const KangarooAnimation = () => {
  useEffect(() => {
    const createKangaroos = () => {
      const kangaroosContainer = document.querySelector(".kangaroo-container")
      if (!kangaroosContainer) return

      // Create multiple kangaroos
      for (let i = 0; i < 8; i++) {
        const kangaroo = document.createElement("div")
        kangaroo.className = "animated-kangaroo"
        kangaroo.innerHTML = "🦘"

        // Random positioning
        kangaroo.style.left = Math.random() * 100 + "%"
        kangaroo.style.top = Math.random() * 100 + "%"
        kangaroo.style.fontSize = Math.random() * 1.5 + 0.8 + "rem"

        // Random animation delay
        kangaroo.style.animationDelay = Math.random() * 3 + "s"

        kangaroosContainer.appendChild(kangaroo)

        // Remove kangaroo after animation cycle
        setTimeout(() => {
          if (kangaroo.parentNode) {
            kangaroo.parentNode.removeChild(kangaroo)
          }
        }, 4000)
      }
    }

    // Create initial kangaroos
    createKangaroos()

    // Create kangaroos periodically
    const kangaroosInterval = setInterval(createKangaroos, 2500)

    return () => {
      clearInterval(kangaroosInterval)
    }
  }, [])

  return (
    <div className="kangaroo-container absolute inset-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        .animated-kangaroo {
          position: absolute;
          opacity: 0;
          animation: kangarooFloat 4s ease-in-out forwards;
          pointer-events: none;
        }

        @keyframes kangarooFloat {
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

export default KangarooAnimation
