"use client"

import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-sm">Let&apos;s Talk!</h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-sm">
            Free consultation for your business. We usually reply within 1 hour.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick Contact Options */}
          <div className="space-y-8 lg:mt-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in touch directly</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                The fastest way to reach us is through WhatsApp. Send us a message and our team will be right with you.
              </p>
            </div>
            
            <a 
              href="https://wa.me/639000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-[#25D366]/10 border-[#25D366] hover:bg-[#25D366]/20 transition-colors cursor-pointer">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="bg-[#25D366] p-4 rounded-full text-white">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Chat on WhatsApp</h3>
                    <p className="text-muted-foreground">wa.me/63XXXXXXXXX</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="mailto:hello@himo.ph" className="block">
              <Card className="bg-muted hover:bg-muted/80 transition-colors cursor-pointer">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="bg-primary p-4 rounded-full text-white">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Send us an email</h3>
                    <p className="text-muted-foreground">hello@himo.ph</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Form */}
          <div>
            <Card className="shadow-lg border-primary/10">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8">Send an Inquiry</h2>
                
                {submitted ? (
                  <div className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Thank you!</h3>
                    <p className="text-muted-foreground text-lg">
                      We will contact you within 24 hours. Or message us directly on WhatsApp for a faster response!
                    </p>
                    <a 
                      href="https://wa.me/639000000000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={buttonVariants({ className: "w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white mt-4 py-6 text-lg" })}
                    >
                      Open WhatsApp <ArrowRight className="ml-2 h-5 w-5"/>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="Juan Dela Cruz" className="h-12" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name</Label>
                      <Input id="business" required placeholder="Juan's Eatery" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label>Business Type</Label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="food">Food Business</SelectItem>
                          <SelectItem value="jewelry">Jewelry/Accessories</SelectItem>
                          <SelectItem value="clothing">Clothing/Fashion</SelectItem>
                          <SelectItem value="cake">Cake/Pastry</SelectItem>
                          <SelectItem value="salon">Salon/Beauty</SelectItem>
                          <SelectItem value="clinic">Clinic/Medical</SelectItem>
                          <SelectItem value="tutorial">Tutorial/Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Interested Plan</Label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="starter">Starter (₱499/mo)</SelectItem>
                          <SelectItem value="pro">Pro (₱999/mo)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (₱2,499/mo)</SelectItem>
                          <SelectItem value="unsure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Questions</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about what you need..." 
                        className="min-h-[120px]" 
                      />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg">
                      Send Inquiry
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
