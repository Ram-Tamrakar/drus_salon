import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Crown, Flower2, Baby } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Services",
    items: ["Haircuts & Styling", "Hair Coloring", "Keratin Treatment", "Highlights & Balayage"],
    price: "$45 - $250",
    image: "/hair-services.jpg",
  },
  {
    icon: Sparkles,
    title: "Skin Care & Facials",
    items: ["Deep Cleansing Facial", "Anti-Aging Treatment", "Acne Treatment", "Hydrating Facial"],
    price: "$60 - $180",
    image: "/skincare-facials.jpg",
  },
  {
    icon: Crown,
    title: "Bridal & Party Makeup",
    items: ["Bridal Makeup", "Party Makeup", "Special Occasion", "Makeup Trial"],
    price: "$80 - $350",
    image: "/bridal-makeup.jpg",
  },
  {
    icon: Flower2,
    title: "Spa & Relaxation",
    items: ["Massage Therapy", "Manicure & Pedicure", "Body Treatments", "Aromatherapy"],
    price: "$50 - $150",
    image: "/spa-relaxation.jpg",
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: ["Children's Haircuts", "Teen Styling", "Family Packages", "First Haircut Special"],
    price: "$25 - $100",
    image: "/kids-family.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance text-white">Our Services</h2>
          <p className="text-lg text-white/70 leading-relaxed">
            From everyday styling to special occasions, we offer a comprehensive range of beauty services tailored to
            your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-primary/20 transition-all border-2 border-primary/20 hover:border-primary/40 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">{service.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold text-primary pt-4 border-t border-primary/20">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
