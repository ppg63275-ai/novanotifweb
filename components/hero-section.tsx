"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-[calc(100vh-64px)] relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div
        className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-5xl sm:text-7xl font-bold text-balance mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Supernova
          </span>
          <br />
          <span className="text-foreground">Webhook Notifier</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 text-balance mb-8 leading-relaxed">
          Lightning-fast webhook notifications that explode with features. Get real-time alerts, advanced automation,
          and unmatched reliability.
        </p>

        {/* Feature badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
          {[
            { label: "99.9% Uptime", icon: "⚡" },
            { label: "Real-Time Alerts", icon: "🔔" },
            { label: "Instant Setup", icon: "🚀" },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-card border border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-glow"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <p className="text-sm font-medium text-foreground">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
