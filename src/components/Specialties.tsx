import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { ClientConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { useNavigation } from '../context/NavigationContext';

interface SpecialtiesProps {
  config: ClientConfig;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ config }) => {
  const { navigateTo } = useNavigation();
  return (
    <section id="specialties" className="py-24 bg-stone-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Chef's Signatures
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Dishes That Made Us a Household Name
              </h2>
              <p className="text-stone-400 text-sm sm:text-base">
                Time-honored slow cooking techniques perfected over years of passion and craft.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('menu')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors self-start md:self-end group cursor-pointer"
            >
              <span>View Full 40+ Dish Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.specialties.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={index * 120}
              duration={600}
              className="h-full"
            >
              <div className="group relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-xl h-full hover:-translate-y-1.5">
                {/* Dish Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-500 text-stone-950 shadow-md">
                    {item.tag}
                  </span>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-stone-900/90 border border-stone-700/80 backdrop-blur-md">
                    <span className="text-lg font-serif font-bold text-amber-400">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-amber-400/90 tracking-wide uppercase block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
                      `Hi Zaika Heritage, I would like to order: ${item.title} (₹${item.price})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-amber-400 bg-amber-950/40 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
