import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import InstagramShowcase from "@/components/InstagramShowcase";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <InstagramShowcase />
      <BookingSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
