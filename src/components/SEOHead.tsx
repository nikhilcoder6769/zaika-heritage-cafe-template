import React, { useEffect } from 'react';
import { ClientConfig } from '../types';

interface SEOHeadProps {
  config: ClientConfig;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ config }) => {
  useEffect(() => {
    // Dynamically set document title & meta tags
    document.title = config.seo.metaTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.seo.metaDescription);
    }

    // Generate Schema.org JSON-LD structured data for Restaurant
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      'name': config.businessName,
      'description': config.shortAbout,
      'image': config.gallery[0]?.image || '',
      'telephone': config.contact.phone,
      'priceRange': config.seo.priceRange,
      'servesCuisine': config.seo.cuisineTypes,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': `${config.contact.address.street}, ${config.contact.address.area}`,
        'addressLocality': config.contact.address.city,
        'addressRegion': config.contact.address.state,
        'postalCode': config.contact.address.pincode,
        'addressCountry': 'IN'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': config.ratingsSummary.average.toString(),
        'reviewCount': config.ratingsSummary.totalReviews.toString()
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '11:30',
          'closes': '23:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday', 'Sunday'],
          'opens': '11:00',
          'closes': '23:30'
        }
      ]
    };

    let script = document.getElementById('restaurant-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'restaurant-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);
  }, [config]);

  return null;
};
