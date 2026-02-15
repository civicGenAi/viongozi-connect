import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import beautyImg from "@/assets/sectors/beauty.jpg";
import manufacturingImg from "@/assets/sectors/manufacturing.jpg";
import miningImg from "@/assets/sectors/mining.jpg";
import agricultureImg from "@/assets/sectors/agriculture.jpg";
import transportImg from "@/assets/sectors/transport.jpg";
import influencersImg from "@/assets/sectors/influencers.jpg";
import musicImg from "@/assets/sectors/music.jpg";

const sectors = [
  {
    name: "Beauty & Cosmetics", sub: "Urembo", image: beautyImg,
    desc: "Supporting Tanzania's booming beauty industry with business training, supply chain connections, and export opportunities.",
    stats: { entrepreneurs: "80+", jobs: "200+", value: "TZS 400M+" },
    story: { quote: "Leaders Forum helped me take my beauty brand international.", person: "Amina H., Founder" },
  },
  {
    name: "Manufacturing", sub: "Viwanda", image: manufacturingImg,
    desc: "Building local manufacturing capacity through technology transfer, quality standards, and market access.",
    stats: { entrepreneurs: "60+", jobs: "350+", value: "TZS 800M+" },
    story: { quote: "We doubled our production capacity through connections made at the forum.", person: "David K., CEO" },
  },
  {
    name: "Mining", sub: "Madini", image: miningImg,
    desc: "Empowering small-scale miners with sustainable practices, safety standards, and fair market access.",
    stats: { entrepreneurs: "45+", jobs: "150+", value: "TZS 500M+" },
    story: { quote: "The mentorship program transformed how we approach mining safety.", person: "John M., Director" },
  },
  {
    name: "Agriculture", sub: "Kilimo", image: agricultureImg,
    desc: "Modernizing Tanzania's agricultural sector through agritech innovation, value chains, and food security initiatives.",
    stats: { entrepreneurs: "120+", jobs: "300+", value: "TZS 600M+" },
    story: { quote: "We went from subsistence farming to running a commercial agribusiness.", person: "Grace L., Farmer" },
  },
  {
    name: "Transport & Logistics", sub: "Usafirishaji", image: transportImg,
    desc: "Strengthening East Africa's logistics infrastructure through fleet management, route optimization, and partnerships.",
    stats: { entrepreneurs: "50+", jobs: "180+", value: "TZS 350M+" },
    story: { quote: "Our fleet grew from 3 to 25 vehicles thanks to investor connections.", person: "Grace M., Director" },
  },
  {
    name: "Influencers", sub: "", image: influencersImg,
    desc: "Professionalizing Tanzania's digital creator economy with brand partnerships, content strategy, and monetization.",
    stats: { entrepreneurs: "90+", jobs: "100+", value: "TZS 200M+" },
    story: { quote: "I learned to treat my online presence as a real business.", person: "Baraka S., Creator" },
  },
  {
    name: "Music Industry", sub: "", image: musicImg,
    desc: "Supporting Tanzanian artists with rights management, distribution, event management, and international exposure.",
    stats: { entrepreneurs: "55+", jobs: "120+", value: "TZS 300M+" },
    story: { quote: "The forum connected me with producers and distributors across Africa.", person: "Lina P., Artist" },
  },
];

const Sectors = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <section className="bg-primary py-16 md:py-24 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Our Sectors</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Driving impact across 7 key economic sectors in Tanzania
          </p>
        </div>
      </section>

      <div>
        {sectors.map((sector, i) => (
          <section key={sector.name} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
            <div className="container mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold">{sector.name}</h2>
                      {sector.sub && <span className="text-sm text-muted-foreground">{sector.sub}</span>}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{sector.desc}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-card rounded-lg border border-border">
                      <Users size={16} className="mx-auto text-accent mb-1" />
                      <div className="font-heading font-bold text-primary">{sector.stats.entrepreneurs}</div>
                      <div className="text-xs text-muted-foreground">Entrepreneurs</div>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg border border-border">
                      <Briefcase size={16} className="mx-auto text-accent mb-1" />
                      <div className="font-heading font-bold text-primary">{sector.stats.jobs}</div>
                      <div className="text-xs text-muted-foreground">Jobs Created</div>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg border border-border">
                      <TrendingUp size={16} className="mx-auto text-accent mb-1" />
                      <div className="font-heading font-bold text-primary">{sector.stats.value}</div>
                      <div className="text-xs text-muted-foreground">Value Created</div>
                    </div>
                  </div>

                  <Button variant="accent" asChild>
                    <Link to="/register">Get Involved <ArrowRight size={14} /></Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`space-y-4 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img src={sector.image} alt={sector.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-card rounded-lg border border-border p-5">
                    <p className="text-sm italic text-muted-foreground mb-2">"{sector.story.quote}"</p>
                    <p className="text-xs font-semibold text-primary">— {sector.story.person}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Sectors;
