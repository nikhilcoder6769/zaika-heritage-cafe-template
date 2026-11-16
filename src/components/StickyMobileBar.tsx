import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { ClientConfig } from '../types';

interface StickyMobileBarProps {
  config: ClientConfig;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ config }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-xl border-t border-stone-800 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${config.contact.phone}`}
          className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-stone-200 bg-stone-900 border border-stone-700/80 active:bg-stone-800"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappOrderMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-stone-950 bg-amber-500 shadow-md active:bg-amber-400"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Order</span>
        </a>
      </div>
    </div>
  );
};
