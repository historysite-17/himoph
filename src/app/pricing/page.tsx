"use client"

import Link from "next/link";
import { Check, Minus } from "lucide-react";
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
    <div className="flex flex-col min-h-screen bg-white pb-24 font-sans">
      
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
          Simple, transparent pricing
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          No hidden fees. Cancel anytime. Choose the perfect plan to digitize your operations and grow your sales.
        </p>
      </section>

      {/* Pricing Cards - Canva Style */}
      <section className="px-6 mx-auto w-full max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={cn(
                "flex flex-col rounded-2xl bg-white transition-all duration-300 relative",
                plan.popular 
                  ? "border border-blue-600 shadow-[0_0_40px_-10px_rgba(37,99,235,0.2)] lg:-mt-4 lg:mb-4 z-10 ring-1 ring-blue-600" 
                  : "border border-slate-200 shadow-xl shadow-slate-200/50"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8 pb-0">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6 h-10">{plan.desc}</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold tracking-tight text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-1 font-medium">{plan.period}</span>
                </div>
                
                <Link 
                  href={plan.href}
                  className={buttonVariants({ 
                    className: cn(
                      "w-full h-12 text-base font-semibold shadow-none transition-colors",
                      plan.popular 
                        ? "bg-blue-600 hover:bg-blue-700 text-white" 
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    ) 
                  })}
                >
                  {plan.cta}
                </Link>
              </div>

              <div className="p-8">
                <p className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">Features included:</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-blue-600 mr-3 shrink-0" strokeWidth={2.5} />
                      ) : (
                        <Minus className="h-5 w-5 text-slate-300 mr-3 shrink-0" strokeWidth={2.5} />
                      )}
                      <span className={feature.included ? "text-slate-700 font-medium" : "text-slate-400"}>
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
      <section className="px-6 pt-32 mx-auto max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-slate-200 py-2">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline hover:text-blue-600 transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-base leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="mt-32 px-6">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl max-w-5xl mx-auto py-16 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Still not sure which plan is right for you?</h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">Contact our team and we'll help you assess your operational needs and recommend the perfect fit.</p>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 border-slate-300" })}>
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
