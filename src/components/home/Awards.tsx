import { Award, Star, Trophy, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Awards = () => (
  <section id="awards" className="relative overflow-hidden">
    {/* Rich gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

    {/* Animated pattern */}
    <div className="absolute inset-0 opacity-[0.07]" style={{
      backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }} />

    {/* Floating decorations */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%]"
      >
        <Star className="text-gold/30" size={32} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] right-[10%]"
      >
        <Crown className="text-gold/20" size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[15%] left-[15%]"
      >
        <Trophy className="text-gold/25" size={28} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10"
      />
    </div>

    <div className="relative z-10 section-padding">
      <div className="container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/20 mb-8"
          >
            <Award className="text-gold drop-shadow-lg" size={48} strokeWidth={1.5} />
          </motion.div>

          <span className="text-gold font-semibold text-sm uppercase tracking-widest mb-3 block">
            Excellence Recognized
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary-foreground mb-4">
            Tanzania Business Achievement Awards 2026
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Recognizing outstanding leaders and entrepreneurs who are driving innovation, creating jobs, and transforming communities across Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="px-8">Nominate Now</Button>
            <Button variant="heroOutline" size="lg" className="px-8">View Categories</Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Awards;
