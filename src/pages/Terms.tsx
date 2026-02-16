import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <section className="bg-primary py-12 md:py-16 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Terms of Service</h1>
          <p className="text-primary-foreground/80">Last updated: February 1, 2026</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Leaders Forum website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">2. Event Registration</h2>
              <p>All event registrations are subject to availability. Upon completing registration and payment, you will receive a confirmation email. Your registration is confirmed only upon receipt of this email.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">3. Payment Terms</h2>
              <p>All prices are listed in Tanzanian Shillings (TZS). Payment is required at the time of registration. We accept Mobile Money, credit/debit cards, and bank transfers.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">4. Cancellation & Refund Policy</h2>
              <p>Cancellations made 30+ days before the event receive a full refund minus a 20% processing fee. Cancellations within 30 days are non-refundable. Transferring registration to another person is allowed with prior notice.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">5. Code of Conduct</h2>
              <p>All participants are expected to conduct themselves professionally and respectfully. Leaders Forum reserves the right to remove any participant engaging in harassment, discrimination, or disruptive behavior.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">6. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Leaders Forum and is protected by intellectual property laws.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">7. Photography & Media</h2>
              <p>By attending our events, you consent to being photographed and/or filmed. These materials may be used in future promotional content. If you wish to opt out, please notify staff at the event.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">8. Limitation of Liability</h2>
              <p>Leaders Forum is not liable for any indirect, incidental, or consequential damages arising from the use of our services or attendance at our events.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">9. Contact</h2>
              <p>For questions about these terms, contact us at legal@leadersforum.tz or visit our Contact page.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Terms;
