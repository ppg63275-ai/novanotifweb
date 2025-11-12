"use client"

import { useState } from "react"
import NavBar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PricingSection from "@/components/pricing-section"
import VouchesSection from "@/components/vouches-section"
import DiscordSection from "@/components/discord-section"
import Footer from "@/components/footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated background stars */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ top: "10%", left: "10%" }} />
        <div
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
          style={{ top: "20%", left: "80%", animationDelay: "0.5s" }}
        />
        <div
          className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
          style={{ top: "60%", left: "15%", animationDelay: "1s" }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"
          style={{ top: "70%", left: "85%", animationDelay: "0.3s" }}
        />
        <div
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{ top: "40%", left: "50%", animationDelay: "0.8s" }}
        />
      </div>

      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative">
        {activeTab === "home" && <HeroSection />}
        {activeTab === "prices" && <PricingSection />}
        {activeTab === "vouches" && <VouchesSection />}
        {activeTab === "discord" && <DiscordSection />}
      </main>

      <Footer />
    </div>
  )
}
