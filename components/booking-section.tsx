"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MessageCircle } from "lucide-react"

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
  }

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Hi! I'd like to book an appointment at Dru's Family Salon.")
    window.open(`https://wa.me/7045271980?text=${message}`, "_blank")
  }

  return (
    <section id="booking" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Book Your Appointment</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your look? Schedule your appointment today and let us take care of you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Schedule Appointment
              </CardTitle>
              <CardDescription>Fill out the form and we'll confirm your booking</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="service">Service</Label>
                  <select
                    id="service"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut & Styling</option>
                    <option value="color">Hair Coloring</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="makeup">Makeup</option>
                    <option value="spa">Spa Treatment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Special Requests (Optional)</Label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Booking Options */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Quick WhatsApp Booking
                </CardTitle>
                <CardDescription>
                  Prefer to chat? Book directly through WhatsApp for instant confirmation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleWhatsAppBooking} variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book via WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <p className="font-serif text-xl mb-2">Walk-ins Welcome!</p>
                <p className="text-sm opacity-90">
                  While appointments are recommended, we happily accept walk-in clients based on availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
