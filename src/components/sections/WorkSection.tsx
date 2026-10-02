import React, { useState } from 'react';
import { ArrowRight, Quote, TrendingUp, Building2, ExternalLink } from 'lucide-react';
import { AGENCY_CASE_STUDIES } from '../../data/agencyData';
import { CaseStudy } from '../../types/agency';

interface WorkSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onStartProject: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  onSelectCaseStudy,
  onStartProject
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCaseStudies = filter === 'all'
    ? AGENCY_CASE_STUDIES
    : AGENCY_CASE_STUDIES.filter(cs => {
        if (filter === 'b2b') return cs.industry.toLowerCase().includes('b2b');
        if (filter === 'd2c') return cs.industry.toLowerCase().includes('d2c') || cs.industry.toLowerCase().includes('home');
        if (filter === 'enterprise') return cs.industry.toLowerCase().includes('enterprise') || cs.industry.toLowerCase().includes('logistics');
        if (filter === 'health') return cs.industry.toLowerCase().includes('health');
        return true;
      });

  return (
    <section id="work" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-xl">
            <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
              Proven Commercial Impact
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Selected Case Studies
            </h2>
            <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-1">
              Real companies. Real unit economics. Real revenue outcomes engineered across startups and established enterprises.
            </p>
          </div>

          {/* Filter segment control */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto text-xs">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'b2b', label: 'B2B & Tech' },
              { id: 'd2c', label: 'D2C & Retail' },
              { id: 'enterprise', label: 'Enterprise' },
              { id: 'health', label: 'HealthTech' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-neutral-800 text-white font-bold shadow-xs'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-[#121216] rounded-2xl border border-neutral-800/90 hover:border-neutral-700 transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6 group"
            >
              <div>
                {/* Top bar with industry & timeline */}
                <div className="flex items-center justify-between text-xs mb-3 text-neutral-400">
                  <span className="font-mono text-blue-400 font-semibold tracking-wider text-[11px] uppercase">
                    {study.industry}
                  </span>
                  <span className="text-[11px]">{study.duration}</span>
                </div>

                {/* Client Name & Tagline */}
                <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {study.client}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
                  {study.tagline}
                </p>

                {/* Hero Stat Highlight Strip */}
                <div className="mt-6 p-5 bg-neutral-900/90 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono tracking-tight tabular-nums">
                      {study.heroMetric}
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1 font-medium">
                      {study.metricLabel}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Results Preview Matrix */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                  {study.results.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx} className="p-3 bg-neutral-900/50 rounded-lg border border-neutral-800/50">
                      <div className="font-mono font-bold text-white text-base tabular-nums">
                        {res.metric}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5 truncate">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Quote Snippet */}
                {study.clientQuote && (
                  <div className="mt-5 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400 italic leading-relaxed line-clamp-2">
                    &ldquo;{study.clientQuote.quote}&rdquo;
                  </div>
                )}
              </div>

              {/* Action bar */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="text-white hover:text-blue-400 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study &amp; Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartProject}
            className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/20 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Have a Similar Growth Target? Discuss Your Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
