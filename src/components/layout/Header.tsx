import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Forums", href: "/forums" },
  { label: "Sectors", href: "/sectors" },
  { label: "Programs", href: "/programs" },
  { label: "Rewards", href: "/rewards" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Leader's Forum"
            className={`h-14 md:h-20 w-auto transition-all duration-300 ${
              isScrolled ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? location.pathname === item.href
                    ? "text-accent font-semibold"
                    : "text-primary-foreground/90 hover:text-accent"
                  : location.pathname === item.href
                    ? "text-accent font-semibold"
                    : "text-primary-foreground/90 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="accent" size="lg" asChild>
            <Link to="/register">Register Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-primary-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className={`lg:hidden ${isScrolled ? "bg-primary" : "bg-primary/95 backdrop-blur-md"} border-t border-primary-foreground/10`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-3 font-medium transition-colors rounded-lg ${
                  location.pathname === item.href
                    ? "text-accent bg-primary-foreground/10 font-semibold"
                    : "text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="accent" className="mt-3" asChild>
              <Link to="/register">Register Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
