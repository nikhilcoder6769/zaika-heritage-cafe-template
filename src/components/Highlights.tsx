import React from 'react';
import { Flame, Leaf, Coffee, Users } from 'lucide-react';
import { ClientConfig } from '../types';

interface HighlightsProps {
  config: ClientConfig;
}

export const Highlights: React.FC<HighlightsProps> = ({ config }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-400" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-sky-400" />;
      default:
        return <Flame className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="py-20 bg-stone-950 border-t border-b border-stone-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            The Zaika Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Rooted in Authentic Culinary Arts
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            We reject pre-packaged pastes and artificial colors. Every bite honors genuine tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.amenities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
