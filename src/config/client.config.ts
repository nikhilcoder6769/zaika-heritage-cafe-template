import { ClientConfig } from '../types';

export const restaurantConfig: ClientConfig = {
  id: 'zaika-heritage',
  businessName: 'Zaika Heritage Kitchen & Cafe',
  tagline: 'Authentic Indian Flavors, Royal Dum Cookery & Artisanal Chai',
  shortAbout: 'A tribute to rich Indian culinary traditions. From royal slow-cooked dum biryanis to hand-pounded masalas and fragrant clay-pot chai, we bring warmth and heritage to every table.',
  fullStory: [
    'Founded in 2018 with a vision to celebrate traditional slow-cooking arts, Zaika Heritage Kitchen & Cafe marries centuries-old recipes with a contemporary, warm dining atmosphere.',
    'Every spice blend is roasted and ground in-house, vegetables and dairy are sourced daily from local organic farms, and our tandoor is maintained with natural charcoal for authentic smoky depth.'
  ],
  establishedYear: 2018,
  contact: {
    phone: '+919876543210',
    phoneFormatted: '+91 98765 43210',
    whatsapp: '919876543210',
    whatsappOrderMessage: 'Hi Zaika Heritage, I would like to place an order / inquire about dining:',
    email: 'hello@zaikaheritage.com',
    address: {
      street: 'Plot 42, Heritage Boulevard, Near City Centre',
      area: 'Civil Lines',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110054',
      landmark: 'Opposite Central Park Gate 2'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.27503798547!2d77.12646274431525!3d28.63229672728989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b923791f%3A0xd60414ee000d32ac!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Delhi'
  },
  hours: [
    { days: 'Monday – Friday', hours: '11:30 AM – 11:00 PM' },
    { days: 'Saturday – Sunday', hours: '11:00 AM – 11:30 PM' }
  ],
  amenities: [
    {
      icon: 'Flame',
      title: 'Charcoal Tandoor',
      description: 'Authentic clay ovens fired with natural charcoal for unmatched smoky flavors.'
    },
    {
      icon: 'Leaf',
      title: '100% Fresh Farm Produce',
      description: 'Cold-pressed oils, hand-pounded spices, and farm-fresh dairy with no artificial coloring.'
    },
    {
      icon: 'Coffee',
      title: 'Artisanal Chai Bar',
      description: 'Slow-brewed kulhad chai, saffron kahwa, and single-origin estate coffee.'
    },
    {
      icon: 'Users',
      title: 'Family & Private Dining',
      description: 'Spacious AC dining halls, intimate booths, and private party spaces.'
    }
  ],
  categories: [
    { id: 'all', name: 'Full Menu', description: 'Explore all chef-crafted dishes' },
    { id: 'starters', name: 'Starters & Tandoor', description: 'Crisp bites and smoky clay-oven delicacies' },
    { id: 'mains', name: 'Royal Curries', description: 'Slow-simmered rich gravies and cottage cheese favorites' },
    { id: 'biryani', name: 'Dum Biryanis', description: 'Aromatic basmati sealed with dough in copper handis' },
    { id: 'breads', name: 'Artisan Breads', description: 'Fresh naan, parathas, and tandoori rotis' },
    { id: 'desserts', name: 'Heritage Sweets', description: 'Traditional warm desserts with dry fruit garnishes' },
    { id: 'beverages', name: 'Chai & Cold Sips', description: 'Artisanal kulhad teas, fresh lassi, and coolers' }
  ],
  menuItems: [
    {
      id: 'm1',
      name: 'Paneer Tikka Angara',
      category: 'starters',
      description: 'Soft cottage cheese cubes marinated in Kashmiri red chili, hung curd, and roasted carom seeds, skewered in tandoor.',
      price: 340,
      diet: 'veg',
      spiceLevel: 2,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm2',
      name: 'Bhatti Da Murgh',
      category: 'starters',
      description: 'Tender chicken drumsticks infused with crushed black pepper, cloves, and whole coriander, flame-roasted.',
      price: 420,
      diet: 'non-veg',
      spiceLevel: 3,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm3',
      name: 'Dahi Ke Kebab',
      category: 'starters',
      description: 'Melt-in-mouth spiced hung yogurt patties with fresh mint, coriander, and golden crispy exterior.',
      price: 310,
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: true,
      isPopular: false,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm4',
      name: 'Dal Zaika (24-Hour Simmered)',
      category: 'mains',
      description: 'Our iconic black lentils slow-cooked overnight with churned butter, vine-ripened tomatoes, and fresh cream.',
      price: 360,
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm5',
      name: 'Old Delhi Butter Chicken',
      category: 'mains',
      description: 'Charcoal-grilled chicken morsels bathed in a velvety cashew-tomato reduction scented with kasoori methi.',
      price: 460,
      diet: 'non-veg',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm6',
      name: 'Paneer Lababdar',
      category: 'mains',
      description: 'Crumbled and diced paneer tossed in an onion-tomato masala with ginger juliennes and whole spices.',
      price: 380,
      diet: 'veg',
      spiceLevel: 2,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm7',
      name: 'Nawabi Dum Gosht Biryani',
      category: 'biryani',
      description: 'Fragrant aged long-grain basmati rice and tender spiced mutton layered with saffron milk and sealed in purdah.',
      price: 520,
      diet: 'non-veg',
      spiceLevel: 2,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm8',
      name: 'Subz Shahi Dum Biryani',
      category: 'biryani',
      description: 'Seasonal heirloom vegetables, paneer chunks, caramelized onions, and fresh mint steamed on slow dum.',
      price: 360,
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1642821373181-696a54913e9a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm9',
      name: 'Garlic Chur Chur Naan',
      category: 'breads',
      description: 'Multi-layered flaky refined wheat bread stuffed with spiced potato and crushed garlic, crushed with desi ghee.',
      price: 110,
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm10',
      name: 'Warm Gulab Jamun with Kesar Rabdi',
      category: 'desserts',
      description: 'Two golden khoya dumplings served piping hot in cardamom syrup, flanked by chilled thick saffron rabdi.',
      price: 180,
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm11',
      name: 'Kulhad Adrak Elaichi Chai',
      category: 'beverages',
      description: 'Slow-brewed Assam CTC tea crushed with fresh ginger and green cardamom, poured piping hot into clay cups.',
      price: 60,
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm12',
      name: 'Mango Badam Lassi',
      category: 'beverages',
      description: 'Thick churned sweet yogurt blended with Alphonso mango pulp and topped with roasted pistachio slivers.',
      price: 140,
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1571006687694-74d5530ee84f?auto=format&fit=crop&w=600&q=80'
    }
  ],
  specialties: [
    {
      id: 'sp1',
      title: 'The 24-Hour Dal Zaika',
      subtitle: 'Secret Recipe since 2018',
      description: 'Cooked on a gentle ember flame through the night with ripe tomatoes, white butter, and fenugreek. Served with warm butter naan.',
      price: 360,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      tag: "Chef's Signature"
    },
    {
      id: 'sp2',
      title: 'Purdah Dum Mutton Biryani',
      subtitle: 'Slow Sealing Technique',
      description: 'Sealed with dough in handmade copper handis. When broken at your table, the fragrant steam of saffron and aged spices fills the air.',
      price: 520,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      tag: 'Royal Heritage'
    },
    {
      id: 'sp3',
      title: 'Tandoori Angara Feast',
      subtitle: 'Direct from Charcoal Clay Oven',
      description: 'A grand platter featuring smoked paneer, marinated broccoli florets, and soya chaap charred to perfection with mint chutney.',
      price: 490,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
      tag: 'Tandoor Masterpiece'
    }
  ],
  gallery: [
    {
      id: 'g1',
      title: 'Heritage Courtyard Seating',
      category: 'Ambience',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g2',
      title: 'Flavors in Clay Pots',
      category: 'Culinary Art',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g3',
      title: 'Evening Lantern Glow',
      category: 'Vibe',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g4',
      title: 'Live Tandoor Station',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80'
    }
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Rohan Malhotra',
      rating: 5,
      comment: 'Hands down the best Dal Makhani and Dum Biryani in town. The aroma when they open the handi seal is magical! Great family ambience.',
      date: '2 weeks ago',
      tag: 'Verified Google Review'
    },
    {
      id: 't2',
      name: 'Priyanka Sharma',
      rating: 5,
      comment: 'We booked a table for our family anniversary. The hospitality was exceptional and the staff even customized the spice level for the kids. 10/10.',
      date: '1 month ago',
      tag: 'Verified Google Review'
    },
    {
      id: 't3',
      name: 'Amanpreet Singh',
      rating: 5,
      comment: 'Their Kulhad Chai and Chur Chur Naan are unforgettable. Cleanliness, presentation, and taste are on point. Ordering on WhatsApp was so seamless.',
      date: '3 weeks ago',
      tag: 'Verified Google Review'
    }
  ],
  ratingsSummary: {
    average: 4.9,
    totalReviews: 940,
    platform: 'Google Reviews'
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    googleReviews: 'https://maps.google.com'
  },
  seo: {
    metaTitle: 'Zaika Heritage Kitchen & Cafe — Authentic Indian Restaurant & Dum Biryani',
    metaDescription: 'Best authentic Indian dining, slow-cooked charcoal dum biryani, signature 24-hr Dal Zaika, and artisan chai in Civil Lines, Delhi.',
    cuisineTypes: ['North Indian', 'Mughlai', 'Tandoor', 'Awadhi', 'Biryani', 'Chai & Cafe'],
    priceRange: '₹₹ (₹300 - ₹800 per person)',
    canonicalUrl: 'https://zaikaheritage.com'
  }
};
