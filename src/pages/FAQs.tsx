import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const faqCategories = [
  {
    category: "General",
    items: [
      { q: "What is Leaders Forum?", a: "Leaders Forum is Tanzania's premier platform for networking, collaboration, and innovation — connecting visionary leaders, entrepreneurs, and changemakers to foster sustainable growth across key economic sectors." },
      { q: "Who can attend the forum?", a: "The forum is open to entrepreneurs, business leaders, policymakers, students, and anyone passionate about leadership and economic development in Tanzania." },
      { q: "When is the Leaders Forum 2026?", a: "The Leaders Forum 2026 is scheduled for June 15, 2026, at the Julius Nyerere Convention Centre, Dar es Salaam, Tanzania." },
      { q: "How many sectors does the forum cover?", a: "We cover 7 key sectors: Beauty & Cosmetics, Manufacturing, Mining, Agriculture, Transport & Logistics, Influencers, and Music Industry." },
    ],
  },
  {
    category: "Registration & Packages",
    items: [
      { q: "How do I register?", a: "You can register online through our registration page. Choose your preferred package (Community, Professional, or Elite) and complete the checkout process." },
      { q: "What's included in the Elite package?", a: "The Elite package includes VIP seating, one-on-one mentorship, all networking events, award ceremony access, post-forum consultations, and media exposure." },
      { q: "Can I upgrade my package later?", a: "Yes, you can upgrade your package at any time before the event by contacting our support team. You'll only pay the price difference." },
      { q: "Is there a group discount?", a: "Yes! Groups of 5 or more receive a 15% discount. Contact us at info@leadersforum.tz for group registration." },
    ],
  },
  {
    category: "Payments & Refunds",
    items: [
      { q: "What payment methods are accepted?", a: "We accept Mobile Money (M-Pesa, Tigo Pesa, Airtel Money), credit/debit cards (Visa, Mastercard), and bank transfers." },
      { q: "Can I get a refund?", a: "Refund requests must be made at least 30 days before the event. A 20% processing fee applies. Please contact us for details." },
      { q: "Is my payment secure?", a: "Absolutely. All payments are processed through 256-bit SSL encrypted channels for maximum security." },
    ],
  },
  {
    category: "Programs & Mentorship",
    items: [
      { q: "How does the mentorship program work?", a: "Our 12-week mentorship program pairs emerging entrepreneurs with established industry leaders. Apply through our Programs page, and our team will match you with an ideal mentor." },
      { q: "Is there a cost for the mentorship program?", a: "The mentorship program is included in Professional and Elite packages. Community package holders can apply separately." },
      { q: "How do I nominate someone for an award?", a: "Visit our Rewards page and click 'Nominate Now'. Fill out the nomination form with supporting evidence of the nominee's achievements." },
    ],
  },
];

const FAQs = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-primary py-12 md:py-16 px-4">
          <div className="container mx-auto text-center text-primary-foreground">
            <HelpCircle className="mx-auto mb-3" size={40} />
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">Find answers to common questions about Leaders Forum.</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl">
            {faqCategories.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05 }}
                className="mb-10"
              >
                <h2 className="text-xl font-heading font-bold mb-4 text-primary">{cat.category}</h2>
                <div className="space-y-2">
                  {cat.items.map((faq, fi) => {
                    const key = `${ci}-${fi}`;
                    return (
                      <div key={key} className="bg-card rounded-lg border border-border overflow-hidden">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between p-4 text-left font-medium text-sm hover:bg-muted/50 transition-colors"
                        >
                          {faq.q}
                          <ChevronDown size={16} className={`text-muted-foreground flex-shrink-0 ml-2 transition-transform ${openItems[key] ? "rotate-180" : ""}`} />
                        </button>
                        {openItems[key] && (
                          <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            <div className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="accent" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
