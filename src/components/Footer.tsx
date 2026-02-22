import { Instagram, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-ivory/80">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-ivory mb-3">
              <span className="gold-text">Mehendi</span> by Priya
            </h3>
            <p className="font-sans text-sm leading-relaxed text-ivory/60">
              Crafting bespoke henna artistry for your most cherished celebrations. 
              Every design, a masterpiece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-ivory/50 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "About", "Gallery", "Services", "Book Now"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block font-sans text-sm text-ivory/60 hover:text-ivory transition-colors"
                >
                  {link === "Book Now" ? link : link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-ivory/50 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a href="tel:+919999999999" className="flex items-center gap-3 font-sans text-sm text-ivory/60 hover:text-ivory transition-colors">
                <Phone size={14} /> +91 99999 99999
              </a>
              <a href="https://instagram.com" className="flex items-center gap-3 font-sans text-sm text-ivory/60 hover:text-ivory transition-colors">
                <Instagram size={14} /> @mehendibypriya
              </a>
              <p className="flex items-center gap-3 font-sans text-sm text-ivory/60">
                <MapPin size={14} /> Mumbai, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-6 text-center">
          <p className="font-sans text-xs text-ivory/40 flex items-center justify-center gap-1">
            © 2026 Mehendi by Priya. Made with <Heart size={12} className="text-primary" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
