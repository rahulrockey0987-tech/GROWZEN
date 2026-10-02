import React from 'react';
import { X, ArrowRight, Calendar, Clock, User, Share2 } from 'lucide-react';
import { InsightArticle } from '../../types/agency';

interface InsightModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({
  article,
  onClose,
  onStartProject
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0C]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-[#121216] border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-neutral-100 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="insight-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata */}
        <div className="mb-6 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-2 text-[11px] font-mono text-blue-400 uppercase mb-2">
            <span>{article.category}</span>
            <span className="text-neutral-600">·</span>
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-400">{article.readTime}</span>
            <span className="text-neutral-600">·</span>
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-400">{article.publishedDate}</span>
          </div>

          <h2 id="insight-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-neutral-800/80">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-xs border border-blue-500/30">
              {article.author.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="text-xs font-semibold text-white">{article.author.name}</div>
              <div className="text-[11px] text-neutral-400">{article.author.role}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Callout box */}
        <div className="my-6 p-4 bg-neutral-900/80 border-l-2 border-blue-500 rounded-r-xl space-y-1">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">
            GROWZEN Executive Takeaway
          </span>
          <p className="text-xs text-neutral-200 italic leading-relaxed">
            Market leadership in 2026 requires dismantling the silo between brand perception and performance attribution. Your growth strategy must treat every ad impression as both a brand touchpoint and a commercial conversion test.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            ← Back to Insights
          </button>

          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
          >
            <span>Consult With Our Strategists</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
