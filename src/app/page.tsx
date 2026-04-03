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
      
      {/* SaaS Hero Section */}
      <section className="relative px-6 lg:px-8 pt-12 pb-40 overflow-hidden">
        {/* Sky blue radial gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,_var(--tw-gradient-stops))] from-sky-100/50 via-white to-white"></div>
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-sky-50/30 blur-3xl opacity-60 transition-all translate-x-1/2 -translate-y-1/4 animate-pulse"></div>
        
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 mb-8 border border-sky-200">
                <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2.5"></span>
                Now available across the Philippines
              </div>
              <h1 className="text-6xl font-black tracking-tighter text-slate-900 sm:text-7xl mb-8 leading-[0.95]">
                We&apos;re here to Increase your <span className="text-primary">Productivity</span>
              </h1>
              <p className="text-xl leading-relaxed text-slate-500 mb-12 max-w-lg font-medium">
                We build custom ordering systems for Filipino businesses. If you sell it, we digitize it. Say goodbye to manual chat orders and hello to automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <Link 
                  href="/contact"
                  className={buttonVariants({ size: "lg", className: "bg-primary text-white rounded-full h-16 px-10 text-lg font-bold shadow-xl shadow-sky-500/30 hover:scale-105 transition-all" })}
                >
                  Get Started
                </Link>
                <a 
                  href="https://yumpia.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg", variant: "outline", className: "border-primary text-primary rounded-full hover:bg-sky-50 h-16 px-10 text-lg font-bold transition-all" })}
                >
                  Explore Now
                </a>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                  ))}
                </div>
                <p className="text-sm font-medium"><span className="text-slate-900 font-bold">1,200+</span> businesses digitizing today</p>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl"></div>
              <BrowserMockup className="border-sky-100 shadow-2xl">
                <img 
                  src="/admin.png" 
                  alt="Yumpia Admin Dashboard" 
                  className="w-full object-cover aspect-[4/3]"
                />
              </BrowserMockup>
              
              {/* Floating Element */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-2xl bg-white/90 backdrop-blur-sm p-6 shadow-2xl border border-sky-100 max-w-[240px] animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Fast Onboarding</p>
                    <p className="text-xs text-slate-500 mt-1">Live in 7 days or less</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features of SaaS */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6 sm:text-5xl">
              Key features of <span className="text-primary">SaaS</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Increased efficiency and cost effectiveness are the reasons many businesses give for turning to cloud-based SaaS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Security First", icon: ShieldCheck, desc: "Connect the tools you already use to get more from them every time you work.", color: "bg-primary text-white" },
              { title: "Infrastructure costs", icon: Settings, desc: "You just pay for what you need with no capital expenditure that needs to be depreciated.", color: "bg-sky-50 text-sky-600" },
              { title: "Accessible from anywhere", icon: Globe, desc: "Just connect to the internet and you can work from wherever you need to be via desktop.", color: "bg-sky-50 text-sky-600" },
              { title: "Fully Integrated", icon: Zap, desc: "Skip the follow-ups and back-and-forth. Easily standardize how you collect.", color: "bg-sky-50 text-sky-600" },
            ].map((feature, i) => (
              <div key={i} className={cn("flex flex-col p-10 rounded-[2.5rem] text-left transition-all hover:scale-105 hover:shadow-xl", feature.color)}>
                <div className={cn("mb-8 h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg", i === 0 ? "bg-white/20" : "bg-white")}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">{feature.title}</h3>
                <p className={cn("flex-1 mb-8 leading-relaxed", i === 0 ? "text-white/80" : "text-slate-500")}>{feature.desc}</p>
                <Link href="/about" className={cn("text-sm font-bold border-b-2 w-fit transition-all", i === 0 ? "border-white/30 text-white hover:border-white" : "border-primary/20 text-primary hover:border-primary")}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-sky-50/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl mb-6">
              Simple process. <span className="text-primary">Powerful results.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We&apos;ve refined our onboarding to be as smooth as silk. No technical hurdles, just business growth.
            </p>
          </div>
          
          <div className="space-y-px">
            {[
              { num: "01", title: "Contact Us", desc: "Tell us about your business scope and operations. We will analyze your needs and recommend the perfect digital plan for you.", image: "/step1.png" },
              { num: "02", title: "We Build It", desc: "Our team sets up your complete ordering system in 3-7 days using proven technology. We handle the technical heavy lifting.", image: "/step2.png" },
              { num: "03", title: "You Go Live", desc: "Launch your official ordering link! Receive orders online, manage incoming requests directly from your phone.", image: "/step3.png" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-20 items-center py-20 first:pt-0 last:pb-0 group">
                <div className={cn("md:w-1/2", i % 2 !== 0 && "md:order-last")}>
                  <div className="mb-6 h-16 w-16 rounded-3xl bg-white shadow-xl shadow-sky-500/10 flex items-center justify-center text-3xl font-black text-primary">
                    {step.num}
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-8">{step.title}</h3>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all"></div>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="relative w-full rounded-[2.5rem] shadow-2xl border border-white object-cover aspect-video" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-6 sm:text-5xl">
              Our plans scale <span className="text-primary">with your product</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">Simple, transparent pricing for every stage of your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Basic Package", price: "₱499", features: ["Feedback Categorization", "Features Prioritization", "Real-Time Collaboration", "Essential Dev Tools Integrations"] },
              { name: "Premium Package", price: "₱999", highlighted: true, features: ["Feedback Categorization", "Features Prioritization", "Real-Time Collaboration", "Feedback Loop Notifications", "Essential Dev Tools Integrations"] },
              { name: "Business Package", price: "₱2,499", features: ["Feedback Categorization", "Features Prioritization", "Real-Time Collaboration", "Feedback Loop Notifications", "Essential Dev Tools Integrations"] },
            ].map((plan, i) => (
              <div key={i} className={cn("flex flex-col p-12 rounded-[3.5rem] border transition-all text-left", plan.highlighted ? "bg-primary text-white border-primary shadow-2xl scale-105" : "bg-white border-sky-100 shadow-xl shadow-sky-500/5")}>
                <h3 className="text-2xl font-bold mb-8">{plan.name}</h3>
                <div className="mb-10">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={cn("text-sm", plan.highlighted ? "text-white" : "text-slate-400 font-bold")}> / month</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <div className={cn("h-5 w-5 rounded-full flex items-center justify-center shrink-0", plan.highlighted ? "bg-white/20" : "bg-sky-100")}>
                        <CheckCircle2 className={cn("h-3 w-3", plan.highlighted ? "text-white" : "text-primary")} />
                      </div>
                      <span className={plan.highlighted ? "text-white/90" : "text-slate-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className={cn("w-full py-5 rounded-full font-bold transition-all", plan.highlighted ? "bg-white text-primary hover:bg-sky-50 shadow-lg shadow-black/10" : "bg-primary text-white hover:scale-105 shadow-xl shadow-sky-500/20")}>
                  Purchase
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study / Yumpia Section */}
      <section className="py-32 bg-sky-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl mb-6">
              What Our Clients Say <span className="text-primary">About Us</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-1 gap-8">
              {[
                { name: "Andrew Chris", role: "Product Designer", text: "\"Certainly app suffering for non-collected small problems. We just pay for what we need via cloud. Great cloud-based SaaS solutions.\"", highlighted: true },
                { name: "Jane Doe", role: "CEO, Tech Inc", text: "\"The level of detail and efficiency brought into our internal structure is exactly what we needed to scale past our limits.\"" },
              ].map((testimonial, i) => (
                <div key={i} className={cn("p-12 rounded-[2.5rem] shadow-xl transition-all", testimonial.highlighted ? "bg-primary text-white shadow-primary/20 scale-105" : "bg-white border border-sky-100 shadow-sky-500/5")}>
                  <div className="flex gap-1 mb-8">
                    {[1,2,3,4,5].map((s) => <Star key={s} className={cn("h-4 w-4 fill-current", testimonial.highlighted ? "text-white" : "text-amber-400")} />)}
                  </div>
                  <p className={cn("text-xl leading-relaxed mb-10 font-medium", testimonial.highlighted ? "text-white/90" : "text-slate-600 italic")}>
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="h-14 w-14 rounded-full bg-slate-200 border-2 border-white shadow-lg overflow-hidden">
                      <div className="h-full w-full bg-slate-300" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className={cn("text-sm", testimonial.highlighted ? "text-white/60" : "text-slate-400")}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <BrowserMockup className="border-sky-100 bg-white">
                <div className="relative group">
                  <img 
                    src={slideImages[currentSlide]} 
                    alt={`Yumpia System Image ${currentSlide + 1}`} 
                    className="w-full object-cover aspect-[4/3] transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={prevSlide} className="bg-white text-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-all">
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button onClick={nextSlide} className="bg-white text-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-all">
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                    {slideImages.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={cn("h-2.5 w-2.5 rounded-full transition-all cursor-pointer", idx === currentSlide ? "bg-primary w-8 shadow-lg shadow-primary/20" : "bg-slate-300 hover:bg-slate-400")}
                        onClick={() => setCurrentSlide(idx)}
                      />
                    ))}
                  </div>
                </div>
              </BrowserMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "2,550", label: "Projects Done" },
              { val: "1M+", label: "Reviews" },
              { val: "100%", label: "Happy Customers" },
              { val: "24/7", label: "Admin Support" },
            ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-5xl font-black text-primary mb-3">{stat.val}</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-sky-50/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6 sm:text-5xl">
              Frequently Ask <span className="text-primary">Questions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { q: "What SaaS means?", a: "Software as a service (SaaS) is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted." },
              { q: "What are SaaS products?", a: "Email, project management tools, customer relationship management (CRM) systems, and collaboration tools." },
              { q: "What is an example of an SaaS?", a: "Popular examples include Google Workspace, Salesforce, Microsoft 365, Dropbox, and Slack." },
              { q: "Is Netflix a SaaS company?", a: "Yes, Netflix is considered a SaaS company because it sells software to watch licensed videos through its platform." },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg shadow-sky-500/5 border border-sky-100 transition-all hover:border-primary/20">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center justify-between">
                  {faq.q}
                  <span className="text-xl">+</span>
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl mb-8">
            Want to start a Project With us?
          </h2>
          <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
            Market research presents limited conduct in inquiry to. Supported the excellence behavior elsewhere excellent so emerging.
          </p>
          <Link 
            href="/contact"
            className={buttonVariants({ size: "lg", className: "bg-primary text-white rounded-full h-16 px-12 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all" })}
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
