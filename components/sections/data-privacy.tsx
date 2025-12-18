import { Shield, Lock, Eye, Database, Server, UserX, CheckCircle2 } from "lucide-react"

export function DataPrivacySection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">Data Privacy</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-background tracking-tight text-balance">
            We Created Coro So
            <br />
            <span className="text-primary">No One Profits From Your Data.</span>
          </h2>
          <p className="mt-4 text-lg text-background/70 max-w-3xl mx-auto">
            Unlike other platforms, we don't sell data, share with third parties, or use your sensitive information to
            train models. Your data belongs to you. Period.
          </p>
        </div>

        {/* Trust Architecture Visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-background/10 backdrop-blur rounded-3xl p-8 border border-background/20">
            <h3 className="text-xl font-bold text-background text-center mb-8">The Coro Escrow Model</h3>

            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Left: Employee/Customer */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <p className="font-semibold text-background">Employees & Customers</p>
                <p className="text-sm text-background/60 mt-1">Share feedback via SMS</p>
              </div>

              {/* Middle: Coro */}
              <div className="text-center relative">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mx-auto mb-3 shadow-xl shadow-primary/30">
                    <Shield className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="font-bold text-background text-lg">Coro</p>
                  <p className="text-sm text-primary mt-1">Neutral Third-Party Escrow</p>
                </div>
              </div>

              {/* Right: Executives */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Database className="w-10 h-10 text-accent" />
                </div>
                <p className="font-semibold text-background">Executives</p>
                <p className="text-sm text-background/60 mt-1">See insights, not identities</p>
              </div>
            </div>

            {/* Key point */}
            <div className="mt-8 p-4 rounded-xl bg-primary/20 border border-primary/30 text-center">
              <p className="text-background font-medium">
                <span className="text-primary">Key:</span> Even executives can't see who said what — only aggregated
                insights that drive action.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-background/20">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <UserX className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-background text-lg mb-2">Never Shared</h3>
            <p className="text-background/60 text-sm">
              Your data is never shared with third parties. No advertisers. No data brokers. No exceptions.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-background/20">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-background text-lg mb-2">Never Sold</h3>
            <p className="text-background/60 text-sm">
              We will never sell your data. Our business model is subscriptions, not your information.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-background/20">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-background text-lg mb-2">Phone = Your Key</h3>
            <p className="text-background/60 text-sm">
              Your 10-digit phone number is your secure login. Only you can access your conversation history.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-background/20">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-background text-lg mb-2">RAG + Vector DB</h3>
            <p className="text-background/60 text-sm">
              Coro remembers your conversation context securely, providing continuity without compromising privacy.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-background/20">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-background text-lg mb-2">Anonymous to Execs</h3>
            <p className="text-background/60 text-sm">
              Executives get actionable insights, never raw conversations. Identity stays protected.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-background/20">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-background text-lg mb-2">SOC 2 + GDPR</h3>
            <p className="text-background/60 text-sm">
              Enterprise-grade compliance. Independently audited. Built for regulated industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
