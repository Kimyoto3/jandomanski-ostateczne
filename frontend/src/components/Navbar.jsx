import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
                className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-sm px-6 py-2.5 font-medium"
              >
                Umów spotkanie
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            className="lg:hidden p-2 text-[#0A192F]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden bg-white border-t border-slate-100 animate-fade-in"
          >
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-testid={`mobile-nav-link-${link.href.replace("/", "") || "home"}`}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#0A192F] bg-slate-50"
                      : "text-slate-600 hover:text-[#0A192F] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Link to="/umow-spotkanie">
                  <Button
                    data-testid="mobile-cta-button"
                    className="w-full bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-xl"
                  >
                    Umów spotkanie
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
