import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Landmark, Eye, HeartHandshake, Scale, Globe, ArrowLeft } from "lucide-react";

const topics = [
  {
    icon: Eye,
    title: "Accountability & Transparency",
    desc: "Advocating for open government, transparent public procurement, and accountability mechanisms that ensure leaders serve the public interest. We equip youth with tools to hold institutions accountable.",
  },
  {
    icon: HeartHandshake,
    title: "Public Services",
    desc: "Improving delivery of essential public services — healthcare, education, water, and infrastructure — through policy innovation, civic engagement, and technology-driven solutions.",
  },
  {
    icon: Scale,
    title: "Social Justice",
    desc: "Championing equity, inclusion, and justice for all Tanzanians. Leaders Forum promotes policies that address inequality, protect vulnerable populations, and ensure fair access to opportunities.",
  },
  {
    icon: Globe,
    title: "International Cooperation (UN)",
    desc: "Engaging with the United Nations and international bodies to align Tanzania's policy agenda with global development goals, including the SDGs, Agenda 2063, and multilateral agreements.",
  },
];

const Policy = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-28 pb-16 bg-gradient-to-br from-primary to-primary/70">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Landmark className="mx-auto mb-4 text-accent" size={56} strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4">
            Policy & Public Sector
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Driving accountability, transparency, social justice, and effective governance through informed policy dialogue and international cooperation.
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Shape Policy</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Your voice matters in shaping Tanzania's public policy landscape. Join Leaders Forum 2026 and engage directly with policymakers, thought leaders, and international organizations.
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

export default Policy;
