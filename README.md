# Urban Bakery

The Urban Bakery marketing site — a Next.js App Router site deployed on
Vercel.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
```

## Deploying to Vercel

This is a standard Next.js project — import the repo in Vercel and it will
build with zero extra configuration (`next build`).

The public site (`/`) works out of the box with no environment variables:
it falls back to the built-in default copy in `app/site-content.ts` when no
content store is configured.

### Private content editor (`/editor`)

The site includes a password-protected page at `/editor` for editing the
homepage copy without a code change.

1. Set an `EDITOR_PASSWORD` environment variable in your Vercel project.
   Visiting `/editor` will prompt for this password and set a session
   cookie on success.
2. To let the editor persist changes, add a Redis integration (Vercel
   Marketplace → Storage → Redis) to the project. This provides the
   `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables that
   `db/content.ts` reads. Without them, `/editor` still loads but saving
   returns an error explaining that storage isn't configured.

See `.env.example` for the full list of environment variables.

### Analytics & SEO

- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (format `G-XXXXXXX`) in your Vercel
  project to enable Google Analytics 4. The tag is only injected when this
  variable is present, so local/preview builds without it stay untracked.
- `robots.txt` and `sitemap.xml` are generated automatically (`app/robots.ts`,
  `app/sitemap.ts`) against the production origin `https://urbanbakery.co`.
  The `/editor` route is excluded from indexing and disallowed for crawlers.
- Google Search Console is verified for `urbanbakery.co` as a **domain
  property** via a DNS TXT record at the registrar (GoDaddy) — this is
  independent of hosting, so it must be preserved (not removed) whenever DNS
  is updated to point at this Vercel deployment.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the production build
- `npm run start`: run the production build locally
- `npm test`: build the site and run the test suite
- `npm run lint`: lint the project

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Redis Storage](https://vercel.com/marketplace?category=storage&search=redis)
