import React from 'react';
import { ClientConfig } from '../types';
import { Hero } from '../components/Hero';
import { Highlights } from '../components/Highlights';
import { Specialties } from '../components/Specialties';
import { MenuSection } from '../components/MenuSection';
import { ReservationSection } from '../components/ReservationSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomePageProps {
  config: ClientConfig;
}

export const HomePage: React.FC<HomePageProps> = ({ config }) => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section (Includes Staggered Entrance Animations) */}
      <Hero config={config} />

      {/* 2. Core Brand Highlights (Staggered Scroll Reveal) */}
      <ScrollReveal direction="up" delay={50} duration={600}>
        <Highlights config={config} />
      </ScrollReveal>

      {/* 3. Chef's Signatures & Masterpieces */}
      <ScrollReveal direction="up" delay={80} duration={650}>
        <Specialties config={config} />
      </ScrollReveal>

      {/* 4. Interactive Digital Menu & WhatsApp Cart (Preview Mode: 6 dishes with Full Menu redirect) */}
      <ScrollReveal direction="up" delay={100} duration={700}>
        <MenuSection config={config} isPreview={true} />
      </ScrollReveal>

      {/* 5. Online Table Reservations */}
      <ScrollReveal direction="up" delay={100} duration={650}>
        <ReservationSection config={config} />
      </ScrollReveal>

      {/* 6. Ambience & Courtyard Photo Gallery */}
      <ScrollReveal direction="up" delay={100} duration={650}>
        <GallerySection config={config} />
      </ScrollReveal>

      {/* 7. Verified Guest Testimonials & Reviews */}
      <ScrollReveal direction="up" delay={100} duration={650}>
        <TestimonialsSection config={config} />
      </ScrollReveal>

      {/* 8. Location NAP, Hours & Interactive Map */}
      <ScrollReveal direction="up" delay={100} duration={650}>
        <ContactSection config={config} />
      </ScrollReveal>
    </div>
  );
};

export default HomePage;
