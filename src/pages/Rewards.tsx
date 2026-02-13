import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Crown, Medal, Target } from "lucide-react";

const categories = [
  {
    icon: Trophy,
    title: "Young Entrepreneur of the Year",
    desc: "Recognizing an outstanding young entrepreneur who has demonstrated exceptional innovation, business growth, and community impact.",
  },
  {
    icon: Star,
    title: "Excellence in Leadership",
    desc: "Honoring an emerging leader who has shown exemplary leadership in governance, civic engagement, or organizational management.",
  },
  {
    icon: Crown,
    title: "Sector Champion Award",
    desc: "Awarded to individuals or organizations driving transformative change within their sector — beauty, agriculture, manufacturing, mining, transport, or music.",
  },
  {
    icon: Medal,
    title: "Social Impact Award",
    desc: "Celebrating initiatives that have created measurable positive social impact — job creation, community development, or poverty reduction.",
  },
  {
    icon: Target,
    title: "Innovation & Technology Award",
    desc: "Recognizing groundbreaking use of technology and innovation to solve pressing challenges in Tanzania's economy and society.",
  },
  {
    icon: Award,
    title: "Lifetime Achievement Award",
    desc: "A prestigious honor for a seasoned leader or entrepreneur whose career-long contributions have shaped Tanzania's business and leadership landscape.",
  },
];

const process = [
  { step: "01", title: "Nomination", desc: "Submit your nomination with supporting evidence of achievement and impact." },
  { step: "02", title: "Review", desc: "An independent panel reviews all nominations against established criteria." },
  { step: "03", title: "Shortlisting", desc: "Top nominees are shortlisted and notified for the final evaluation stage." },
  { step: "04", title: "Award Ceremony", desc: "Winners are announced at the Leaders Forum 2026 Gala Dinner & Awards Night." },
];

const Rewards = () => (
  <div className="min-h-screen">
    <Header />

    {/* Hero */}
    <section className="pt-28 pb-16 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      <div className="container mx-auto px-4 text-center text-primary-foreground relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Award className="mx-auto mb-4 text-gold drop-shadow-lg" size={72} strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4">
            Tanzania Business Achievement Awards 2026
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Celebrating excellence, innovation, and transformative leadership across Tanzania's key sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="px-8">Nominate Now</Button>
            <Button variant="heroOutline" size="lg" className="px-8">Download Guidelines</Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Award Categories */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">Recognition</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Award Categories</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Six prestigious categories recognizing excellence across diverse fields.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-7 hover-lift"
            >
              <cat.icon className="text-gold mb-4" size={36} strokeWidth={1.5} />
              <h3 className="text-lg font-heading font-bold mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-heading font-black text-accent/30 mb-2">{p.step}</div>
              <h3 className="text-lg font-heading font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center text-accent-foreground">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Know Someone Exceptional?
        </h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
          Nominate a leader, entrepreneur, or innovator who is making a difference in Tanzania. Nominations close May 2026.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="ctaWhite" size="lg" className="px-8">Submit Nomination</Button>
          <Button variant="ctaOutline" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Rewards;
