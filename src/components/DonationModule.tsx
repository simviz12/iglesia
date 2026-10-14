import React, { useState } from 'react';
import type { SiteConfig } from '../data/siteConfig';

interface Props {
  bankAccount: SiteConfig['bankAccount'];
}

export const DonationModule: React.FC<Props> = ({ bankAccount }) => {
  const [copiedIban, setCopiedIban] = useState<boolean>(false);
  const [copiedBizum, setCopiedBizum] = useState<boolean>(false);

  const handleCopyIban = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(bankAccount.iban.replace(/\s+/g, ''));
      setCopiedIban(true);
      setTimeout(() => setCopiedIban(false), 2500);
    }
  };

  const handleCopyBizum = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(bankAccount.bizumCode);
      setCopiedBizum(true);
      setTimeout(() => setCopiedBizum(false), 2500);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sacred border border-surface-container flex flex-col gap-6">
      <div className="text-center">
        <h3 className="font-serif text-2xl font-bold text-charcoal">Colaborar Económicamente</h3>
        <p className="text-xs text-charcoal-muted mt-1.5 leading-relaxed">
          Cualquier aporte, según tus posibilidades, es una valiosa ayuda para nuestra comunidad y sostenimiento del templo.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Bizum Card */}
        <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span className="text-xs font-bold text-charcoal uppercase tracking-wider">Bizum Parroquial</span>
            </div>
            <button
              type="button"
              onClick={handleCopyBizum}
              className="text-xs font-bold px-2.5 py-1 rounded bg-white hover:bg-surface-container text-primary border border-surface-container transition-colors shadow-sm"
            >
              {copiedBizum ? '¡Copiado!' : 'Copiar código'}
            </button>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="text-xs text-charcoal-muted">Código para donación:</span>
            <span className="font-mono text-xl font-bold text-primary tracking-wider">{bankAccount.bizumCode}</span>
          </div>
          <span className="text-[11px] text-charcoal-light">
            En tu app bancaria: Donar / ONG &gt; Ingresar código {bankAccount.bizumCode}
          </span>
        </div>

        {/* Transferencia Bancaria */}
        <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-xs font-bold text-charcoal uppercase tracking-wider">Transferencia Bancaria</span>
            </div>
            <button
              type="button"
              onClick={handleCopyIban}
              className="text-xs font-bold px-2.5 py-1 rounded bg-white hover:bg-surface-container text-primary border border-surface-container transition-colors shadow-sm"
            >
              {copiedIban ? '¡Copiado!' : 'Copiar cuenta'}
            </button>
          </div>
          
          <div className="flex flex-col gap-1 pt-1">
            <span className="text-[11px] text-charcoal-muted uppercase tracking-wider font-semibold">Número de Cuenta (IBAN):</span>
            <span className="font-mono text-sm sm:text-base font-bold text-charcoal select-all bg-white px-3 py-2 rounded-lg border border-surface-container break-all">
              {bankAccount.iban}
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-charcoal-muted pt-1 border-t border-surface-container">
            <span>Entidad: <strong className="text-charcoal font-medium">{bankAccount.bank}</strong></span>
            <span>Titular: <strong className="text-charcoal font-medium">Parroquia Santa Mónica</strong></span>
          </div>
        </div>

        {/* Nota pastoral */}
        <div className="p-3.5 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-2.5 text-xs text-charcoal-muted leading-relaxed">
          <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            Puedes indicar en el concepto: <em>"Donativo parroquial"</em> o tu nombre si necesitas certificado de donación para desgravación fiscal.
          </span>
        </div>
      </div>
    </div>
  );
};
