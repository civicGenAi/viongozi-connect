import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Check, ArrowRight, ChevronDown, Star, Mic, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import event1 from "@/assets/events/event-1.jpg";
import event2 from "@/assets/events/event-2.jpg";
import event3 from "@/assets/events/event-3.jpg";
import event4 from "@/assets/events/event-4.jpg";
import event5 from "@/assets/events/event-5.jpg";
import event6 from "@/assets/events/event-6.jpg";

const upcomingForums = [
  {
    title: "Leaders Forum 2026",
    theme: "Rise, Lead, Transform",
    date: "June 15, 2026",
    time: "8:00 AM – 8:00 PM",
    venue: "Julius Nyerere Convention Centre, Dar es Salaam",
    seats: 500,
    seatsLeft: 127,
    image: event1,
    description: "Tanzania's largest gathering of leaders, entrepreneurs, and changemakers. A full day of keynote addresses, sector breakouts, mentorship, networking, and the Business Achievement Awards.",
    agenda: [
      { time: "8:00 AM", title: "Registration & Breakfast Networking" },
      { time: "9:00 AM", title: "Opening Ceremony & Keynote Address" },
      { time: "10:30 AM", title: "Panel: Scaling Businesses in East Africa" },
      { time: "12:00 PM", title: "Networking Lunch & Exhibition" },
      { time: "1:30 PM", title: "Panel: Youth Leadership & Innovation" },
      { time: "3:00 PM", title: "Sector Breakout Sessions (7 tracks)" },
      { time: "4:30 PM", title: "Tanzania Business Achievement Awards" },
      { time: "6:30 PM", title: "Closing Gala & Entertainment" },
    ],
    speakers: [
      { name: "Dr. Amara Kigeli", role: "CEO, East Africa Business Council" },
      { name: "Hon. James Mwangi", role: "Minister of Trade & Industry" },
      { name: "Grace Mushi", role: "Founder, TechHub Tanzania" },
      { name: "David Ramadhani", role: "MD, CRDB Bank" },
    ],
    packages: [
      { name: "Community", price: "150,000", features: ["General seating", "Main forum access", "Networking lunch", "Digital materials"], missing: ["1-on-1 mentorship", "Award ceremony", "Post-forum consultations", "Media exposure"] },
      { name: "Professional", price: "300,000", features: ["Priority seating", "Group mentorship", "Networking events", "Award ceremony", "Digital materials"], missing: ["1-on-1 mentorship", "Media exposure"] },
      { name: "Elite", price: "500,000", popular: true, features: ["VIP seating", "1-on-1 mentorship", "All networking events", "Award ceremony", "Post-forum consultations", "Media exposure"], missing: [] },
    ],
  },
  {
    title: "Entrepreneurship Summit 2026",
    theme: "Innovation & Impact",
    date: "September 20, 2026",
    time: "9:00 AM – 5:00 PM",
    venue: "AICC, Arusha",
    seats: 300,
    seatsLeft: 215,
    image: event5,
    description: "A high-energy summit for young entrepreneurs featuring pitch competitions, investor speed dating, masterclasses, and hands-on workshops. Walk away with funding connections and actionable strategies.",
    agenda: [
      { time: "9:00 AM", title: "Opening & Keynote: Future of Entrepreneurship" },
      { time: "10:00 AM", title: "Workshop: Business Model Canvas Masterclass" },
      { time: "11:30 AM", title: "Pitch Competition — Round 1" },
      { time: "1:00 PM", title: "Lunch & Investor Speed Dating" },
      { time: "2:00 PM", title: "Panel: Securing Funding in East Africa" },
      { time: "3:30 PM", title: "Pitch Competition — Finals" },
      { time: "4:30 PM", title: "Awards & Closing Ceremony" },
    ],
    speakers: [
      { name: "Martha Kimaro", role: "CEO, Vodacom Tanzania" },
      { name: "James Shikuku", role: "Partner, Savannah Fund" },
      { name: "Lucy Lyimo", role: "Founder, MamaTech" },
    ],
    packages: [
      { name: "Standard", price: "100,000", features: ["General seating", "All sessions", "Lunch", "Digital materials"], missing: ["Pitch competition entry", "Investor access", "Post-event support"] },
      { name: "Startup", price: "200,000", popular: true, features: ["Priority seating", "Pitch competition entry", "Investor speed dating", "Workshop access", "Post-event support"], missing: ["VIP networking"] },
      { name: "Investor", price: "350,000", features: ["VIP seating", "Deal flow access", "All sessions", "Private networking", "Post-event reports", "Media coverage"], missing: [] },
    ],
  },
];

const pastEvents = [
  { image: event1, title: "Leaders Forum 2025", date: "June 2025", attendees: "450+", slug: "leaders-forum-2025" },
  { image: event4, title: "Business Awards Gala 2024", date: "Dec 2024", attendees: "300+", slug: "business-awards-2024" },
  { image: event5, title: "Entrepreneurship Summit 2024", date: "Mar 2024", attendees: "280+", slug: "entrepreneurship-summit-2024" },
  { image: event2, title: "Networking Mixer 2024", date: "Aug 2024", attendees: "150+", slug: "leaders-forum-2025" },
  { image: event3, title: "Panel Discussion Series", date: "May 2024", attendees: "200+", slug: "leaders-forum-2025" },
  { image: event6, title: "Annual Summit 2023", date: "Nov 2023", attendees: "380+", slug: "leaders-forum-2025" },
];

