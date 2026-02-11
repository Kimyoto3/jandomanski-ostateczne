import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award, ChevronRight, Clock, BookOpen, Target, Search, FileText, RefreshCw } from "lucide-react";

export default function HomePage() {
  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_invest-wisely-20/artifacts/zlto6h57_Opole%20rynek%20z%20lotu%20ptaka.jpg')`
          }}
        >
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="max-w-2xl">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-6 animate-fade-in-up">
              PLANOWANIE FINANSOWE • OPOLE
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Buduj majątek z perspektywą na lata
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
              Pomagam klientom w&nbsp;podejmowaniu świadomych decyzji finansowych, 
              które prowadzą do długoterminowego bezpieczeństwa i&nbsp;spokoju.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link to="/umow-spotkanie">
                <Button
                  data-testid="hero-cta-primary"
                  className="bg-[#D4AF37] text-[#0A192F] hover:bg-white hover:text-[#0A192F] transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold"
                >
                  Umów spotkanie
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/o-mnie">
                <Button
                  data-testid="hero-cta-secondary"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A192F] transition-all duration-300 rounded-xl px-8 py-6 text-base font-semibold"
                >
                  Poznaj ofertę
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Elements Section - Value Based 2x2 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div className="text-center">
              <p className="font-display text-lg md:text-xl font-bold text-[#0A192F] mb-1">
                Szeroki rynek
              </p>
              <p className="text-slate-500 text-sm">Bez ograniczeń do jednej instytucji</p>
            </div>
            <div className="text-center">
              <p className="font-display text-lg md:text-xl font-bold text-[#0A192F] mb-1">
                Investment Partners
              </p>
              <p className="text-slate-500 text-sm">Instytucjonalne zaplecze współpracy</p>
            </div>
            <div className="text-center">
              <p className="font-display text-lg md:text-xl font-bold text-[#0A192F] mb-1">
                Plan finansowy
              </p>
              <p className="text-slate-500 text-sm">Dopasowany do sytuacji i&nbsp;celów</p>
            </div>
            <div className="text-center">
              <p className="font-display text-lg md:text-xl font-bold text-[#0A192F] mb-1">
                Stały serwis
              </p>
              <p className="text-slate-500 text-sm">Regularna aktualizacja planu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              USŁUGI
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">
              Kompleksowe doradztwo finansowe
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Oferuję pełen zakres usług dostosowanych do indywidualnych potrzeb 
              i&nbsp;celów finansowych każdego klienta.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <div
              data-testid="service-card-strategy"
              className="lg:col-span-2 bg-white p-10 rounded-xl border border-slate-100 shadow-sm card-hover"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0A192F] rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#0A192F] mb-3">
                    Strategia finansowa
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Pomagam zaplanować spójną strategię zarządzania finansami, uwzględniając 
                    cele <strong className="text-[#0A192F]">krótko</strong> i&nbsp;<strong className="text-[#0A192F]">długoterminowe</strong> oraz 
                    zmieniające się warunki życiowe.
                  </p>
                  <Link 
                    to="/umow-spotkanie" 
                    className="inline-flex items-center text-[#0A192F] font-medium text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    Dowiedz się więcej <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular Card */}
            <div
              data-testid="service-card-retirement"
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-3">
                Planowanie emerytalne
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tworzę <strong className="text-[#0A192F]">długoterminowe</strong> strategie zabezpieczenia finansowego 
                na okres po zakończeniu <strong className="text-[#0A192F]">aktywności zawodowej</strong>.
              </p>
            </div>

            {/* Regular Card */}
            <div
              data-testid="service-card-wealth"
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-3">
                Ochrona majątku
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kompleksowe rozwiązania <strong className="text-[#0A192F]">zabezpieczające</strong> Twój majątek 
                przed ryzykami i&nbsp;<strong className="text-[#0A192F]">nieprzewidzianymi</strong> zdarzeniami.
              </p>
            </div>

            {/* Large Card */}
            <div
              data-testid="service-card-education"
              className="lg:col-span-2 bg-[#0A192F] p-10 rounded-xl card-hover"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-[#0A192F]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">
                    Edukacja finansowa
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Wierzę, że <strong className="text-white">świadomy</strong> klient podejmuje lepsze decyzje. 
                    Oferuję <strong className="text-white">materiały edukacyjne</strong> i&nbsp;konsultacje, które pomogą 
                    Ci zrozumieć <strong className="text-white">świat finansów</strong> i&nbsp;inwestycji.
                  </p>
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center text-[#D4AF37] font-medium text-sm hover:text-white transition-colors"
                  >
                    Przejdź do bloga <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
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
                desc: <>Niezobowiązujące spotkanie, podczas którego omawiane są <strong className="text-[#0A192F]">zasady współpracy</strong>. Wspólnie oceniamy, czy taka forma wsparcia <strong className="text-[#0A192F]">ma sens</strong> w&nbsp;danej sytuacji.</>
              },
              {
                icon: Search,
                title: "Analiza",
                desc: <>Szczegółowe <strong className="text-[#0A192F]">przeanalizowanie sytuacji finansowej</strong> oraz identyfikacja możliwych kierunków i&nbsp;obszarów do uporządkowania lub poprawy.</>
              },
              {
                icon: FileText,
                title: "Doradztwo",
                desc: <>Przekazanie spójnego <strong className="text-[#0A192F]">planu finansowego</strong> oraz omówienie konkretnych rekomendacji i&nbsp;dalszych kroków, opartych na przeprowadzonej analizie.</>
              },
              {
                icon: RefreshCw,
                title: "Serwis",
                desc: <>Regularne spotkania serwisowe, których celem jest <strong className="text-[#0A192F]">bieżące monitorowanie sytuacji finansowej</strong> i&nbsp;życiowej oraz aktualizowanie planu finansowego w&nbsp;odpowiedzi na zachodzące zmiany.</>
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

      {/* Why Choose Me Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content - First on mobile */}
            <div className="order-2 lg:order-1">
              <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
                DLACZEGO JA
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
                Partnerstwo oparte na zaufaniu
              </h2>
              
              {/* Photo - Mobile only, between title and description */}
              <div className="relative lg:hidden mb-8">
                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden">
                  <img
                    src="https://customer-assets.emergentagent.com/job_invest-wisely-20/artifacts/pw4r7g7q_DSC00855.jpg"
                    alt="Jan Domański - Planer finansowy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Każda współpraca zaczyna się od głębokiego <strong className="text-[#0A192F]">zrozumienia Twoich celów</strong>, 
                wartości i&nbsp;sytuacji życiowej. Nie oferuję standardowych rozwiązań — 
                tworzę <strong className="text-[#0A192F]">spersonalizowane</strong> strategie, które ewoluują wraz z&nbsp;Tobą.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#0A192F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A192F] mb-1">Jasny proces współpracy</h4>
                    <p className="text-slate-500 text-sm">Przejrzysty system pracy: usługa, analiza, doradztwo i&nbsp;stały serwis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#0A192F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A192F] mb-1">Indywidualne podejście</h4>
                    <p className="text-slate-500 text-sm">Rozwiązania dopasowane do sytuacji życiowej, nie gotowe schematy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#0A192F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A192F] mb-1">Stała opieka</h4>
                    <p className="text-slate-500 text-sm">Regularne spotkania i&nbsp;aktualizacja planu wraz ze zmianami.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo - Desktop only */}
            <div className="relative hidden lg:block order-1 lg:order-2">
              <div className="aspect-[4/5] bg-slate-200 rounded-xl overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_invest-wisely-20/artifacts/pw4r7g7q_DSC00855.jpg"
                  alt="Jan Domański - Planer finansowy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-[#D4AF37] rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Gotowy na pierwszy krok?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            Umów się na bezpłatną konsultację i&nbsp;dowiedz się, jak mogę pomóc 
            Ci osiągnąć Twoje cele finansowe.
          </p>
          <Link to="/umow-spotkanie">
            <Button
              data-testid="cta-button-bottom"
              className="bg-[#D4AF37] text-[#0A192F] hover:bg-white transition-all duration-300 rounded-xl px-10 py-6 text-base font-semibold"
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
