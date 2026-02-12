import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Leaders Forum connected me with mentors who transformed my small beauty business into a thriving brand. Today, we employ 15 people and export to 3 countries.",
    name: "Amina Hassan",
    title: "Founder, Glamour Tanzania",
    sector: "Urembo",
  },
  {
    quote: "The mentorship program gave me the tools and network I needed to scale my agricultural enterprise. I've since doubled production and hired 20 more workers.",
    name: "Joseph Mwangi",
    title: "CEO, GreenHarvest Ltd",
    sector: "Kilimo",
  },
  {
    quote: "Through Leaders Forum, I connected with investors who believed in my vision for sustainable transport. Our fleet has grown from 3 to 25 vehicles in just two years.",
    name: "Grace Makonda",
    title: "Director, SafeRide Logistics",
    sector: "Usafirishaji",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-12">
          Transforming Lives, Building Futures
        </h2>
        <div className="relative">
          <Quote className="mx-auto mb-6 text-accent/40" size={48} />
          <p className="text-lg md:text-xl italic text-muted-foreground mb-6 leading-relaxed">
            "{t.quote}"
          </p>
          <p className="font-heading font-bold text-primary">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.title}</p>
          <span className="inline-block mt-2 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            {t.sector}
          </span>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:border-accent transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-border hover:border-accent transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
