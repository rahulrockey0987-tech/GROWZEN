import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Sliders, CheckCircle2, ShieldCheck } from 'lucide-react';

interface GrowthCalculatorProps {
  onStartProjectWithModel: (summary: string) => void;
}

export const GrowthCalculatorSection: React.FC<GrowthCalculatorProps> = ({
  onStartProjectWithModel
}) => {
  const [targetRevenueLakhs, setTargetRevenueLakhs] = useState<number>(50); // ₹50 Lakhs
  const [avgDealSize, setAvgDealSize] = useState<number>(5000); // ₹5,000 AOV or deal size
  const [currentAdSpendLakhs, setCurrentAdSpendLakhs] = useState<number>(10); // ₹10 Lakhs ad spend
  const [businessType, setBusinessType] = useState<'d2c' | 'b2b' | 'enterprise'>('d2c');

  // Math calculations
  const targetRevenueRupees = targetRevenueLakhs * 100000;
  const currentAdSpendRupees = currentAdSpendLakhs * 100000;
  const requiredConversions = Math.ceil(targetRevenueRupees / avgDealSize);
  const projectedBlendedRoas = (targetRevenueRupees / currentAdSpendRupees).toFixed(1);
  const targetCac = Math.round(currentAdSpendRupees / requiredConversions);

  // Channel allocations based on business type
  const channelAllocation = businessType === 'd2c' 
    ? { social: '55%', search: '30%', retention: '15%' }
    : businessType === 'b2b'
    ? { social: '25% (LinkedIn)', search: '45% (High-Intent)', retention: '30% (ABM Nurture)' }
    : { social: '20%', search: '50%', retention: '30% (Executive PR)' };

  const handleConsultModel = () => {
    const modelSummary = `Target Revenue: ₹${targetRevenueLakhs}L/mo | Avg Deal Size: ₹${avgDealSize} | Current Ad Spend: ₹${currentAdSpendLakhs}L/mo | Business Model: ${businessType.toUpperCase()} | Required Customers: ${requiredConversions}`;
    onStartProjectWithModel(modelSummary);
  };

  return (
    <section id="calculator" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
            Interactive Commercial Modeling
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Growth Pipeline Simulator
          </h2>
          <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-1">
            Simulate your required unit economics, target blended CAC, and channel budget distribution before committing capital.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Controls Left */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Model Selector */}
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-2">
                1. Select Business Model:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'd2c', label: 'E-Commerce / D2C' },
                  { id: 'b2b', label: 'B2B SaaS / Services' },
                  { id: 'enterprise', label: 'Enterprise / Industrial' }
                ].map(b => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setBusinessType(b.id as typeof businessType);
                      if (b.id === 'd2c') setAvgDealSize(4500);
                      if (b.id === 'b2b') setAvgDealSize(45000);
                      if (b.id === 'enterprise') setAvgDealSize(250000);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer text-center ${
                      businessType === b.id
                        ? 'bg-blue-600/15 border-blue-500 text-white font-bold'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Target Monthly Revenue */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-neutral-300 font-semibold">2. Target Monthly Revenue:</span>
                <span className="font-mono text-base font-bold text-blue-400 tabular-nums">
                  ₹{targetRevenueLakhs} Lakhs / mo
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={targetRevenueLakhs}
                onChange={(e) => setTargetRevenueLakhs(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>₹10 Lakhs</span>
                <span>₹1.25 Crore</span>
                <span>₹2.50 Crores</span>
              </div>
            </div>

            {/* Slider 2: Average Deal Size / AOV */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-neutral-300 font-semibold">3. Average Order Value / Deal Size:</span>
                <span className="font-mono text-base font-bold text-white tabular-nums">
                  ₹{avgDealSize.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={businessType === 'd2c' ? 1000 : businessType === 'b2b' ? 10000 : 50000}
                max={businessType === 'd2c' ? 25000 : businessType === 'b2b' ? 150000 : 500000}
                step={businessType === 'd2c' ? 500 : 5000}
                value={avgDealSize}
                onChange={(e) => setAvgDealSize(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Slider 3: Current / Planned Monthly Ad Spend */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-neutral-300 font-semibold">4. Monthly Paid Media Budget:</span>
                <span className="font-mono text-base font-bold text-emerald-400 tabular-nums">
                  ₹{currentAdSpendLakhs} Lakhs / mo
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                step="1"
                value={currentAdSpendLakhs}
                onChange={(e) => setCurrentAdSpendLakhs(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>₹2 Lakhs</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

          </div>

          {/* Results Output Right */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-5 text-neutral-100">
            
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                GROWZEN MODEL OUTPUT
              </span>
              <Calculator className="w-4 h-4 text-blue-400" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3 bg-[#121216] rounded-xl border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">Required Acquisitions</span>
                <div className="text-xl sm:text-2xl font-black font-mono text-white mt-1 tabular-nums">
                  {requiredConversions}
                </div>
                <div className="text-[10px] text-neutral-500 mt-0.5">Orders / deals per month</div>
              </div>

              <div className="p-3 bg-[#121216] rounded-xl border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">Target Blended CAC</span>
                <div className="text-xl sm:text-2xl font-black font-mono text-blue-400 mt-1 tabular-nums">
                  ₹{targetCac.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-neutral-500 mt-0.5">Maximum viable acquisition cost</div>
              </div>
            </div>

            <div className="p-4 bg-[#121216] rounded-xl border border-neutral-800 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Projected Portfolio ROAS:</span>
                <strong className="text-emerald-400 font-mono text-base">{projectedBlendedRoas}x</strong>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-neutral-400">Recommended Channel Split:</span>
                <span className="text-neutral-300 font-mono font-medium">Search: {channelAllocation.search}</span>
              </div>
              <div className="text-[10px] text-neutral-500 leading-snug">
                *Model assumes GROWZEN benchmark full-funnel creative refresh rate and first-party server-side tracking.
              </div>
            </div>

            <button
              onClick={handleConsultModel}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Validate This Model With GROWZEN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
