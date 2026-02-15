import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const images = [heroSlide1, heroSlide2, heroSlide3];

const About = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image carousel — LEFT side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="Leaders Forum event"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Overlay accent strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
            {/* Image dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-primary-foreground/50 w-3"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Text — RIGHT side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
              About Leaders Forum
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black mb-5 leading-tight">
              Bridging the Gap Between Leaders and Entrepreneurs
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Leaders Forum is Tanzania's premier platform for networking, collaboration, and innovation — connecting visionary leaders, entrepreneurs, and changemakers to foster sustainable growth across key economic sectors.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We create structured pathways for youth entrepreneurs to access established leaders, financial institutions, and market opportunities — all under one unified platform.
            </p>
            <p className="text-muted-foreground mb-7 leading-relaxed">
              Through our multi-sectoral approach covering beauty, manufacturing, mining, agriculture, transport, influencer marketing, and music, we ensure that no entrepreneur is left behind.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/about" className="inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
