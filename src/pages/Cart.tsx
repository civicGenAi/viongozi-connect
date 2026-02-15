import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const initialCart = [
  { id: 1, name: "Elite Access", price: 500000, qty: 1, badge: "Most Popular" },
];

const Cart = () => {
  const [items, setItems] = useState(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-primary py-12 md:py-16 px-4">
          <div className="container mx-auto text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Your Cart</h1>
            <p className="text-primary-foreground/80">Review your selected packages</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            {items.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <ShoppingCart size={64} className="mx-auto text-muted-foreground/30 mb-4" />
                <h2 className="text-xl font-heading font-bold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Browse our forum packages to get started</p>
                <Button variant="accent" asChild>
                  <Link to="/forums">View Packages</Link>
                </Button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading font-bold text-lg">{item.name}</h3>
                          {item.badge && (
                            <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Forum Access Package</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-lg">
                          <button onClick={() => updateQty(item.id, -1)} className="p-2 hover:bg-muted transition-colors rounded-l-lg">
                            <Minus size={14} />
                          </button>
                          <span className="px-4 font-heading font-bold text-sm">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="p-2 hover:bg-muted transition-colors rounded-r-lg">
                            <Plus size={14} />
                          </button>
                        </div>

                        <span className="font-heading font-bold text-primary min-w-[100px] text-right">
                          TZS {(item.price * item.qty).toLocaleString()}
                        </span>

                        <button onClick={() => removeItem(item.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Order Summary */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
                    <h3 className="font-heading font-bold text-lg mb-4">Order Summary</h3>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-semibold">TZS {subtotal.toLocaleString()}</span>
                      </div>
                      {promoApplied && (
                        <div className="flex justify-between text-sm text-accent">
                          <span>Promo Discount (10%)</span>
                          <span>-TZS {discount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="font-heading font-bold">Total</span>
                        <span className="font-heading font-bold text-primary text-lg">TZS {total.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="flex gap-2 mb-6">
                      <div className="flex-1 relative">
                        <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => { if (promoCode.trim()) setPromoApplied(true); }}
                      >
                        Apply
                      </Button>
                    </div>

                    <Button variant="accent" className="w-full" size="lg" asChild>
                      <Link to="/checkout">Proceed to Checkout <ArrowRight size={16} /></Link>
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Secure payment • Instant confirmation
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
