"use client"

import { Check, X } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const oldWayItems = [
  "Emails nobody reads (20% open rate)",
  "Quarterly surveys with stale data",
  "Exit interviews—after they quit",
  "6+ weeks to see results",
]

const newWayItems = [
  "SMS everyone reads (98% open rate)",
  "Continuous real-time feedback",
  "Catch issues before they escalate",
  "Instant insights, immediate action",
]

export function RevolutionSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">The Revolution</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Old HR tools <span className="text-slate-400">vs.</span> LoopSync + Coro
          </h2>
        </ScrollAnimation>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Old Way */}
          <ScrollAnimation delay={0.1}>
            <div className="relative group">
              <div className="absolute inset-0 bg-slate-100 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative p-8">
                <div className="mb-6">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">The Old Way</span>
                </div>
                <ul className="space-y-4">
                  {oldWayItems.map((item, index) => (
                    <li key={item} className="flex items-start gap-3" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 text-slate-400" />
                      </span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* New Way - Changed from orange to slate/silver gradient */}
          <ScrollAnimation delay={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="absolute inset-0 rounded-2xl border-2 border-slate-300/50 group-hover:border-slate-400 transition-colors" />
              <div className="relative p-8">
                <div className="mb-6">
                  <span className="text-xs font-medium text-slate-700 uppercase tracking-wider">With LoopSync</span>
                </div>
                <ul className="space-y-4">
                  {newWayItems.map((item, index) => (
                    <li key={item} className="flex items-start gap-3" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </span>
                      <span className="text-slate-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
