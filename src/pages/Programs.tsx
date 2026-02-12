import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, CheckCircle, Users, Clock, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const processSteps = [
  { step: 1, title: "Apply Online", desc: "Fill out the mentorship application form with your business details and goals." },
  { step: 2, title: "Review & Matching", desc: "Our team reviews your application and matches you with an ideal mentor." },
  { step: 3, title: "Onboarding", desc: "Meet your mentor, set goals, and establish a personalized development plan." },
  { step: 4, title: "Mentorship Journey", desc: "12-week structured program with weekly sessions, workshops, and resources." },
  { step: 5, title: "Graduation & Network", desc: "Present your progress, join the alumni network, and continue growing." },
];

const mentors = [
  { name: "Dr. Sarah Kimaro", specialty: "Business Strategy & Finance", experience: "15+ years in corporate finance" },
  { name: "James Mwakasege", specialty: "Manufacturing & Export", experience: "20+ years building factories" },
  { name: "Fatima Abdallah", specialty: "Digital Marketing & Branding", experience: "12+ years in media" },
  { name: "Prof. Emmanuel Kileo", specialty: "Agriculture & Sustainability", experience: "18+ years in agritech" },
];

const successStories = [
  {
    name: "Maria Joseph",
    business: "Mama's Kitchen (Food Processing)",
    result: "Revenue grew 300% in 6 months after implementing mentor's strategies. Now exports to Kenya and Uganda.",
  },
  {
    name: "Hassan Salum",
    business: "TechBridge Solutions (IT Services)",
    result: "Secured TZS 50M in funding and expanded team from 3 to 15 employees during the program.",
  },
  {
    name: "Neema Charles",
    business: "GreenGrow Farms (Agriculture)",
    result: "Transitioned from subsistence farming to commercial operations serving 5 major supermarkets.",
  },
];

const Programs = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Our Programs</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Structured mentorship and development programs designed to accelerate your entrepreneurial journey.
          </p>
        </div>
      </section>

      {/* Mentorship Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="text-accent mb-4" size={40} />
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Leaders Forum Mentorship Program</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our flagship 12-week mentorship program pairs emerging entrepreneurs with established industry leaders for personalized guidance, accountability, and growth.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm"><Clock size={16} className="text-accent" /> 12-Week Program</div>
                <div className="flex items-center gap-2 text-sm"><Users size={16} className="text-accent" /> 1-on-1 Mentorship</div>
                <div className="flex items-center gap-2 text-sm"><Award size={16} className="text-accent" /> Certificate Awarded</div>
                <div className="flex items-center gap-2 text-sm"><Star size={16} className="text-accent" /> Alumni Network</div>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link to="/register">Apply Now <ArrowRight size={16} /></Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg flex items-center justify-center"
            >
              <GraduationCap size={48} className="text-muted-foreground/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="bg-card rounded-lg border border-border p-5 flex-1 hover-lift">
                  <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Profiles */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Featured Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-lg border border-border p-6 text-center hover-lift"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-primary">{mentor.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-heading font-bold text-sm">{mentor.name}</h3>
                <p className="text-xs text-accent font-semibold mt-1">{mentor.specialty}</p>
                <p className="text-xs text-muted-foreground mt-2">{mentor.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg border border-border p-6 hover-lift"
              >
                <CheckCircle className="text-accent mb-3" size={24} />
                <h3 className="font-heading font-bold">{story.name}</h3>
                <p className="text-xs text-accent font-semibold mb-3">{story.business}</p>
                <p className="text-sm text-muted-foreground">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent-foreground mb-4">Start Your Journey Today</h2>
          <p className="text-accent-foreground/80 mb-6">Applications are now open for the 2026 mentorship cohort</p>
          <Button variant="ctaWhite" size="lg" asChild>
            <Link to="/register">Apply Now <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Programs;
