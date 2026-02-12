import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Community Access",
    price: "150,000",
    borderColor: "border-t-muted-foreground",
    features: ["General seating", "Main forum access", "Networking lunch", "Digital materials"],
    btnVariant: "outline" as const,
    btnLabel: "Select Community",
  },
  {
    name: "Elite Access",
    price: "500,000",
    borderColor: "border-t-primary",
    featured: true,
    badge: "Most Popular",
    features: ["VIP seating", "One-on-one mentorship", "All networking events", "Award ceremony access", "Post-forum consultations", "Media exposure"],
    btnVariant: "accent" as const,
    btnLabel: "Select Elite",
  },
  {
    name: "Professional Access",
    price: "300,000",
    borderColor: "border-t-gold",
    features: ["Priority seating", "Group mentorship", "Networking events", "Award ceremony access", "Digital materials"],
    btnVariant: "default" as const,
    btnLabel: "Select Professional",
  },
];

const Packages = () => (
  <section id="packages" className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
        Choose Your Forum Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-card rounded-lg shadow-sm border border-border border-t-8 ${pkg.borderColor} p-8 flex flex-col hover-lift relative ${
              pkg.featured ? "md:scale-105 md:shadow-lg" : ""
            }`}
          >
            {pkg.badge && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                {pkg.badge}
              </span>
            )}
            <h3 className="text-xl font-heading font-bold text-center mb-2">{pkg.name}</h3>
            <div className="text-center mb-6">
              <span className="text-3xl font-heading font-black text-primary">TZS {pkg.price}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={pkg.btnVariant} className="w-full">
              {pkg.btnLabel}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
