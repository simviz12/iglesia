import React, { useState } from 'react';

export const PrayerRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    motive: 'difuntos',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      motive: 'difuntos',
      date: '',
      message: ''
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sacred border border-surface-container flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-primary text-xs uppercase font-bold tracking-widest">
          <svg className="w-4 h-4 fill-current text-primary" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span>Intenciones y Rogativas</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
          Envía tu Petición de Oración
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Tus intenciones serán llevadas al altar en las Santas Misas diarias y depositadas ante el Santísimo Sacramento durante la Hora Santa de los jueves.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-charcoal">
              Nombre y Apellido <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Ej: María Teresa García"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-surface-container text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-charcoal">
              Correo Electrónico (Opcional)
            </label>
            <input
              type="email"
              placeholder="Para confirmación de la Misa"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-surface-container text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-charcoal">
              Motivo de la Intención
            </label>
            <select
              value={formData.motive}
              onChange={(e) => setFormData({ ...formData, motive: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-surface-container text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="difuntos">Eterno descanso de un difunto</option>
              <option value="salud">Salud y fortaleza de un enfermo</option>
              <option value="gracias">Acción de gracias / Cumpleaños / Aniversario</option>
              <option value="paz">Paz en la familia y en el mundo</option>
              <option value="vocaciones">Por las vocaciones consagradas</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-charcoal">
              Preferencia de Fecha
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-surface-container text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-charcoal">
            Nombre de la Persona o Súplica Especial <span className="text-primary">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Escribe aquí el nombre del enfermo, difunto o intención confidencial..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-surface-container text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-primary flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span>Encomendar Intención al Altar</span>
        </button>

        {submitted && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-start gap-2.5 animate-fade-in">
            <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <span className="font-bold block">Tu petición ha sido recibida con devoción.</span>
              Será leída ante el altar del Señor en la próxima celebración litúrgica. Dios te bendiga y colme de su paz.
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
