import React from 'react';
import { restaurantConfig } from './config/client.config';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white relative">
      {/* Dynamic SEO & Schema.org JSON-LD Metadata */}
      <SEOHead config={restaurantConfig} />

      {/* Top Ambient Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Header config={restaurantConfig} />

      {/* Multi-Page Views (Home vs Full Menu) */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage config={restaurantConfig} />}
        {currentPage === 'menu' && <MenuPage config={restaurantConfig} />}
      </main>

      {/* Mobile Sticky 1-Tap Call & WhatsApp Bar */}
      <StickyMobileBar config={restaurantConfig} />

      {/* Semantic Footer */}
      <Footer config={restaurantConfig} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;
