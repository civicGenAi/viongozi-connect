import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Rocket, Building2, Landmark, ArrowLeft } from "lucide-react";

const topics = [
  {
    icon: Rocket,
    title: "Startup Incubation",
    desc: "From ideation to market entry — Leaders Forum provides structured incubation programs, mentorship from successful entrepreneurs, and access to seed funding opportunities for Tanzania's most promising startups.",
  },
  {
    icon: Building2,
    title: "Enterprise Growth",
    desc: "Scaling existing businesses through strategic partnerships, market expansion support, operational excellence training, and connections to regional and international markets.",
  },
  {
    icon: Landmark,
    title: "Financial Institutions Partnership",
    desc: "Bridging the gap between entrepreneurs and financial institutions. We facilitate access to credit, investment opportunities, and financial literacy programs tailored for Tanzanian business owners.",
  },
  {
    icon: Briefcase,
    title: "Business Development Programs",
    desc: "Comprehensive business skills training covering marketing, operations, finance, and technology adoption. Equipping entrepreneurs with tools to compete in the modern economy.",
  },
];

const Business = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-28 pb-16 bg-gradient-to-br from-primary to-accent">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Briefcase className="mx-auto mb-4 text-accent" size={56} strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4">
            Business & Entrepreneurship
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Empowering startups, accelerating growth, and connecting entrepreneurs with the financial ecosystem.
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Start Your Journey</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you're launching a startup or scaling an enterprise, Leaders Forum 2026 connects you with the mentors, investors, and partners you need to succeed.
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

export default Business;
