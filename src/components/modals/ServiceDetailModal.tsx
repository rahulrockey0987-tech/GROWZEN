import React from 'react';
import { X, Check, ArrowRight, Clock, Award, Layers } from 'lucide-react';
import { ServiceItem } from '../../types/agency';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartProject: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onStartProject
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0C]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-[#121216] border border-neutral-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-neutral-100 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-detail-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <span>SERVICE {service.number}</span>
            <span className="text-neutral-600">·</span>
            <span className="text-emerald-400 font-semibold">{service.impactMetric}</span>
          </div>

          <h2 id="service-detail-title" className="text-2xl font-bold tracking-tight text-white leading-tight">
            {service.title}
          </h2>

          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            {service.tagline}
          </p>
        </div>

        <div className="space-y-5 text-xs">
          
          {/* Executive Overview */}
          <div>
            <h3 className="font-bold text-white mb-1.5 text-xs">Strategic Capability Scope</h3>
            <p className="text-neutral-300 leading-relaxed bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800">
              {service.description}
            </p>
          </div>

          {/* Concrete Deliverables */}
          <div>
            <h3 className="font-bold text-white mb-2 text-xs">Detailed Deliverables &amp; Workstreams</h3>
            <div className="space-y-1.5">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 bg-neutral-900/40 rounded-lg border border-neutral-800/40 text-neutral-300">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                Typical Cadence
              </span>
              <div className="font-semibold text-white flex items-center gap-1.5 text-xs">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{service.typicalTimeline}</span>
              </div>
            </div>

            <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                Primary Stack &amp; Platforms
              </span>
              <div className="text-[11px] text-neutral-300 truncate">
                {service.toolsAndTech.join(' · ')}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onStartProject(service.title);
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
