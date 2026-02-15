import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, Building, Lock, ArrowRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mobile" | "bank">("mobile");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/payment-success");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-primary py-12 md:py-16 px-4">
          <div className="container mx-auto text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Checkout</h1>
            <p className="text-primary-foreground/80">Complete your registration</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ChevronLeft size={16} /> Back to Cart
            </Link>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Personal Info */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-heading font-bold text-lg mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">First Name</label>
                        <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Enter first name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">Last Name</label>
                        <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Enter last name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">Email Address</label>
                        <input type="email" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="email@example.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">Phone Number</label>
                        <input type="tel" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="+255 7XX XXX XXX" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">Organization (Optional)</label>
                        <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Company or organization name" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Payment Method */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-heading font-bold text-lg mb-4">Payment Method</h3>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { id: "mobile" as const, label: "Mobile Money", icon: Smartphone },
                        { id: "card" as const, label: "Card", icon: CreditCard },
                        { id: "bank" as const, label: "Bank Transfer", icon: Building },
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${
                            paymentMethod === method.id
                              ? "border-accent bg-accent/5 shadow-sm"
                              : "border-border hover:border-primary/30"
                          }`}
                        >
                          <method.icon size={24} className={paymentMethod === method.id ? "text-accent" : "text-muted-foreground"} />
                          <span className="text-xs font-semibold">{method.label}</span>
                        </button>
                      ))}
                    </div>

                    {paymentMethod === "mobile" && (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground mb-1 block">Mobile Provider</label>
                          <select className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50">
                            <option>M-Pesa (Vodacom)</option>
                            <option>Tigo Pesa</option>
                            <option>Airtel Money</option>
                            <option>Halotel</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground mb-1 block">Mobile Number</label>
                          <input type="tel" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="+255 7XX XXX XXX" />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground mb-1 block">Card Number</label>
                          <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-1 block">Expiry</label>
                            <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="MM/YY" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-1 block">CVC</label>
                            <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-3">Transfer to the following account:</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-muted-foreground">Bank:</span><span className="font-semibold">CRDB Bank</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">Account:</span><span className="font-semibold">0150XXXXXXXX</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">Branch:</span><span className="font-semibold">Dar es Salaam Main</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">Reference:</span><span className="font-semibold">LF2026-XXXX</span></div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Right: Summary */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
                    <h3 className="font-heading font-bold text-lg mb-4">Order Summary</h3>

                    <div className="space-y-3 mb-4 pb-4 border-b border-border">
                      <div className="flex justify-between text-sm">
                        <span>Elite Access × 1</span>
                        <span className="font-semibold">TZS 500,000</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>TZS 500,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Processing Fee</span>
                        <span>TZS 0</span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="font-heading font-bold">Total</span>
                        <span className="font-heading font-bold text-primary text-lg">TZS 500,000</span>
                      </div>
                    </div>

                    <Button type="submit" variant="accent" className="w-full" size="lg">
                      <Lock size={14} /> Pay Now <ArrowRight size={16} />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-3 flex items-center justify-center gap-1">
                      <Lock size={10} /> 256-bit SSL Encrypted Payment
                    </p>
                  </div>
                </motion.div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
