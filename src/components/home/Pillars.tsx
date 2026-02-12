import { Rocket, Users, Leaf, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Rocket,
    title: "Business & Entrepreneurship",
    points: ["Startup support & incubation", "Financial institution partnerships", "Youth business development"],
  },
  {
    icon: Users,
    title: "Leadership & Governance",
    points: ["Youth political participation", "Diplomacy & international cooperation", "Policy advocacy & transparency"],
  },
  {
    icon: Leaf,
    title: "Sustainable Development",
    points: ["Climate change adaptation", "Agriculture & food security", "Green innovation"],
  },
];

const Pillars = () => (
  <section id="pillars" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
        Our Three Pillars of Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card p-8 rounded-lg shadow-sm hover-lift border border-border group"
          >
            <pillar.icon className="text-accent mb-4" size={36} strokeWidth={1.5} />
            <h3 className="text-xl font-heading font-bold text-primary mb-4">{pillar.title}</h3>
            <ul className="space-y-2 mb-6">
              {pillar.points.map((point) => (
                <li key={point} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors"
            >
              Learn more <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
