import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 text-balance">
            Right Now, Someone on Your Team Is Thinking About Quitting.
            <br />
            <span className="text-orange-400">You Just Don't Know It Yet.</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Coro closes the blind spots. See what you're missing before it's too late.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-rose-600 rounded-xl opacity-70 blur group-hover:opacity-100 transition-opacity duration-300" />
              <Button
                size="lg"
                className="relative bg-white hover:bg-slate-100 text-slate-900 px-8 py-6 text-base font-semibold shadow-2xl group"
              >
                See What Your Employees Aren't Telling You
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-slate-600 text-white hover:bg-slate-800 group bg-transparent"
            >
              <Play className="mr-2 w-4 h-4 text-orange-400" />
              Watch Demo
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
