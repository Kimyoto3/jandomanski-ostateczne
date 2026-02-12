import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Users, Search, FileText, RefreshCw } from "lucide-react";

export default function AboutMePage() {
  return (
    <div data-testid="about-me-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden">
                <img
                  src="/o-mnie.jpg"
                  alt="Jan Domański - Planer finansowy"
                  className="w-full h-full object-cover"
                  data-testid="advisor-photo"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#D4AF37] rounded-xl -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
                O MNIE
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
                Jan Domański
              </h1>
              <p className="text-[#D4AF37] font-medium mb-6">
                Planer finansowy
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nie buduję relacji w&nbsp;oparciu o&nbsp;obietnice szybkich efektów. 
                Skupiam się na porządkowaniu finansów, długoterminowym myśleniu 
                i&nbsp;świadomych decyzjach. Współpracuję z&nbsp;osobami, które chcą mieć 
                <strong className="text-[#0A192F]"> spokój w&nbsp;finansach</strong> oraz 
                <strong className="text-[#0A192F]"> jasny plan</strong> prowadzący – przy 
                wsparciu ekspertów – do wyznaczonych celów.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Działam jako radca majątkowy we współpracy z&nbsp;<strong className="text-[#0A192F]">Investment Partners S.A.</strong>, 
                co zapewnia dostęp do sprawdzonych rozwiązań i&nbsp;współpracę z&nbsp;regulowanymi 
                instytucjami finansowymi.
              </p>
              <Link to="/umow-spotkanie">
                <Button
                  data-testid="about-cta-button"
                  className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-xl px-8 py-6 font-medium"
                >
                  Umów spotkanie
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proces działania */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              JAK DZIAŁAM
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F]">
              Proces działania
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Usługa",
                desc: <>Niezobowiązujące spotkanie, podczas którego omawiane są <strong className="text-[#0A192F]">zasady współpracy</strong>. Wspólnie oceniamy, czy taka forma wsparcia <strong className="text-[#0A192F]">ma sens</strong> w{"\u00A0"}danej sytuacji.</>
              },
              {
                icon: Search,
                title: "Analiza",
                desc: <>Szczegółowe <strong className="text-[#0A192F]">przeanalizowanie sytuacji finansowej</strong> oraz identyfikacja możliwych kierunków i{"\u00A0"}obszarów do uporządkowania lub poprawy.</>
              },
              {
                icon: FileText,
                title: "Doradztwo",
                desc: <>Przekazanie spójnego <strong className="text-[#0A192F]">planu finansowego</strong> oraz omówienie konkretnych rekomendacji i{"\u00A0"}dalszych kroków, opartych na przeprowadzonej analizie.</>
              },
              {
                icon: RefreshCw,
                title: "Serwis",
                desc: <>Regularne spotkania serwisowe, których celem jest <strong className="text-[#0A192F]">bieżące monitorowanie sytuacji finansowej</strong> i{"\u00A0"}życiowej oraz aktualizowanie planu finansowego w{"\u00A0"}odpowiedzi na zachodzące zmiany.</>
              }
            ].map((step, index) => (
              <div
                key={index}
                data-testid={`process-step-${index}`}
                className="bg-slate-50 p-8 rounded-xl border border-slate-100 card-hover"
              >
                <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-[#0A192F]" />
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Moja filozofia
            </h2>
            <blockquote className="text-xl text-slate-300 leading-relaxed italic mb-8">
              "Prawdziwe bogactwo to nie tylko liczby na koncie. To spokój ducha, 
              bezpieczeństwo rodziny i&nbsp;wolność podejmowania życiowych decyzji 
              bez finansowych ograniczeń. Moim celem jest pomóc Ci to osiągnąć."
            </blockquote>
            <p className="text-[#D4AF37] font-display font-semibold">
              — Jan Domański
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl font-bold text-[#0A192F] mb-4">
            Poznajmy się
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Umów się na niezobowiązującą rozmowę. Chętnie odpowiem na Twoje 
            pytania i&nbsp;przedstawię, jak mogę pomóc.
          </p>
          <Link to="/umow-spotkanie">
            <Button
              data-testid="about-cta-bottom"
              className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-xl px-10 py-6 text-base font-semibold"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
