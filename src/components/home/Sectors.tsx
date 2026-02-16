import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import beautyImg from "@/assets/sectors/beauty.jpg";
import manufacturingImg from "@/assets/sectors/manufacturing.jpg";
import miningImg from "@/assets/sectors/mining.jpg";
import agricultureImg from "@/assets/sectors/agriculture.jpg";
import transportImg from "@/assets/sectors/transport.jpg";
import influencersImg from "@/assets/sectors/influencers.jpg";
import musicImg from "@/assets/sectors/music.jpg";

const sectors = [
  { name: "Beauty & Cosmetics", sub: "Premium skincare & beauty products", image: beautyImg },
  { name: "Manufacturing", sub: "Industrial growth & production", image: manufacturingImg },
  { name: "Mining", sub: "Mineral resources & extraction", image: miningImg },
  { name: "Agriculture", sub: "Farming & food production", image: agricultureImg },
  { name: "Transport & Logistics", sub: "Supply chain & delivery", image: transportImg },
  { name: "Influencers", sub: "Digital creators & marketing", image: influencersImg },
  { name: "Music Industry", sub: "Entertainment & arts", image: musicImg },
];

const Sectors = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animFrame: number;
    let speed = 0.8;
    let paused = false;

    const step = () => {
      if (!paused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      animFrame = requestAnimationFrame(step);
    };

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", resume);

    animFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animFrame);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section id="sectors" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4">
            Sectors We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering entrepreneurs across seven key industries driving Tanzania's economy.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {[...sectors, ...sectors].map((sector, idx) => (
            <motion.div
              key={`${sector.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % sectors.length) * 0.08 }}
              className="flex-shrink-0 w-44 sm:w-56 md:w-64 group cursor-pointer"
            >
              <div className="relative h-36 sm:h-44 md:h-52 rounded-t-2xl overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="bg-card border border-t-0 border-border rounded-b-2xl p-4 group-hover:shadow-lg transition-shadow">
                <h3 className="text-sm md:text-base font-heading font-bold text-foreground">
                  {sector.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{sector.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
