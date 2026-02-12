import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6">
            Bridging the Gap Between Leaders and Entrepreneurs
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Leaders Forum is Tanzania's premier platform that brings together visionary leaders, entrepreneurs, and changemakers to foster collaboration, mentorship, and sustainable growth across key economic sectors.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We fill a critical gap in Tanzania's ecosystem by creating structured pathways for youth entrepreneurs to access established leaders, financial institutions, and market opportunities — all under one unified platform.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Through our multi-sectoral approach covering beauty, manufacturing, mining, agriculture, transport, influencer marketing, and music, we ensure that no entrepreneur is left behind regardless of their industry.
          </p>
          <Button variant="accent" size="lg">Learn More About Us</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-xl aspect-video bg-primary/10 flex items-center justify-center"
        >
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-accent ml-1" />
            </div>
            <p className="text-muted-foreground text-sm">Forum Highlights Video Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
