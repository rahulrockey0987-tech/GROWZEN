import React from 'react';
import { Building, ShoppingBag, Stethoscope, Landmark, Layers, Factory } from 'lucide-react';
import { INDUSTRIES_SERVED } from '../../data/agencyData';

interface IndustriesSectionProps {
  onStartProject: (industry?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onStartProject }) => {
  const icons = [Building, ShoppingBag, Stethoscope, Landmark, Layers, Factory];

  return (
    <section id="industries" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
            Domain Specialization
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Industries We Grow
          </h2>
          <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-1">
            Every sector has unique customer economics, decision-maker hierarchies, and regulatory constraints. We bring proven domain frameworks to every mandate.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={ind.name}
                className="bg-[#121216] p-7 rounded-2xl border border-neutral-800/90 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-emerald-400 font-semibold text-[11px]">
                    {ind.metrics}
                  </span>

                  <button
                    onClick={() => onStartProject(ind.name)}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-[11px]"
                  >
                    Consult Industry Lead →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
