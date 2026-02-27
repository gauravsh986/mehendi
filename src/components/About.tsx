import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import artistImage from "@/assets/artist-portrait.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={artistImage}
                alt="Mehendi Mestro - Professional Mehendi Artist"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-sm -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
              The Artist
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              A Passion for
              <br />
              <span className="italic font-normal text-primary">Henna Artistry</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
              <p>
                With over 8 years of dedicated practice, I've had the privilege of adorning 
                the hands of more than 500 beautiful brides. Each design is a unique narrative 
                — woven with love, tradition, and contemporary elegance.
              </p>
              <p>
                Trained in both traditional Rajasthani and modern Arabic styles, I bring 
                a signature blend of intricate detailing and flowing artistry that transforms 
                your wedding day into a masterpiece.
              </p>
              <p>
                From intimate engagement ceremonies to grand wedding celebrations, 
                every mehendi session is a luxurious, personalized experience crafted 
                exclusively for you.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {[
                { number: "500+", label: "Happy Brides" },
                { number: "8+", label: "Years Experience" },
                { number: "50+", label: "5-Star Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-primary">
                    {stat.number}
                  </p>
                  <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
