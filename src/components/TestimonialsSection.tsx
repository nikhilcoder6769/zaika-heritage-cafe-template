import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { ClientConfig } from '../types';

interface TestimonialsSectionProps {
  config: ClientConfig;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ config }) => {
  return (
    <section id="reviews" className="py-24 bg-stone-900/60 border-t border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Guest Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Cherished Words from Our Patrons
            </h2>
            <p className="text-stone-400 text-sm sm:text-base max-w-xl">
              Authentic stories of warm family gatherings, celebratory dinners, and memorable culinary moments.
            </p>
          </div>

          {/* Ratings Pill Banner */}
          <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 flex items-center gap-6 shadow-xl shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-4xl font-extrabold text-white">
                  {config.ratingsSummary.average}
                </span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium">Out of 5 Stars</span>
                </div>
              </div>
              <p className="text-xs text-amber-400 font-semibold mt-1">
                Based on {config.ratingsSummary.totalReviews}+ reviews on {config.ratingsSummary.platform}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.testimonials.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-stone-950 border border-stone-800/90 flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-500/30" />
                
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-stone-300 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{review.name}</h4>
                  <span className="text-xs text-stone-500">{review.date}</span>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{review.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
