"use client"

import { useEffect } from "react"

const LondonBridgeAnimation = () => {
  useEffect(() => {
    const createBridge = () => {
      const bridge = document.createElement("div")
      bridge.innerHTML = "🌉"
      bridge.style.position = "absolute"
      bridge.style.fontSize = "24px"
      bridge.style.pointerEvents = "none"
      bridge.style.zIndex = "1"
      bridge.style.opacity = "0.7"

      // Random horizontal position
      bridge.style.left = Math.random() * 100 + "%"
      bridge.style.bottom = "0px"

      // Add to the animation container
      const container = document.querySelector(".bridge-animation-container")
      if (container) {
        container.appendChild(bridge)

        // Animate the bridge
        let position = 0
        let opacity = 0.7
        let scale = 1

        const animate = () => {
          position += 1
          opacity -= 0.005
          scale += 0.002

          bridge.style.bottom = position + "px"
          bridge.style.opacity = opacity.toString()
          bridge.style.transform = `scale(${scale})`

          if (opacity > 0 && position < window.innerHeight + 100) {
            requestAnimationFrame(animate)
          } else {
            bridge.remove()
          }
        }

        requestAnimationFrame(animate)
      }
    }

    // Create bridges periodically
    const interval = setInterval(createBridge, 2500)

    return () => {
      clearInterval(interval)
      // Clean up any remaining bridges
      const container = document.querySelector(".bridge-animation-container")
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [])

  return <div className="bridge-animation-container absolute inset-0 overflow-hidden pointer-events-none" />
}

export default LondonBridgeAnimation
