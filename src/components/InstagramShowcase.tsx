import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";
import bridalImg from "@/assets/gallery-bridal-1.jpg";
import arabicImg from "@/assets/gallery-arabic-1.jpg";
import minimalImg from "@/assets/gallery-minimal-1.jpg";
import traditionalImg from "@/assets/gallery-traditional-1.jpg";
import heroImg from "@/assets/hero-mehendi.jpg";

const posts = [
  { src: bridalImg, alt: "Instagram post 1" },
  { src: arabicImg, alt: "Instagram post 2" },
  { src: minimalImg, alt: "Instagram post 3" },
  { src: traditionalImg, alt: "Instagram post 4" },
  { src: heroImg, alt: "Instagram post 5" },
  { src: bridalImg, alt: "Instagram post 6" },
];

const InstagramShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Follow Along
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="italic font-normal text-primary">@mehendi</span>bypriya
          </h2>
          <p className="font-sans text-sm text-muted-foreground">
            Fresh designs, behind-the-scenes & bridal inspiration daily
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.alt}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;
