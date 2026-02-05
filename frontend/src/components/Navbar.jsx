import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Strona główna" },
    { href: "/o-mnie", label: "O mnie" },
    { href: "/o-firmie", label: "O firmie" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-header shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="nav-logo"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#0A192F] rounded-sm flex items-center justify-center">
              <span className="text-[#D4AF37] font-display text-xl font-bold">W</span>
            </div>
            <span className="font-display text-xl font-semibold text-[#0A192F] hidden sm:block">
              Wealth Advisor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-testid={`nav-link-${link.href.replace("/", "") || "home"}`}
                className={`text-sm font-medium transition-colors gold-underline ${
                  isActive(link.href)
                    ? "text-[#0A192F]"
                    : "text-slate-600 hover:text-[#0A192F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/umow-spotkanie">
              <Button
                data-testid="nav-cta-button"
                className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-xl px-6 py-2.5 font-medium"
              >
                Umów spotkanie
              </Button>
            </Link>
          </div>

          {/* Mobile CTA Button - simple, no dropdown */}
          <div className="lg:hidden">
            <Link to="/umow-spotkanie">
              <Button
                data-testid="mobile-cta-button"
                className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-xl px-4 py-2 text-sm font-medium"
              >
                Umów spotkanie
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
