import React from 'react';
import { Camera } from 'lucide-react';
import { ClientConfig } from '../types';

interface GallerySectionProps {
  config: ClientConfig;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ config }) => {
  return (
    <section id="gallery" className="py-24 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5" />
            Atmosphere & Dining
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Glimpses of Our Heritage Courtyard
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            From the warmth of our rustic brass lamps to the intoxicating sizzle of clay ovens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.gallery.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 border border-stone-800 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
