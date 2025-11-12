"use client"

import { ExternalLink } from "lucide-react"

export default function DiscordSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-cyan-600/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 animate-float">
          <div className="text-7xl mb-6">💜</div>
        </div>

        <h2 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Join Our Community
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-foreground/70 mb-12 leading-relaxed">
          Connect with thousands of developers, share ideas, get support, and stay updated with the latest Nova
          features.
        </p>

        <a
          href="https://discord.gg/novanotifier"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-background rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 mb-8"
        >
          Join Discord Server
          <ExternalLink className="w-5 h-5" />
        </a>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto">
          {[
            { label: "15K+ Members", value: "15K+" },
            { label: "Active Channels", value: "20+" },
            { label: "Response Time", value: "< 1 min" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-card border border-primary/20 backdrop-blur-sm animate-glow"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</p>
              <p className="text-xs text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
