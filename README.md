# Zaika Heritage Kitchen & Cafe — Reusable Restaurant Website Template

A production-grade, ultra-fast, mobile-first restaurant website template engineered for Indian culinary and hospitality businesses. Built specifically to deliver high-converting web presence under the **Basic Plan (₹500/mo)** and **Business Plan (₹700/mo)** with **$0 monthly hosting overhead**.

---

## 🌟 Highlights & Key Features

- **100% Config-Driven Rebranding**: Customise restaurant name, phone, WhatsApp, location, menu, dishes, photos, and hours inside a single file: `src/config/client.config.ts`. No need to touch component markup.
- **Zero-Friction WhatsApp Conversions**:
  - Interactive digital menu with instant "Order on WhatsApp" pre-filled messages.
  - Multi-item quick cart tallying live price totals in ₹.
  - Table reservation form generating pre-formatted WhatsApp booking requests.
- **Mobile-First Experience**:
  - Sticky bottom action bar with 1-tap "Call Now" and "WhatsApp Order".
  - Smooth touch scroll menu category tabs.
  - Indian dietary markings: Pure Veg (🟢) and Non-Veg (🔴) indicators.
- **Built-in Technical SEO**:
  - Valid Schema.org `Restaurant` JSON-LD structured data.
  - Open Graph tags for WhatsApp, Instagram, and Facebook link previews.
  - Semantic HTML5 structure with strict heading hierarchies (`h1` → `h2` → `h3`).
- **Cost Economics ($0 Hosting Cost)**:
  - Generates static pre-rendered production builds via Vite.
  - Deploys for free on Cloudflare Pages or Vercel with automated SSL and global CDN.

---

## 📁 Project Structure

```
├── .npmrc                       # Dependency script approval rules
├── pnpm-workspace.yaml          # pnpm v12 configuration with allowBuilds
├── package.json                 # Core dependencies (React 19, Tailwind v4, Lucide)
├── vite.config.ts               # Bundler configuration
├── tsconfig.json                # Strict TypeScript configuration
├── index.html                   # HTML entry with Playfair Display & Plus Jakarta Sans
└── src/
    ├── main.tsx                 # App mount
    ├── App.tsx                  # Master page composer
    ├── index.css                # Tailwind CSS v4 design tokens & theme
    ├── types/
    │   └── index.ts             # Complete TypeScript schemas
    ├── config/
    │   └── client.config.ts     # Master Client Configuration file
    └── components/
        ├── SEOHead.tsx          # Dynamic JSON-LD structured data injector
        ├── Header.tsx           # Sticky nav with mobile drawer & quick CTAs
        ├── Hero.tsx             # Editorial hero, rating badge, dual CTAs
        ├── Highlights.tsx       # 4 quality pillars (Charcoal Tandoor, etc.)
        ├── Specialties.tsx      # Chef's signature dishes showcase
        ├── MenuSection.tsx      # Filterable menu, dietary toggles & WhatsApp cart
        ├── ReservationSection.tsx # Table booking form with WhatsApp link
        ├── GallerySection.tsx   # Courtyard & dining ambience photo grid
        ├── TestimonialsSection.tsx # Google reviews rating banner & quotes
        ├── ContactSection.tsx   # Full NAP, Google Maps embed & hours
        ├── StickyMobileBar.tsx  # Mobile 1-tap Call & WhatsApp sticky bar
        └── Footer.tsx           # Semantic footer & copyright
```

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm run dev

# 3. Create production build
pnpm run build

# 4. Preview production build
pnpm run preview
```

---

## 🎨 How to Onboard a New Restaurant Client

To turn this into a new client website, open [src/config/client.config.ts](file:///data/user/0/com.termux/files/home/demo%20website/basic%20business/basic%20Plan%20business/src/config/client.config.ts) and edit:

1. `businessName`: Name of the cafe/restaurant.
2. `tagline` & `shortAbout`: Short marketing pitch.
3. `contact`: Phone number, WhatsApp number, and physical address.
4. `hours`: Opening and closing timings.
5. `menuItems`: List of dishes, prices in ₹, dietary tags (`veg` / `non-veg`), and images.
6. `specialties`: 3 signature dishes to spotlight.
7. `gallery`: Photos of the cafe/restaurant interior and food.
8. `seo`: Target keywords and locality.

Run `pnpm run build`, and your custom client site is ready to deploy!
