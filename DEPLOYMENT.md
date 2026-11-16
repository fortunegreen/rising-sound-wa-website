# Deploying the Rising Sound WA site (Astro + Keystatic)

The site builds to plain static HTML in `dist/`. Every page (`/`, `/about/`, `/whats-on/`,
`/sessions/`, `/artists/`, `/get-involved/`, `/contact/`) is real pre-rendered HTML with real
links, so Google and AI crawlers can read it. Forms and Stripe checkout still post to the existing
`email-worker`; nothing about that changes.

## 1. Build locally

```bash
npm install
npm run build      # outputs dist/
npm run preview    # optional: check it at http://localhost:4321
```

## 2. Deploy (keep the existing Worker and domain)

`wrangler.jsonc` already points the Worker `rising-sound-wa-website` at `./dist`.

```bash
npm run build && npx wrangler deploy
```

Or connect the GitHub repo in Cloudflare (Workers & Pages → rising-sound-wa-website → Settings → Builds):
build command `npm run build`, deploy command `npx wrangler deploy`. Pushes then deploy automatically.

`public/_headers` (security headers, long cache for images) and `public/_redirects` ship inside `dist/`.

## 3. Allow the www origin in the email-worker (required)

The audit makes `https://www.risingsoundwa.com.au` the canonical address. In
`email-worker/src/index.ts`, add it to `ALLOWED_ORIGINS`:

```ts
const ALLOWED_ORIGINS = [
  'https://risingsoundwa.com.au',
  'https://www.risingsoundwa.com.au',   // <- add
  // ...existing workers.dev dev origin
];
```

Then `npx wrangler deploy` from `email-worker/`. Without this, the newsletter, contact form and
membership checkout will fail from the www address.

## 4. Redirect non-www to www (audit finding 3)

Cloudflare dashboard → risingsoundwa.com.au → Rules → Redirect Rules → create:

- If hostname equals `risingsoundwa.com.au` → Dynamic redirect to
  `concat("https://www.risingsoundwa.com.au", http.request.uri.path)`, status 301, preserve query string.
- Make sure `www` has a proxied DNS record (or is attached to the Worker as a custom domain).
- Do not touch MX, SPF, DKIM or DMARC records; email keeps working as is.

## 5. After launch

1. Search Console: add/verify the www property, submit `https://www.risingsoundwa.com.au/sitemap.xml`,
   then request indexing for each of the seven URLs.
2. Check `https://www.risingsoundwa.com.au/robots.txt` and `/llms.txt` load.
3. Confirm the old single-page URL `/` still works (it does: it is now the real home page).
4. Test the newsletter, contact form and a membership checkout (success returns to `/?membership=success`).

## 6. Keep "upcoming" and "past" events current

The site decides upcoming vs past **when it is built**, using Perth time. Set a daily rebuild:
Cloudflare → Workers Builds → create a deploy hook (or a GitHub Action on a daily cron) that
triggers a build around 1am Perth. Without it, a show stays "upcoming" until the next deploy.

## 7. Editing online (optional, later)

By default editing is local (see `EDITING.md`). To let Penny edit from a browser, switch Keystatic to
GitHub mode: push the repo to GitHub, change `storage` in `keystatic.config.tsx` to
`{ kind: 'github', repo: 'OWNER/REPO' }`, and add the four `KEYSTATIC_*` variables from `.env.example`
(follow Keystatic's GitHub-mode guide to create the GitHub App). The admin needs on-demand rendering,
so that would also need the Cloudflare adapter; the simplest path is to keep editing local and push.

## Still to confirm (marked out of the page data on purpose)

ABN, founding year, registered suburb, YouTube channel URL, ticket price, and a proper 1200×630
share image (`public/assets/og-share.jpg` is a crop of the hero as a stand-in).
