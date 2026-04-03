"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-100 via-blue-50 to-white/90 backdrop-blur-md border-b border-blue-200 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="HIMO-PH Logo" className="h-8 w-auto" />
            <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
              HIMO-PH
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className={buttonVariants({ className: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm" })}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/contact" onClick={() => setIsOpen(false)} className={buttonVariants({ className: "w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" })}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
