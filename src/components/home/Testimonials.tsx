import { useEffect, useState, useCallback } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Leaders Forum connected me with mentors who transformed my small beauty business into a thriving brand. Today, we employ 15 people and export to 3 countries.",
    name: "Amina Hassan",
    title: "Founder, Glamour Tanzania",
    sector: "Beauty & Cosmetics",
  },
  {
    quote: "The mentorship program gave me the tools and network I needed to scale my agricultural enterprise. I've since doubled production and hired 20 more workers.",
    name: "Joseph Mwangi",
    title: "CEO, GreenHarvest Ltd",
    sector: "Agriculture",
  },
  {
    quote: "Through Leaders Forum, I connected with investors who believed in my vision for sustainable transport. Our fleet has grown from 3 to 25 vehicles in just two years.",
    name: "Grace Makonda",
    title: "Director, SafeRide Logistics",
    sector: "Transport & Logistics",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)), []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black">
            Transforming Lives, Building Futures
          </h2>
        </motion.div>

        <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="mx-auto mb-4 sm:mb-6 text-accent/30" size={36} />
              <p className="text-base sm:text-lg md:text-xl italic text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground text-lg">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
                <span className="inline-block mt-2 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonials[current].sector}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-8" : "bg-border w-2"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
