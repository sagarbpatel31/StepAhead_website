# StepAhead — Marketing Website

Landing page for **StepAhead**, an AI-powered baby motor development tracking app. Built with Next.js 14 + Tailwind CSS, deployed on Vercel.

**Live site:** [step-ahead-website.vercel.app](https://step-ahead-website.vercel.app)

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS with custom brand tokens |
| Font | Exo 2 (Google Fonts) |
| Backend | Next.js API Routes |
| Database | Supabase (waitlist signups) |
| Deployment | Vercel |

---

## Sections

- **NavBar** — responsive with mobile hamburger, "Join the Waitlist" CTA
- **Hero** — full-bleed image with tagline and CTA
- **Features** — 4 product features with icons and phone mockups
- **How It Works** — 3-step flow (Record → Analyze → Track) with background video
- **How We Help** — AI insights + testimonial
- **Mission Banner** — brand statement
- **FAQ** — accordion with 3 Q&As
- **Footer** — links, app store badges, contact email
- **`/waitlist` page** — dedicated signup page (email capture → Supabase)

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

---

## Environment Variables

Required for the waitlist form to store signups. Add to `.env.local` for local dev, and to Vercel project settings for production.

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
WAITLIST_SECRET=your-secret-for-admin-endpoint
```

**Supabase table** — run this SQL in your Supabase SQL Editor:

```sql
create table public.waitlist (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  value text not null,
  type text not null check (type in ('email', 'phone')),
  timestamp text not null
);

alter table public.waitlist enable row level security;
```

**Retrieve all signups** (admin only):
```
GET /api/waitlist?secret=your-secret
```

---

## Editing Content

All copy, images, and links live in one file — no React knowledge needed:

```
content/site.json
```

Change any text, image path, or list item → save → site reflects it on next render.

---

## Deployment

Push to `main` → Vercel auto-deploys. No build config needed beyond env vars above.

---

## Contact

[stepahead.app@gmail.com](mailto:stepahead.app@gmail.com)
