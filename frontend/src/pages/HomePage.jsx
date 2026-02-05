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
              Buduj majątek z&nbsp;perspektywą na lata
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

      {/* Trust Elements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Lat doświadczenia" },
              { number: "500+", label: "Zadowolonych klientów" },
              { number: "100M+", label: "PLN zarządzanych aktywów" },
              { number: "98%", label: "Wskaźnik retencji" },
            ].map((stat, index) => (
              <div
                key={index}
                data-testid={`trust-stat-${index}`}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-2">
                  {stat.number}
                </p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
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
              className="lg:col-span-2 bg-white p-10 rounded-sm border border-slate-100 shadow-sm card-hover"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0A192F] rounded-sm flex items-center justify-center flex-shrink-0">
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
              className="bg-white p-8 rounded-sm border border-slate-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-3">
                Planowanie emerytalne
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tworzę długoterminowe strategie zabezpieczenia finansowego 
                na okres po zakończeniu aktywności zawodowej.
              </p>
            </div>

            {/* Regular Card */}
            <div
              data-testid="service-card-wealth"
              className="bg-white p-8 rounded-sm border border-slate-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-3">
                Ochrona majątku
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kompleksowe rozwiązania zabezpieczające Twój majątek 
                przed ryzykami i&nbsp;nieprzewidzianymi zdarzeniami.
              </p>
            </div>

            {/* Large Card */}
            <div
              data-testid="service-card-education"
              className="lg:col-span-2 bg-[#0A192F] p-10 rounded-sm card-hover"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-sm flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-[#0A192F]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">
                    Edukacja finansowa
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Wierzę, że świadomy klient podejmuje lepsze decyzje. 
                    Oferuję materiały edukacyjne i&nbsp;konsultacje, które pomogą 
                    Ci zrozumieć świat finansów i&nbsp;inwestycji.
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

      {/* Why Choose Me Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
                DLACZEGO JA
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-6">
                Partnerstwo oparte na zaufaniu
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Każda współpraca zaczyna się od głębokiego <strong className="text-[#0A192F]">zrozumienia Twoich celów</strong>, 
                wartości i&nbsp;sytuacji życiowej. Nie oferuję standardowych rozwiązań — 
                tworzę <strong className="text-[#0A192F]">spersonalizowane</strong> strategie, które ewoluują wraz z&nbsp;Tobą.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Jasny proces współpracy",
                    desc: "Przejrzysty system pracy: usługa, analiza, doradztwo i&nbsp;stały serwis."
                  },
                  {
                    icon: Users,
                    title: "Indywidualne podejście",
                    desc: "Rozwiązania dopasowane do sytuacji życiowej, nie gotowe schematy."
                  },
                  {
                    icon: Clock,
                    title: "Stała opieka",
                    desc: "Regularne spotkania i&nbsp;aktualizacja planu wraz ze zmianami."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#0A192F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A192F] mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaW5hbmNpYWwlMjBhZHZpc29yJTIwbWVldGluZyUyMG9mZmljZXxlbnwwfHx8fDE3NzAyMjE0NzZ8MA&ixlib=rb-4.1.0&q=85"
                  alt="Profesjonalne spotkanie"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-[#D4AF37] rounded-sm -z-10" />
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
