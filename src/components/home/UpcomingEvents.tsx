import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import event1 from "@/assets/events/event-1.jpg";
import event2 from "@/assets/events/event-2.jpg";
import event3 from "@/assets/events/event-3.jpg";
import event4 from "@/assets/events/event-4.jpg";
import event5 from "@/assets/events/event-5.jpg";
import event6 from "@/assets/events/event-6.jpg";

const upcomingEvents = [
  {
    title: "Leaders Forum 2026",
    date: "June 15, 2026",
    time: "8:00 AM – 8:00 PM",
    venue: "Julius Nyerere Convention Centre, Dar es Salaam",
    image: event1,
    seats: "500",
    theme: "Rise, Lead, Transform",
    slug: "leaders-forum-2026",
  },
  {
    title: "Entrepreneurship Summit 2026",
    date: "September 20, 2026",
    time: "9:00 AM – 5:00 PM",
    venue: "AICC, Arusha",
    image: event5,
    seats: "300",
    theme: "Innovation & Impact",
    slug: "entrepreneurship-summit-2026",
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

const UpcomingEvents = () => {
  const [showPast, setShowPast] = useState(false);

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-2 block">
            Events
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black mb-4">
            {showPast ? "Past Events" : "Upcoming Events"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm mb-6">
            {showPast ? "Explore our previous events and their impact." : "Don't miss our upcoming leadership gatherings."}
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-card border border-border rounded-full p-1">
            <button
              onClick={() => setShowPast(false)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${!showPast ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setShowPast(true)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${showPast ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {!showPast ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-block bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-full mb-2">
                      {event.theme}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">{event.title}</h3>
                  </div>
                </div>
                <div className="p-4 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-accent" /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-accent" /> {event.time}</span>
                    <span className="flex items-center gap-1.5 col-span-2"><MapPin size={12} className="text-accent" /> {event.venue}</span>
                    <span className="flex items-center gap-1.5"><Users size={12} className="text-accent" /> {event.seats} seats</span>
                  </div>
                  <Button variant="accent" size="sm" className="w-full mt-2" asChild>
                    <Link to="/forums">View Details <ArrowRight size={14} /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
