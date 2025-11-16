import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image src="/logo.png" alt="Dru's Family Salon" width={200} height={60} className="h-12 w-auto mb-4" />
            <p className="text-white/70 mb-4 leading-relaxed max-w-md">
              Enhancing confidence through beauty and care. Your trusted partner for all your beauty needs since 2014.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/drusfamilysalon/ "
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/drusfamilysalon/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-white/70 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>Shree Gajanan Heights Bldg, B/5, 1</li>
              <li>ESIC Hospital Rd, nr. Nitin Signal</li>
              <li>Ramachandra Nagar</li>
              <li>Mumbai, Maharashtra 400604</li>
              <li>
                <a href="mob:7045271980" className="hover:text-primary transition-colors">
                  7045271980
                </a>
              </li>
              <li>
                <a href="mailto:info@drusfamilysalon.com" className="hover:text-primary transition-colors">
                  info@drusfamilysalon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Dru's Family Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
