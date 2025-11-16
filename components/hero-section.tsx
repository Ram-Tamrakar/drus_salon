"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

const heroImages = [
  { src: "/salon-interior.jpg", alt: "Dru's Family Salon Interior" },
  { src: "/elegant-modern-salon-interior.jpg", alt: "Elegant Salon Interior" },
  { src: "/luxury-hair-salon-styling.jpg", alt: "Hair Styling Station" },
  { src: "/relaxing-spa-treatment-room.jpg", alt: "Spa Treatment Room" },
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 text-balance drop-shadow-lg">
            Beauty That Feels Like <span className="text-primary drop-shadow-lg">Home</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Experience exceptional beauty and wellness services in a warm, welcoming environment designed for the whole
            family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 bg-primary text-black hover:bg-primary/90" asChild>
              <Link href="#booking">Book Your Appointment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              asChild
            >
              <a href="mob:7045271980">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
