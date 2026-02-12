import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Lightbulb, Handshake } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: Heart, title: "Empowerment", desc: "We believe in uplifting every individual to reach their full potential." },
  { icon: Shield, title: "Integrity", desc: "Transparency and accountability guide every decision we make." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace creative solutions to Tanzania's greatest challenges." },
  { icon: Handshake, title: "Collaboration", desc: "Together, we build stronger communities and lasting partnerships." },
];

const timeline = [
  { year: "2020", event: "Leaders Forum concept born during Tanzania's entrepreneurship boom" },
  { year: "2021", event: "First pilot forum with 50 emerging entrepreneurs in Dar es Salaam" },
  { year: "2022", event: "Expanded to cover 4 sectors and launched mentorship program" },
  { year: "2023", event: "Tanzania Business Achievement Awards introduced" },
  { year: "2024", event: "Grew to 7 sectors with 300+ annual attendees" },
  { year: "2025", event: "International partnerships established, 500+ entrepreneurs supported" },
  { year: "2026", event: "Our biggest forum yet — join us!" },
];

const team = [
  { name: "Rahmani", role: "Communications & Social Media Lead" },
  { name: "Halima", role: "Public Relations Manager" },
  { name: "Frederick", role: "Operations Director" },
  { name: "Aban", role: "Programs Coordinator" },
  { name: "Humility", role: "Community Engagement Lead" },
  { name: "Partnership Team", role: "Partnership Coordinators" },
];

const About = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Our Story</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Building Tanzania's most impactful platform connecting leaders with entrepreneurs since 2020.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-8 hover-lift"
            >
              <Target className="text-accent mb-4" size={36} />
              <h2 className="text-xl font-heading font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower Tanzania's next generation of leaders and entrepreneurs by creating platforms for collaboration, mentorship, and sustainable growth across key economic sectors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card rounded-xl border border-border p-8 hover-lift"
            >
              <Eye className="text-accent mb-4" size={36} />
              <h2 className="text-xl font-heading font-bold mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Tanzania where every aspiring leader and entrepreneur has access to the networks, knowledge, and resources needed to drive transformative change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex items-start mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background mt-1.5" />
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-sm font-heading font-bold text-accent">{item.year}</span>
                  <p className="text-muted-foreground text-sm mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg border border-border p-6 text-center hover-lift"
              >
                <v.icon className="mx-auto mb-3 text-accent" size={28} />
                <h3 className="font-heading font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-lg border border-border p-6 text-center hover-lift"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">{member.name[0]}</span>
                </div>
                <h3 className="font-heading font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default About;
