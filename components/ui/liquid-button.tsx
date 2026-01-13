"use client"

import { useState, useRef, ReactNode } from "react"

interface LiquidButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export function LiquidButton({ children, className = "", onClick, href }: LiquidButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  const handleClick = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    const newRipple = { x, y, id: Date.now() }
    setRipples([...ripples, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  const content = (
    <>
      {/* Gradient blob that follows cursor */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-xl"
        style={{
          background: `radial-gradient(circle 120px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15), transparent 70%)`,
        }}
      />

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-2 h-2 rounded-full bg-white/40 animate-ripple pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`group relative overflow-hidden ${className}`}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={`group relative overflow-hidden ${className}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      {content}
    </button>
  )
}
