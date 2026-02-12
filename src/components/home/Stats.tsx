import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, LayoutGrid, TrendingUp } from "lucide-react";

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
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary">
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </div>
  );
};

const Stats = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
        Our Impact Across Tanzania
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card p-8 rounded-lg border-l-4 border-l-primary shadow-sm hover-lift text-center"
          >
            <stat.icon className="mx-auto mb-4 text-accent" size={32} />
            <AnimatedNumber target={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
            <p className="mt-2 text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
