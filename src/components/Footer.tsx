import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white inline-block mb-4">
              HIMO-PH
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-sm">
              We Build. You Grow. 🇵🇭<br/>
              Custom online ordering systems built specifically for Filipino businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/pricing" className="text-primary-foreground/80 hover:text-secondary transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-primary-foreground/80">
                <MapPin className="h-5 w-5 mr-3 text-secondary" />
                <span>South Philippines</span>
              </li>
              <li className="flex items-center text-primary-foreground/80">
                <Mail className="h-5 w-5 mr-3 text-secondary" />
                <span>hello@himo.ph</span>
              </li>
              <li className="flex items-center text-primary-foreground/80">
                <MessageCircle className="h-5 w-5 mr-3 text-secondary" />
                <span>+63 900 000 0000</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} HIMO-PH. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ in South Philippines 🇵🇭</p>
        </div>
      </div>
    </footer>
  );
}
