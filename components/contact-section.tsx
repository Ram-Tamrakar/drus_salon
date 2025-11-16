import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Visit Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We'd love to see you! Stop by our salon or get in touch with us through any of the channels below.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Shree Gajanan Heights Bldg, B/5, 1<br />
                      ESIC Hospital Rd, nr. Nitin Signal
                      <br />
                      Ramachandra Nagar
                      <br />
                      Mumbai, Maharashtra 400604
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      7045271980
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:info@drusfamilysalon.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@drusfamilysalon.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Working Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Sunday: 10:00 AM - 9:00 PM</p>
                      <p>Monday: Closed</p>
                      <p>Tuesday-Saturday: 10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <a href="https://www.facebook.com/drusfamilysalon/ " target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <a href="https://www.instagram.com/drusfamilysalon/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4924193839947!2d72.8776559!3d19.1197592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29c494f7d8f1!2sRamachandra%20Nagar%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400604!5e0!3m2!1sen!2sin!4v1704845000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dru's Family Salon Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
