"use client"

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Settings, Zap, Smartphone, Globe, Navigation, Utensils, Star, ShoppingBag, Calendar, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-24 sm:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Launch Your Online<br />
            <span className="text-secondary">Ordering System</span> in 7 Days
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            We build custom ordering systems for Filipino businesses. Food, jewelry, services — if you sell it, we digitize it!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://yumpia.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", className: "bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto h-14 px-8 text-lg" })}
            >
              See Live Demo 🍱
            </a>
            <Link 
              href="/contact"
              className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto h-14 px-8 text-lg border-primary-foreground/20 text-white hover:bg-primary-foreground/10 bg-transparent" })}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-secondary">Simple Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  icon: Phone,
                  title: "1. Contact Us",
                  desc: "Tell us about your business and we will recommend the perfect plan for you.",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: Settings,
                  title: "2. We Build It",
                  desc: "Our team sets up your complete ordering system in 3-7 days using proven technology.",
                  color: "bg-orange-100 text-orange-600"
                },
                {
                  icon: Globe,
                  title: "3. You Go Live",
                  desc: "Receive orders online, manage from your phone, grow your business!",
                  color: "bg-green-100 text-green-600"
                }
              ].map((step, i) => (
                <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${step.color}`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-secondary">Our Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for Every Business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2">
            {[
              {
                title: "Food Ordering System",
                icon: Utensils,
                desc: "Complete online ordering for restaurants, food stalls, and delivery businesses",
                price: "Starting at ₱499/month",
                soon: false
              },
              {
                title: "Custom Product Ordering",
                icon: ShoppingBag,
                desc: "For jewelry, cakes, clothes — let customers customize their orders online",
                price: "Starting at ₱999/month",
                soon: false
              },
              {
                title: "Appointment Booking",
                icon: Calendar,
                desc: "For salons, clinics, tutorials — online booking made simple",
                price: "",
                soon: true
              },
              {
                title: "Service Marketplace",
                icon: Users,
                desc: "Connect service providers with customers in your area",
                price: "",
                soon: true
              }
            ].map((prod, i) => (
              <Card key={i} className="flex flex-col relative overflow-hidden group hover:border-primary transition-colors">
                <CardHeader>
                  <prod.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{prod.title}</CardTitle>
                  {prod.soon && (
                    <span className="absolute top-4 right-4 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                      Coming Soon
                    </span>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{prod.desc}</p>
                  {!prod.soon && <p className="font-semibold text-primary">{prod.price}</p>}
                </CardContent>
                <CardFooter>
                  {prod.soon ? (
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" disabled>
                      Learn More
                    </Button>
                  ) : (
                    <Link href="/pricing" className={buttonVariants({ variant: "outline", className: "w-full group-hover:bg-primary group-hover:text-white transition-colors" })}>
                      Learn More
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HIMO-PH */}
      <section className="py-24 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why Choose HIMO-PH?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                We do not just give you a website. We give you a complete system designed to convert visitors into loyal customers.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Fast Delivery", desc: "Live in 7 days, not 7 months." },
                  { icon: Smartphone, title: "Mobile First", desc: "Works perfectly on any phone out of the box." },
                  { icon: Navigation, title: "Made for Filipinos", desc: "Built specifically for Filipino businesses and local customers." },
                  { icon: CheckCircle2, title: "Affordable", desc: "Plans starting at ₱499/month — less than ₱17/day!" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-secondary/20 p-2 rounded-lg text-secondary h-fit">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1000" 
                alt="Business owner using mobile app"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Demo */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              See Our Work
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden shadow-xl border-none">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-slate-100 flex items-center justify-center p-8 min-h-[300px] relative">
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" alt="YUMPIA Demo" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="relative z-20 top-20">
                     <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold border border-white/20">YUMPIA Screenshot Placeholder</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary w-fit mb-4">
                    Featured Project
                  </div>
                  <h3 className="text-2xl font-bold mb-4">YUMPIA — Food Ordering System</h3>
                  <p className="text-muted-foreground mb-8">
                    Complete food ordering platform with customization, add-ons, real-time tracking, and a powerful admin dashboard.
                  </p>
                  <a 
                    href="https://yumpia.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={buttonVariants({ className: "w-fit gap-2" })}
                  >
                    View Live Demo <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What our clients say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-muted/50 border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4 text-secondary">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-lg font-medium leading-relaxed mb-6">
                    &quot;Working with HIMO-PH completely changed how we handle online orders. We stopped strictly relying on chat and finally own our customer data.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-200" />
                    <div>
                      <p className="font-semibold text-foreground">Client Name</p>
                      <p className="text-sm text-muted-foreground">Business Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to take your business online?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Free consultation, no commitment. Let&apos;s talk about what we can build for you.
          </p>
          <a 
            href="https://wa.me/639000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", className: "bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 text-lg h-14 px-8 shadow-lg transition-transform hover:scale-105" })}
          >
            <MessageCircle className="h-6 w-6" /> WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
