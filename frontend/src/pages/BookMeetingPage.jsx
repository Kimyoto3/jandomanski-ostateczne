return (
  <div className="min-h-screen pt-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <div className="max-w-2xl mb-12">
        <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
          UMÓW SPOTKANIE
        </p>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
          Zarezerwuj konsultację
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed">
          Wybierz dogodny termin konsultacji.
        </p>
      </div>

      <iframe
        src="https://cal.eu/jan-domanski/konsultacja-wstepna"
        width="100%"
        height="850"
        frameBorder="0"
        className="rounded-2xl border border-slate-200"
      ></iframe>
    </div>
  </div>
);
