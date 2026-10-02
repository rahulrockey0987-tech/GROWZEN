import React from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { AGENCY_INSIGHTS } from '../../data/agencyData';
import { InsightArticle } from '../../types/agency';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="insights" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2 max-w-xl">
            <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
              Thought Leadership &amp; Strategy
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              GROWZEN Perspectives
            </h2>
            <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-1">
              Deep-dive analytical essays and strategic frameworks on modern media buying, algorithmic distribution, and commercial brand equity.
            </p>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGENCY_INSIGHTS.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-[#121216] rounded-2xl border border-neutral-800/90 hover:border-neutral-700 transition-all p-7 flex flex-col justify-between space-y-6 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-blue-400 text-[11px] uppercase font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white text-[11px]">{article.author.name}</div>
                  <div className="text-[10px] text-neutral-500">{article.author.role}</div>
                </div>

                <span className="text-blue-400 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
