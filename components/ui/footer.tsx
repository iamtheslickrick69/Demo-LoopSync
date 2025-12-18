import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-semibold text-xl text-slate-900">
              Loop<span className="text-orange-500">Sync</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm text-slate-600 hover:text-orange-500 transition-colors">
              Dashboard
            </Link>
            <a href="#" className="text-sm text-slate-600 hover:text-orange-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-orange-500 transition-colors">
              Terms
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-slate-500">© 2025 LoopSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
