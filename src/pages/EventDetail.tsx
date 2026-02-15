import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowLeft, Download, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import event1 from "@/assets/events/event-1.jpg";
import event2 from "@/assets/events/event-2.jpg";
import event3 from "@/assets/events/event-3.jpg";
import event4 from "@/assets/events/event-4.jpg";
import event5 from "@/assets/events/event-5.jpg";
import event6 from "@/assets/events/event-6.jpg";

const eventsData: Record<string, {
  title: string; date: string; venue: string; attendees: string; duration: string;
  description: string; heroImage: string; gallery: string[];
  agenda: { time: string; title: string; speaker?: string }[];
  speakers: { name: string; role: string }[];
  highlights: string[];
  reports: { title: string; type: string }[];
}> = {
  "leaders-forum-2025": {
    title: "Leaders Forum 2025",
    date: "June 20, 2025",
    venue: "Julius Nyerere Convention Centre, Dar es Salaam",
    attendees: "450+",
    duration: "Full Day (8AM - 8PM)",
    description: "The inaugural Leaders Forum brought together over 450 entrepreneurs, policymakers, and industry leaders for a transformative day of networking, knowledge sharing, and business development. The event featured keynote addresses from prominent business leaders, sector-specific breakout sessions, and the first Tanzania Business Achievement Awards ceremony.",
    heroImage: event1,
    gallery: [event1, event2, event3, event4, event5, event6],
    agenda: [
      { time: "8:00 AM", title: "Registration & Breakfast Networking" },
      { time: "9:00 AM", title: "Opening Ceremony & Keynote Address", speaker: "Hon. Minister of Trade" },
      { time: "10:30 AM", title: "Panel: Scaling Businesses in East Africa", speaker: "4 Industry Leaders" },
      { time: "12:00 PM", title: "Networking Lunch & Exhibition" },
      { time: "1:30 PM", title: "Panel: Youth Leadership & Innovation", speaker: "5 Young Entrepreneurs" },
      { time: "3:00 PM", title: "Sector Breakout Sessions (7 tracks)" },
      { time: "4:30 PM", title: "Tanzania Business Achievement Awards", speaker: "Awards Committee" },
      { time: "6:30 PM", title: "Closing Gala & Entertainment" },
    ],
    speakers: [
      { name: "Dr. Amara Kigeli", role: "Keynote Speaker, CEO - East Africa Business Council" },
      { name: "Hon. James Mwangi", role: "Minister of Trade & Industry" },
      { name: "Grace Mushi", role: "Founder, TechHub Tanzania" },
      { name: "David Ramadhani", role: "Managing Director, CRDB Bank" },
      { name: "Fatma Karume", role: "Advocate & Governance Expert" },
      { name: "Prof. Benno Ndulu", role: "Former Governor, Bank of Tanzania" },
    ],
    highlights: [
      "450+ attendees from 7 industry sectors",
      "15 partnership agreements signed during networking sessions",
      "TZS 2.5 billion in business deals facilitated",
      "First-ever Tanzania Business Achievement Awards with 7 winners",
      "3 international speakers from Kenya, Rwanda, and South Africa",
      "Live-streamed to 5,000+ online viewers across East Africa",
    ],
    reports: [
      { title: "Leaders Forum 2025 — Full Event Report", type: "PDF • 24 pages" },
      { title: "Impact Assessment & Outcomes Summary", type: "PDF • 12 pages" },
      { title: "Business Achievement Awards Winners Booklet", type: "PDF • 8 pages" },
      { title: "Sector Breakout Sessions — Key Findings", type: "PDF • 16 pages" },
    ],
  },
  "business-awards-2024": {
    title: "Business Awards Gala 2024",
    date: "December 15, 2024",
    venue: "Hyatt Regency, Dar es Salaam",
    attendees: "300+",
    duration: "Evening Event (5PM - 11PM)",
    description: "An elegant evening celebrating Tanzania's most impactful entrepreneurs and business leaders. The gala featured award presentations across 10 categories, live entertainment, and exclusive networking opportunities with industry titans.",
    heroImage: event4,
    gallery: [event4, event6, event2, event5, event1, event3],
    agenda: [
      { time: "5:00 PM", title: "Red Carpet & Cocktail Reception" },
      { time: "6:00 PM", title: "Welcome Remarks & Dinner" },
      { time: "7:00 PM", title: "Awards Ceremony — Categories 1-5", speaker: "MC: Sarah Kaaya" },
      { time: "8:30 PM", title: "Live Musical Performance" },
      { time: "9:00 PM", title: "Awards Ceremony — Categories 6-10" },
      { time: "10:00 PM", title: "Keynote & Closing Remarks", speaker: "Guest of Honor" },
      { time: "10:30 PM", title: "After-party & Networking" },
    ],
    speakers: [
      { name: "Sarah Kaaya", role: "Master of Ceremonies" },
      { name: "Ali Hassan Mwinyi", role: "Guest of Honor" },
      { name: "Dr. Reginald Mengi Jr.", role: "Award Presenter" },
      { name: "Amina Chifupa", role: "Entertainment Host" },
    ],
    highlights: [
      "300+ VIP attendees including diplomats and corporate executives",
      "10 award categories recognizing excellence across sectors",
      "TZS 500M+ in sponsorship support",
      "Live entertainment by Diamond Platnumz",
      "Featured in 15+ national media outlets",
    ],
    reports: [
      { title: "Business Awards 2024 — Event Summary", type: "PDF • 18 pages" },
      { title: "Winners Profile Booklet", type: "PDF • 12 pages" },
    ],
  },
  "entrepreneurship-summit-2024": {
    title: "Entrepreneurship Summit 2024",
    date: "March 8, 2024",
    venue: "AICC, Arusha",
    attendees: "280+",
    duration: "Full Day (9AM - 5PM)",
    description: "A high-energy summit focused on empowering young entrepreneurs with practical tools, mentorship connections, and funding opportunities. The event brought together startup founders, investors, and mentors for an intensive day of learning and collaboration.",
    heroImage: event5,
    gallery: [event5, event3, event2, event6, event1, event4],
    agenda: [
      { time: "9:00 AM", title: "Opening & Keynote: Future of Entrepreneurship in Africa" },
      { time: "10:00 AM", title: "Workshop: Business Model Canvas Masterclass" },
      { time: "11:30 AM", title: "Pitch Competition — Round 1", speaker: "12 Startups" },
      { time: "1:00 PM", title: "Lunch & Investor Speed Dating" },
      { time: "2:00 PM", title: "Panel: Securing Funding in East Africa" },
      { time: "3:30 PM", title: "Pitch Competition — Finals", speaker: "Top 5 Startups" },
      { time: "4:30 PM", title: "Awards & Closing Ceremony" },
    ],
    speakers: [
      { name: "Martha Kimaro", role: "Keynote, CEO - Vodacom Tanzania" },
      { name: "James Shikuku", role: "Partner, Savannah Fund" },
      { name: "Lucy Lyimo", role: "Founder, MamaTech" },
    ],
    highlights: [
      "280+ young entrepreneurs aged 18-35",
      "12 startups pitched to a panel of 5 investors",
      "3 startups secured seed funding totaling TZS 150M",
      "50+ mentorship pairings established",
      "Workshops attended by 200+ participants",
    ],
    reports: [
      { title: "Entrepreneurship Summit 2024 — Full Report", type: "PDF • 20 pages" },
      { title: "Pitch Competition Results & Startup Profiles", type: "PDF • 10 pages" },
    ],
  },
};

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = eventsData[slug || ""];

  if (!event) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 section-padding text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Event Not Found</h1>
          <Button variant="accent" asChild><Link to="/forums">Back to Forums</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img src={event.heroImage} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <Link to="/forums" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors">
                <ArrowLeft size={14} /> Back to Events
              </Link>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {event.venue}</span>
                <span className="flex items-center gap-1"><Users size={14} /> {event.attendees} Attendees</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {event.duration}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold mb-4">Event Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{event.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-heading font-bold mb-8">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <ChevronRight size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{h}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">Event Agenda</h2>
            <div className="space-y-3">
              {event.agenda.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex gap-4 bg-card rounded-lg border border-border p-4"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-sm font-heading font-bold text-accent">{item.time}</span>
                  </div>
                  <div className="border-l-2 border-accent pl-4 flex-1">
                    <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
                    {item.speaker && <p className="text-xs text-muted-foreground mt-1">{item.speaker}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-heading font-bold mb-8">Featured Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.speakers.map((speaker, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xl font-heading font-bold text-muted-foreground">
                      {speaker.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm">{speaker.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{speaker.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-2 mb-8">
              <ImageIcon size={20} className="text-accent" />
              <h2 className="text-2xl font-heading font-bold">Photo Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {event.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-video rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img src={img} alt={`${event.title} photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reports & Downloads */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-heading font-bold mb-8">Reports & Downloads</h2>
            <div className="space-y-3">
              {event.reports.map((report, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <h3 className="font-heading font-semibold text-sm">{report.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{report.type}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download size={14} /> Download
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-accent">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent-foreground mb-4">Don't Miss the Next Forum</h2>
            <p className="text-accent-foreground/80 mb-6">Join us at Leaders Forum 2026 — bigger, bolder, more impactful.</p>
            <Button variant="ctaWhite" size="lg" asChild>
              <Link to="/forums">View Upcoming Events <ChevronRight size={16} /></Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
