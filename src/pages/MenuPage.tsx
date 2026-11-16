import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Sparkles, Utensils } from 'lucide-react';
import { ClientConfig } from '../types';
import { MenuSection } from '../components/MenuSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { useNavigation } from '../context/NavigationContext';

interface MenuPageProps {
  config: ClientConfig;
}

export const MenuPage: React.FC<MenuPageProps> = ({ config }) => {
  const { navigateTo } = useNavigation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full min-h-screen bg-stone-950 pt-24 pb-16">
      {/* Top Breadcrumb & Page Banner */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-900/60 to-stone-950 border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb / Back button */}
          <div className="mb-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>

            <span className="text-[11px] uppercase tracking-wider text-stone-400">
              {config.businessName} • Digital Menu
            </span>
          </div>

          <ScrollReveal direction="up" duration={500}>
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full Culinary Catalog</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Authentic Flavors, Hand-Crafted Daily
              </h1>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Browse our complete selection of slow-dum biryanis, clay oven tandoor kebabs, slow-simmered rich curries, and handcrafted kulhad teas. Add items to order directly on WhatsApp.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Menu Section with isPreview={false} */}
      <MenuSection config={config} isPreview={false} />

      {/* Bottom Conversion Banner: Dine-in Table Reservation */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <ScrollReveal direction="up" duration={500}>
          <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/40 border border-stone-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
                <Utensils className="w-3.5 h-3.5" />
                Planning to Dine In?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Reserve Your Table in Advance
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm max-w-xl">
                Skip the waiting line during peak lunch and dinner hours. Reserve priority seating for your family or group.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => navigateTo('home', 'reserve')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Table on Home Page</span>
              </button>

              <button
                type="button"
                onClick={() => navigateTo('home')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-stone-300 hover:text-white bg-stone-800 border border-stone-700 hover:bg-stone-700 transition-all cursor-pointer"
              >
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default MenuPage;
