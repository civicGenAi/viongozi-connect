import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Awards = () => (
  <section id="awards" className="section-padding bg-primary relative overflow-hidden">
    {/* Pattern overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }} />

    <div className="container mx-auto relative z-10 text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Award className="mx-auto mb-6 text-gold drop-shadow-lg" size={64} strokeWidth={1.5} />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Tanzania Business Achievement Awards 2026
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-2">
          Celebrating Excellence in Tanzanian Entrepreneurship
        </p>
        <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
          Recognizing outstanding leaders and entrepreneurs who are driving innovation, creating jobs, and transforming communities across Tanzania.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" className="px-8">Nominate Now</Button>
          <Button variant="heroOutline" size="lg" className="px-8">View Categories</Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Awards;
