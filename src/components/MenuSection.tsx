import React, { useState, useMemo } from 'react';
import { MessageCircle, Flame, Plus, Check } from 'lucide-react';
import { ClientConfig, MenuItem, DietType } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface MenuSectionProps {
  config: ClientConfig;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietFilter, setDietFilter] = useState<'all' | DietType>('all');
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({});

  const filteredItems = useMemo(() => {
    return config.menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDiet = dietFilter === 'all' || item.diet === dietFilter;
      return matchesCategory && matchesDiet;
    });
  }, [config.menuItems, activeCategory, dietFilter]);

  const handleAddItem = (item: MenuItem) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const totalSelectedCount = Object.values(selectedItems).reduce((a, b) => a + b, 0);

  const totalAmount = useMemo(() => {
    return Object.entries(selectedItems).reduce((sum, [id, qty]) => {
      const item = config.menuItems.find((m) => m.id === id);
      return sum + (item ? item.price * qty : 0);
    }, 0);
  }, [selectedItems, config.menuItems]);

  const generateWhatsAppOrderText = () => {
    if (totalSelectedCount === 0) {
      return config.contact.whatsappOrderMessage;
    }

    const orderLines = Object.entries(selectedItems)
      .map(([id, qty]) => {
        const item = config.menuItems.find((m) => m.id === id);
        return item ? `• ${item.name} x ${qty} (₹${item.price * qty})` : '';
      })
      .filter(Boolean)
      .join('\n');

    return `Hi Zaika Heritage, I would like to order the following items:\n\n${orderLines}\n\n*Estimated Total: ₹${totalAmount}*\n\nPlease confirm availability and preparation time.`;
  };

  return (
    <section id="menu" className="py-24 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Interactive Digital Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Explore Our Culinary Delights
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Prepared fresh to order using hand-roasted spices, farm vegetables, and natural charcoal embers.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="space-y-6 mb-12">
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {config.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Diet Filter Controls */}
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setDietFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                dietFilter === 'all'
                  ? 'bg-stone-800 text-white border border-stone-700'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Items
            </button>

            <button
              type="button"
              onClick={() => setDietFilter('veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                dietFilter === 'veg'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                  : 'text-stone-400 hover:text-emerald-400'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-sm border border-emerald-500 flex items-center justify-center p-[1px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Pure Veg</span>
            </button>

            <button
              type="button"
              onClick={() => setDietFilter('non-veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                dietFilter === 'non-veg'
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                  : 'text-stone-400 hover:text-rose-400'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-sm border border-rose-500 flex items-center justify-center p-[1px]">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </span>
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const qty = selectedItems[item.id] || 0;
            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={(index % 3) * 80}
                duration={500}
                className="h-full"
              >
                <div
                  className="group p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        {/* Dietary Tag & Badges */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                              item.diet === 'veg'
                                ? 'border-emerald-500 text-emerald-500'
                                : 'border-rose-500 text-rose-500'
                            }`}
                            title={item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                item.diet === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'
                              }`}
                            />
                          </span>

                          {item.isChefSpecial && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-full">
                              Chef's Pick
                            </span>
                          )}

                          {item.spiceLevel && item.spiceLevel > 1 && (
                            <span className="inline-flex items-center text-amber-500" title={`Spice Level ${item.spiceLevel}/3`}>
                              {[...Array(item.spiceLevel)].map((_, i) => (
                                <Flame key={i} className="w-3 h-3 fill-current" />
                              ))}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-stone-700/60">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <p className="text-stone-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-stone-800/80">
                    <span className="font-serif text-lg font-bold text-amber-400">
                      ₹{item.price}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleAddItem(item)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          qty > 0
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                        }`}
                      >
                        {qty > 0 ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added ({qty})</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* WhatsApp Order Action Bar (Sticky or bottom banner when items are selected) */}
        {totalSelectedCount > 0 && (
          <div className="fixed bottom-20 left-4 right-4 sm:bottom-6 sm:max-w-xl sm:mx-auto z-40 animate-in slide-in-from-bottom-6 duration-300">
            <div className="p-4 rounded-2xl bg-amber-500 text-stone-950 shadow-2xl flex items-center justify-between gap-4 border border-amber-300">
              <div>
                <p className="text-xs font-bold tracking-wide uppercase text-stone-900">
                  {totalSelectedCount} item{totalSelectedCount > 1 ? 's' : ''} selected
                </p>
                <p className="font-serif text-xl font-extrabold text-stone-950">
                  Total: ₹{totalAmount}
                </p>
              </div>

              <a
                href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
                  generateWhatsAppOrderText()
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold bg-stone-950 text-amber-400 hover:bg-stone-900 shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send to WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
