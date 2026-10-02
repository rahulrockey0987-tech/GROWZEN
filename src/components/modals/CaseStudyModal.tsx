import React from 'react';
import { X, ArrowRight, Check, Quote, Building2, Calendar, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../../types/agency';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onStartProject: (service?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onStartProject
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0C]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-[#121216] border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-neutral-100 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-2 text-[11px] font-mono text-blue-400 uppercase mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>{caseStudy.industry}</span>
            <span className="text-neutral-600">·</span>
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-400">{caseStudy.duration}</span>
          </div>

          <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {caseStudy.client}
          </h2>

          <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
            {caseStudy.tagline}
          </p>
        </div>

        {/* Quantified Results Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800 mb-6">
          {caseStudy.results.map((r, i) => (
            <div key={i} className="text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-blue-400 font-mono tracking-tight tabular-nums">
                {r.metric}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        {/* Body Narrative */}
        <div className="space-y-6 text-xs leading-relaxed text-neutral-300">
          
          {/* Challenge */}
          <div>
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>The Commercial Challenge</span>
            </h3>
            <p className="text-neutral-400 bg-neutral-900/50 p-3.5 rounded-xl border border-neutral-800/60 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Strategic Mechanism */}
          <div>
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>GROWZEN Strategic Interventions</span>
            </h3>
            <div className="space-y-2">
              {caseStudy.strategy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-neutral-900/40 p-2.5 rounded-lg border border-neutral-800/40">
                  <div className="w-4 h-4 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Deliverables */}
          <div>
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Core Deliverables Deployed</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 text-neutral-300 bg-neutral-900/40 px-3 py-2 rounded-lg border border-neutral-800/40">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {caseStudy.clientQuote && (
            <div className="bg-blue-950/20 border border-blue-900/40 p-4 rounded-xl space-y-2 relative">
              <Quote className="w-5 h-5 text-blue-400/40" />
              <p className="text-neutral-200 italic leading-relaxed text-xs">
                &ldquo;{caseStudy.clientQuote.quote}&rdquo;
              </p>
              <div className="pt-2 text-[11px] text-neutral-400">
                <strong className="text-white font-semibold">{caseStudy.clientQuote.author}</strong> — {caseStudy.clientQuote.role}
              </div>
            </div>
          )}

        </div>

        {/* Footer CTAs */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            ← Back to All Case Studies
          </button>

          <button
            onClick={() => {
              onClose();
              onStartProject(`Scale like ${caseStudy.client}`);
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
          >
            <span>Discuss a Similar Growth Model</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
