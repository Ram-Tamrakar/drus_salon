"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { title: "Hair Transformation", before: "/before-hair-transformation.jpg", after: "/after-hair-color-transformation.jpg" },
  { title: "Bridal Makeup", before: "/before-bridal-makeup.jpg", after: "/after-bridal-makeup-elegant.jpg" },
  { title: "Hair Styling", before: "/before-hair-styling.jpg", after: "/after-hair-styling-glamorous.jpg" },
  { title: "Skin Treatment", before: "/before-facial-skin-treatment.jpg", after: "/after-facial-glowing-skin.jpg" },
  { title: "Hair Color", before: "/before-hair-color.jpg", after: "/after-balayage-hair-color.jpg" },
  { title: "Special Occasion", before: "/before-party-makeup.jpg", after: "/after-party-makeup-glam.jpg" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Our Transformations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See the stunning results we've achieved for our valued clients. Real transformations, real confidence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 relative">
          <Card className="overflow-hidden">
            <div className="aspect-video md:aspect-[21/9] overflow-hidden relative">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={item.before || "/placeholder.svg"}
                        alt={`${item.title} Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt={`${item.title} After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-serif font-semibold text-xl md:text-2xl">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="rounded-full bg-transparent"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="rounded-full bg-transparent"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((item, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden relative">
                {/* Before/After Split */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={`${item.title} Before`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt={`${item.title} After`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-serif font-semibold text-lg p-4">{item.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
