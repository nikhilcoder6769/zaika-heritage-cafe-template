import React, { useState } from 'react';
import { Calendar, Users, Phone, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { ClientConfig } from '../types';

interface ReservationSectionProps {
  config: ClientConfig;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ config }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '08:00 PM',
    guests: '2 Guests',
    occasion: 'Family Dinner',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Zaika Heritage, I would like to reserve a table:\n\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Date: ${formData.date}\n• Time Slot: ${formData.time}\n• Guests: ${formData.guests}\n• Occasion: ${formData.occasion}\n${formData.notes ? `• Special Requests: ${formData.notes}\n` : ''}\nPlease confirm our booking.`;

    const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="reserve" className="py-24 bg-stone-900/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-stone-950 border border-stone-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          {/* Left Hero & Info Column */}
          <div className="lg:col-span-2 p-8 sm:p-10 bg-gradient-to-br from-amber-950/60 via-stone-950 to-stone-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-800 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Table Reservations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Dine Amidst Heritage & Warmth
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed">
                Whether celebrating an intimate anniversary or gathering for a joyful family feast, reserve in advance to enjoy priority seating.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-stone-800/80">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs text-stone-400">Lunch & Dinner Slots</p>
                  <p className="text-xs font-semibold text-stone-200">11:30 AM – 11:30 PM Daily</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs text-stone-400">Direct Hotline</p>
                  <a href={`tel:${config.contact.phone}`} className="text-xs font-semibold text-amber-400 hover:underline">
                    {config.contact.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-3 p-8 sm:p-10">
            <form onSubmit={handleReservationSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
                    Time Slot *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="12:30 PM">12:30 PM (Lunch)</option>
                    <option value="01:30 PM">01:30 PM (Lunch)</option>
                    <option value="02:30 PM">02:30 PM (Lunch)</option>
                    <option value="07:30 PM">07:30 PM (Dinner)</option>
                    <option value="08:00 PM">08:00 PM (Dinner)</option>
                    <option value="08:45 PM">08:45 PM (Dinner)</option>
                    <option value="09:30 PM">09:30 PM (Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
                    Party Size *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3–4 Guests</option>
                    <option value="5-8 Guests">5–8 Guests</option>
                    <option value="9+ Guests (Party)">9+ Guests (Party)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Quiet booth preferred, celebrating birthday, less spicy food..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-stone-950 bg-amber-500 hover:bg-amber-400 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm & Send Booking via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
