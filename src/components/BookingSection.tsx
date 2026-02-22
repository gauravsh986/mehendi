import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone, Instagram, Send } from "lucide-react";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'd like to book mehendi.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="booking" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Book Now
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Let's Create Your <span className="italic font-normal text-primary">Dream Mehendi</span>
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">
            Ready to adorn your special day? Reach out and let's begin crafting your bespoke design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-semibold mb-6">Quick Connect</h3>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 luxury-card group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MessageCircle size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-foreground">WhatsApp Booking</p>
                <p className="font-sans text-xs text-muted-foreground">Fastest response • Tap to chat</p>
              </div>
            </a>

            <a
              href="tel:+919999999999"
              className="flex items-center gap-4 p-5 luxury-card group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-foreground">Call Directly</p>
                <p className="font-sans text-xs text-muted-foreground">+91 99999 99999</p>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 luxury-card group"
            >
              <div className="w-12 h-12 rounded-full bg-henna/10 flex items-center justify-center group-hover:bg-henna/20 transition-colors">
                <Instagram size={22} className="text-henna" />
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-foreground">Instagram DM</p>
                <p className="font-sans text-xs text-muted-foreground">@mehendibypriya</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="luxury-card space-y-5"
          >
            <h3 className="font-serif text-2xl font-semibold mb-2">Send an Enquiry</h3>
            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">
                Event Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">
                Service Required
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a service</option>
                <option value="Bridal Mehendi">Bridal Mehendi</option>
                <option value="Engagement Mehendi">Engagement Mehendi</option>
                <option value="Guest Mehendi">Guest Mehendi</option>
                <option value="Baby Shower">Baby Shower & Events</option>
              </select>
            </div>
            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">
                Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your event..."
              />
            </div>
            <button
              type="submit"
              className="w-full gold-gradient px-6 py-3.5 font-sans text-sm font-medium tracking-widest uppercase text-foreground rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
