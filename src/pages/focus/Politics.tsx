import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Vote, Scale, Users, ShieldCheck, ArrowLeft } from "lucide-react";

const topics = [
  {
    icon: Vote,
    title: "Youth Political Participation",
    desc: "We empower young Tanzanians to actively participate in political processes — from local elections to national policy dialogue. Through civic education, mentorship from seasoned politicians, and structured platforms for engagement, we ensure youth voices shape governance.",
  },
  {
    icon: Scale,
    title: "Rule of Law",
    desc: "A strong rule of law is the bedrock of any prosperous nation. Leaders Forum advocates for legal literacy, judicial independence, and equitable access to justice for every citizen regardless of background.",
  },
  {
    icon: Users,
    title: "Democratic Participation",
    desc: "Democracy thrives when citizens engage. We promote voter education, transparent electoral processes, and youth-led monitoring initiatives to strengthen democratic institutions across Tanzania.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Leadership",
    desc: "Leaders Forum champions integrity in public life. We host dialogues and training programs that equip emerging leaders with ethical frameworks to guide decision-making in government and civic spaces.",
  },
];

const Politics = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-28 pb-16 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Vote className="mx-auto mb-4 text-accent" size={56} strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4">
            Politics & Governance
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Empowering youth participation, strengthening the rule of law, and building accountable governance for Tanzania's future.
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Get Involved</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join Leaders Forum 2026 and be part of the movement shaping Tanzania's political landscape. Whether you're an aspiring politician, civic leader, or engaged citizen — there's a place for you.
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

export default Politics;
