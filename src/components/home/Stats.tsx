import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, LayoutGrid, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide-1.jpg";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Youth Entrepreneurs Supported" },
  { icon: Briefcase, value: 1200, suffix: "+", label: "Jobs Created" },
  { icon: LayoutGrid, value: 7, suffix: "", label: "Key Sectors Covered" },
  { icon: TrendingUp, value: 2.5, suffix: "B+ TZS", label: "Business Value Created", isDecimal: true },
];

const AnimatedNumber = ({ target, suffix, isDecimal }: { target: number; suffix: string; isDecimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(isDecimal ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isDecimal]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-accent">
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </div>
  );
};

const Stats = () => (
  <section className="relative overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroSlide1})` }}
    />
    <div className="absolute inset-0 bg-primary/90" />

    <div className="relative z-10 section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
            Our Reach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary-foreground mb-4">
            Our Impact Across Tanzania
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Driving measurable change through collaboration, mentorship, and economic empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular animated icon */}
              <div className="relative mb-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40"
                  style={{ width: 96, height: 96 }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20 + i * 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-1 rounded-full border border-primary-foreground/10"
                  style={{ width: 88, height: 88, top: 4, left: 4 }}
                />
                <div className="relative w-24 h-24 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="text-accent" size={32} strokeWidth={1.5} />
                </div>
                {/* Orbiting dot */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-24 h-24"
                  style={{ transformOrigin: "center" }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
                </motion.div>
              </div>

              <AnimatedNumber target={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              <p className="mt-2 text-primary-foreground/70 text-xs md:text-sm max-w-[140px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
