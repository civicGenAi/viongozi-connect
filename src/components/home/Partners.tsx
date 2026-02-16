import { Button } from "@/components/ui/button";

const Partners = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-8 md:mb-12">
        Our Trusted Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mb-8 md:mb-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-28 sm:w-36 h-14 sm:h-16 bg-muted rounded-md flex items-center justify-center text-muted-foreground text-xs font-medium grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md"
          >
            Partner {i + 1}
          </div>
        ))}
      </div>
      <Button variant="accent">Become a Partner</Button>
    </div>
  </section>
);

export default Partners;
