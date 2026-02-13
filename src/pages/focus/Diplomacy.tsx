import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Shield, Heart, Scale, ArrowLeft } from "lucide-react";

const topics = [
  {
    icon: Globe,
    title: "Future Diplomacy",
    desc: "Preparing Tanzania's next generation of diplomats to navigate complex international relations, multilateral negotiations, and regional integration in an increasingly interconnected world.",
  },
  {
    icon: Shield,
    title: "Peace & Security",
    desc: "Promoting conflict prevention, peacebuilding, and security cooperation. Leaders Forum trains youth in mediation, dialogue facilitation, and understanding regional security dynamics in East Africa and beyond.",
  },
  {
    icon: Heart,
    title: "Humanitarian Action",
    desc: "Building capacity for humanitarian response, disaster preparedness, and refugee support. We connect young leaders with international humanitarian organizations and best practices.",
  },
  {
    icon: Scale,
    title: "Human Rights (UN Framework)",
    desc: "Advancing human rights education, advocacy, and alignment with UN frameworks. Leaders Forum empowers youth to champion dignity, equality, and justice at local and international levels.",
  },
];

const Diplomacy = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-28 pb-16 bg-gradient-to-br from-accent to-accent/80">
      <div className="container mx-auto px-4 text-center text-accent-foreground">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Globe className="mx-auto mb-4 text-primary-foreground" size={56} strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4">
            Diplomacy & International Relations
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Shaping Tanzania's role on the global stage through peace, security, humanitarian action, and human rights advocacy.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover-lift"
            >
              <t.icon className="text-accent mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-heading font-bold mb-3">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Join the Conversation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Be part of Tanzania's diplomatic future. Leaders Forum 2026 brings together aspiring diplomats, international affairs professionals, and global thinkers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/register">Register Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/"><ArrowLeft size={16} /> Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Diplomacy;
