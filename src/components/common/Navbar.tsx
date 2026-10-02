import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBriefModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBriefModal }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-lg'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Wordmark Brand */}
          <a
            href="#"
            className="flex items-center gap-1.5 text-xl font-black tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <span className="tracking-tight">GROWZEN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mb-1" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-xs font-medium text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded px-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBriefModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow-sm hover:shadow-blue-500/20 cursor-pointer whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800/60 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A0A0C] lg:hidden flex flex-col pt-24 px-6 pb-8 text-neutral-100 overflow-y-auto animate-in fade-in duration-150">
          <div className="flex flex-col space-y-4 text-base font-semibold border-b border-neutral-800 pb-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-neutral-300 hover:text-white py-2 transition-colors cursor-pointer text-lg font-bold"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBriefModal();
              }}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-xs text-neutral-500 text-center pt-2">
              GROWZEN Growth Marketing &amp; Advertising<br />
              Hyderabad, Telangana, India
            </div>
          </div>
        </div>
      )}
    </>
  );
};
