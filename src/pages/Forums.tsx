import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const agenda = [
  { time: "8:00 AM", title: "Registration & Breakfast Networking", desc: "Check-in and connect over breakfast" },
  { time: "9:00 AM", title: "Opening Ceremony & Keynote Address", desc: "Welcome remarks and keynote by industry leaders" },
  { time: "10:30 AM", title: "Panel: Business & Entrepreneurship", desc: "Startup success stories and scaling strategies" },
  { time: "12:00 PM", title: "Networking Lunch", desc: "Structured networking with sector-based seating" },
  { time: "1:30 PM", title: "Panel: Leadership & Governance", desc: "Youth leadership and policy advocacy" },
  { time: "3:00 PM", title: "Sector Breakout Sessions", desc: "Deep-dive workshops in your chosen sector" },
  { time: "4:30 PM", title: "Tanzania Business Achievement Awards", desc: "Celebrating excellence in entrepreneurship" },
  { time: "6:00 PM", title: "Closing & Evening Gala", desc: "Farewell cocktail and entertainment" },
];

const packages = [
  {
    name: "Community", price: "TZS 150,000", color: "border-t-muted-foreground",
    features: ["General seating", "Main forum access", "Networking lunch", "Digital materials"],
    missing: ["One-on-one mentorship", "Award ceremony", "Post-forum consultations", "Media exposure"],
  },
  {
    name: "Professional", price: "TZS 300,000", color: "border-t-gold",
    features: ["Priority seating", "Group mentorship", "Networking events", "Award ceremony access", "Digital materials"],
    missing: ["One-on-one mentorship", "Media exposure"],
  },
  {
    name: "Elite", price: "TZS 500,000", color: "border-t-primary", popular: true,
    features: ["VIP seating", "One-on-one mentorship", "All networking events", "Award ceremony access", "Post-forum consultations", "Media exposure"],
    missing: [],
  },
];

const Forums = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Forums & Events</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
            Join Tanzania's most anticipated gathering of leaders and entrepreneurs
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2"><Calendar size={18} /> June 15, 2026</div>
            <div className="flex items-center gap-2"><MapPin size={18} /> Dar es Salaam, Tanzania</div>
            <div className="flex items-center gap-2"><Clock size={18} /> 8:00 AM – 8:00 PM</div>
            <div className="flex items-center gap-2"><Users size={18} /> 500+ Attendees Expected</div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Forum Agenda</h2>
          <div className="space-y-4">
            {agenda.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 bg-card rounded-lg border border-border p-5 hover-lift"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm font-heading font-bold text-accent">{item.time}</span>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">Package Comparison</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">Choose the package that best fits your goals and budget</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-xl border border-border border-t-8 ${pkg.color} p-6 flex flex-col hover-lift relative ${pkg.popular ? "md:scale-105 shadow-lg" : ""}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">Best Value</span>
                )}
                <h3 className="text-xl font-heading font-bold text-center">{pkg.name}</h3>
                <p className="text-2xl font-heading font-black text-primary text-center my-3">{pkg.price}</p>
                <div className="flex-1 space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} className="text-accent flex-shrink-0" /> {f}
                    </div>
                  ))}
                  {pkg.missing.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground/50 line-through">
                      {f}
                    </div>
                  ))}
                </div>
                <Button variant={pkg.popular ? "accent" : "outline"} className="w-full" asChild>
                  <Link to="/register">Select {pkg.name} <ArrowRight size={14} /></Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Past Events</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm hover:bg-muted/80 transition-colors">
                Event Photo {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent-foreground mb-4">Secure Your Spot Today</h2>
          <p className="text-accent-foreground/80 mb-6">Limited seats available — register now before they're gone!</p>
          <Button variant="ctaWhite" size="lg" asChild>
            <Link to="/register">Register Now <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Forums;
