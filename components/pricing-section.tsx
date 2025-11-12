"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Copy } from "lucide-react"

export default function PricingSection() {
  const [selectedProduct, setSelectedProduct] = useState<"notifier" | "joiner">("notifier")
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const products = {
    notifier: {
      name: "Access Notifier",
      description: "Professional webhook notification service",
      tiers: [
        {
          name: "4 Hours",
          price: "$28",
          period: "4h @ $7/h",
          description: "Minimum 4-hour access",
          features: [
            "Full webhook access",
            "Real-time notifications",
            "4-hour active session",
            "Priority delivery",
            "Basic support",
          ],
          highlight: false,
        },
        {
          name: "12 Hours",
          price: "$40",
          period: "12h @ $7/h",
          description: "Extended access",
          features: [
            "Full webhook access",
            "Real-time notifications",
            "12-hour active session",
            "Priority delivery",
            "Priority support",
            "Auto Joiner +$5",
          ],
          highlight: true,
        },
        {
          name: "24 Hours",
          price: "$70",
          period: "24h @ $7/h",
          description: "Full day access",
          features: [
            "Full webhook access",
            "Real-time notifications",
            "24-hour active session",
            "Priority delivery",
            "24/7 priority support",
            "Auto Joiner included",
            "Unlimited requests",
          ],
          highlight: false,
        },
      ],
    },
    joiner: {
      name: "Auto Joiner",
      description: "Automated community joining and management",
      tiers: [
        {
          name: "4 Hours",
          price: "$33",
          period: "4h @ $7/h + $5",
          description: "Minimum 4-hour access",
          features: [
            "Auto-join functionality",
            "Basic automation rules",
            "4-hour active session",
            "Manual support",
            "Basic filtering",
          ],
          highlight: false,
        },
        {
          name: "12 Hours",
          price: "$45",
          period: "12h @ $7/h + $5",
          description: "Extended access with upgrade",
          features: [
            "Auto-join functionality",
            "Advanced automation rules",
            "12-hour active session",
            "Priority support",
            "Smart filtering",
            "Real-time analytics",
          ],
          highlight: true,
        },
        {
          name: "24 Hours",
          price: "$70",
          period: "24h (Auto Joiner included)",
          description: "Full day with both services",
          features: [
            "Full Access Notifier",
            "Auto Joiner included",
            "24-hour active session",
            "24/7 priority support",
            "Advanced automation",
            "Unlimited requests",
          ],
          highlight: false,
        },
      ],
    },
  }

  const paymentMethods = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      address: "bc1qargk5qugyfy4t3lw0c03wn9tkae9hzgg0upnuk",
      icon: "₿",
    },
    {
      name: "Solana",
      symbol: "SOL",
      address: "8jC2DASpGMWZt2ty4Zo626USH2B3BEeErB4Lp8jqL2oM",
      icon: "◎",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      address: "LetXAcAHM17dYzYK9XkZCdqDpLtKbRshhU",
      icon: "Ł",
    },
  ]

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopiedAddress(address)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  const currentProduct = products[selectedProduct]

  return (
    <section className="min-h-screen relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8">$7/hour - Start with a 4-hour minimum</p>

          {/* Product Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedProduct("notifier")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedProduct === "notifier"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-background"
                  : "border-2 border-primary text-foreground hover:bg-primary/10"
              }`}
            >
              Access Notifier
            </button>
            <button
              onClick={() => setSelectedProduct("joiner")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedProduct === "joiner"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-background"
                  : "border-2 border-primary text-foreground hover:bg-primary/10"
              }`}
            >
              Auto Joiner
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {currentProduct.tiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl transition-all duration-300 animate-fade-in-scale`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all" />
              )}
              <Card
                className={`relative p-8 h-full flex flex-col ${
                  tier.highlight ? "border-2 border-primary/50 shadow-2xl scale-105" : "border border-primary/20"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-background px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{tier.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-foreground/60 ml-2 text-sm">{tier.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                    tier.highlight
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-background hover:shadow-lg hover:shadow-purple-500/50"
                      : "border-2 border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  Select Plan
                </button>

                <div className="space-y-4 flex-1">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Payment Methods
              </span>
            </h3>
            <p className="text-foreground/70">Send payment to any of these crypto addresses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="group rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div>
                    <h4 className="font-bold">{method.name}</h4>
                    <p className="text-sm text-foreground/60">{method.symbol}</p>
                  </div>
                </div>

                <div className="bg-background/50 rounded-lg p-4 mb-4 break-all">
                  <p className="text-xs text-foreground/70 font-mono">{method.address}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(method.address)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/30 text-sm font-semibold text-foreground hover:bg-primary/10 transition-all duration-300"
                >
                  <Copy className="w-4 h-4" />
                  {copiedAddress === method.address ? "Copied!" : "Copy Address"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
