"use client"

import { useState } from "react"
import { MessageSquare, Shield, LineChart, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const steps = [
  {
    number: "01",
    title: "Employees share",
    description:
      "Team members text Coro, our AI assistant, anytime. No apps, no accounts — just natural conversation via SMS.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Identity protected",
    description:
      "All messages are anonymized and encrypted. Employee identities are never linked to feedback, ensuring complete trust.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Insights surface",
    description:
      "AI analyzes patterns across hundreds of conversations, surfacing trends and risks in real-time dashboards.",
    icon: LineChart,
  },
  {
    number: "04",
    title: "Action taken",
    description: "Leadership receives actionable insights and can respond to issues before they become crises.",
    icon: CheckCircle,
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-semibold text-[#E8B4A0] uppercase tracking-wide">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            More Personal Than a Manager.
            <br />
            More Scalable Than Software.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto text-pretty">
            Whether it's 50 warehouse workers or 5,000 customers, Coro remembers every conversation, follows up on every
            concern, and closes the loop on every promise.
          </p>
        </ScrollAnimation>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollAnimation key={step.number} delay={index * 0.1}>
              <div
                onMouseEnter={() => setActiveStep(index)}
                className={`relative bg-white rounded-2xl border p-6 lg:p-8 transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? "border-[#FFE5D9] shadow-lg shadow-[#FFE5D9]/30 scale-[1.02]"
                    : "border-slate-200 hover:border-[#FFE5D9]/50 hover:shadow-md"
                }`}
              >
                <div
                  className={`text-5xl font-bold mb-4 transition-colors ${
                    activeStep === index ? "text-[#FFDDD2]" : "text-slate-200"
                  }`}
                >
                  {step.number}
                </div>

                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                    activeStep === index ? "bg-[#FFE5D9]/30" : "bg-slate-100"
                  }`}
                >
                  <step.icon
                    className={`w-5 h-5 transition-colors ${
                      activeStep === index ? "text-[#E8B4A0]" : "text-slate-400"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>

                {/* Connector Line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
