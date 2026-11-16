# Editing the site

All content lives in `src/content/` and is edited through Keystatic.

1. `npm install` (first time only), then `npm run dev`.
2. Open http://localhost:4321/keystatic
3. Edit:
   - **Events**: title, date, time, venue, ticket link, poster, details; for finished events add photos (with alt text) and video links.
   - **Sessions**: artist, song, video link (Vimeo or YouTube), still image.
   - **Artists**: photo, bio, contact and links. Email is split into user and domain so it isn't sitting whole in the page source.
   - **Committee**, **Settings** (ticker, email, venue, social links), **Membership** (tiers and prices).
4. Save, then commit and push (or run `npm run build && npx wrangler deploy`). Changes go live once deployed.

Tips
- Events with a start time (and optional end time and performers) also get Google search "event" data.
- An event with no ticket link gets an "Add to calendar" button instead.
- Every image needs alt text. Put new images in `public/assets/`; large photos are best at about 1600px wide.
- Events move from Upcoming to Past automatically on the next build (daily rebuild recommended).

Editing online as a committee member instead? See `COMMITTEE-GUIDE.md` (setup is in `ADMIN-SETUP.md`).
