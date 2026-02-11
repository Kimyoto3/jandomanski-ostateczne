import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Target, Users, Scale, ArrowRight, CheckCircle, Star, TrendingUp, ShieldCheck, Flag, Zap } from "lucide-react";

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
              Investment Partners
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Investment Partners to firma specjalizująca się 
              w&nbsp;<strong className="text-[#0A192F]">planowaniu finansowym</strong>, współpracująca 
              z&nbsp;instytucjami finansowymi działającymi pod nadzorem <strong className="text-[#0A192F]">Komisji Nadzoru Finansowego</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              W&nbsp;ramach tej współpracy działam jako <strong className="text-[#0A192F]">planer finansowy</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-center gap-16 md:gap-24">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-2">
                16+
              </p>
              <p className="text-slate-500 text-sm">Lat doświadczenia</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-2 flex items-center justify-center gap-1">
                4.9 <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              </p>
              <p className="text-slate-500 text-sm">Ocena Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filozofia firmy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              NASZE PODEJŚCIE
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
              Filozofia firmy
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pomagamy Ci poukładać kwestie finansowe, abyś mógł podejmować bardziej świadome decyzje.
            </p>
          </div>

          {/* 2x2 Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Bogacenie",
                desc: "Systematyczne budowanie majątku krok po kroku.",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop"
              },
              {
                icon: ShieldCheck,
                title: "Bezpieczeństwo",
                desc: "Ochrona finansów przed nieprzewidzianymi zdarzeniami.",
                image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=200&fit=crop"
              },
              {
                icon: Flag,
                title: "Cele długoterminowe",
                desc: "Plan na przyszłość podzielony na realne etapy.",
                image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=200&fit=crop"
              },
              {
                icon: Zap,
                title: "Cele krótkoterminowe",
                desc: "Konkretne działania na najbliższe miesiące.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop"
              }
            ].map((item, index) => (
              <div
                key={index}
                data-testid={`philosophy-card-${index}`}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#0A192F] rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#0A192F]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
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
                desc: "Działamy zawsze w\u00A0najlepszym interesie klienta. Przejrzystość i\u00A0uczciwość to fundament naszej pracy."
              },
              {
                icon: Users,
                title: "Partnerstwo",
                desc: "Budujemy długoterminowe relacje oparte na zaufaniu i\u00A0wzajemnym szacunku."
              },
              {
                icon: Target,
                title: "Profesjonalizm",
                desc: "Ciągle podnosimy kwalifikacje i\u00A0stosujemy najwyższe standardy branżowe."
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
                className="bg-slate-50 p-8 rounded-xl border border-slate-100 card-hover"
              >
                <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-5">
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
      <section className="py-24 bg-slate-50">
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
                Investment Partners działa w&nbsp;pełnej zgodności z&nbsp;polskimi i&nbsp;europejskimi 
                regulacjami dotyczącymi usług finansowych. Dbamy o&nbsp;najwyższe 
                standardy ochrony klientów.
              </p>

              <div className="space-y-4">
                {[
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

            <div className="bg-[#0A192F] p-10 rounded-xl">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Gwarancje dla klienta
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Poufność",
                    desc: "Wszystkie dane klientów są chronione i&nbsp;przetwarzane zgodnie z&nbsp;RODO."
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
              className="bg-[#D4AF37] text-[#0A192F] hover:bg-white transition-all duration-300 rounded-xl px-10 py-6 text-base font-semibold"
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
