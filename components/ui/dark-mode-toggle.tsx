"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsAnimating(true)

    // Create wave effect
    const wave = document.createElement("div")
    wave.className = "dark-mode-wave"
    document.body.appendChild(wave)

    setTimeout(() => {
      setIsDark(!isDark)
      if (!isDark) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }, 400)

    setTimeout(() => {
      document.body.removeChild(wave)
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <>
      <button
        onClick={toggleDarkMode}
        disabled={isAnimating}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group overflow-hidden"
        aria-label="Toggle dark mode"
      >
        {/* Icon container with rotation animation */}
        <div
          className={`relative w-6 h-6 transition-transform duration-700 ${
            isDark ? "rotate-180" : "rotate-0"
          }`}
        >
          <Sun
            className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ${
              isDark ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
            }`}
          />
          <Moon
            className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ${
              isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
            }`}
          />
        </div>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300" />
      </button>

      <style jsx global>{`
        @keyframes darkModeWave {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        .dark-mode-wave {
          position: fixed;
          top: 50%;
          right: 2rem;
          width: 100vmax;
          height: 100vmax;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(15, 23, 42, 0.95) 0%,
            rgba(15, 23, 42, 0.8) 50%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 9998;
          animation: darkModeWave 1s ease-out forwards;
        }

        html.dark .dark-mode-wave {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 100%
          );
        }
      `}</style>
    </>
  )
}
