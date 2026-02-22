import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import bridalImg from "@/assets/gallery-bridal-1.jpg";
import arabicImg from "@/assets/gallery-arabic-1.jpg";
import minimalImg from "@/assets/gallery-minimal-1.jpg";
import traditionalImg from "@/assets/gallery-traditional-1.jpg";

const categories = ["All", "Bridal", "Arabic", "Minimal", "Traditional"] as const;

const galleryItems = [
  { src: bridalImg, alt: "Bridal mehendi design", category: "Bridal" },
  { src: arabicImg, alt: "Arabic mehendi design", category: "Arabic" },
  { src: minimalImg, alt: "Minimal mehendi design", category: "Minimal" },
  { src: traditionalImg, alt: "Traditional mehendi design", category: "Traditional" },
  { src: bridalImg, alt: "Bridal mehendi design 2", category: "Bridal" },
  { src: arabicImg, alt: "Arabic mehendi design 2", category: "Arabic" },
  { src: traditionalImg, alt: "Traditional mehendi design 2", category: "Traditional" },
  { src: minimalImg, alt: "Minimal mehendi design 2", category: "Minimal" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            A Glimpse of <span className="italic font-normal text-primary">Artistry</span>
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto">
            Each design is handcrafted with meticulous attention to detail, 
            reflecting the beauty of your celebration.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.alt}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm aspect-square cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-sans text-xs tracking-wider uppercase text-ivory">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
