import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Heart, Users, Crown } from "lucide-react";

const packages = [
  {
    icon: Crown,
    title: "Bridal Mehendi",
    description: "Full bridal coverage — both hands & feet with intricate, personalized designs that tell your love story.",
    features: ["Both hands & feet", "Personalized design", "4-6 hours session", "Premium organic henna"],
    price: "Starting ₹15,000",
    popular: true,
  },
  {
    icon: Sparkles,
    title: "Engagement Mehendi",
    description: "Elegant designs for your ring ceremony. The perfect blend of tradition and contemporary style.",
    features: ["Both hands", "Custom design", "2-3 hours session", "Organic henna"],
    price: "Starting ₹8,000",
    popular: false,
  },
  {
    icon: Users,
    title: "Guest Mehendi",
    description: "Beautiful designs for family & friends. Make every guest feel special on your celebration.",
    features: ["One hand per guest", "Quick application", "Group sessions", "Minimum 10 guests"],
    price: "Starting ₹500/guest",
    popular: false,
  },
  {
    icon: Heart,
    title: "Baby Shower & Events",
    description: "Delicate, joyful designs for baby showers, festivals, and intimate celebrations.",
    features: ["Custom themes", "Flexible designs", "1-2 hours session", "Natural henna"],
    price: "Starting ₹3,000",
    popular: false,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Curated <span className="italic font-normal text-primary">Packages</span>
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">
            Each package is a bespoke experience, tailored to make your special day unforgettable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`luxury-card relative flex flex-col ${
                pkg.popular ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gold-gradient rounded-full">
                  <span className="font-sans text-[10px] tracking-widest uppercase font-medium text-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <pkg.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="font-sans text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                {pkg.description}
              </p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-sans text-secondary-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="font-serif text-lg font-semibold text-primary">{pkg.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
