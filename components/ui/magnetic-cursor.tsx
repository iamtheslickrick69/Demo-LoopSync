"use client"

import { useEffect, useState, useRef } from "react"

export function MagneticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.style.cursor === "pointer"

      setIsPointer(isInteractive)
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  return (
    <>
      {/* Outer cursor ring */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference transition-all duration-300 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
            isPointer
              ? "w-12 h-12 border-blue-400 bg-blue-400/20"
              : "w-10 h-10 border-white/60"
          }`}
        />
      </div>

      {/* Inner cursor dot */}
      <div
        ref={cursorDotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] transition-all duration-100 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "scale-0" : "scale-100"}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white mix-blend-difference" />
      </div>
    </>
  )
}
