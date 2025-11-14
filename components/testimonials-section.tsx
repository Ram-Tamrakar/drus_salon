"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Emily Rodriguez",
    service: "Hair Coloring",
    rating: 5,
    text: "Absolutely love my new hair color! The team at Dru's really listened to what I wanted and delivered beyond my expectations. The salon has such a welcoming atmosphere.",
    image: "happy+customer+woman+portrait",
  },
  {
    name: "Michael Chen",
    service: "Haircut & Styling",
    rating: 5,
    text: "Best haircut I've ever had! The attention to detail is incredible. I've been going here for years and they never disappoint.",
    image: "satisfied+male+customer+portrait",
  },
  {
    name: "Sarah Thompson",
    service: "Bridal Makeup",
    rating: 5,
    text: "My wedding day makeup was absolutely perfect! I felt so beautiful and confident. Thank you for making my special day even more magical.",
    image: "beautiful+bride+happy+portrait",
  },
  {
    name: "Jessica Martinez",
    service: "Facial Treatment",
    rating: 5,
    text: "The facial treatment was so relaxing and my skin looks amazing! It's like a mini vacation. Highly recommend this salon.",
    image: "relaxed+woman+spa+treatment",
  },
  {
    name: "David Park",
    service: "Family Package",
    rating: 5,
    text: "Great experience for the whole family! The staff is so patient with kids and everyone left looking and feeling great.",
    image: "happy+family+salon+customer",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it - hear from our happy clients who've experienced our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 relative"
                    : "opacity-0 absolute inset-0 translate-x-full"
                }`}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Client Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-muted ring-4 ring-primary/20 transition-transform duration-500 hover:scale-105">
                        <img
                          src={`/.jpg?height=200&width=200&query=${testimonial.image}`}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex gap-1 mb-4 justify-center md:justify-start">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                          />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-serif font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
