import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/o-mnie", label: "O mnie" },
    { href: "/o-firmie", label: "O firmie" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const serviceLinks = [
    { href: "/umow-spotkanie", label: "Doradztwo inwestycyjne" },
    { href: "/umow-spotkanie", label: "Planowanie emerytalne" },
    { href: "/umow-spotkanie", label: "Zarządzanie majątkiem" },
    { href: "/umow-spotkanie", label: "Edukacja finansowa" },
  ];

  return (
    <footer data-testid="footer" className="bg-[#0A192F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-sm flex items-center justify-center">
                <span className="text-[#0A192F] font-display text-xl font-bold">W</span>
              </div>
              <span className="font-display text-xl font-semibold">
                Wealth Advisor
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Profesjonalne doradztwo finansowe dla osób, które cenią 
              długoterminowe bezpieczeństwo i&nbsp;świadome budowanie majątku.
            </p>
            <p className="text-[#D4AF37] font-mono text-xs tracking-wider">
              EST. 2020 • OPOLE
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Nawigacja</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-testid={`footer-link-${link.href.replace("/", "")}`}
                    className="text-slate-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Usługi</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:+48518607320"
                  className="text-slate-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  518 607 320
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:jan.domanski@inpartners.pl"
                  className="text-slate-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  jan.domanski@inpartners.pl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © {currentYear} Wealth Advisor. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link to="/kontakt" className="text-slate-500 hover:text-[#D4AF37] transition-colors text-xs">
                Polityka prywatności
              </Link>
              <Link to="/kontakt" className="text-slate-500 hover:text-[#D4AF37] transition-colors text-xs">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
