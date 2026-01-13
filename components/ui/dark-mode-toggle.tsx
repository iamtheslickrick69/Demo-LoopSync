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

    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  return (
    <button
      onClick={toggleDarkMode}
      disabled={isAnimating}
      className="relative w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
      aria-label="Toggle dark mode"
    >
      {/* Icon container with simple fade */}
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-[#0066FF] transition-all duration-200 ${
            isDark ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-slate-300 transition-all duration-200 ${
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />
      </div>
    </button>
  )
}
