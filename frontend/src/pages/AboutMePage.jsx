import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Briefcase, Heart, ArrowRight } from "lucide-react";

export default function AboutMePage() {
  return (
    <div data-testid="about-me-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] bg-slate-200 rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
                  alt="Jan Kowalski - Doradca finansowy"
                  className="w-full h-full object-cover"
                  data-testid="advisor-photo"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#D4AF37] rounded-sm -z-10" />
              <div className="absolute top-8 -left-8 bg-[#0A192F] text-white p-6 rounded-sm shadow-lg">
                <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-1">
                  DOŚWIADCZENIE
                </p>
                <p className="font-display text-3xl font-bold">15+ lat</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
                O MNIE
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
                Jan Kowalski
              </h1>
              <p className="text-[#D4AF37] font-medium mb-6">
                Certyfikowany Doradca Finansowy
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Od ponad 15 lat pomagam klientom w budowaniu długoterminowego 
                bezpieczeństwa finansowego. Moja filozofia opiera się na głębokim 
                zrozumieniu indywidualnych potrzeb każdego klienta i tworzeniu 
                spersonalizowanych strategii, które prowadzą do realnych rezultatów.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Wierzę, że prawdziwe doradztwo finansowe to partnerstwo — relacja 
                oparta na zaufaniu, przejrzystości i wspólnych celach. Nie oferuję 
                gotowych rozwiązań. Każdą strategię buduję od podstaw, uwzględniając 
                Twoje życiowe cele, tolerancję ryzyka i horyzont czasowy.
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

      {/* Experience & Education */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#0A192F]">
                  Wykształcenie
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "MBA w Finansach",
                    institution: "Szkoła Główna Handlowa w Warszawie",
                    year: "2012"
                  },
                  {
                    title: "Magister Ekonomii",
                    institution: "Uniwersytet Warszawski",
                    year: "2008"
                  },
                  {
                    title: "CFA (Chartered Financial Analyst)",
                    institution: "CFA Institute",
                    year: "2014"
                  }
                ].map((edu, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-slate-50 rounded-sm border border-slate-100"
                    data-testid={`education-item-${index}`}
                  >
                    <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-1">
                      {edu.year}
                    </p>
                    <h3 className="font-semibold text-[#0A192F] mb-1">{edu.title}</h3>
                    <p className="text-slate-500 text-sm">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#0A192F]">
                  Doświadczenie
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Założyciel i Główny Doradca",
                    company: "Wealth Advisor",
                    period: "2020 - obecnie"
                  },
                  {
                    title: "Senior Investment Advisor",
                    company: "Bank Prywatny XYZ",
                    period: "2015 - 2020"
                  },
                  {
                    title: "Doradca Klienta Premium",
                    company: "Towarzystwo Funduszy Inwestycyjnych ABC",
                    period: "2010 - 2015"
                  }
                ].map((exp, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-slate-50 rounded-sm border border-slate-100"
                    data-testid={`experience-item-${index}`}
                  >
                    <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-1">
                      {exp.period}
                    </p>
                    <h3 className="font-semibold text-[#0A192F] mb-1">{exp.title}</h3>
                    <p className="text-slate-500 text-sm">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-[#0A192F] rounded-sm flex items-center justify-center">
                <Award className="w-7 h-7 text-[#D4AF37]" />
              </div>
            </div>
            <h2 className="font-display text-3xl font-bold text-[#0A192F] mb-4">
              Certyfikaty i licencje
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Regularnie podnoszę swoje kwalifikacje, aby oferować klientom 
              najwyższy standard usług doradczych.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "CFA Charter",
              "Licencja Maklera",
              "EFPA (European Financial Planning)",
              "Certyfikat KNF"
            ].map((cert, index) => (
              <div
                key={index}
                data-testid={`certification-${index}`}
                className="bg-white p-6 rounded-sm border border-slate-100 text-center card-hover"
              >
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="font-medium text-[#0A192F] text-sm">{cert}</p>
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
              <div className="w-14 h-14 bg-[#D4AF37] rounded-sm flex items-center justify-center">
                <Heart className="w-7 h-7 text-[#0A192F]" />
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Moja filozofia
            </h2>
            <blockquote className="text-xl text-slate-300 leading-relaxed italic mb-8">
              "Prawdziwe bogactwo to nie tylko liczby na koncie. To spokój ducha, 
              bezpieczeństwo rodziny i wolność podejmowania życiowych decyzji 
              bez finansowych ograniczeń. Moim celem jest pomóc Ci to osiągnąć."
            </blockquote>
            <p className="text-[#D4AF37] font-display font-semibold">
              — Jan Kowalski
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl font-bold text-[#0A192F] mb-4">
            Chcesz poznać się bliżej?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Umów się na niezobowiązującą rozmowę. Chętnie odpowiem na Twoje 
            pytania i przedstawię, jak mogę pomóc.
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
