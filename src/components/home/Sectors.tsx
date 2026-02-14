import { Sparkles, Factory, Mountain, Wheat, Truck, Megaphone, Music } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const sectors = [
  { name: "Beauty & Cosmetics", sub: "Premium skincare & beauty products", icon: Sparkles, gradient: "from-pink-500 to-rose-600" },
  { name: "Manufacturing", sub: "Industrial growth & production", icon: Factory, gradient: "from-blue-600 to-indigo-700" },
  { name: "Mining", sub: "Mineral resources & extraction", icon: Mountain, gradient: "from-amber-600 to-orange-700" },
  { name: "Agriculture", sub: "Farming & food production", icon: Wheat, gradient: "from-green-500 to-emerald-700" },
  { name: "Transport & Logistics", sub: "Supply chain & delivery", icon: Truck, gradient: "from-cyan-500 to-blue-700" },
  { name: "Influencers", sub: "Digital creators & marketing", icon: Megaphone, gradient: "from-purple-500 to-violet-700" },
  { name: "Music Industry", sub: "Entertainment & arts", icon: Music, gradient: "from-red-500 to-pink-700" },
];

const Sectors = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll right to left
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animFrame: number;
    let speed = 0.8;
    let paused = false;

    const step = () => {
      if (!paused && el) {
        el.scrollLeft += speed;
        // Loop: reset to start when reaching end
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
          {/* Duplicate sectors for seamless loop */}
          {[...sectors, ...sectors].map((sector, idx) => (
            <motion.div
              key={`${sector.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % sectors.length) * 0.08 }}
              className="flex-shrink-0 w-56 md:w-64 group cursor-pointer"
            >
              {/* Card with gradient top */}
              <div className={`relative h-44 md:h-52 rounded-t-2xl bg-gradient-to-br ${sector.gradient} overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <sector.icon size={48} className="text-white/90 drop-shadow-lg" strokeWidth={1.5} />
                </motion.div>
                {/* Decorative circles */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
              </div>

              {/* Info bottom */}
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
