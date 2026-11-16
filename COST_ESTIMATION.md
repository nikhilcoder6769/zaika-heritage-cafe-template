# Cost Estimation & Commercial Unit Economics

## 1. Plan Breakdown & Operating Margin

| Plan | Client Subscription | Domain Cost (Annualized) | Hosting Infrastructure | WhatsApp / Email | Net Monthly Profit | Margin |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Basic Plan** | **₹500 / month** | ~₹50 / mo (.com/.in @ ₹600/yr) | ₹0 (Cloudflare Pages / Vercel Static) | ₹0 (Direct wa.me protocol) | **₹450 / month** | **90%** |
| **Business Plan** | **₹700 / month** | ~₹50 / mo (.com/.in @ ₹600/yr) | ₹0 (Cloudflare Pages / Vercel Static) | ₹0 (Formspree / Web3Forms free tier) | **₹650 / month** | **92%** |
| **Premium Plan** | **₹1,000 / month** | ~₹50 / mo (.com/.in @ ₹600/yr) | ₹0 (Neon Postgres / Vercel Serverless free tier) | ₹0 (Resend free 3,000 emails/mo) | **₹900 / month** | **90%** |

---

## 2. Infrastructure Provider Free-Tier Limits

1. **Cloudflare Pages / Vercel**:
   - Bandwidth: Unlimited / 100 GB per month.
   - SSL Certificates: 100% Free, auto-renewed.
   - Global CDN: Included.
   - Monthly cost: **₹0**.

2. **Domain Registration**:
   - `.in` domain: ₹399 - ₹599 / year.
   - `.com` domain: ₹799 - ₹999 / year.
   - *Rule*: Always bill domain registration either separately (one-time setup fee ₹1,500) or amortized into the annual contract.

3. **Database (Neon / Supabase)**:
   - Free tier includes 0.5 GB to 1 GB storage, ample for 100,000+ restaurant bookings or menu items.
   - Automated backups and connection pooling included.

4. **Media (Cloudinary / Cloudflare R2)**:
   - Free tier includes 25,000 transformations and 25 GB storage per month.
