import React from 'react';
import { Target, Layers, Eye, Users2, ArrowUpRight, Check, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Commercial Alignment Over Vanity',
      description: 'We do not report on impressions, post likes, or subjective virality. We align our commercial scorecard with your P&L: contribution margin dollars, blended customer acquisition cost (CAC), pipeline velocity, and return on ad spend.'
    },
    {
      number: '02',
      title: 'Full-Funnel Cohesion',
      description: 'Most agencies force a false choice between "creative brand agencies" and "dry media buying shops". GROWZEN bridges this divide: brand prestige and emotional resonance at the top, supported by mathematical media buying at the bottom.'
    },
    {
      number: '03',
      title: 'Radical Media Transparency',
      description: 'Your ad accounts, pixel data, creative assets, and first-party customer lists remain 100% your intellectual property. Zero hidden margins, zero markups on media spend, and direct access to raw Looker Studio and BigQuery dashboards.'
    },
    {
      number: '04',
      title: 'Senior Embedded Partnership',
      description: 'We deliberately limit our client roster to maintain concentrated senior attention. You work directly with veteran commercial strategists, senior art directors, and algorithmic media buyers—not junior account managers.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5 space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
              About GROWZEN
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A serious growth agency for ambitious enterprises.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            <p>
              Headquartered in Hyderabad, Telangana, <strong>GROWZEN</strong> was founded on a simple observation: conventional marketing agencies treat marketing as an aesthetic expense, while modern businesses require a scalable revenue engine.
            </p>
            <p className="text-neutral-400 text-sm">
              We operate at the intersection of commercial strategy, high-impact creative direction, and disciplined performance engineering. Whether partnering with venture-backed technology startups in Hyderabad, Bengaluru, and Mumbai, or scaling multi-decade industrial leaders across India, our mandate remains identical: generate quantifiable, durable market growth.
            </p>
          </div>
        </div>

        {/* Four Core Operating Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#121216] p-8 rounded-2xl border border-neutral-800/90 hover:border-neutral-700 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-blue-400 tracking-wider">
                  PILLAR {pillar.number}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>GROWZEN GOVERNANCE STANDARD</span>
                <span className="text-neutral-400">ENFORCED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hyderabad Strategic Nexus Note */}
        <div className="mt-12 bg-neutral-900/60 p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Strategic Operations in Hitec City, Hyderabad</h4>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl leading-relaxed">
                Positioned in Telangana&apos;s primary innovation corridor, GROWZEN combines global agency execution rigor with deep contextual mastery of India&apos;s premier consumer and enterprise markets.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 text-xs font-mono text-neutral-400">
            <div>
              <div className="text-white font-bold text-sm">Pan-India</div>
              <div className="text-[10px] text-neutral-500">Execution Reach</div>
            </div>
            <div className="h-8 w-px bg-neutral-800" />
            <div>
              <div className="text-white font-bold text-sm">Top 1%</div>
              <div className="text-[10px] text-neutral-500">Media Efficiency</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
