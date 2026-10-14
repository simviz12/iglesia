import React, { useState } from 'react';
import type { LiturgicalEvent } from '../data/siteConfig';

interface Props {
  events: LiturgicalEvent[];
}

export const LiturgicalCalendar: React.FC<Props> = ({ events }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedEventId, setSelectedEventId] = useState<string>(events[0]?.id || '1');
  const [copied, setCopied] = useState<boolean>(false);

  const filteredEvents = events.filter((ev) => {
    if (selectedFilter === 'all') return true;
    return ev.category === selectedFilter;
  });

  const activeEvent = events.find((ev) => ev.id === selectedEventId) || events[0];

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container rounded-xl w-fit">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            selectedFilter === 'all'
              ? 'bg-primary text-white shadow-sm'
              : 'text-charcoal-muted hover:text-charcoal hover:bg-surface-container-high'
          }`}
        >
          Todas las Fechas
        </button>
        <button
          onClick={() => setSelectedFilter('patronales')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            selectedFilter === 'patronales'
              ? 'bg-primary text-white shadow-sm'
              : 'text-charcoal-muted hover:text-charcoal hover:bg-surface-container-high'
          }`}
        >
          Fiestas & Solemnidades
        </button>
        <button
          onClick={() => setSelectedFilter('liturgia')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            selectedFilter === 'liturgia'
              ? 'bg-primary text-white shadow-sm'
              : 'text-charcoal-muted hover:text-charcoal hover:bg-surface-container-high'
          }`}
        >
          Cuaresma y Pascua
        </button>
        <button
          onClick={() => setSelectedFilter('jovenes')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            selectedFilter === 'jovenes'
              ? 'bg-primary text-white shadow-sm'
              : 'text-charcoal-muted hover:text-charcoal hover:bg-surface-container-high'
          }`}
        >
          Jóvenes & Retiros
        </button>
        <button
          onClick={() => setSelectedFilter('sacramentos')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            selectedFilter === 'sacramentos'
              ? 'bg-primary text-white shadow-sm'
              : 'text-charcoal-muted hover:text-charcoal hover:bg-surface-container-high'
          }`}
        >
          Formación y Bautismos
        </button>
      </div>

      {/* Split Layout: Events List (5 cols) & Detail View (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {filteredEvents.map((ev) => {
            const isSelected = ev.id === activeEvent.id;
            return (
              <button
                key={ev.id}
                onClick={() => setSelectedEventId(ev.id)}
                className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'bg-white shadow-sacred border-primary/40 ring-1 ring-primary/20'
                    : 'bg-white/80 hover:bg-white border-surface-container hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Date Badge */}
                  <div
                    className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-primary text-white' : 'bg-surface-container text-charcoal'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider">{ev.month}</span>
                    <span className="font-serif text-xl font-bold leading-none">{ev.day}</span>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary truncate">
                      {ev.tag}
                    </span>
                    <h4 className="font-bold text-sm text-charcoal truncate">{ev.title}</h4>
                    <span className="text-xs text-charcoal-muted truncate">{ev.subtitle}</span>
                  </div>
                </div>

                <svg
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-primary translate-x-1' : 'text-charcoal-light'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Right Active Event Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-sacred border border-surface-container overflow-hidden flex flex-col transition-all">
          {/* Header Image with Tag */}
          <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-surface-container-high">
            <img
              src={activeEvent.image}
              alt={activeEvent.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-md bg-primary text-white text-xs uppercase font-bold tracking-wider shadow-sm">
                {activeEvent.badge}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{activeEvent.dateFull}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{activeEvent.location}</span>
              </div>
            </div>
          </div>

          {/* Event Content & Details */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-bold mb-3">
                {activeEvent.title}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                {activeEvent.description}
              </p>
            </div>

            {/* Liturgical Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-surface-container-low rounded-xl border border-surface-container text-xs">
              <div className="flex flex-col">
                <span className="uppercase text-charcoal-light font-bold text-[10px] tracking-wider">Celebrante Principal</span>
                <span className="font-bold text-charcoal text-sm mt-0.5">{activeEvent.celebrant}</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-charcoal-light font-bold text-[10px] tracking-wider">Hora de Inicio</span>
                <span className="font-bold text-primary text-sm mt-0.5">{activeEvent.time}</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-charcoal-light font-bold text-[10px] tracking-wider">Detalles & Actos</span>
                <span className="font-bold text-charcoal text-sm mt-0.5">{activeEvent.notes}</span>
              </div>
            </div>

            {/* Actions: Save to Calendar & Share */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => alert(`Evento "${activeEvent.title}" guardado en tu recordatorio.`)}
                  className="px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-charcoal text-xs font-semibold transition-colors flex items-center gap-2 border border-surface-container"
                >
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>Recordar Evento</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  title="Compartir enlace"
                  className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-charcoal text-xs font-semibold transition-colors border border-surface-container"
                >
                  {copied ? (
                    <span className="text-emerald-700 font-bold px-1 text-xs">¡Copiado!</span>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  )}
                </button>
              </div>

              <a
                href="#contacto"
                className="px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-hover text-xs font-bold transition-all shadow-primary flex items-center gap-2"
              >
                <span>Participar o Consultar</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
