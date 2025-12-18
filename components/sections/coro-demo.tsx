"use client"

import { useState, useEffect } from "react"
import { Shield, Lock, Database, UserCheck, Users, ShoppingBag, Star } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function CoroDemoSection() {
  const [activeTab, setActiveTab] = useState<"employees" | "customers">("employees")
  const [employeeMessage, setEmployeeMessage] = useState(0)
  const [customerMessage, setCustomerMessage] = useState(0)

  const employeeMessages = [
    { type: "coro", text: "Hey Sarah! This is Coro. Got a minute for a quick check-in?" },
    { type: "user", text: "Sure, what's up?" },
    { type: "coro", text: "How are you feeling about work this week? Scale of 1-10?" },
    { type: "user", text: "Honestly? Maybe a 5. The new project timeline feels impossible." },
    { type: "coro", text: "I hear you. What would help make that timeline more manageable?" },
    { type: "user", text: "More resources or pushing the deadline back a week would help." },
  ]

  const customerMessages = [
    { type: "customer", text: "Just had an amazing experience at your store! Sarah was so helpful." },
    {
      type: "coro",
      text: "That's wonderful to hear! We'd love for others to know. Would you share your experience on Google?",
    },
    { type: "customer", text: "Sure, happy to!" },
    { type: "coro", text: "Thank you! Here's a direct link. As a thank you, enjoy 15% off your next visit!" },
    { type: "customer", text: "Awesome, just left a 5-star review!" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeTab === "employees") {
        setEmployeeMessage((prev) => (prev + 1) % employeeMessages.length)
      } else {
        setCustomerMessage((prev) => (prev + 1) % customerMessages.length)
      }
    }, 2500)
    return () => clearInterval(timer)
  }, [activeTab, employeeMessages.length, customerMessages.length])

  useEffect(() => {
    if (activeTab === "employees") {
      setEmployeeMessage(0)
    } else {
      setCustomerMessage(0)
    }
  }, [activeTab])

  return (
    <section className="overflow-hidden">
      {/* Tab Toggle */}
      <div
        className={`py-8 transition-colors duration-500 ${activeTab === "employees" ? "bg-slate-800" : "bg-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div
              className={`inline-flex rounded-full p-1 ${activeTab === "employees" ? "bg-slate-700" : "bg-white shadow-md border border-slate-300"}`}
            >
              <button
                onClick={() => setActiveTab("employees")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "employees"
                    ? "bg-gradient-to-r from-white to-slate-200 text-slate-900 shadow-lg"
                    : activeTab === "customers"
                      ? "text-slate-600 hover:text-slate-900"
                      : "text-slate-400 hover:text-white"
                }`}
              >
                <Users className="w-4 h-4" />
                Employees
              </button>
              <button
                onClick={() => setActiveTab("customers")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "customers"
                    ? "bg-gradient-to-r from-white to-slate-200 text-slate-900 shadow-lg"
                    : activeTab === "employees"
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                Customers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Tab Content */}
      {activeTab === "employees" && (
        <div className="py-16 lg:py-24 bg-slate-800 text-white min-h-[800px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content Left */}
              <ScrollAnimation>
                <span className="inline-block text-sm font-semibold text-slate-300 uppercase tracking-wide mb-4">
                  Meet Coro
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 text-balance">
                  Not AI. Not a Bot.
                  <br />
                  <span className="text-slate-300">A Trusted Third-Party Escrow.</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 text-pretty">
                  Coro is an intelligent closed-source script, trained by AI but not AI itself. It's the neutral bridge
                  between your employees and leadership — a third-party escrow that protects both sides.
                </p>

                <div className="bg-slate-700/50 backdrop-blur rounded-2xl p-6 mb-8 border border-slate-600 hover:border-white/30 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-300 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-slate-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Your Data. Period.</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        We created Coro so no one profits from your sensitive information. Your data is never shared
                        with third parties. Never sold. Never used to train external models.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-600">
                    <div className="text-center">
                      <Lock className="w-5 h-5 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs text-slate-500">End-to-End Encrypted</p>
                    </div>
                    <div className="text-center">
                      <Database className="w-5 h-5 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs text-slate-500">Zero Data Selling</p>
                    </div>
                    <div className="text-center">
                      <UserCheck className="w-5 h-5 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs text-slate-500">You Own It All</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 border border-white/20">
                  <UserCheck className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-white">Better than passwords:</span> Your 10-digit phone number
                    is your secure key. Only you can access your conversation history — not even executives can see who
                    said what.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2} className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-[340px] sm:w-[380px] bg-white rounded-[3rem] p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-slate-50 px-6 py-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-900">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-slate-300 rounded-sm" />
                          <div className="w-4 h-2 bg-slate-300 rounded-sm" />
                          <div className="w-6 h-3 bg-slate-900 rounded-sm" />
                        </div>
                      </div>

                      {/* Chat Header */}
                      <div className="bg-white px-4 py-4 border-b border-slate-200 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                          <span className="text-white font-semibold">C</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Coro</p>
                          <p className="text-sm text-slate-500">Secure Escrow • Online</p>
                        </div>
                      </div>

                      <div className="bg-slate-100 p-4 space-y-4 min-h-[480px]">
                        {employeeMessages.map((msg, index) => (
                          <div
                            key={index}
                            className={`flex ${msg.type === "user" ? "justify-end" : "gap-2"} transition-all duration-300 ${
                              index <= employeeMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                            }`}
                          >
                            {msg.type === "coro" && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shrink-0">
                                <span className="text-white font-semibold text-xs">C</span>
                              </div>
                            )}
                            <div
                              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                msg.type === "user"
                                  ? "bg-slate-800 text-white rounded-br-md"
                                  : "bg-white text-slate-800 rounded-bl-md shadow-sm"
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      )}

      {/* Customer Tab Content - Same height as employee tab, full size phone */}
      {activeTab === "customers" && (
        <div className="py-16 lg:py-24 bg-slate-200 min-h-[800px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollAnimation className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-[340px] sm:w-[380px] bg-white rounded-[3rem] p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-slate-50 px-6 py-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-900">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-slate-300 rounded-sm" />
                          <div className="w-4 h-2 bg-slate-300 rounded-sm" />
                          <div className="w-6 h-3 bg-slate-900 rounded-sm" />
                        </div>
                      </div>

                      {/* Chat Header */}
                      <div className="bg-white px-4 py-4 border-b border-slate-200 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                          <span className="text-white font-semibold">C</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Coro</p>
                          <p className="text-sm text-slate-500">Customer Feedback</p>
                        </div>
                        {/* Review badge */}
                        <div className="ml-auto flex items-center gap-1 bg-amber-100 px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span className="text-xs font-semibold text-amber-700">+47 Reviews</span>
                        </div>
                      </div>

                      <div className="bg-slate-100 p-4 space-y-4 min-h-[480px]">
                        {customerMessages.map((msg, index) => (
                          <div
                            key={index}
                            className={`flex ${msg.type === "customer" ? "justify-end" : "gap-2"} transition-all duration-300 ${
                              index <= customerMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                            }`}
                          >
                            {msg.type === "coro" && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shrink-0">
                                <span className="text-white font-semibold text-xs">C</span>
                              </div>
                            )}
                            <div
                              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                msg.type === "customer"
                                  ? "bg-slate-800 text-white rounded-br-md"
                                  : "bg-white text-slate-800 rounded-bl-md shadow-sm"
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Content Right */}
              <ScrollAnimation delay={0.2}>
                <span className="inline-block text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">
                  Customer Feedback
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900 text-balance">
                  Prevent Bad Reviews.
                  <br />
                  <span className="text-slate-500">Reward Good Ones.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 text-pretty">
                  Give customers a direct line to you before they go to Google. Capture feedback, resolve issues, and
                  turn happy customers into 5-star advocates.
                </p>

                <div className="bg-white rounded-2xl p-6 mb-8 border border-slate-300 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm text-slate-500 mb-2">Text feedback to</p>
                  <p className="text-2xl font-bold text-slate-900 mb-4">(555) 123-CORO</p>
                  <p className="text-sm text-slate-600">
                    One number for employees and customers. Post in-store, on receipts, or on your website.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-300/50 border border-slate-400/50">
                  <Star className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-slate-900">Customizable rewards:</span> Offer discounts, free
                    items, loyalty points, or any reward you choose to thank customers for positive reviews.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
