import { motion } from "framer-motion";
import { Star, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-mehendi.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Exquisite bridal mehendi artistry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-light mb-4">
            Premium Mehendi Artistry
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-ivory leading-tight">
            Where Tradition Meets
            <br />
            <span className="italic font-normal text-gold-light">Timeless Elegance</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-sm md:text-base text-ivory/80 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crafting bespoke henna designs for your most cherished moments. 
          Every stroke tells your love story.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          {[
            { icon: Star, text: "Bridal Specialist" },
            { icon: Award, text: "500+ Happy Brides" },
            { icon: Heart, text: "8+ Years Experience" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-light/30 bg-foreground/20 backdrop-blur-sm"
            >
              <badge.icon size={14} className="text-gold-light" />
              <span className="font-sans text-xs tracking-wider uppercase text-ivory/90">
                {badge.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="gold-gradient px-8 py-3.5 text-sm font-sans font-medium tracking-widest uppercase text-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            Book Bridal Mehendi
          </a>
          <a
            href="#gallery"
            className="px-8 py-3.5 text-sm font-sans font-medium tracking-widest uppercase text-ivory border border-ivory/40 rounded-sm hover:bg-ivory/10 transition-colors"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-ivory/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-ivory/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
