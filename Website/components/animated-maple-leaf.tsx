"use client"

import { useEffect } from "react"

const MapleLeafAnimation = () => {
  useEffect(() => {
    const createMapleLeaves = () => {
      const leavesContainer = document.querySelector(".maple-leaves-container")
      if (!leavesContainer) return

      // Create multiple maple leaves
      for (let i = 0; i < 10; i++) {
        const leaf = document.createElement("div")
        leaf.className = "animated-maple-leaf"
        leaf.innerHTML = "🍁"

        // Random positioning
        leaf.style.left = Math.random() * 100 + "%"
        leaf.style.top = Math.random() * 100 + "%"
        leaf.style.fontSize = Math.random() * 1.5 + 0.8 + "rem"

        // Random animation delay
        leaf.style.animationDelay = Math.random() * 3 + "s"

        leavesContainer.appendChild(leaf)

        // Remove leaf after animation cycle
        setTimeout(() => {
          if (leaf.parentNode) {
            leaf.parentNode.removeChild(leaf)
          }
        }, 4000)
      }
    }

    // Create initial leaves
    createMapleLeaves()

    // Create leaves periodically
    const leavesInterval = setInterval(createMapleLeaves, 2500)

    return () => {
      clearInterval(leavesInterval)
    }
  }, [])

  return (
    <div className="maple-leaves-container absolute inset-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        .animated-maple-leaf {
          position: absolute;
          opacity: 0;
          animation: mapleLeafFloat 4s ease-in-out forwards;
          pointer-events: none;
        }

        @keyframes mapleLeafFloat {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8) rotate(0deg);
          }
          20% {
            opacity: 0.6;
            transform: translateY(0px) scale(1) rotate(90deg);
          }
          80% {
            opacity: 0.6;
            transform: translateY(-10px) scale(1.1) rotate(270deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.8) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default MapleLeafAnimation
