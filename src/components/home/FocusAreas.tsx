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
    color: "from-primary to-primary/80",
  },
  {
    icon: Globe,
    title: "Diplomacy & International Relations",
    description:
      "Peace, security, humanitarian action, and human rights on the global stage.",
    highlights: ["Peace & Security", "Human Rights (UN)", "Humanitarian Action"],
    href: "/focus/diplomacy",
    color: "from-accent to-accent/80",
  },
  {
    icon: Briefcase,
    title: "Business & Entrepreneurship",
    description:
      "Empowering startups, strengthening enterprises, and partnering with financial institutions.",
    highlights: ["Startup Incubation", "Enterprise Growth", "Financial Partnerships"],
    href: "/focus/business",
    color: "from-primary to-accent",
  },
  {
    icon: Leaf,
    title: "Climate Change & Agriculture",
    description:
      "Food security, climate adaptation, and sustainable agricultural policy for future generations.",
    highlights: ["Food Security", "Climate Adaptation", "Agricultural Policy"],
    href: "/focus/climate",
    color: "from-green-600 to-green-500",
  },
  {
    icon: Landmark,
    title: "Policy & Public Sector",
    description:
      "Accountability, transparency, public services, social justice, and international cooperation.",
    highlights: ["Accountability", "Public Services", "Social Justice"],
    href: "/focus/policy",
    color: "from-primary to-primary/70",
  },
];

const FocusAreas = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
          What We Champion
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4">
          Our Focus Areas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Leaders Forum 2026 drives impact across five interconnected pillars
          shaping Tanzania's future.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${area.color} p-[2px] hover-lift ${
              i === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <Link
              to={area.href}
              className="block bg-background rounded-2xl p-7 h-full"
            >
              <area.icon
                className="text-accent mb-4"
                size={36}
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {area.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs bg-secondary text-foreground/80 px-3 py-1 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreas;
