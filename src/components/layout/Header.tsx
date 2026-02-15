import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // On non-home pages or when scrolled, use solid bg
  const showSolidBg = !isHome || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolidBg
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">
        {/* Logo — dominant size */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Leader's Forum"
            className={`h-14 md:h-[4.5rem] w-auto transition-all duration-300 ${
              showSolidBg ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Nav — shifted right with ml-auto */}
        <nav className="hidden lg:flex items-center gap-2 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                location.pathname === item.href
                  ? "text-accent font-semibold"
                  : showSolidBg
                    ? "text-primary-foreground/90 hover:text-accent"
                    : "text-primary-foreground/90 hover:text-accent"
              }`}
            >
              {item.label}
              {location.pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-3 font-medium transition-colors rounded-lg ${
                  location.pathname === item.href
                    ? "text-accent bg-primary-foreground/10 font-semibold"
                    : "text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
