import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <section className="bg-primary py-12 md:py-16 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Privacy Policy</h1>
          <p className="text-primary-foreground/80">Last updated: February 1, 2026</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl prose prose-sm">
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including your name, email address, phone number, organization, and payment information when you register for events or programs.</p>
              <p className="mt-2">We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and browsing behavior.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Process your event registrations and payments</li>
                <li>Send you event updates and newsletters</li>
                <li>Match you with mentors and programs</li>
                <li>Improve our services and user experience</li>
                <li>Communicate about future events and opportunities</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services (e.g., payment processors) or as required by law.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information, including 256-bit SSL encryption for all data transmissions and secure storage practices.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">5. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@leadersforum.tz to exercise these rights.</p>
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">Email: privacy@leadersforum.tz<br />Phone: +255 XXX XXX XXX<br />Address: Dar es Salaam, Tanzania</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
