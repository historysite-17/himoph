"use client"

import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "₱499",
      period: "/month",
      desc: "Basic food ordering website",
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
      cta: "Get Started →",
      href: "/contact",
      popular: false
    },
    {
      name: "PRO",
      price: "₱999",
      period: "/month",
      desc: "Everything in Starter plus:",
      features: [
        { name: "Create Your Own feature", included: true },
        { name: "Add-ons & sauce system", included: true },
        { name: "Bundle management", included: true },
        { name: "Custom logo & colors", included: true },
        { name: "Background image upload", included: true },
        { name: "Voucher/discount system", included: true },
        { name: "Up to 100 menu items", included: true },
        { name: "Sales analytics", included: true },
        { name: "WhatsApp notifications", included: true },
        { name: "3 months free support", included: true },
        { name: "Custom domain", included: false },
        { name: "White-label", included: false },
      ],
      cta: "Get Started →",
      href: "/contact",
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "₱2,499",
      period: "/month",
      desc: "Everything in Pro plus:",
      features: [
        { name: "UNLIMITED menu items", included: true },
        { name: "Custom domain", included: true },
        { name: "White-label (no HIMO-PH badge)", included: true },
        { name: "Multiple admin accounts", included: true },
        { name: "Multiple locations", included: true },
        { name: "Priority WhatsApp support", included: true },
        { name: "6 months free support", included: true },
        { name: "Custom feature requests", included: true },
      ],
      cta: "Contact Us →",
      href: "/contact",
      popular: false
    }
  ];

  const faqs = [
    { q: "How long does setup take?", a: "3-7 business days after payment." },
    { q: "Do I need technical knowledge?", a: "No! We handle everything. You just manage your orders." },
    { q: "Can I change my plan later?", a: "Yes! Upgrade or downgrade anytime." },
    { q: "What payment methods do you accept?", a: "GCash, Maya, bank transfer." },
    { q: "Is there a contract?", a: "Monthly subscription, cancel anytime." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-24">
      {/* Hero */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          No hidden fees. Cancel anytime. Choose the plan that fits your business needs.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 mx-auto w-full max-w-7xl -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card key={i} className={`flex flex-col bg-white shadow-xl ${plan.popular ? 'border-2 border-secondary scale-105 mt-0 md:-mt-4' : 'border-border'}`}>
              <CardHeader className="text-center pb-8 border-b">
                {plan.popular && (
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mx-auto mb-4 inline-block">
                    ⭐ Most Popular
                  </span>
                )}
                <CardTitle className="text-xl font-bold tracking-widest text-muted-foreground mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground ml-1 font-medium">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-sm">{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-slate-300 mr-3 shrink-0" />
                      )}
                      <span className={feature.included ? "text-slate-700" : "text-slate-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 border-t bg-slate-50/50">
                <Link 
                  href={plan.href}
                  className={buttonVariants({ className: `w-full py-6 text-lg ${plan.popular ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90'}` })}
                >
                  {plan.cta}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 mx-auto max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
