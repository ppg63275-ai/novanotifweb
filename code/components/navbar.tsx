"use client"

interface NavBarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function NavBar({ activeTab, setActiveTab }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-70 animate-pulse-glow" />
              <div className="relative bg-background px-3 py-1.5 rounded-lg">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Nova
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center gap-1">
            {["home", "prices", "vouches", "discord"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
