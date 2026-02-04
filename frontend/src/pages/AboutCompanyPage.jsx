import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Target, Users, Scale, ArrowRight, CheckCircle } from "lucide-react";

export default function AboutCompanyPage() {
  return (
    <div data-testid="about-company-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              O FIRMIE
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
              Wealth Advisor
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Niezależna firma doradztwa finansowego, która pomaga klientom 
              w świadomym budowaniu majątku i długoterminowego bezpieczeństwa 
              finansowego.
            </p>
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest">
              EST. 2020 • WARSZAWA, POLSKA
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div data-testid="mission-section">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#0A192F]">
                  Nasza misja
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Dostarczamy profesjonalne, niezależne doradztwo finansowe, 
                które pomaga naszym klientom podejmować świadome decyzje 
                i budować trwałe fundamenty finansowego bezpieczeństwa.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Wierzymy, że każdy zasługuje na dostęp do wiedzy i narzędzi, 
                które pozwalają efektywnie zarządzać majątkiem — niezależnie 
                od jego wielkości.
              </p>
            </div>

            {/* Vision */}
            <div data-testid="vision-section">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#0A192F]">
                  Nasza wizja
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Chcemy być zaufanym partnerem finansowym dla pokoleń polskich 
                rodzin — firmą, która jest synonimem integralności, kompetencji 
                i długoterminowego myślenia.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dążymy do świata, w którym edukacja finansowa jest powszechna, 
                a każdy może z pewnością planować swoją przyszłość.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              NASZE WARTOŚCI
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F]">
              Co nas definiuje
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Integralność",
                desc: "Działamy zawsze w najlepszym interesie klienta. Przejrzystość i uczciwość to fundament naszej pracy."
              },
              {
                icon: Users,
                title: "Partnerstwo",
                desc: "Budujemy długoterminowe relacje oparte na zaufaniu i wzajemnym szacunku."
              },
              {
                icon: Target,
                title: "Profesjonalizm",
                desc: "Ciągle podnosimy kwalifikacje i stosujemy najwyższe standardy branżowe."
              },
              {
                icon: Scale,
                title: "Niezależność",
                desc: "Nie reprezentujemy żadnej instytucji finansowej. Nasze rekomendacje są obiektywne."
              }
            ].map((value, index) => (
              <div
                key={index}
                data-testid={`value-card-${index}`}
                className="bg-white p-8 rounded-sm border border-slate-100 card-hover"
              >
                <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
                ZGODNOŚĆ Z PRZEPISAMI
              </p>
              <h2 className="font-display text-3xl font-bold text-[#0A192F] mb-6">
                Działamy zgodnie z prawem
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Wealth Advisor działa w pełnej zgodności z polskimi i europejskimi 
                regulacjami dotyczącymi usług finansowych. Dbamy o najwyższe 
                standardy ochrony klientów.
              </p>

              <div className="space-y-4">
                {[
                  "Rejestracja w KNF jako agent firmy inwestycyjnej",
                  "Zgodność z dyrektywą MiFID II",
                  "Polityka ochrony danych zgodna z RODO",
                  "Ubezpieczenie OC działalności zawodowej",
                  "Regularne szkolenia compliance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0A192F] p-10 rounded-sm">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Gwarancje dla klienta
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Poufność",
                    desc: "Wszystkie dane klientów są chronione i przetwarzane zgodnie z RODO."
                  },
                  {
                    title: "Transparentność",
                    desc: "Jasna struktura opłat bez ukrytych kosztów. Wszystko wyjaśniamy przed rozpoczęciem współpracy."
                  },
                  {
                    title: "Bezpieczeństwo",
                    desc: "Nigdy nie przyjmujemy środków klientów — operujemy wyłącznie na doradztwie."
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="text-[#D4AF37] font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2020", label: "Rok założenia" },
              { number: "500+", label: "Obsłużonych klientów" },
              { number: "100M+", label: "PLN aktywów pod doradztw" },
              { number: "98%", label: "Satysfakcji klientów" }
            ].map((stat, index) => (
              <div key={index} data-testid={`company-stat-${index}`}>
                <p className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-2">
                  {stat.number}
                </p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Zacznijmy współpracę
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            Przekonaj się, jak profesjonalne doradztwo może zmienić Twoje 
            podejście do finansów. Pierwszy krok to niezobowiązująca rozmowa.
          </p>
          <Link to="/umow-spotkanie">
            <Button
              data-testid="company-cta-button"
              className="bg-[#D4AF37] text-[#0A192F] hover:bg-white transition-all duration-300 rounded-sm px-10 py-6 text-base font-semibold"
            >
              Umów spotkanie
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
