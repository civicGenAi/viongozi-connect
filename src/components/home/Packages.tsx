import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Community Access",
    price: "150,000",
    features: ["General seating", "Main forum access", "Networking lunch", "Digital materials"],
    btnVariant: "outline" as const,
    btnLabel: "Select Community",
  },
  {
    name: "Elite Access",
    price: "500,000",
    featured: true,
    badge: "Most Popular",
    features: ["VIP seating", "One-on-one mentorship", "All networking events", "Award ceremony access", "Post-forum consultations", "Media exposure"],
    btnVariant: "accent" as const,
    btnLabel: "Select Elite",
  },
  {
    name: "Professional Access",
    price: "300,000",
    features: ["Priority seating", "Group mentorship", "Networking events", "Award ceremony access", "Digital materials"],
    btnVariant: "default" as const,
    btnLabel: "Select Professional",
  },
];

const Packages = () => (
  <section id="packages" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
          Packages
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4">
          Choose Your Forum Experience
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative bg-card rounded-2xl border-2 p-6 md:p-8 flex flex-col transition-all duration-300 ${
              pkg.featured
                ? "border-accent shadow-xl md:scale-105 md:-mt-4 md:mb-4"
                : "border-border hover:border-primary/30 hover:shadow-lg"
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                <Sparkles size={12} /> {pkg.badge}
              </div>
            )}
            <h3 className="text-lg font-heading font-bold text-center mb-1">{pkg.name}</h3>
            <div className="text-center mb-6">
              <span className="text-3xl md:text-4xl font-heading font-black text-primary">TZS {pkg.price}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-accent" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={pkg.btnVariant} className="w-full" size="lg" asChild>
              <Link to="/cart">{pkg.btnLabel}</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
