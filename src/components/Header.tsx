import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, UtensilsCrossed } from 'lucide-react';
import { ClientConfig } from '../types';

interface HeaderProps {
  config: ClientConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Reserve', href: '#reserve' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none ${
        isScrolled
          ? 'bg-stone-950/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-gradient-to-b from-stone-950 via-stone-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
                {config.businessName.split(' ')[0]} <span className="text-amber-500">{config.businessName.split(' ').slice(1, 2)}</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-stone-400 block -mt-1 font-medium">
                Kitchen & Cafe
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-stone-300 hover:text-white bg-stone-800/60 hover:bg-stone-800 border border-stone-700/60 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{config.contact.phoneFormatted}</span>
            </a>

            <a
              href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappOrderMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-full shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${config.contact.phone}`}
              aria-label="Call Restaurant"
              className="p-2 rounded-full bg-stone-800 border border-stone-700 text-amber-400 hover:bg-stone-700"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800/80 border border-stone-700 text-stone-300 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-stone-800/80 bg-stone-950/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-base font-medium text-stone-200 hover:text-amber-400 hover:bg-stone-900 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-2.5">
              <a
                href={`tel:${config.contact.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-stone-900 text-stone-200 border border-stone-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {config.contact.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappOrderMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat & Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
