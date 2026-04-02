"use client"

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Settings, Zap, Smartphone, Globe, Navigation, Utensils, Star, ShoppingBag, Calendar, Users, GraduationCap, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper component for SaaS Browser Frame mockup
function BrowserMockup({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("rounded-xl border border-slate-200/60 bg-white shadow-2xl overflow-hidden shadow-slate-200/50", className)}>
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-slate-200" />
          <div className="h-3 w-3 rounded-full bg-slate-200" />
          <div className="h-3 w-3 rounded-full bg-slate-200" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-sm items-center justify-center rounded-md bg-white px-3 text-[10px] text-slate-400 shadow-sm border border-slate-100">
          <Globe className="mr-1 h-3 w-3 opacity-50" />
          yumpia.vercel.app
        </div>
      </div>
      <div className="relative bg-slate-50">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = ["/admin.png", "/storefront.png", "/create.png", "/delivered.png"];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* SaaS Hero Section - PayMongo Style (Split layout, ultra clean) */}
      <section className="relative px-6 lg:px-8 pt-20 pb-32 overflow-hidden">
        {/* Subtle background blob for SaaS vibe */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
        
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-sm font-medium text-blue-800 mb-6 group">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Now available across the Philippines
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 leading-[1.1]">
                Launch your online ordering system in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">7 Days.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-500 mb-10 max-w-lg">
                We build custom ordering systems for Filipino businesses. Food, jewelry, services — if you sell it, we digitize it. Say goodbye to manual chat orders and hello to automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://yumpia.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg", className: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 transition-all h-14 px-8 text-lg font-medium" })}
                >
                  See Live Demo 🍱
                </a>
                <Link 
                  href="/contact"
                  className={buttonVariants({ size: "lg", variant: "outline", className: "border-slate-200 text-slate-700 hover:bg-slate-50 h-14 px-8 text-lg font-medium" })}
                >
                  Book Consultation <ArrowRight className="ml-2 h-5 w-5 text-slate-400" />
                </Link>
              </div>

              {/* Trust Signal */}
              <div className="flex items-center gap-3 text-sm text-slate-500 bg-slate-50 py-3 px-4 rounded-lg w-fit border border-slate-100">
                <GraduationCap className="h-5 w-5 text-blue-500" />
                <span className="font-semibold text-slate-700">Built by Technopreneurship Students</span>
                <span className="text-slate-300">|</span>
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Professor Approved</span>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative lg:ml-auto w-full max-w-2xl">
              {/* Decorative background glow behind mockup */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-100 to-blue-50 opacity-50 blur-2xl"></div>
              
              <BrowserMockup className="rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/admin.png" 
                  alt="Yumpia Admin Dashboard" 
                  className="w-full object-cover aspect-[4/3] opacity-90"
                />
              </BrowserMockup>

              {/* Floating Element 1 - Notification */}
              <div className="absolute -left-8 top-1/4 rounded-lg bg-white p-4 shadow-xl border border-slate-100 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">New Order #1024</p>
                    <p className="text-xs text-slate-500">Just now • ₱1,250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Notion Style (Clean, step-by-step rows) */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple process. <span className="text-slate-400">Powerful results.</span>
            </h2>
          </div>
          
          <div className="space-y-16">
            {[
              {
                num: "01",
                title: "Contact Us",
                desc: "Tell us about your business scope and operations. We will analyze your needs and recommend the perfect digital plan for you. No technical jargon, just straight business value.",
                image: "/step1.png"
              },
              {
                num: "02",
                title: "We Build It",
                desc: "Our team sets up your complete ordering system in 3-7 days using proven technology. We handle the menus, the admin panel configuration, and the integrations.",
                image: "/step2.png"
              },
              {
                num: "03",
                title: "You Go Live",
                desc: "Launch your official ordering link! Receive orders online, manage incoming requests directly from your phone, and finally own your customer database.",
                image: "/step3.png"
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 items-start group">
                <div className="md:w-1/2 flex gap-6 mt-2">
                  <span className="text-4xl font-light text-slate-300 group-hover:text-amber-500 transition-colors duration-300">{step.num}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full rounded-2xl shadow-xl border border-slate-100/50 object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Products - Clean Grid */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Built for every Filipino business
              </h2>
              <p className="text-lg text-slate-500">Whether you sell sticky rice or dental services, we have a digital architecture for you.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Food Ordering", icon: Utensils, desc: "Complete online ordering for restaurants, food stalls, and deliveries.", price: "₱499/mo", soon: false },
              { title: "Custom Products", icon: ShoppingBag, desc: "For jewelry, cakes, clothes — let customers customize orders.", price: "₱999/mo", soon: false },
              { title: "Appointment Booking", icon: Calendar, desc: "For salons, clinics, tutorials — online booking made simple.", soon: true },
              { title: "Service Marketplace", icon: Users, desc: "Connect service providers with local customers.", soon: true }
            ].map((prod, i) => (
              <div key={i} className="flex flex-col p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all relative group">
                <div className="mb-6 h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <prod.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prod.title}</h3>
                <p className="text-slate-500 flex-1 mb-6">{prod.desc}</p>
                {prod.soon ? (
                  <span className="text-sm font-medium text-amber-600 bg-amber-50 w-fit px-3 py-1 rounded-full">Coming Soon</span>
                ) : (
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <span className="font-semibold text-slate-900">{prod.price}</span>
                    <Link href="/pricing" className="text-sm font-medium text-blue-600 hover:text-blue-700">Learn more →</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Trust / Shopify Style */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 border border-white/20">
                <Star className="h-4 w-4 text-amber-400 mr-2" /> Featured Case Study
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">YUMPIA: The complete food ordering platform.</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                See how we transformed a student project into a fully functional, highly scalable food ordering system handling customization, real-time tracking, and comprehensive admin dashboarding.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['No more lost chat orders', 'Automated total calculations', 'Customer database ownership'].map((check, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://yumpia.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", className: "bg-white text-slate-900 hover:bg-slate-100 shadow-lg text-base h-12 px-8" })}
              >
                View Live Demo <ArrowRight className="ml-2 h-4 w-4 text-slate-500" />
              </a>
            </div>
            
            <div className="relative">
              {/* Mac framing for premium feel */}
              <BrowserMockup className="border-white/20 shadow-2xl shadow-blue-900/50 bg-slate-800">
                <div className="relative group">
                  <img 
                    src={slideImages[currentSlide]} 
                    alt={`Yumpia System Image ${currentSlide + 1}`} 
                    className="w-full object-cover opacity-90 mix-blend-normal aspect-[4/3] transition-all duration-500"
                  />
                  
                  {/* Slider Controls */}
                  <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={prevSlide} className="bg-slate-900/50 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur transition-colors">
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button onClick={nextSlide} className="bg-slate-900/50 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur transition-colors">
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {slideImages.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={cn("h-2 w-2 rounded-full transition-all", idx === currentSlide ? "bg-blue-500 w-4" : "bg-white/50")}
                      />
                    ))}
                  </div>
                </div>
              </BrowserMockup>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Action Bar */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to take your business online?
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Free consultation, no commitment. Let's talk about what we can build for you right now.
          </p>
          <a 
            href="https://wa.me/639000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", className: "bg-white text-blue-600 hover:bg-slate-50 gap-2 h-14 px-8 text-lg shadow-xl shadow-blue-900/20" })}
          >
            <MessageCircle className="h-6 w-6 text-green-500" /> WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
