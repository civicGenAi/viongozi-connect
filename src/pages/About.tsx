import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Lightbulb, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroSlide2 from "@/assets/hero-slide-2.jpg";

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

    {/* Hero with parallax-style image */}
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSlide2})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-primary-foreground/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-primary-foreground/5"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">Our Story</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Building Tanzania's most impactful platform connecting leaders with entrepreneurs since 2020.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision - side by side with creative layout */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-card rounded-2xl border border-border p-8 md:p-10 overflow-hidden group hover:border-primary/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower Tanzania's next generation of leaders and entrepreneurs by creating platforms for collaboration, mentorship, and sustainable growth across key economic sectors.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative bg-card rounded-2xl border border-border p-8 md:p-10 overflow-hidden group hover:border-accent/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye className="text-accent" size={28} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Tanzania where every aspiring leader and entrepreneur has access to the networks, knowledge, and resources needed to drive transformative change.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline - horizontal scrolling on mobile, vertical on desktop */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
            Our Path
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Our Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent/30" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-secondary shadow-lg" />
              </div>

              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="text-lg font-heading font-black text-accent">{item.year}</span>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Our Core Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-6 text-center hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <v.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
            The People Behind It
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Meet Our Team</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border p-5 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-xl md:text-2xl font-heading font-bold text-primary-foreground">{member.name[0]}</span>
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base">{member.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-foreground mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Be part of Tanzania's largest leadership and entrepreneurship forum.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/register">Register for Forum 2026 <ArrowRight size={16} className="ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
