import React from 'react';
import { restaurantConfig } from './config/client.config';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Specialties } from './components/Specialties';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Dynamic SEO & Schema.org JSON-LD Metadata */}
      <SEOHead config={restaurantConfig} />

      {/* Navigation Header */}
      <Header config={restaurantConfig} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero config={restaurantConfig} />
        <Highlights config={restaurantConfig} />
        <Specialties config={restaurantConfig} />
        <MenuSection config={restaurantConfig} />
        <ReservationSection config={restaurantConfig} />
        <GallerySection config={restaurantConfig} />
        <TestimonialsSection config={restaurantConfig} />
        <ContactSection config={restaurantConfig} />
      </main>

      {/* Mobile Sticky 1-Tap Call & WhatsApp Bar */}
      <StickyMobileBar config={restaurantConfig} />

      {/* Semantic Footer */}
      <Footer config={restaurantConfig} />
    </div>
  );
};

export default App;
