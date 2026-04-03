import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="HIMO-PH Logo" className="h-10 w-auto" />
              <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                HIMO-PH
              </Link>
            </div>
            <p className="text-white/70 mb-6 max-w-sm text-lg leading-relaxed">
              We Build. You Grow. 🇵🇭<br />
              Accelerating digital transformation for Filipino businesses with custom ordering systems.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-white/70">
                <MapPin className="h-5 w-5 mr-3 text-white/90" />
                <span>Zamboanga City, Philippines</span>
              </li>
              <li className="flex items-center text-white/70">
                <Mail className="h-5 w-5 mr-3 text-white/90" />
                <span>hello@himo.ph</span>
              </li>
              <li className="flex items-center text-white/70">
                <MessageCircle className="h-5 w-5 mr-3 text-white/90" />
                <span>+63 900 000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} HIMO-PH. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ in Zamboanga City, Philippines 🇵🇭</p>
        </div>
      </div>
    </footer>
  );
}
