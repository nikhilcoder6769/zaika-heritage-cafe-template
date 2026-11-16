import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { ClientConfig } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface FooterProps {
  config: ClientConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-24 sm:pb-16 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand Col */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                {config.businessName}
              </span>
            </button>
            <p className="text-xs leading-relaxed text-stone-400">
              {config.shortAbout}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {config.social.instagram && (
                <a
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {config.social.facebook && (
                <a
                  href={config.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('menu')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Full Culinary Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('home', 'specialties')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Chef's Specialties
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('home', 'gallery')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Courtyard Ambience
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('home', 'reviews')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Guest Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('home', 'reserve')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('home', 'contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Location & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Specialties / Cuisines */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Our Cuisines
            </h4>
            <div className="flex flex-wrap gap-2">
              {config.seo.cuisineTypes.map((c, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-[11px] bg-stone-900 border border-stone-800 text-stone-300"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="text-xs text-stone-500 pt-2">
              Strictly prepared without artificial coloring or preservatives.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{config.contact.address.area}, {config.contact.address.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${config.contact.phone}`} className="hover:text-white transition-colors">
                  {config.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{config.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
          <p className="text-stone-400">
            Powered by <span className="text-amber-400 font-semibold">WebCraft Studio Template Engine</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
