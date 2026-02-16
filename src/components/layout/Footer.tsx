import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Forums & Events", href: "/forums" },
  { label: "Programs", href: "/programs" },
  { label: "Sectors", href: "/sectors" },
  { label: "Rewards", href: "/rewards" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "News & Updates", href: "/news" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Downloads", href: "/downloads" },
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* About */}
          <div>
            <img src={logo} alt="Leader's Forum" className="h-10 md:h-12 mb-4 brightness-0 invert" />
            <p className="text-xs sm:text-sm text-footer-foreground/70 leading-relaxed">
              Rise, Lead, Transform. Empowering Tanzania's next generation of leaders and entrepreneurs through collaboration, mentorship, and innovation.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full border border-footer-foreground/20 text-footer-foreground/60 hover:text-accent hover:border-accent transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-footer-foreground/70 hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm md:text-base font-heading font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-footer-foreground/70 hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm md:text-base font-heading font-bold mb-4">Stay Updated</h4>
            <p className="text-xs sm:text-sm text-footer-foreground/70 mb-3">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 rounded-md bg-footer-foreground/10 border border-footer-foreground/20 text-xs sm:text-sm text-footer-foreground placeholder:text-footer-foreground/40 focus:outline-none focus:border-accent"
              />
              <Button variant="accent" size="sm" className="flex-shrink-0 text-xs">Subscribe</Button>
            </div>
            <div className="mt-5 space-y-2 text-xs sm:text-sm text-footer-foreground/70">
              <div className="flex items-center gap-2"><Mail size={12} /> info@leadersforum.tz</div>
              <div className="flex items-center gap-2"><Phone size={12} /> +255 XXX XXX XXX</div>
              <div className="flex items-center gap-2"><MapPin size={12} /> Dar es Salaam, Tanzania</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-foreground/10">
        <div className="container mx-auto px-4 py-4 text-center text-[10px] sm:text-xs text-footer-foreground/50">
          © 2026 Leader's Forum. All rights reserved. | "Rise, Lead, Transform"
        </div>
      </div>
    </footer>
  );
};

export default Footer;
