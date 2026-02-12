import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const faqs = [
  { q: "When is the Leaders Forum 2026?", a: "The Leaders Forum 2026 is scheduled for June 15, 2026 in Dar es Salaam, Tanzania. Registration is now open." },
  { q: "How do I register for the forum?", a: "You can register online through our registration page. Choose your preferred package (Community, Professional, or Elite) and complete the form." },
  { q: "What sectors does the forum cover?", a: "We cover 7 key sectors: Beauty & Cosmetics, Manufacturing, Mining, Agriculture, Transport & Logistics, Influencers, and Music Industry." },
  { q: "Can I get a refund if I can't attend?", a: "Refund requests must be made at least 30 days before the event. A 20% processing fee applies. Please contact us for details." },
  { q: "Are there sponsorship opportunities?", a: "Yes! We offer various sponsorship and partnership packages. Contact our partnerships team at partners@leadersforum.tz for more information." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-16 px-4">
          <div className="container mx-auto text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3">Get In Touch</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">Have questions about Leaders Forum 2026? We'd love to hear from you.</p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-3 bg-card rounded-xl shadow-sm p-8"
              >
                <h2 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                  <MessageSquare size={20} className="text-accent" /> Send Us a Message
                </h2>
                {sent && (
                  <div className="mb-4 p-4 rounded-lg bg-accent/10 text-accent text-sm font-medium">
                    ✓ Your message has been sent! We'll get back to you shortly.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject *</label>
                    <input type="text" required value={form.subject} onChange={(e) => update("subject", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => update("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Write your message here..." />
                  </div>
                  <Button variant="accent" size="lg" type="submit" className="w-full sm:w-auto">
                    <Send size={16} /> Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h3 className="font-heading font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@leadersforum.tz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+255 XXX XXX XXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Office Address</p>
                        <p className="text-muted-foreground">Dar es Salaam, Tanzania</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-muted-foreground">Mon – Fri: 8:00 AM – 5:00 PM</p>
                        <p className="text-muted-foreground">Sat: 9:00 AM – 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-card rounded-xl shadow-sm overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm">
                    <MapPin size={32} className="opacity-30" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-muted/50 transition-colors"
                  >
                    {faq.q}
                    <ChevronDown size={18} className={`text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
