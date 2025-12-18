"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
  ]

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="relative">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-slate-400/50 via-white/50 to-slate-400/50 rounded-2xl opacity-60 blur-[1px] animate-pulse" />

        <div
          className={`relative flex items-center gap-2 px-2 py-2 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-slate-800/95 backdrop-blur-xl shadow-2xl shadow-slate-500/10"
              : "bg-slate-700/90 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 pl-3 pr-4 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-500 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <svg
                viewBox="0 0 32 32"
                className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm8 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
              </svg>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Loop<span className="text-slate-300">Sync</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-slate-600/50 rounded-xl p-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeLink === link.id ? "text-slate-900" : "text-slate-300 hover:text-white"
                }`}
              >
                {activeLink === link.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-slate-200 rounded-lg shadow-lg shadow-white/25" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-300 hover:text-white rounded-xl hover:bg-slate-600/50 transition-colors mr-1"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2">
          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-slate-400/30 via-white/30 to-slate-400/30 rounded-2xl opacity-60 blur-[1px]" />
            <div className="relative bg-slate-800/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeLink === link.id
                        ? "bg-white text-slate-900"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
