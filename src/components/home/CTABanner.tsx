import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="py-20 px-4 bg-accent relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--accent-foreground)) 20px, hsl(var(--accent-foreground)) 21px)",
    }} />
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent-foreground mb-4">
        Ready to Transform Your Future?
      </h2>
      <p className="text-accent-foreground/80 text-lg mb-8 max-w-xl mx-auto">
        Join Tanzania's premier gathering of leaders and entrepreneurs
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="ctaWhite" size="lg" className="px-8">Register Now</Button>
        <Button variant="ctaOutline" size="lg" className="px-8">Download Brochure</Button>
      </div>
    </div>
  </section>
);

export default CTABanner;
