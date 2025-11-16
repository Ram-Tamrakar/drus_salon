"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-primary/10" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center">
            <Image src="/logo.png" alt="Dru's Family Salon" width={500} height={200} className="h-14 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              asChild
            >
              <a href="mob:7045271980">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-primary text-black hover:bg-primary/90" asChild>
              <Link href="#booking">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-primary/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-primary/20">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                asChild
              >
                <a href="mob:7045271980">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" className="bg-primary text-black hover:bg-primary/90" asChild>
                <Link href="#booking" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
