import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, Clock, CheckCircle, ArrowRight, Phone, User, Mail } from "lucide-react";
import { toast } from "sonner";
import { format, addDays, isBefore, startOfToday } from "date-fns";
import { pl } from "date-fns/locale";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BookMeetingPage() {
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferred_time: "",
    topic: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(format(selectedDate, "yyyy-MM-dd"));
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async (date) => {
    setLoadingSlots(true);
    try {
      const response = await axios.get(`${API}/bookings/available-slots`, {
        params: { date }
      });
      setAvailableSlots(response.data.slots);
    } catch (error) {
      console.error("Error fetching slots:", error);
      toast.error("Nie udało się pobrać dostępnych terminów");
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate || !formData.preferred_time) {
      toast.error("Proszę wybrać datę i godzinę spotkania");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Proszę wypełnić wszystkie wymagane pola");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/bookings`, {
        ...formData,
        preferred_date: format(selectedDate, "yyyy-MM-dd")
      });
      setIsSubmitted(true);
      toast.success("Rezerwacja została wysłana!");
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const disabledDays = (date) => {
    const today = startOfToday();
    const day = date.getDay();
    // Disable past dates, weekends
    return isBefore(date, today) || day === 0 || day === 6;
  };

  const topics = [
    "Planowanie emerytalne",
    "Ochrona majątku",
    "Edukacja finansowa",
    "Ogólna konsultacja",
    "Inne"
  ];

  if (isSubmitted) {
    return (
      <div data-testid="booking-success" className="min-h-screen pt-20 flex items-center">
        <div className="max-w-xl mx-auto px-6 md:px-12 py-20 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-[#0A192F] mb-4">
            Rezerwacja wysłana!
          </h1>
          <p className="text-slate-600 mb-2">
            Dziękuję za zarezerwowanie spotkania.
          </p>
          <p className="text-slate-600 mb-8">
            <strong>Data:</strong> {selectedDate && format(selectedDate, "d MMMM yyyy", { locale: pl })}<br />
            <strong>Godzina:</strong> {formData.preferred_time}
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Potwierdzenie zostanie wysłane na adres: <strong>{formData.email}</strong>
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                preferred_time: "",
                topic: "",
                message: ""
              });
              setSelectedDate(undefined);
            }}
            className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] rounded-xl px-8 py-6"
          >
            Zarezerwuj kolejne spotkanie
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="book-meeting-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              UMÓW SPOTKANIE
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
              Zarezerwuj konsultację
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Wybierz dogodny termin na bezpłatną konsultację. Podczas spotkania 
              omówimy Twoją sytuację finansową i&nbsp;cele.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Calendar Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0A192F] rounded-xl flex items-center justify-center">
                    <CalendarDays className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-[#0A192F]">
                    Wybierz datę
                  </h2>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={disabledDays}
                    locale={pl}
                    data-testid="booking-calendar"
                    className="rounded-xl"
                    fromDate={new Date()}
                    toDate={addDays(new Date(), 60)}
                  />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#0A192F] rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#0A192F]">
                        Wybierz godzinę
                      </h3>
                    </div>

                    <p className="text-slate-500 text-sm mb-4">
                      {format(selectedDate, "d MMMM yyyy", { locale: pl })}
                    </p>

                    {loadingSlots ? (
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <div key={i} className="h-12 bg-slate-100 animate-pulse rounded-xl" />
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 gap-2">
                        {availableSlots.map((slot) => (
                          <Button
                            key={slot.time}
                            type="button"
                            variant={formData.preferred_time === slot.time ? "default" : "outline"}
                            disabled={!slot.available}
                            onClick={() => setFormData((prev) => ({ ...prev, preferred_time: slot.time }))}
                            data-testid={`time-slot-${slot.time.replace(":", "")}`}
                            className={`h-12 rounded-xl ${
                              formData.preferred_time === slot.time
                                ? "bg-[#0A192F] text-white"
                                : slot.available
                                ? "border-slate-200 hover:border-[#0A192F] hover:bg-slate-50"
                                : "opacity-50 cursor-not-allowed"
                            }`}
                          >
                            {slot.time}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Form Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0A192F] rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-[#0A192F]">
                    Twoje dane
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2 block">
                      Imię i nazwisko *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="booking-name-input"
                        placeholder="Jan Kowalski"
                        className="pl-10 rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
                      E-mail *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="booking-email-input"
                        placeholder="jan@example.com"
                        className="pl-10 rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-2 block">
                      Telefon *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        data-testid="booking-phone-input"
                        placeholder="+48 123 456 789"
                        className="pl-10 rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="topic" className="text-sm font-medium text-slate-700 mb-2 block">
                      Temat spotkania
                    </Label>
                    <Select
                      value={formData.topic}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, topic: value }))}
                    >
                      <SelectTrigger
                        data-testid="booking-topic-select"
                        className="rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] h-12"
                      >
                        <SelectValue placeholder="Wybierz temat" />
                      </SelectTrigger>
                      <SelectContent>
                        {topics.map((topic) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2 block">
                      Dodatkowe informacje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      data-testid="booking-message-input"
                      placeholder="Opisz krótko, w czym mogę pomóc..."
                      rows={4}
                      className="rounded-xl border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F] resize-none"
                    />
                  </div>

                  {/* Summary */}
                  {selectedDate && formData.preferred_time && (
                    <div className="bg-[#0A192F] p-6 rounded-xl">
                      <h4 className="text-[#D4AF37] font-semibold mb-3">Podsumowanie</h4>
                      <p className="text-white text-sm">
                        <strong>Data:</strong> {format(selectedDate, "d MMMM yyyy", { locale: pl })}
                      </p>
                      <p className="text-white text-sm">
                        <strong>Godzina:</strong> {formData.preferred_time}
                      </p>
                      {formData.topic && (
                        <p className="text-white text-sm">
                          <strong>Temat:</strong> {formData.topic}
                        </p>
                      )}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedDate || !formData.preferred_time}
                    data-testid="booking-submit-button"
                    className="w-full bg-[#D4AF37] text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all duration-300 rounded-xl h-14 font-semibold text-base"
                  >
                    {isSubmitting ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        Zarezerwuj spotkanie
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-slate-400 text-xs text-center">
                    Rezerwując spotkanie, wyrażasz zgodę na kontakt w&nbsp;celu potwierdzenia terminu.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
