import React from 'react';
import { restaurantConfig } from './config/client.config';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HomePage } from './pages/HomePage';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white relative">
      {/* Dynamic SEO & Schema.org JSON-LD Metadata */}
      <SEOHead config={restaurantConfig} />

      {/* Top Ambient Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Header config={restaurantConfig} />

      {/* Main Home Page Experience with Scroll-Driven Animations */}
      <main className="flex-1 w-full">
        <HomePage config={restaurantConfig} />
      </main>

      {/* Mobile Sticky 1-Tap Call & WhatsApp Bar */}
      <StickyMobileBar config={restaurantConfig} />

      {/* Semantic Footer */}
      <Footer config={restaurantConfig} />
    </div>
  );
};

export default App;
