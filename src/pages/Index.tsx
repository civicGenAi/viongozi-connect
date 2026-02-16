import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import FocusAreas from "@/components/home/FocusAreas";
import Sectors from "@/components/home/Sectors";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Awards from "@/components/home/Awards";
import Packages from "@/components/home/Packages";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Stats />
      <FocusAreas />
      <Sectors />
      <UpcomingEvents />
      <Awards />
      <Packages />
      <Testimonials />
      <Partners />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
