import React from 'react';
import { Star, ArrowRight, Utensils, Clock, MapPin, Sparkles } from 'lucide-react';
import { ClientConfig } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface HeroProps {
  config: ClientConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const { navigateTo } = useNavigation();
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-950">
      {/* Background Hero Image with atmospheric overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Zaika Heritage Restaurant Ambience"
          className="w-full h-full object-cover object-center animate-hero-zoom"
        />
        {/* Seamless top and bottom dark gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/80 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.15)_0,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Rating & Trust Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-stone-900/80 border border-amber-500/30 backdrop-blur-md shadow-xl animate-float">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold text-stone-200">
            {config.ratingsSummary.average} / 5.0
          </span>
          <span className="text-stone-500 text-xs">•</span>
          <span className="text-xs text-amber-300 font-medium">
            {config.ratingsSummary.totalReviews}+ Verified Google Reviews
          </span>
        </div>

        {/* Main Editorial Headline */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted Culinary Heritage Since {config.establishedYear}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Slow Dum Flavors. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Charcoal Tandoor.
            </span> <br />
            Timeless Heritage.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            {config.shortAbout}
          </p>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => navigateTo('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <Utensils className="w-5 h-5 text-stone-950 group-hover:rotate-12 transition-transform" />
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => navigateTo('home', 'reserve')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-stone-100 bg-stone-900/80 hover:bg-stone-800 border border-stone-700/80 backdrop-blur-md shadow-lg transition-all hover:border-amber-500/50 cursor-pointer"
          >
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Quick Info Pill Band */}
        <div className="pt-6 border-t border-stone-800/60 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-900/40 border border-stone-800/40">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs text-stone-400 font-medium">Opening Hours</p>
              <p className="text-xs font-semibold text-stone-200">{config.hours[0].hours}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-900/40 border border-stone-800/40">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs text-stone-400 font-medium">Location</p>
              <p className="text-xs font-semibold text-stone-200 truncate">{config.contact.address.area}, {config.contact.address.city}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-900/40 border border-stone-800/40">
            <Utensils className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs text-stone-400 font-medium">Cuisine</p>
              <p className="text-xs font-semibold text-stone-200">Dum Biryani & Charcoal Tandoor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
