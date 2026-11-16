import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { ClientConfig } from '../types';

interface ContactSectionProps {
  config: ClientConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  return (
    <section id="contact" className="py-24 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Find Us in {config.contact.address.city}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Centrally located with ample dedicated valet parking and serene heritage ambience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800/80 space-y-3">
              <div className="flex items-center gap-3 text-amber-400">
                <MapPin className="w-5 h-5 shrink-0" />
                <h3 className="font-serif text-lg font-bold text-white">Our Address</h3>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed">
                {config.contact.address.street}, {config.contact.address.area},<br />
                {config.contact.address.city}, {config.contact.address.state} — {config.contact.address.pincode}
              </p>
              {config.contact.address.landmark && (
                <p className="text-xs text-amber-400/90 font-medium">
                  Landmark: {config.contact.address.landmark}
                </p>
              )}
              <div className="pt-2">
                <a
                  href={config.contact.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps / Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Calling & WhatsApp */}
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800/80 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <Phone className="w-5 h-5 shrink-0" />
                <h3 className="font-serif text-lg font-bold text-white">Phone & Inquiries</h3>
              </div>
              <div className="space-y-2">
                <p className="text-stone-400 text-xs">For Table Bookings & Takeaway:</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="text-lg font-bold text-amber-400 hover:underline block font-serif"
                >
                  {config.contact.phoneFormatted}
                </a>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct Call</span>
                </a>

                <a
                  href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappOrderMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800/80 space-y-3">
              <div className="flex items-center gap-3 text-amber-400">
                <Clock className="w-5 h-5 shrink-0" />
                <h3 className="font-serif text-lg font-bold text-white">Dining Hours</h3>
              </div>
              <div className="divide-y divide-stone-800 text-sm">
                {config.hours.map((h, i) => (
                  <div key={i} className="py-2 flex justify-between items-center first:pt-0 last:pb-0">
                    <span className="text-stone-400">{h.days}</span>
                    <span className="font-semibold text-stone-200">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative min-h-[380px] lg:min-h-full">
            <iframe
              title="Restaurant Location Map"
              src={config.contact.mapEmbedUrl}
              className="w-full h-full min-h-[400px] border-0 filter grayscale contrast-125 invert-[0.9]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
