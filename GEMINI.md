# Project & Workspace Agent Rules

This workspace inherits all global rules from `~/.gemini/config/GEMINI.md`.

## Core Project Guidelines

- **Package Manager**: Exclusively use `pnpm` for installing and managing dependencies.
- **Environment**: Running inside Android Termux. Never execute automated system-level installs (`pkg`, `apt`) without explicit user permission.
- **Clarification & Confirmation**: Proactively clarify ambiguous requirements using `ask_question`. If user provides feedback or challenges an approach, answer and align first before modifying code.
- **Architecture & Commercial Tier Economics**:
  - Keep Basic (₹500/mo) and Business (₹700/mo) sites on a zero-monthly-cost static architecture (Vite / Astro deployed to Cloudflare Pages or Vercel).
  - All client re-theming, branding, contact info, and offerings must remain isolated inside type-safe `src/config/client.config.ts` without modifying core component markup.
  - Multi-tenant databases, serverless compute, and dynamic APIs are reserved for Premium (₹1,000/mo) and custom plans.

## Website Creation Workflow
Whenever instructed to create, design, or build a website:
1. **Research in Every Research Tool**: Thoroughly research top-performing and successful websites in the specified niche across all available research sources using Browser MCP and Web Search:
   - **SiteInspire** (`https://www.siteinspire.com/`): Curated editorial design, typography, agency showcases, and clean layout inspirations.
   - **One Page Love** (`https://onepagelove.com/`): Single-page websites, component sections, typefaces, and modern tech stack references.
   - **Lapa Ninja** (`https://www.lapa.ninja/`): 7,300+ landing pages, multi-version designs, and conversion patterns.
   - **Awwwards** (`https://www.awwwards.com/`): Award-winning web experiences, creative visual storytelling, and innovative motion design.
   - **Land-book** (`https://land-book.com/`): Curated product sites, landing pages, and modular section crops (heroes, pricing, footers).
   - **Godly** (`https://godly.website/` / `https://recent.design`): High-aesthetic web interfaces, branding, and micro-interactions.
   - **Refero** (`https://refero.design/`): Real-world product UI screens, UX flows, and component interaction patterns.
   - **Web Search**: Grounded search for live industry leaders, competitive benchmarks, and niche-specific design trends.
2. **Track & Identify Common Patterns**: Analyze and identify the recurring design patterns, core layout structures, color palettes, typography choices, UX flows, and essential page sections common to leaders in that niche.
3. **Synthesize & Create Original Design**: Take inspiration from those proven elements to create a fresh, high-quality, and modern website tailored to the project requirements.

## Local Design Intelligence Engine
This workspace maintains a local instance of the Website Design Intelligence engine at `./website-research/engine/cli.py`.
- Run queries: `python3 ./website-research/engine/cli.py discover --industry "<Niche>"`
- Rank references: `python3 ./website-research/engine/cli.py rank --industry "<Niche>"`
- Generate 16-part spec: `python3 ./website-research/engine/cli.py generate-spec --project-id "<id>" --name "<Client>" --industry "<Niche>"`
