import { Sparkles, Factory, Mountain, Wheat, Truck, Megaphone, Music, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const sectors = [
  { name: "Beauty & Cosmetics", sub: "Urembo", icon: Sparkles },
  { name: "Manufacturing", sub: "Viwanda", icon: Factory },
  { name: "Mining", sub: "Madini", icon: Mountain },
  { name: "Agriculture", sub: "Kilimo", icon: Wheat },
  { name: "Transport & Logistics", sub: "Usafirishaji", icon: Truck },
  { name: "Influencers", sub: "", icon: Megaphone },
  { name: "Music Industry", sub: "", icon: Music },
];

const Sectors = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="sectors" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
          Sectors We Serve
        </h2>
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg rounded-full p-2 text-foreground hover:text-accent transition-colors hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="flex-shrink-0 w-64 h-64 rounded-lg bg-gradient-to-br from-primary to-primary/80 p-6 flex flex-col items-center justify-center text-primary-foreground hover:scale-105 transition-transform duration-300 snap-start cursor-pointer group"
              >
                <sector.icon size={40} className="mb-4 text-accent" strokeWidth={1.5} />
                <h3 className="text-lg font-heading font-bold text-center">{sector.name}</h3>
                {sector.sub && <p className="text-sm opacity-70">{sector.sub}</p>}
                <span className="mt-4 text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Explore →
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg rounded-full p-2 text-foreground hover:text-accent transition-colors hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
