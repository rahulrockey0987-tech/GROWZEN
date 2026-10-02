import React, { useState } from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, BarChart3, Layers, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork
}) => {
  const [activeChannel, setActiveChannel] = useState<'all' | 'meta' | 'google' | 'linkedin'>('all');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0A0C] border-b border-neutral-850">
      
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Industry Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-semibold text-white">GROWZEN</span>
              <span className="text-neutral-600">·</span>
              <span>Growth Marketing &amp; Advertising</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">Hyderabad, India</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] text-balance">
              We Don&apos;t Just Market Brands. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
                We Grow Them.
              </span>
            </h1>

            {/* Core Message & Subheading */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Strategy. Creativity. Growth. We partner with ambitious startups and established enterprises across India to engineer commercial pipelines, scale performance customer acquisition, and build category-defining brand moats.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartProject}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-xs rounded-xl border border-neutral-800 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Explore Client Results</span>
              </button>
            </div>

            {/* Adjacent Proof Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-neutral-850">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                  ₹140 Cr+
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Pipeline &amp; Revenue Influenced
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tracking-tight tabular-nums">
                  4.2x
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Blended Portfolio ROAS
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                  85+
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Growth Partnerships Delivered
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                  Hyderabad
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Strategic Labs &amp; Operations
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Visual Carrier (Live Performance Engine Console) */}
          <div className="lg:col-span-5">
            <div className="bg-[#121216] border border-neutral-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-neutral-100 space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-300">
                    GROWZEN GROWTH ENGINE™
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                  ALGORITHMIC PACING: ACTIVE
                </span>
              </div>

              {/* Channel Selector Pills */}
              <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-lg text-[11px]">
                {[
                  { id: 'all', label: 'Blended Funnel' },
                  { id: 'meta', label: 'Meta Advantage+' },
                  { id: 'google', label: 'Google Search/PMax' },
                  { id: 'linkedin', label: 'LinkedIn ABM' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveChannel(tab.id as typeof activeChannel)}
                    className={`flex-1 py-1 rounded text-center transition-colors cursor-pointer ${
                      activeChannel === tab.id
                        ? 'bg-neutral-800 text-white font-semibold shadow-xs'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Live Metric Readouts */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-800/80">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Contribution Margin</div>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">
                    {activeChannel === 'all' && '+62.4%'}
                    {activeChannel === 'meta' && '+58.1%'}
                    {activeChannel === 'google' && '+69.3%'}
                    {activeChannel === 'linkedin' && '+54.0%'}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Net cash post-COGS &amp; fulfillment</div>
                </div>

                <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-800/80">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Effective CAC</div>
                  <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
                    {activeChannel === 'all' && '₹1,240'}
                    {activeChannel === 'meta' && '₹980'}
                    {activeChannel === 'google' && '₹1,420'}
                    {activeChannel === 'linkedin' && '₹4,850'}
                  </div>
                  <div className="text-[10px] text-blue-400 mt-0.5">38% below industry benchmark</div>
                </div>
              </div>

              {/* Full-Funnel Attribution Telemetry */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>Full-Funnel Pipeline Velocity</span>
                  <span className="text-blue-400 font-semibold">99.4% Attribution Match</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] text-neutral-300 mb-1">
                      <span>Top-of-Funnel Brand Lift &amp; Video Hook Rate</span>
                      <strong className="text-white font-mono">48.2%</strong>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[48%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-neutral-300 mb-1">
                      <span>Mid-Funnel High-Intent Lead Conversion</span>
                      <strong className="text-white font-mono">24.6%</strong>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-[74%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-neutral-300 mb-1">
                      <span>Bottom-Funnel Commercial Deal Closing</span>
                      <strong className="text-white font-mono">18.4%</strong>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>First-Party Server-Side CAPI</span>
                </div>
                <span className="font-mono text-neutral-400">GROWZEN LABS HYD</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
