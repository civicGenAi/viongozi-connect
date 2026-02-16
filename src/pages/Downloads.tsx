import { motion } from "framer-motion";
import { Download, FileText, Image, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const downloads = [
  { icon: FileText, title: "Leaders Forum 2026 Brochure", desc: "Overview of the upcoming forum, packages, and schedule.", type: "PDF • 6 pages", size: "2.4 MB" },
  { icon: BarChart3, title: "2025 Impact Report", desc: "Comprehensive analysis of our 2025 forum outcomes and community impact.", type: "PDF • 24 pages", size: "5.1 MB" },
  { icon: FileText, title: "Mentorship Program Guide", desc: "Everything you need to know about our 12-week mentorship program.", type: "PDF • 12 pages", size: "1.8 MB" },
  { icon: Image, title: "Brand & Media Kit", desc: "Official logos, brand guidelines, and media assets for partners.", type: "ZIP • Multiple files", size: "15 MB" },
  { icon: FileText, title: "Award Nomination Guidelines", desc: "Criteria and process for nominating candidates for the Business Achievement Awards.", type: "PDF • 8 pages", size: "1.2 MB" },
  { icon: BarChart3, title: "Sector Analysis Report 2025", desc: "Data-driven insights across 7 sectors covered by Leaders Forum.", type: "PDF • 32 pages", size: "7.3 MB" },
  { icon: FileText, title: "Partnership Prospectus", desc: "Sponsorship and partnership opportunities for Leaders Forum 2026.", type: "PDF • 10 pages", size: "3.5 MB" },
  { icon: FileText, title: "Forum Agenda Template", desc: "Full schedule and agenda for the Leaders Forum 2026.", type: "PDF • 4 pages", size: "0.8 MB" },
];

const Downloads = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <section className="bg-primary py-12 md:py-16 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Downloads</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">Access reports, brochures, and resources from Leaders Forum.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {downloads.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.desc}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-muted-foreground/70">{item.type}</span>
                    <span className="text-[10px] text-muted-foreground/70">{item.size}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex-shrink-0 self-start sm:self-center">
                  <Download size={14} /> Download
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Downloads;
