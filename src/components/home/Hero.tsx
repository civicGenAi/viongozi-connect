import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import InteractiveWeb from "./InteractiveWeb";

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
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Two-tone brand gradient — left side */}
      <div className="absolute inset-0 z-[0]">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200,72%,28%)] via-[hsl(200,60%,38%)] via-[60%] to-transparent" />
      </div>

      {/* Slide images — right side emphasis */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-[1]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Gradient mask — strong left, transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200,72%,22%)] via-[hsl(200,65%,30%)/0.85] via-[55%] to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Interactive web overlay */}
      <InteractiveWeb />

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 container mx-auto px-4 pb-12 sm:pb-20 md:pb-28 pt-24 sm:pt-32">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4"
              >
                Leaders Forum 2026
              </motion.p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-black text-primary-foreground leading-[1.05] mb-4 sm:mb-5">
                {slides[current].headline}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 font-light leading-relaxed max-w-xl">
                {slides[current].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal slide indicators — bottom */}
        <div className="flex gap-2 mt-6 sm:mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-accent w-10"
                  : "bg-primary-foreground/30 w-6 hover:bg-primary-foreground/50"
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
