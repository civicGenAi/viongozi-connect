import { motion } from "framer-motion";
import { CheckCircle2, Download, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PaymentSuccess = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <section className="section-padding bg-background min-h-[70vh] flex items-center">
        <div className="container mx-auto max-w-lg text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="mb-6"
          >
            <CheckCircle2 size={80} className="mx-auto text-accent" strokeWidth={1.5} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">Payment Successful!</h1>
            <p className="text-muted-foreground mb-8">
              Your registration for the Leaders Forum 2026 has been confirmed. A confirmation email has been sent to your inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-xl p-6 mb-8 text-left"
          >
            <h3 className="font-heading font-bold mb-4">Booking Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Package</span>
                <span className="font-semibold">Elite Access</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reference</span>
                <span className="font-semibold font-mono">LF2026-00847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-semibold text-primary">TZS 500,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1"><Calendar size={12} /> Date</span>
                <span className="font-semibold">June 15, 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1"><MapPin size={12} /> Venue</span>
                <span className="font-semibold">Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" size="lg">
              <Download size={16} /> Download Receipt
            </Button>
            <Button variant="accent" size="lg" asChild>
              <Link to="/">Back to Home <ArrowRight size={16} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default PaymentSuccess;
