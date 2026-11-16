export type DietType = 'veg' | 'non-veg' | 'vegan';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  diet: DietType;
  spiceLevel?: 1 | 2 | 3;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  tag: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface ClientConfig {
  id: string;
  businessName: string;
  tagline: string;
  shortAbout: string;
  fullStory: string[];
  establishedYear: number;
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappOrderMessage: string;
    email: string;
    address: {
      street: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      landmark?: string;
    };
    mapEmbedUrl: string;
    directionsUrl: string;
  };
  hours: BusinessHours[];
  amenities: Amenity[];
  categories: MenuCategory[];
  menuItems: MenuItem[];
  specialties: SpecialtyItem[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  ratingsSummary: {
    average: number;
    totalReviews: number;
    platform: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    googleReviews?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    cuisineTypes: string[];
    priceRange: string;
    canonicalUrl: string;
  };
}
