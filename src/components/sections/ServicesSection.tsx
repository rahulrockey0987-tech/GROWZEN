import React from 'react';
import { ArrowRight, Check, Sparkles, Plus } from 'lucide-react';
import { AGENCY_SERVICES } from '../../data/agencyData';
import { ServiceItem } from '../../types/agency';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onStartProject: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onStartProject
}) => {
  return (
    <section id="services" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2 max-w-xl">
            <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Comprehensive Growth Services
            </h2>
            <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-1">
              End-to-end commercial solutions engineered to lower customer acquisition costs, elevate brand prestige, and unlock repeatable revenue.
            </p>
          </div>

          <button
            onClick={() => onStartProject()}
            className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-xl border border-neutral-800 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <span>Request Agency Rate Card</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#121216] rounded-2xl border border-neutral-800/90 hover:border-neutral-700 transition-all p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Impact Badge */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-mono text-neutral-400 text-xs font-bold">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-950/60 border border-emerald-900/60 rounded">
                    {service.impactMetric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed line-clamp-3">
                  {service.tagline}
                </p>

                {/* Deliverables snippet */}
                <div className="mt-5 pt-4 border-t border-neutral-800/80 space-y-1.5 text-xs text-neutral-300">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Key Workstreams:
                  </div>
                  {service.deliverables.slice(0, 3).map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-neutral-400">
                      <span className="text-blue-400 mt-0.5">·</span>
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View Scope &amp; Tech Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onStartProject(service.title)}
                  className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors cursor-pointer"
                  title="Inquire about this capability"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
