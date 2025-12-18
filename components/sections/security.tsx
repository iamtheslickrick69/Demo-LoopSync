import { Lock, EyeOff, Trash2, Users, Shield, Scale } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All messages are encrypted in transit and at rest using AES-256 encryption standards.",
  },
  {
    icon: EyeOff,
    title: "Anonymous by Design",
    description: "Employee identities are never linked to feedback. True anonymity builds trust.",
  },
  {
    icon: Trash2,
    title: "Zero Data Retention",
    description: "Raw message content is processed and discarded. Only aggregated insights are stored.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permissions ensure only authorized personnel see relevant insights.",
  },
]

const certifications = [
  { icon: Shield, title: "SOC 2 Type II Compliant", description: "Independently audited security controls" },
  { icon: Scale, title: "GDPR & CCPA Ready", description: "Full regulatory compliance" },
]

export function SecuritySection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Enterprise Security</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Security That Earns
            <br />
            Employee Trust
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Built from the ground up with privacy and security as core principles, not afterthoughts.
          </p>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 0.1}>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-orange-200 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-rose-100 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Certifications */}
        <ScrollAnimation delay={0.4}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 bg-slate-900 rounded-xl p-5 hover:scale-[1.02] transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shrink-0">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{cert.title}</h4>
                  <p className="text-sm text-slate-400">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
