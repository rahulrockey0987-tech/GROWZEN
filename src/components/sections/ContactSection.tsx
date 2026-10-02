import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ProjectInquiry } from '../../types/agency';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    fullName: '',
    workEmail: '',
    companyName: '',
    websiteUrl: '',
    phoneNumber: '',
    monthlyBudget: '₹5L - ₹15L / month',
    primaryObjective: 'Performance Marketing & Paid Media',
    projectScope: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setTicketId(`GZ-${Math.floor(1000 + Math.random() * 9000)}-IN`);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0C] border-b border-neutral-850 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office & Enterprise Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
                Direct Engagement
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Initiate a Commercial Growth Mandate
              </h2>
              <p className="text-sm text-neutral-400 font-normal leading-relaxed pt-1">
                Whether you are an ambitious venture-backed startup or an established enterprise seeking market acceleration, we invite you to discuss your commercial thesis with our senior team.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 text-xs">
              
              <div className="bg-[#121216] p-5 rounded-2xl border border-neutral-800/90 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">GROWZEN Strategic Labs</h4>
                  <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                    Floor 7, Mindspace Innovation Park, Hitec City,<br />
                    Hyderabad, Telangana 500081, India
                  </p>
                  <div className="text-[11px] text-blue-400 font-mono mt-1">Direct Meetings by Executive Appointment</div>
                </div>
              </div>

              <div className="bg-[#121216] p-5 rounded-2xl border border-neutral-800/90 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Strategic Partnerships</h4>
                  <p className="text-neutral-400 text-xs mt-1">For RFP submissions, executive audits, and client inquiries:</p>
                  <a href="mailto:partnerships@growzen.agency" className="text-blue-400 font-mono text-xs hover:underline block mt-1">
                    partnerships@growzen.agency
                  </a>
                </div>
              </div>

              <div className="bg-[#121216] p-5 rounded-2xl border border-neutral-800/90 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Corporate Switchboard</h4>
                  <p className="text-neutral-400 text-xs mt-1">Direct telephone line for ongoing engagements:</p>
                  <div className="text-white font-mono text-xs mt-1">+91 40 4821 7700</div>
                </div>
              </div>

            </div>

            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 flex items-center gap-3 text-xs text-neutral-400">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Diagnostic Turnaround: 24 Business Hours</span>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121216] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="border-b border-neutral-800 pb-4 mb-2">
                    <h3 className="text-lg font-bold text-white">Commercial Proposal Form</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Submit your project parameters. A Partner or Growth Director will personally review your brief.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 font-semibold mb-1">Your Full Name *</label>
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
                      <label className="block text-neutral-300 font-semibold mb-1">Corporate Email *</label>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 font-semibold mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98450 00000"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-300 font-semibold mb-1">Planned Monthly Ad Budget *</label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors text-xs"
                      >
                        <option value="₹2.5L - ₹5L / month">₹2.5L - ₹5L / month</option>
                        <option value="₹5L - ₹15L / month">₹5L - ₹15L / month</option>
                        <option value="₹15L - ₹50L / month">₹15L - ₹50L / month</option>
                        <option value="₹50L+ / month">₹50L+ / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Primary Objective / Service Needed</label>
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
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Commercial Context &amp; Targets</label>
                    <textarea
                      rows={4}
                      placeholder="Outline your current revenue, customer acquisition bottlenecks, and timeline expectations..."
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-750 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-xs"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 self-start sm:self-auto">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      <span>Enterprise Non-Disclosure Guaranteed</span>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{submitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block">
                    INQUIRY RECORDED: {ticketId}
                  </span>

                  <h3 className="text-2xl font-bold text-white">Commercial Proposal Dispatched</h3>

                  <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your commercial brief for {formData.companyName} has been routed directly to our Growth Strategy desk in Hyderabad.
                  </p>

                  <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 max-w-sm mx-auto text-left text-xs text-neutral-400 space-y-1 mt-4">
                    <div>· Reviewer: Senior Growth Strategist, Hyderabad HQ</div>
                    <div>· Initial Diagnostic Feedback: Within 24 business hours</div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
