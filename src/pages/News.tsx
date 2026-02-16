import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const articles = [
  {
    title: "Leaders Forum 2026 Registration Now Open",
    excerpt: "Join Tanzania's premier leadership and entrepreneurship gathering. Early bird tickets are available for a limited time.",
    date: "February 10, 2026",
    readTime: "3 min read",
    category: "Announcements",
  },
  {
    title: "Mentorship Program Expands to 7 Sectors",
    excerpt: "Our flagship mentorship program now covers all seven key sectors, providing specialized guidance for entrepreneurs across industries.",
    date: "January 25, 2026",
    readTime: "4 min read",
    category: "Programs",
  },
  {
    title: "Tanzania Business Achievement Awards 2026 Nominations Open",
    excerpt: "Nominate outstanding leaders and entrepreneurs who are making a difference. Deadline: May 2026.",
    date: "January 15, 2026",
    readTime: "2 min read",
    category: "Awards",
  },
  {
    title: "Partnership with East Africa Business Council Announced",
    excerpt: "A new strategic partnership to strengthen cross-border entrepreneurship and trade opportunities for Tanzanian businesses.",
    date: "December 20, 2025",
    readTime: "5 min read",
    category: "Partnerships",
  },
  {
    title: "2025 Forum Recap: A Year of Transformation",
    excerpt: "Over 450 entrepreneurs gathered, 15 partnerships signed, and TZS 2.5B in business value created at our 2025 forum.",
    date: "July 5, 2025",
    readTime: "6 min read",
    category: "Recap",
  },
  {
    title: "New Workshops Added for Emerging Entrepreneurs",
    excerpt: "Practical workshops on financial literacy, digital marketing, and supply chain management now available for all registered members.",
    date: "June 12, 2025",
    readTime: "3 min read",
    category: "Programs",
  },
];

const News = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <section className="bg-primary py-12 md:py-16 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">News & Updates</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">Stay informed with the latest from Leaders Forum.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-lg hover:border-accent/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={10} /> {article.date}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
                </div>
                <h2 className="text-lg md:text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default News;