const Forums = () => {
  const [expandedEvent, setExpandedEvent] = useState<number>(0);
  const [showPast, setShowPast] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-12 md:py-20 px-4">
          <div className="container mx-auto text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3">Forums & Events</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-base md:text-lg mb-6">
              Join Tanzania's most anticipated gathering of leaders and entrepreneurs
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5"><Calendar size={14} /> 2 Upcoming Events</div>
              <div className="flex items-center gap-1.5"><MapPin size={14} /> Multiple Venues</div>
              <div className="flex items-center gap-1.5"><Users size={14} /> 800+ Total Seats</div>
            </div>
          </div>
        </section>

        {/* Upcoming Forums */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Upcoming Forums</h2>
            <div className="space-y-8 max-w-5xl mx-auto">
              {upcomingForums.map((forum, fi) => (
                <motion.div
                  key={forum.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: fi * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
                >
                  {/* Event Header */}
                  <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                    <img src={forum.image} alt={forum.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-full mb-2">{forum.theme}</span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white">{forum.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      {forum.seatsLeft} seats left
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 text-xs">
                      <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                        <Calendar size={14} className="text-accent flex-shrink-0" />
                        <div><p className="font-semibold text-foreground">{forum.date}</p></div>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                        <Clock size={14} className="text-accent flex-shrink-0" />
                        <div><p className="font-semibold text-foreground">{forum.time}</p></div>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                        <MapPin size={14} className="text-accent flex-shrink-0" />
                        <div><p className="font-semibold text-foreground line-clamp-2">{forum.venue}</p></div>
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                        <Users size={14} className="text-accent flex-shrink-0" />
                        <div><p className="font-semibold text-foreground">{forum.seats} seats</p></div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{forum.description}</p>

                    {/* Expandable sections */}
                    <button
                      onClick={() => setExpandedEvent(expandedEvent === fi ? -1 : fi)}
                      className="w-full flex items-center justify-between py-3 border-t border-border text-sm font-heading font-bold text-foreground"
                    >
                      View Full Details
                      <ChevronDown size={16} className={`text-muted-foreground transition-transform ${expandedEvent === fi ? "rotate-180" : ""}`} />
                    </button>

                    {expandedEvent === fi && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-6 pt-4"
                      >
                        {/* Agenda */}
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-3 flex items-center gap-2"><Target size={14} className="text-accent" /> Agenda</h4>
                          <div className="space-y-2">
                            {forum.agenda.map((item, i) => (
                              <div key={i} className="flex gap-3 text-xs">
                                <span className="font-heading font-bold text-accent w-16 sm:w-20 text-right flex-shrink-0">{item.time}</span>
                                <span className="border-l-2 border-accent/30 pl-3 text-muted-foreground">{item.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Speakers */}
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-3 flex items-center gap-2"><Mic size={14} className="text-accent" /> Speakers</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {forum.speakers.map((s, i) => (
                              <div key={i} className="text-center bg-muted/30 rounded-lg p-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 mx-auto mb-2 flex items-center justify-center">
                                  <span className="text-xs font-heading font-bold text-primary">{s.name.split(" ").map(n => n[0]).join("")}</span>
                                </div>
                                <p className="text-xs font-bold line-clamp-1">{s.name}</p>
                                <p className="text-[10px] text-muted-foreground line-clamp-1">{s.role}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Packages */}
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-3 flex items-center gap-2"><Star size={14} className="text-accent" /> Packages</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {forum.packages.map((pkg) => (
                              <div key={pkg.name} className={`rounded-xl border-2 p-4 flex flex-col ${pkg.popular ? "border-accent bg-accent/5" : "border-border"}`}>
                                {pkg.popular && <span className="text-[10px] font-bold text-accent mb-1">⭐ Best Value</span>}
                                <h5 className="font-heading font-bold text-sm">{pkg.name}</h5>
                                <p className="text-lg font-heading font-black text-primary my-1">TZS {pkg.price}</p>
                                <div className="space-y-1.5 flex-1 mb-3">
                                  {pkg.features.map((f) => (
                                    <div key={f} className="flex items-center gap-1.5 text-[11px]">
                                      <Check size={10} className="text-accent flex-shrink-0" /> {f}
                                    </div>
                                  ))}
                                  {pkg.missing.map((f) => (
                                    <div key={f} className="flex items-center gap-1.5 text-[11px] text-muted-foreground/40 line-through">{f}</div>
                                  ))}
                                </div>
                                <Button variant={pkg.popular ? "accent" : "outline"} size="sm" className="w-full" asChild>
                                  <Link to="/cart">Select <ArrowRight size={12} /></Link>
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events with toggle */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Past Events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/events/${event.slug}`} className="group block">
                    <div className="aspect-video rounded-t-lg overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="bg-card border border-t-0 border-border rounded-b-lg p-3">
                      <h3 className="font-heading font-bold text-xs sm:text-sm group-hover:text-accent transition-colors line-clamp-1">{event.title}</h3>
                      <div className="flex justify-between items-center mt-1.5">
                        <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Calendar size={8} /> {event.date}</span>
                        <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Users size={8} /> {event.attendees}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 px-4 bg-accent">
          <div className="container mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-accent-foreground mb-3">Secure Your Spot Today</h2>
            <p className="text-accent-foreground/80 mb-5 text-sm">Limited seats available — register now before they're gone!</p>
            <Button variant="ctaWhite" size="lg" asChild>
              <Link to="/cart">Register Now <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Forums;
