"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function VouchesSection() {
  const images = [
    {
      id: 1,
      src: "/vouch-image-1.jpg",
      alt: "Buyers",
    },
    {
      id: 2,
      src: "/vouch-image-2.jpg",
      alt: "Buyers",
    },
    {
      id: 3,
      src: "/vouch-image-3.jpg",
      alt: "Buyers",
    },
    {
      id: 4,
      src: "/vouch-image-4.jpg",
      alt: "Buyers",
    },
    {
      id: 5,
      src: "/vouch-image-5.jpg",
      alt: "Buyers",
    },
    {
      id: 6,
      src: "/vouch-image-6.jpg",
      alt: "Buyers",
    },
  ]

  return (
    <section className="min-h-screen relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Loved by Thousands
            </span>
          </h2>
          <p className="text-lg text-foreground/70">See what our customers have to say about Nova</p>
        </div>

        {/* Image gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className="overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up hover:shadow-lg hover:shadow-cyan-500/20"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
