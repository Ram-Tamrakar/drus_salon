import { Sparkles, Users, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance text-foreground">
            Welcome to Dru's Family Salon
          </h2>
         <p className="text-lg text-muted-foreground leading-relaxed">
  Since 2020, we've been dedicated to enhancing confidence through beauty and care. 
  Our skilled team of stylists and beauticians craft personalized experiences 
  that celebrate your unique beauty and comfort.
</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Expert Stylists</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our talented team stays updated with the latest trends and techniques to deliver exceptional results.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Family Friendly</h3>
            <p className="text-muted-foreground leading-relaxed">
              We welcome clients of all ages, providing specialized services for everyone in your family.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Personalized Care</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every service is tailored to your individual needs, ensuring you leave feeling confident and beautiful.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Meet Our Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-muted border-2 border-primary/10">
                <img
                  src="/neeru-singh.jpeg"
                  alt="Neeru Singh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-serif font-semibold text-lg mb-1">Neeru Singh</h4>
              <p className="text-sm text-muted-foreground">Founder</p>
            </div>

            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-muted border-2 border-primary/10">
                <img
                  src="/durga-singh.jfif"
                  alt="Durga Singh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-serif font-semibold text-lg mb-1">Durga Singh</h4>
              <p className="text-sm text-muted-foreground">Founder & Beautician Hair Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
