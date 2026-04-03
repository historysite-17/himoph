"use client"

import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pb-32">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-sky-100/50 via-white to-white"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge className="bg-sky-100 text-primary mb-8 hover:bg-sky-100 border-sky-200 px-4 py-1.5 text-sm font-bold">Contact Us</Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-none">
            Let&apos;s <span className="text-primary italic">Talk!</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Free consultation for your business. We usually reply within 1 hour.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Quick Contact Options */}
          <div className="space-y-10 lg:mt-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Get in touch <span className="text-primary italic">directly</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                The fastest way to reach us is through WhatsApp. Send us a message and our team will be right with you.
              </p>
            </div>
            
            <a 
              href="https://wa.me/639000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-sky-50/50 border border-sky-100 p-10 rounded-[3rem] transition-all hover:scale-105 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 flex items-center gap-8">
                <div className="bg-[#25D366] p-6 rounded-[1.5rem] text-white shadow-lg group-hover:scale-110 transition-all">
                  <MessageCircle className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Chat on WhatsApp</h3>
                  <p className="text-lg text-slate-500 font-bold">wa.me/63XXXXXXXXX</p>
                </div>
              </div>
            </a>

            <a href="mailto:hello@himo.ph" className="group block">
              <div className="bg-sky-50/30 border border-sky-100 p-10 rounded-[3rem] transition-all hover:scale-105 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 flex items-center gap-8">
                <div className="bg-primary p-6 rounded-[1.5rem] text-white shadow-lg group-hover:scale-110 transition-all">
                  <Mail className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Send us an email</h3>
                  <p className="text-lg text-slate-500 font-bold">hello@himo.ph</p>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[4rem] bg-primary/5 blur-3xl opacity-50"></div>
            <div className="relative bg-white p-12 rounded-[3.5rem] border border-sky-100 shadow-2xl shadow-sky-500/5">
                <h2 className="text-3xl font-black text-slate-900 mb-10">Send an Inquiry</h2>
                
                {submitted ? (
                  <div className="text-center py-10 space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-sky-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-sky-500/20">
                      <MessageCircle className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 mb-4">Thank you!</h3>
                      <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        We will contact you within 24 hours. Or message us directly on WhatsApp for a faster response!
                      </p>
                    </div>
                    <a 
                      href="https://wa.me/639000000000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: "lg" }), "w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full h-16 text-lg font-bold shadow-xl shadow-green-500/20 transition-all hover:scale-105")}
                    >
                      Open WhatsApp <ArrowRight className="ml-2 h-6 w-6"/>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-slate-400">Full Name</Label>
                      <Input id="name" required placeholder="Juan Dela Cruz" className="h-16 rounded-2xl border-sky-100 bg-sky-50/30 focus:bg-white transition-all px-6 text-lg font-medium" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business" className="text-sm font-black uppercase tracking-widest text-slate-400">Business Name</Label>
                      <Input id="business" required placeholder="Juan's Eatery" className="h-16 rounded-2xl border-sky-100 bg-sky-50/30 focus:bg-white transition-all px-6 text-lg font-medium" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-black uppercase tracking-widest text-slate-400">Business Type</Label>
                        <Select required>
                          <SelectTrigger className="h-16 rounded-2xl border-sky-100 bg-sky-50/30 focus:bg-white transition-all px-6 text-lg font-medium">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white rounded-2xl border-sky-100 shadow-2xl">
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
                        <Label className="text-sm font-black uppercase tracking-widest text-slate-400">Interested Plan</Label>
                        <Select required>
                          <SelectTrigger className="h-16 rounded-2xl border-sky-100 bg-sky-50/30 focus:bg-white transition-all px-6 text-lg font-medium">
                            <SelectValue placeholder="Select plan" />
                          </SelectTrigger>
                          <SelectContent className="bg-white rounded-2xl border-sky-100 shadow-2xl">
                            <SelectItem value="starter">Starter (₱499/mo)</SelectItem>
                            <SelectItem value="pro">Pro (₱999/mo)</SelectItem>
                            <SelectItem value="enterprise">Enterprise (₱2,499/mo)</SelectItem>
                            <SelectItem value="unsure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-slate-400">Message / Questions</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about what you need..." 
                        className="min-h-[160px] rounded-[2rem] border-sky-100 bg-sky-50/30 focus:bg-white transition-all p-8 text-lg font-medium leading-relaxed" 
                      />
                    </div>

                    <Button type="submit" className="w-full h-18 text-xl font-black bg-primary text-white rounded-full shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95">
                      Send Inquiry
                    </Button>
                  </form>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
