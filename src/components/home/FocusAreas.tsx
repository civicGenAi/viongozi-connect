import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Vote,
  Globe,
  Briefcase,
  Leaf,
  Landmark,
  ArrowRight,
} from "lucide-react";

const areas = [
  {
    icon: Vote,
    title: "Politics & Governance",
    description:
      "Youth political participation, rule of law, and democratic engagement for a stronger Tanzania.",
    highlights: ["Youth in Politics", "Rule of Law", "Democratic Participation"],
    href: "/focus/politics",
  },
  {
    icon: Globe,
    title: "Diplomacy & International Relations",
    description:
      "Peace, security, humanitarian action, and human rights on the global stage.",
    highlights: ["Peace & Security", "Human Rights (UN)", "Humanitarian Action"],
    href: "/focus/diplomacy",
  },
  {
    icon: Briefcase,
    title: "Business & Entrepreneurship",
    description:
      "Empowering startups, strengthening enterprises, and partnering with financial institutions.",
    highlights: ["Startup Incubation", "Enterprise Growth", "Financial Partnerships"],
    href: "/focus/business",
  },
  {
    icon: Leaf,
    title: "Climate Change & Agriculture",
    description:
      "Food security, climate adaptation, and sustainable agricultural policy for future generations.",
    highlights: ["Food Security", "Climate Adaptation", "Agricultural Policy"],
    href: "/focus/climate",
  },
  {
    icon: Landmark,
    title: "Policy & Public Sector",
    description:
      "Accountability, transparency, public services, social justice, and international cooperation.",
    highlights: ["Accountability", "Public Services", "Social Justice"],
    href: "/focus/policy",
  },
];

const FocusAreas = () => (
  <section className="section-padding bg-secondary overflow-hidden">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 block">
          What We Champion
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-3 sm:mb-4">
          Our Focus Areas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Leaders Forum 2026 drives impact across five interconnected pillars
          shaping Tanzania's future.
        </p>
      </motion.div>

      {/* Staircase / stepped layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical connecting line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent/30 hidden md:block" />

        {areas.map((area, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start mb-6 md:mb-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ marginTop: i === 0 ? 0 : undefined }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
                >
                  <area.icon className="text-accent" size={20} strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Card - offset to create stair effect */}
              <div
                className={`md:w-1/2 ${isLeft ? "md:pr-16" : "md:pl-16"}`}
                style={{ marginTop: i > 0 ? undefined : 0 }}
              >
                <Link to={area.href} className="group block">
                  <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Step number */}
                    <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      0{i + 1}
                    </span>

                    {/* Mobile icon */}
                    <div className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <area.icon className="text-primary" size={20} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs bg-secondary text-foreground/70 px-3 py-1 rounded-full border border-border"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FocusAreas;
