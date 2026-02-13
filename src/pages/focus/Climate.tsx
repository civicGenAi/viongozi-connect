import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Wheat, CloudRain, FileText, ArrowLeft } from "lucide-react";

const topics = [
  {
    icon: Wheat,
    title: "Food Security",
    desc: "Addressing Tanzania's food security challenges through innovation in agriculture, improved supply chains, and sustainable farming practices that ensure nourishment for all communities.",
  },
  {
    icon: CloudRain,
    title: "Climate Adaptation",
    desc: "Equipping communities and businesses with strategies to adapt to changing climate patterns — from drought-resilient farming to flood preparedness and sustainable water management.",
  },
  {
    icon: FileText,
    title: "Agricultural Policy",
    desc: "Advocating for evidence-based agricultural policies that support smallholder farmers, encourage investment in agri-tech, and create pathways for youth in the agricultural sector.",
  },
  {
    icon: Leaf,
    title: "Green Innovation",
    desc: "Promoting clean energy solutions, sustainable manufacturing, and circular economy practices. Leaders Forum supports innovators building a greener, more resilient Tanzania.",
  },
];

const Climate = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-28 pb-16 bg-gradient-to-br from-green-700 to-green-500">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Leaf className="mx-auto mb-4 text-accent" size={56} strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4">
            Climate Change & Agriculture
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Building food security, driving climate adaptation, and shaping sustainable agricultural policy for Tanzania's future.
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Champion Sustainability</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join Leaders Forum 2026 and contribute to building a climate-resilient, food-secure Tanzania. Your ideas and leadership matter.
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

export default Climate;
