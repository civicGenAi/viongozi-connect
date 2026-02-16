import { motion } from "framer-motion";
import { Quote, TrendingUp, Users, Briefcase } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const stories = [
  {
    name: "Amina Hassan",
    business: "Glamour Tanzania",
    sector: "Beauty & Cosmetics",
    quote: "Leaders Forum connected me with mentors who transformed my small beauty business into a thriving brand. Today, we employ 15 people and export to 3 countries.",
    stats: { revenue: "400%", jobs: "15", markets: "3" },
  },
  {
    name: "Joseph Mwangi",
    business: "GreenHarvest Ltd",
    sector: "Agriculture",
    quote: "The mentorship program gave me the tools and network I needed to scale my agricultural enterprise. I've since doubled production and hired 20 more workers.",
    stats: { revenue: "200%", jobs: "20", markets: "5" },
  },
  {
    name: "Grace Makonda",
    business: "SafeRide Logistics",
    sector: "Transport & Logistics",
    quote: "Through Leaders Forum, I connected with investors who believed in my vision for sustainable transport. Our fleet has grown from 3 to 25 vehicles.",
    stats: { revenue: "700%", jobs: "35", markets: "2" },
  },
  {
    name: "Maria Joseph",
    business: "Mama's Kitchen",
    sector: "Food Processing",
    quote: "Revenue grew 300% in 6 months after implementing my mentor's strategies. Now we export to Kenya and Uganda.",
    stats: { revenue: "300%", jobs: "12", markets: "3" },
  },
  {
    name: "Hassan Salum",
    business: "TechBridge Solutions",
    sector: "IT Services",
    quote: "Secured TZS 50M in funding and expanded our team from 3 to 15 employees during the program.",
    stats: { revenue: "500%", jobs: "15", markets: "1" },
  },
  {
    name: "Neema Charles",
    business: "GreenGrow Farms",
    sector: "Agriculture",
    quote: "Transitioned from subsistence farming to commercial operations serving 5 major supermarkets.",
    stats: { revenue: "600%", jobs: "25", markets: "5" },
  },
];

const SuccessStories = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <section className="bg-primary py-12 md:py-16 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Success Stories</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">Real entrepreneurs, real transformation. See how Leaders Forum changed lives.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-heading font-bold">
                    {story.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm">{story.name}</h3>
                    <p className="text-xs text-muted-foreground">{story.business} • {story.sector}</p>
                  </div>
                </div>
                <Quote size={20} className="text-accent/30 mb-2" />
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{story.quote}"</p>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  <div className="text-center">
                    <TrendingUp size={14} className="mx-auto text-accent mb-1" />
                    <p className="text-sm font-heading font-bold text-primary">{story.stats.revenue}</p>
                    <p className="text-[10px] text-muted-foreground">Revenue Growth</p>
                  </div>
                  <div className="text-center">
                    <Users size={14} className="mx-auto text-accent mb-1" />
                    <p className="text-sm font-heading font-bold text-primary">{story.stats.jobs}</p>
                    <p className="text-[10px] text-muted-foreground">Jobs Created</p>
                  </div>
                  <div className="text-center">
                    <Briefcase size={14} className="mx-auto text-accent mb-1" />
                    <p className="text-sm font-heading font-bold text-primary">{story.stats.markets}</p>
                    <p className="text-[10px] text-muted-foreground">Markets</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default SuccessStories;
