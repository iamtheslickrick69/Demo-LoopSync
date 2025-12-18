"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Lock, MessageSquare, ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const ParticleInfinity = dynamic(() => import("@/components/particle-infinity").then((mod) => mod.ParticleInfinity), {
  ssr: false,
})

const rotatingWords = ["Employees", "Customers", "Team", "Frontline"]

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Particle Infinity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 flex items-center justify-center">
        <ParticleInfinity />
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-slate-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 text-center">
        {/* Badge with entrance animation */}
        <div
          className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </div>
          <span className="text-sm font-medium text-slate-300">Introducing LoopSync</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
        </div>

        {/* Headline with staggered animation */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block mb-2">The #1 Platform to Collect</span>
          <span className="block mb-2">Real Feedback From Your</span>
          <span className="relative inline-block">
            <span
              className={`inline-block bg-gradient-to-r from-slate-300 via-white to-slate-300 bg-clip-text text-transparent transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {rotatingWords[wordIndex]}
            </span>
          </span>
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">.</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-white font-medium">Coro is your secure third-party escrow.</span> Real conversations
          with employees and customers via text. Real insights to leadership — with your data never shared or sold.
        </p>

        {/* Trust Points with stagger */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-700/30 px-4 py-2 rounded-full border border-slate-600/50 hover:border-white/30 transition-colors">
            <Shield className="w-4 h-4 text-slate-300" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-700/30 px-4 py-2 rounded-full border border-slate-600/50 hover:border-white/30 transition-colors">
            <Lock className="w-4 h-4 text-slate-300" />
            <span>End-to-End Encrypted</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-700/30 px-4 py-2 rounded-full border border-slate-600/50 hover:border-white/30 transition-colors">
            <MessageSquare className="w-4 h-4 text-slate-300" />
            <span>98% Response Rate</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-300 to-white rounded-xl opacity-70 blur group-hover:opacity-100 transition-opacity duration-300" />
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-white to-slate-200 hover:from-slate-100 hover:to-white text-slate-900 px-8 py-6 text-base font-semibold rounded-xl shadow-2xl"
            >
              See Coro in Action
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base font-medium border-slate-600 hover:bg-slate-700/50 rounded-xl bg-slate-800/50 text-white backdrop-blur-sm"
          >
            <Play className="mr-2 w-4 h-4 text-slate-300" />
            Watch Demo
          </Button>
        </div>

        <p
          className={`text-sm text-slate-500 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          No credit card required • Your data stays yours • 2 min setup
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </div>
      </div>
    </section>
  )
}
