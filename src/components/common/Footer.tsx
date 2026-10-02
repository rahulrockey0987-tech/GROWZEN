import React from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-neutral-850 text-neutral-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Banner Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-neutral-850">
          <div className="lg:col-span-8 space-y-2">
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span>GROWZEN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl font-normal leading-relaxed">
              We Don&apos;t Just Market Brands. We Grow Them. A corporate growth marketing, creative advertising, and performance agency based in Hyderabad, India.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center lg:justify-end gap-3">
            <button
              onClick={onStartProject}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              Start a Project
            </button>
            <button
              onClick={scrollToTop}
              className="p-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-xl border border-neutral-800 transition-colors cursor-pointer"
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          
          {/* Col 1: Headquarters & Entity */}
          <div className="space-y-3">
            <h4 className="font-mono text-neutral-200 uppercase text-[11px] font-bold tracking-wider">
              Strategic Headquarters
            </h4>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              GROWZEN Growth &amp; Creative Labs<br />
              Mindspace Innovation Park, Hitec City,<br />
              Hyderabad, Telangana 500081, India
            </p>
            <div className="text-[11px] font-mono text-blue-400">
              partnerships@growzen.agency
            </div>
            <div className="text-[11px] font-mono text-neutral-400">
              +91 40 4821 7700
            </div>
          </div>

          {/* Col 2: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="font-mono text-neutral-200 uppercase text-[11px] font-bold tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-[11px] text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">Performance Marketing &amp; Media</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Strategy &amp; Identity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Creative Direction &amp; Video Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Search Engine Optimization &amp; Content</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce &amp; D2C Growth</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">B2B Enterprise Demand Gen</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-neutral-200 uppercase text-[11px] font-bold tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-[11px] text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Our Agency</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Case Studies</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries We Scale</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">The 5-Stage Framework</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Growth Pipeline Simulator</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Perspectives &amp; Insights</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Commercial Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance */}
          <div className="space-y-3">
            <h4 className="font-mono text-neutral-200 uppercase text-[11px] font-bold tracking-wider">
              Agency Governance
            </h4>
            <ul className="space-y-2 text-[11px] text-neutral-400">
              <li><span>Direct Client Ad Account Ownership</span></li>
              <li><span>Zero Hidden Media Spend Markups</span></li>
              <li><span>Mutual Enterprise NDA Standard</span></li>
              <li><span>First-Party Data Compliance (DPDP)</span></li>
              <li><span>Attribution Audit Assurance</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} GROWZEN. All commercial rights reserved. Hyderabad, Telangana, India.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hover:text-neutral-300">Privacy Charter</span>
            <span>·</span>
            <span className="hover:text-neutral-300">Commercial Terms</span>
            <span>·</span>
            <span className="hover:text-neutral-300">Client Governance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
