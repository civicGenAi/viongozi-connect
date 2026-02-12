import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ArrowLeft, User, Building, CreditCard } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const steps = [
  { label: "Personal Info", icon: User },
  { label: "Organization", icon: Building },
  { label: "Package & Payment", icon: CreditCard },
];

const packages = [
  { id: "community", name: "Community Access", price: "TZS 150,000", features: ["General seating", "Main forum access", "Networking lunch", "Digital materials"] },
  { id: "professional", name: "Professional Access", price: "TZS 300,000", features: ["Priority seating", "Group mentorship", "Networking events", "Award ceremony access", "Digital materials"] },
  { id: "elite", name: "Elite Access", price: "TZS 500,000", features: ["VIP seating", "One-on-one mentorship", "All networking events", "Award ceremony access", "Post-forum consultations", "Media exposure"], popular: true },
];

const sectors = [
  "Beauty & Cosmetics (Urembo)",
  "Manufacturing (Viwanda)",
  "Mining (Madini)",
  "Agriculture (Kilimo)",
  "Transport & Logistics (Usafirishaji)",
  "Influencers",
  "Music Industry",
  "Other",
];

const Register = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", gender: "",
    organization: "", title: "", sector: "", experience: "",
    selectedPackage: "", paymentMethod: "", agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const update = (field: string, value: string | boolean) => setForm((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 0) return form.firstName && form.lastName && form.email && form.phone;
    if (step === 1) return form.sector;
    if (step === 2) return form.selectedPackage && form.agreeTerms;
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 min-h-screen flex items-center justify-center bg-secondary">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl shadow-lg p-10 text-center max-w-md mx-4"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-accent" size={32} />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-3">Registration Successful!</h2>
            <p className="text-muted-foreground mb-2">Thank you, {form.firstName}! Your registration for Leaders Forum 2026 has been received.</p>
            <p className="text-sm text-muted-foreground mb-6">A confirmation email will be sent to {form.email}</p>
            <Button variant="accent" onClick={() => navigate("/")}>Back to Home</Button>
          </motion.div>
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
        <section className="bg-primary py-16 px-4">
          <div className="container mx-auto text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3">Register for Forum 2026</h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">Join Tanzania's premier gathering of leaders and entrepreneurs. Complete the form below to secure your spot.</p>
          </div>
        </section>

        {/* Progress */}
        <section className="bg-background py-8 px-4 border-b border-border">
          <div className="container mx-auto max-w-2xl">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-2 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-colors ${
                    i <= step ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {i < step ? <Check size={16} /> : i + 1}
                  </div>
                  <span className={`text-sm font-medium hidden sm:block ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-accent" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl shadow-sm p-8"
            >
              {step === 0 && (
                <>
                  <h2 className="text-xl font-heading font-bold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name *</label>
                      <input type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name *</label>
                      <input type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter last name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+255 XXX XXX XXX" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-1">Gender</label>
                      <select value={form.gender} onChange={(e) => update("gender", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 className="text-xl font-heading font-bold mb-6">Organization Details</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Organization / Company</label>
                      <input type="text" value={form.organization} onChange={(e) => update("organization", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your organization name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Job Title / Role</label>
                      <input type="text" value={form.title} onChange={(e) => update("title", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="e.g. CEO, Manager, Entrepreneur" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Sector of Interest *</label>
                      <select value={form.sector} onChange={(e) => update("sector", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                        <option value="">Select a sector</option>
                        {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Years of Experience</label>
                      <select value={form.experience} onChange={(e) => update("experience", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                        <option value="">Select experience</option>
                        <option value="0-2">0–2 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="6-10">6–10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-xl font-heading font-bold mb-6">Select Your Package</h2>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => update("selectedPackage", pkg.id)}
                        className={`relative p-5 rounded-lg border-2 text-left transition-all ${
                          form.selectedPackage === pkg.id
                            ? "border-accent bg-accent/5 shadow-md"
                            : "border-border hover:border-accent/40"
                        }`}
                      >
                        {pkg.popular && (
                          <span className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-0.5 rounded-full">Most Popular</span>
                        )}
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-heading font-bold">{pkg.name}</h3>
                          <span className="font-heading font-bold text-primary">{pkg.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {pkg.features.map((f) => (
                            <span key={f} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">{f}</span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Payment Method</label>
                    <select value={form.paymentMethod} onChange={(e) => update("paymentMethod", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select payment method</option>
                      <option value="mpesa">M-Pesa</option>
                      <option value="tigopesa">Tigo Pesa</option>
                      <option value="bank">Bank Transfer</option>
                      <option value="card">Credit/Debit Card</option>
                    </select>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.agreeTerms} onChange={(e) => update("agreeTerms", e.target.checked)}
                      className="mt-1 accent-accent" />
                    <span className="text-sm text-muted-foreground">I agree to the Terms of Service and Privacy Policy of Leaders Forum 2026 *</span>
                  </label>
                </>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                {step > 0 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft size={16} /> Back
                  </Button>
                ) : <div />}
                {step < 2 ? (
                  <Button variant="accent" onClick={() => setStep(step + 1)} disabled={!canNext()}>
                    Next <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button variant="accent" onClick={handleSubmit} disabled={!canNext()}>
                    Complete Registration
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
