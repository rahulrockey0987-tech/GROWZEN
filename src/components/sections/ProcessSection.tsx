import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/agencyData';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  return (
    <section id="process" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2 max-w-xl">
            <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
              The GROWZEN Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Repeatable System for Commercial Scale
            </h2>
            <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-1">
              We eliminate guesswork through a five-stage framework that moves methodically from diagnostic audit to sustained, compounding market growth.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer self-start md:self-auto shadow-sm"
          >
            <span>Audit Your Growth Strategy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Process Steps */}
        <div className="space-y-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#121216] p-7 sm:p-8 rounded-2xl border border-neutral-800/90 hover:border-neutral-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Step indicator */}
              <div className="lg:col-span-2">
                <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-500">
                  {step.step}
                </span>
                <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mt-1">
                  PHASE {step.step}
                </div>
              </div>

              {/* Title & subtitle */}
              <div className="lg:col-span-4 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {step.subtitle}
                </p>
              </div>

              {/* Workstream bullet points */}
              <div className="lg:col-span-6 space-y-2 text-xs text-neutral-300">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 bg-neutral-900/40 p-2.5 rounded-lg border border-neutral-800/40">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
