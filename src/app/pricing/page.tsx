"use client"

import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "₱499",
      period: "/month",
      desc: "For small stalls getting started online.",
      features: [
        { name: "Online menu display", included: true },
        { name: "Order management", included: true },
        { name: "Customer accounts", included: true },
        { name: "Order tracking", included: true },
        { name: "COD payment", included: true },
        { name: "Up to 20 menu items", included: true },
        { name: "Mobile responsive", included: true },
        { name: "Admin dashboard", included: true },
        { name: "1 month free support", included: true },
        { name: "Create Your Own feature", included: false },
        { name: "Add-ons system", included: false },
        { name: "Custom branding", included: false },
        { name: "Voucher system", included: false },
      ],
      cta: "Get Started",
      href: "/contact",
      popular: false
    },
    {
      name: "PRO",
      price: "₱999",
      period: "/month",
      desc: "For growing businesses needing features.",
      features: [
        { name: "Online menu display", included: true },
        { name: "Order management", included: true },
        { name: "Customer accounts", included: true },
        { name: "Order tracking", included: true },
        { name: "COD payment", included: true },
        { name: "Up to 100 menu items", included: true },
        { name: "Create Your Own feature", included: true },
        { name: "Add-ons & sauce system", included: true },
        { name: "Bundle management", included: true },
        { name: "Custom logo & colors", included: true },
        { name: "Voucher system", included: true },
        { name: "Sales analytics", included: true },
        { name: "WhatsApp notifications", included: true },
        { name: "3 months free support", included: true },
        { name: "Custom domain", included: false },
        { name: "White-label", included: false },
      ],
      cta: "Get Started",
      href: "/contact",
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "₱2,499",
      period: "/month",
      desc: "For established chains and brands.",
      features: [
        { name: "UNLIMITED menu items", included: true },
        { name: "Order management", included: true },
        { name: "Customer accounts", included: true },
        { name: "Order tracking", included: true },
        { name: "COD payment", included: true },
        { name: "Create Your Own feature", included: true },
        { name: "Add-ons & sauce system", included: true },
        { name: "Bundle management", included: true },
        { name: "Custom logo & colors", included: true },
        { name: "Voucher system", included: true },
        { name: "Sales analytics", included: true },
        { name: "WhatsApp notifications", included: true },
        { name: "Custom domain", included: true },
        { name: "White-label (No HIMO-PH badge)", included: true },
        { name: "Multiple admin accounts", included: true },
        { name: "Multiple locations", included: true },
        { name: "Priority WhatsApp support", included: true },
        { name: "6 months free support", included: true },
        { name: "Custom feature requests", included: true },
      ],
      cta: "Contact Us",
      href: "/contact",
      popular: false
    }
  ];

  const faqs = [
    { q: "How long does setup take?", a: "3-7 business days after payment. We handle the entire technical setup so you don't have to." },
    { q: "Do I need technical knowledge?", a: "No! We handle everything. You just manage your orders through the simple admin dashboard." },
    { q: "Can I change my plan later?", a: "Yes! You can upgrade or downgrade at any time as your business grows." },
    { q: "What payment methods do you accept?", a: "We accept GCash, Maya, and direct bank transfers for your subscription." },
    { q: "Is there a contract?", a: "No, it's a month-to-month subscription. You can cancel anytime without penalty." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-32">
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-sky-100/50 via-white to-white"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="bg-sky-100 text-primary mb-8 hover:bg-sky-100 border-sky-200 px-4 py-1.5 text-sm font-bold">Pricing Plans</Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-none">
            Simple, <span className="text-primary italic">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. Choose the perfect plan to digitize your operations and grow your sales.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 mx-auto w-full max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={cn(
                "flex flex-col p-12 rounded-[3.5rem] border transition-all text-left relative",
                plan.popular 
                  ? "bg-primary text-white border-primary shadow-2xl scale-105 z-10 shadow-primary/20" 
                  : "bg-white border-sky-100 shadow-xl shadow-sky-500/5 hover:border-primary/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-white text-primary text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-xl border border-sky-100">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className={cn("text-sm font-medium h-10", plan.popular ? "text-white/70" : "text-slate-500")}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-12">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className={cn("text-sm font-bold opacity-60", plan.popular ? "text-white" : "text-slate-400")}>
                  {plan.period}
                </span>
              </div>
              
              <Link 
                href={plan.href}
                className={cn(
                  "w-full py-5 rounded-full font-bold transition-all text-center mb-12",
                  plan.popular 
                    ? "bg-white text-primary hover:bg-sky-50 shadow-lg" 
                    : "bg-primary text-white hover:scale-105 shadow-xl shadow-sky-500/10"
                )}
              >
                {plan.cta}
              </Link>

              <div className="space-y-5">
                <p className={cn("text-xs font-black uppercase tracking-widest", plan.popular ? "text-white/60" : "text-slate-400")}>
                  Features included:
                </p>
                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm font-medium gap-3">
                      <div className={cn("h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", plan.popular ? "bg-white/20" : "bg-sky-100")}>
                        {feature.included ? (
                          <Check className={cn("h-3 w-3", plan.popular ? "text-white" : "text-primary")} strokeWidth={4} />
                        ) : (
                          <Minus className={cn("h-3 w-3", plan.popular ? "text-white/40" : "text-slate-300")} strokeWidth={4} />
                        )}
                      </div>
                      <span className={cn("flex-1", feature.included ? (plan.popular ? "text-white" : "text-slate-700") : (plan.popular ? "text-white/40" : "text-slate-400"))}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pt-40 mx-auto max-w-4xl w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Ask <span className="text-primary italic">Questions</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg shadow-sky-500/5 border border-sky-100 transition-all hover:border-primary/20">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center justify-between">
                {faq.q}
                <span className="text-xl">+</span>
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-40 px-6">
        <div className="bg-sky-50/50 rounded-[4rem] border border-sky-100 max-w-5xl mx-auto py-24 px-12 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Still not sure <span className="text-primary italic">which plan is right?</span></h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Contact our team and we&apos;ll help you assess your operational needs and recommend the perfect fit.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-primary text-white rounded-full h-16 px-12 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all" })}>
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
