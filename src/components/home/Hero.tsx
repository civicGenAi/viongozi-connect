import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    image: heroSlide1,
    headline: "Rise, Lead, Transform",
    sub: "Connecting leaders with entrepreneurs to build Tanzania's future together.",
  },
  {
    image: heroSlide2,
    headline: "Inspire Through Leadership",
    sub: "Empowering the next generation of visionary Tanzanian leaders on the global stage.",
  },
  {
    image: heroSlide3,
    headline: "Collaborate & Innovate",
    sub: "Multi-sectoral collaboration driving sustainable growth across 7 key industries.",
  },
  {
    image: heroSlide4,
    headline: "Celebrate Excellence",
    sub: "Recognizing outstanding achievements at the Tanzania Business Achievement Awards.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />

      {/* Animated vector shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-primary-foreground/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full border border-primary-foreground/5"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] w-20 h-20 border border-accent/30 rotate-45"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[10%] w-16 h-16 rounded-full border-2 border-accent/20"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[25%] w-32 h-32 rounded-full bg-accent/10"
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -40 + i * 10, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 5 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            className="absolute w-2 h-2 rounded-full bg-primary-foreground/20"
            style={{ top: `${20 + i * 12}%`, left: `${10 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight">
              {slides[current].headline}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light mb-2 max-w-2xl mx-auto opacity-90">
              {slides[current].sub}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base mb-10"
        >
          Leaders Forum 2026 | Viongozi na Wafanya Biashara
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button variant="accent" size="lg" className="text-base px-8 py-6" asChild>
            <Link to="/register">Register for Forum 2026</Link>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
            <Link to="/programs">Explore Programs</Link>
          </Button>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-10" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
