# VoxWit Landing Page

Modern Next.js + Tailwind landing page for VoxWit, an AI writing copilot that helps founders, PMs, consultants, creators, and marketers write LinkedIn posts people actually enjoy reading.

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org)
- [React 18](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- `/api/waitlist` route with optional [Supabase](https://supabase.com) persistence

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site. Edits to files inside `src/` trigger instant reloads.

## Environment Variables (optional but recommended)

Create a `.env.local` file if you want waitlist submissions to persist in Supabase:

```
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-public-anon-key
SUPABASE_WAITLIST_TABLE=voxwit_waitlist # optional, defaults to this value
```

The `/api/waitlist` route upserts emails into the specified table (make sure `email` has a unique constraint). Without these variables the API still responds successfully but only logs locally so you can wire up storage later.

## Project Structure

```
/app             # Next.js app router pages + API
/components      # Reusable UI sections + Waitlist form
/public          # Static assets
/styles          # Tailwind + global tokens
```

## Key Sections

1. Hero with animated stat blocks and CTA buttons
2. Problem framing (“Most posts get ignored”)
3. 3-step “How VoxWit Works” explainer
4. Feature grid (Hook Generator, Punch-Up, Wit Engine, Post Structure)
5. Before/after comparison card
6. Audience chips for target users
7. Final CTA with waitlist form

## Deployment (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Create a new Vercel project and import the repo.
3. Add the Supabase env vars (optional) in the Vercel dashboard.
4. Deploy — the build command is `npm run build` and the output directory is `.next` (default).

## Performance & Accessibility Notes

- Fully responsive layout with mobile-first spacing
- System font fallbacks + Inter via `next/font`
- High contrast palette that passes AA on primary text
- Minimal client-side JS (only the waitlist form is client-rendered)
- Semantic markup and descriptive copy blocks for SEO

Feel free to adjust the color palette or copy inside `src/components/*` as VoxWit evolves.
