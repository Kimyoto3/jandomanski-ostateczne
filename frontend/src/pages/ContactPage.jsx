import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Proszę wypełnić wszystkie wymagane pola");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      toast.success("Wiadomość została wysłana!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              KONTAKT
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
              Porozmawiajmy
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Masz pytania dotyczące usług lub chcesz umówić się na spotkanie? 
              Skontaktuj się ze mną — odpowiem najszybciej jak to możliwe.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0A192F] mb-8">
                Wyślij wiadomość
              </h2>

              {isSubmitted ? (
                <div
                  data-testid="contact-success-message"
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-2">
                    Dziękuję za wiadomość!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Odpowiem najszybciej jak to możliwe, zazwyczaj w ciągu 24 godzin.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white rounded-xl"
                  >
                    Wyślij kolejną wiadomość
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2 block">
                        Imię i nazwisko *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="contact-name-input"
                        placeholder="Jan Kowalski"
                        className="rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="contact-email-input"
                        placeholder="jan@example.com"
                        className="rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-2 block">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      data-testid="contact-phone-input"
                      placeholder="+48 123 456 789"
                      className="rounded-sm border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2 block">
                      Wiadomość *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      data-testid="contact-message-input"
                      placeholder="W czym mogę pomóc?"
                      rows={6}
                      className="rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="contact-submit-button"
                    className="w-full bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-xl h-12 font-medium"
                  >
                    {isSubmitting ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        Wyślij wiadomość
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0A192F] mb-8">
                Dane kontaktowe
              </h2>

              <div className="space-y-6 mb-12">
                <div
                  data-testid="contact-info-phone"
                  className="flex items-start gap-4 p-6 bg-slate-50 rounded-sm"
                >
                  <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A192F] mb-1">Telefon</h3>
                    <a
                      href="tel:+48518607320"
                      className="text-slate-600 text-sm hover:text-[#D4AF37] transition-colors"
                    >
                      518 607 320
                    </a>
                  </div>
                </div>

                <div
                  data-testid="contact-info-email"
                  className="flex items-start gap-4 p-6 bg-slate-50 rounded-sm"
                >
                  <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A192F] mb-1">E-mail</h3>
                    <a
                      href="mailto:jan.domanski@inpartners.pl"
                      className="text-slate-600 text-sm hover:text-[#D4AF37] transition-colors"
                    >
                      jan.domanski@inpartners.pl
                    </a>
                  </div>
                </div>

                <div
                  data-testid="contact-info-hours"
                  className="flex items-start gap-4 p-6 bg-slate-50 rounded-sm"
                >
                  <div className="w-12 h-12 bg-[#0A192F] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A192F] mb-1">Godziny pracy</h3>
                    <p className="text-slate-600 text-sm">
                      Poniedziałek - Piątek: 9:00 - 17:00<br />
                      Sobota - Niedziela: zamknięte
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-slate-100 rounded-sm h-64 flex items-center justify-center">
                <p className="text-slate-400 text-sm">
                  Mapa lokalizacji
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
