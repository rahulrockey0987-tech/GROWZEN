import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { ProjectInquiry } from '../../types/agency';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    fullName: '',
    workEmail: '',
    companyName: '',
    websiteUrl: '',
    phoneNumber: '',
    monthlyBudget: '₹5L - ₹15L / month',
    primaryObjective: preselectedService || 'Performance Marketing & Paid Media',
    projectScope: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionId(`GZ-${Math.floor(1000 + Math.random() * 9000)}-HYD`);
      setSubmitted(true);
    }, 700);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0C]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-[#121216] border border-neutral-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-neutral-100 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="brief-title"
      >
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase mb-1">
                Commercial Discovery &amp; Brief
              </div>
              <h2 id="brief-title" className="text-2xl font-bold tracking-tight text-white">
                Start a Growth Partnership
              </h2>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Tell us about your company, current revenue bottlenecks, and growth targets. We evaluate every inquiry with senior commercial strategists in our Hyderabad office.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rao"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nexus FinTech"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Website URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://company.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Phone Number (WhatsApp optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 98450 00000"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Estimated Monthly Marketing Budget *</label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors text-xs"
                  >
                    <option value="₹2.5L - ₹5L / month">₹2.5L - ₹5L / month (Validation Tier)</option>
                    <option value="₹5L - ₹15L / month">₹5L - ₹15L / month (Scale Tier)</option>
                    <option value="₹15L - ₹50L / month">₹15L - ₹50L / month (Expansion Tier)</option>
                    <option value="₹50L+ / month">₹50L+ / month (Enterprise &amp; Multi-Brand)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Core Capability Required</label>
                <select
                  value={formData.primaryObjective}
                  onChange={(e) => setFormData({ ...formData, primaryObjective: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors text-xs"
                >
                  <option value="Performance Marketing & Paid Media">Performance Marketing &amp; Paid Media Scaling</option>
                  <option value="Brand Strategy & Identity Architecture">Brand Strategy &amp; Identity Architecture</option>
                  <option value="Creative Direction & Commercial Advertising">Creative Direction &amp; Video Commercials</option>
                  <option value="Search Engine Optimization & Content">SEO &amp; High-Intent Inbound Content</option>
                  <option value="E-Commerce & D2C Growth Engineering">E-Commerce &amp; D2C Growth Engineering</option>
                  <option value="Corporate & B2B Demand Generation">Corporate &amp; B2B Demand Generation</option>
                  <option value="Full-Stack Growth Mandate">Full-Stack Growth Agency Mandate</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Brief Overview of Goals / Challenge</label>
                <textarea
                  rows={3}
                  placeholder="Describe your current baseline revenue, target KPIs, and main roadblocks..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
                <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Strict NDA &amp; Commercial Confidentiality</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2 text-xs shadow-md shadow-blue-600/20 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting Brief...' : 'Submit Commercial Brief'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest">
                REFERENCE: {submissionId}
              </span>
              <h3 className="text-xl font-bold text-white">Commercial Brief Logged</h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed pt-1">
                Thank you, {formData.fullName}. Our Senior Growth Strategist at GROWZEN Hyderabad has received your commercial parameters.
              </p>
            </div>

            <div className="bg-neutral-900/90 p-4 rounded-xl border border-neutral-800 text-left max-w-sm mx-auto space-y-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Next Step: 24-Hour Diagnostic Response</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Reviewed by: GROWZEN HQ, Hitec City, Hyderabad</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
