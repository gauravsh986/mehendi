import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Bride, Delhi",
    text: "Priya's mehendi was the highlight of my wedding! Every guest complimented the intricate detailing. She understood exactly what I wanted and added her own artistic touch. Truly magical.",
    rating: 5,
  },
  {
    name: "Riya Kapoor",
    role: "Bride, Mumbai",
    text: "I was so nervous about my bridal mehendi, but Priya made the entire experience so calming and luxurious. The design was breathtaking — even better than what I had imagined!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    role: "Bride, Jaipur",
    text: "Professional, punctual, and incredibly talented. Priya's henna color was the darkest I've ever seen! She's not just an artist, she's a storyteller with henna.",
    rating: 5,
  },
  {
    name: "Kavita Singh",
    role: "Bride, Bangalore",
    text: "From consultation to the final design, every step was perfect. Priya's attention to detail is unmatched. My bridal mehendi photographs are my most treasured wedding memories.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold">
            Words from <span className="italic font-normal text-primary">Happy Brides</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="luxury-card text-center py-10 md:py-14 px-6 md:px-12">
            <Quote size={32} className="mx-auto mb-6 text-primary/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl italic text-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                  "{testimonials[current].text}"
                </p>
                <p className="font-sans text-sm font-medium tracking-wider uppercase text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="font-sans text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {testimonials[current].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
            >
              <ChevronLeft size={18} className="text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
            >
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
