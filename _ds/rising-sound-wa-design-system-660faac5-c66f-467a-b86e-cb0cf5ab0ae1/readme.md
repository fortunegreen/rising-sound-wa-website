# Rising Sound WA — Design System

Rising Sound WA is a Western Australian not-for-profit that puts local musicians in front of rooms full of people. It runs a concert season, workshops and open mics; a *Rising Rooms* tiny-desk-style video series filmed in its Maylands studio; a paid membership program; and a rehearsal-room fund for players. The website has two jobs: **sell tickets** and **sign up members**.

The audience is broad on purpose — singer-songwriters and music lovers from their twenties to their eighties. The design has to read as sharp and contemporary without turning into a youth-culture in-joke. Big type, hard edges, high colour, no clutter.

## Sources given

| Source | Notes |
| --- | --- |
| `uploads/Rising_Sound_WA_Logo_Transparent_26cm.png` | Full lockup, transparent background (cream wordmark + amber waveform) |
| `uploads/Rising_Sound_WA_Logo_redrawsml.png` | Same lockup on solid black |
| 4 gig posters (supplied as social JPGs) | Copied to `assets/posters/`. **These are the most informative brand assets in the set** — hand-lettered, cream on black, teal / yellow / pink / purple, halftone and grain textures. The accent palette is sampled directly from them. |
| 6 photographs (supplied as social JPGs) | Copied to `assets/imagery/`. Sessions on the shop floor at Midland Records, two artist portraits, one live stage shot. |
| Reference sites named by the client | waopera.asn.au · waballet.com.au · blackswantheatre.com.au · waso.com.au — cited for "large blocky structures, sense of movement, energy, use of colour". These informed the *structural* approach only; nothing was copied from them. |
| Brief | "Professional but appealing to unconventional people." Membership + ticketing. Tiny-desk video series. |

No codebase, Figma file or written brand guidelines were supplied. The visual foundations are derived from the logo artwork, the gig poster series and the photographs.

### Real facts established by the supplied material

- **Home venue: Midland Records, 7 Spring Park Rd, Midland.** Every supplied poster is co-branded with Midland Records.
- **Saturday Sessions** is the recurring free series — 12–2pm, two acts, on the shop floor. This is the organisation's signature program.
- Night shows are ticketed one-offs, e.g. **Gidge Rock**'s *Wabi Sabi* album launch with Midnight Francine and Mergo (6 June).
- Artists named on the posters: Gidge Rock, Midnight Francine, Mergo, Tanya Hemi, The Dusty Stingrays, String and Bone, Vissac, Moana Mayatrix, Arturo, Blue Minou.

The UI kit uses these names and this venue verbatim. **Prices, ticket counts, the 412-member figure and the funding split are still placeholders.**

### Still missing

- **Video files.** The brief mentions tiny-desk-style video concerts and the chat mentioned videos, but none arrived — the Sessions screen uses photographs as poster frames.
- **Brand font files.** See the substitution note under Typography.
- **The poster lettering.** The hand-drawn brush type is almost certainly custom or drawn by hand; no font file or artist credit was supplied.

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The one file consumers link. `@import`s everything below. |
| `tokens/` | `fonts.css` `colors.css` `typography.css` `spacing.css` `elevation.css` `motion.css` `base.css` |
| `components/components.css` | Class-based styling for every component (`.rs-*`) |
| `components/core/` | Button, IconButton, Icon, Logo, Waveform, Tag, Badge, Card, SectionHeading |
| `components/forms/` | Input, Select, Checkbox, Radio, Switch |
| `components/feedback/` | Dialog, Toast, Tooltip |
| `components/navigation/` | Tabs |
| `components/patterns/` | EventCard, VideoCard, TierCard, Poster |
| `guidelines/` | 29 specimen cards — brand, colour, type, spacing, motion, imagery |
| `assets/posters/` | The four supplied gig posters |
| `assets/imagery/` | The six supplied photographs |
| `ui_kits/website/` | Click-through recreation of the public site (5 screens) |
| `assets/` | Logo lockups, wordmarks, waveform mark |
| `SKILL.md` | Agent Skills wrapper |

### Components

Button · IconButton · Icon · Logo · Waveform · Tag · Badge · Card · SectionHeading · Input · Select · Checkbox · Radio · Switch · Dialog · Toast · Tooltip · Tabs · EventCard · VideoCard · TierCard · Poster

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (one-line purpose, usage example, variant notes).

**Intentional additions.** No component inventory was supplied, so this is an authored set sized to a ticketing + membership site. Three items are brand-specific rather than generic:

- **Waveform** — the bars from the logo mark, reused as a divider, loading state and now-playing indicator. It keeps the mark alive in the interface instead of only in the header.
- **EventCard / VideoCard / TierCard / Poster** — the four content units the site is actually made of. Poster in particular exists because the supplied posters are better brand expression than anything reproducible in web type, so they get first-class treatment rather than being buried in a gallery.

---

## Content fundamentals

**Voice.** Plain, specific, a little dry. The organisation talks like a person who books shows for a living, not like a marketing department. Professional, but never corporate.

**Person.** "We" for the organisation, "you" for the reader. Never "our valued members" or "the customer".

- ✅ "We don't charge a booking fee."
- ✅ "Members book 48 hours before general release."
- ❌ "Rising Sound WA is proud to announce an exciting new initiative."

**Sentences.** Short. Concrete nouns. Facts before adjectives. A number is better than a superlative — "412 members", "58% of every dollar goes to artist fees", "40 tickets left" — and it does the persuading on its own.

**Casing.** Sentence case for body copy, buttons and nav labels. UPPERCASE is a *typographic* device, applied by the display and mono styles, not typed into the copy — so write "See what's on", and the button style will render it as SEE WHAT'S ON. Never type in caps.

**Headlines.** Two to five words, verb-led or place-led. "Join the room." "Three songs, one take." "Live at Midland Records." No colons, no puns on band names, no "Discover…".

**Series and act names are set verbatim**, exactly as the posters print them: *Saturday Sessions*, *Tanya Hemi and The Dusty Stingrays*, *Arturo and Blue Minou*. Never abbreviate an act to fit a layout — change the layout.

**Australian English and local specifics.** Realise, programme → program (org context), colour, centre. Place names carry weight: Freo.Social, The Ellington, Mojos, Kalamunda, Northbridge. Use Noongar place names (Boorloo, Walyalup) where they're the artist's or the community's own usage — never as decoration.

**Acknowledgement of Country** appears in the footer of every page, in full sentence case, never abbreviated to a logo or icon.

**Prices and dates.** Always explicit and always paired with the member price: `$25 / $18 members`. Dates in mono, uppercase, day-first: `FRI 6 JUN · 7:00PM`. Free events say "Free", not "$0" — and Saturday Sessions being free is stated early and often, because it is the easiest reason to turn up.

**Emoji: never.** Not in headings, buttons, body copy, or social embeds pulled onto the site. The waveform motif and the Lucide icon set carry any non-verbal signalling.

**Ticker copy** (the amber strip) is a comma-free list of four to six live facts, each two to five words: "Saturday Sessions — free, 12–2pm", "Rehearsal fund round 3 open".

**Error and empty states** state the fact then the fix, in one sentence each: "That card was declined. Try another." "Nothing in this category yet."

---

## Visual foundations

### The idea
Black paper, cream ink, amber signal, and two loud accents used as whole blocks. Layouts are built from rectangles that butt up against each other — no floating cards drifting on a light-grey page. Movement comes from scale contrast and colour blocking, not from decoration.

### Colour
- **Ink `#000000`** is the page. True black, not a soft charcoal — it makes the cream and amber ring.
- **Bone `#F8E8D0`** (and `#FDF7EE` for text) is the ink-on-black. Sampled from the wordmark.
- **Amber `#F8A008`** is the single brand accent, sampled from the mark. It is the primary button, the active tab, the eyebrow, the rule under a section heading. Roughly one amber *area* per viewport, plus small marks.
- **Teal `#1F9E9E`** is the second voice, sampled from three of the four posters — the most-used non-neutral colour the organisation actually prints. It carries Saturday Sessions: the session badge, the What's On header block, the membership panel. Always with ink text.
- **Pink `#F0507F`**, **Purple `#6350B0`** and **Lemon `#F5EE12`** complete the poster set. Used at full-bleed block scale — an event hero, a video tile, a section band — never as text colour, never as a border on a dark surface. One accent block per screen region; rotate them across a grid so a page of tiles reads as a colour rhythm.

⚠️ **These four were re-picked from the posters.** An earlier pass invented a blue `#3340E6` and a pink `#E8336D` before the posters were available. The pink was close; the blue was wrong. Every value above is now sampled from printed work.
- **Status** — go `#1E8F5E`, warn (= amber), stop `#CC271D` — booking and form states only.
- **Text colour is decided by the fill's relative luminance, not by eye.** The threshold is **0.18**: at or above it the fill is a *light* surface and takes **ink**; below it, **cream**. Applying this consistently is what keeps every pairing at WCAG AA (4.5:1 for normal text):

| Fill | Luminance | Text | Ratio |
| --- | --- | --- | --- |
| Lemon `#F5EE12` | 0.81 | ink | 17.1 |
| Bone `#F8E8D0` | 0.82 | ink | 17.4 |
| Amber-300 `#FFC55C` | 0.62 | ink | 13.4 |
| Amber `#F8A008` | 0.45 | ink | 10.0 |
| Teal `#1F9E9E` | 0.27 | ink | 6.4 |
| Pink `#F0507F` | 0.26 | ink | 6.2 |
| Go `#1E8F5E` | 0.21 | ink | 5.2 |
| Stop `#CC271D` | 0.14 | cream | 5.1 |
| Amber-700 `#9A6004` | 0.15 | cream | 4.9 |
| Purple `#6350B0` | 0.12 | cream | 6.0 |
| Teal-700 `#146868` | 0.11 | cream | 6.1 |

  Two consequences worth knowing. **Never place cream on amber, teal, pink or green** — that is the single mistake this system is most prone to, because those colours *feel* saturated rather than light. And the mid-luminance band around 0.17 is unusable: the original stop red `#D93025` sat there and failed **both** ways (cream 4.48, ink 4.40), so it was darkened to `#CC271D`. If you add an accent, compute its luminance before choosing its text colour.
- No gradients as decoration. The only gradient in the system is the black bottom-veil over media (`--overlay-bottom`) so type stays legible on stills.

### Typography
Three families, each with one job.

- **Archivo Black** — display. Uppercase, `-0.02em`, line-height 0.86–0.92. All headlines, prices, big numbers. This is the blocky voice the reference sites use.
- **Playfair Display 900** — brand serif, echoing the wordmark's high-contrast letterforms. Feature titles, pull quotes, the occasional oversized numeral. Sparing: at most one Playfair element per screen region.
- **Archivo** 400/500/700 — body, UI labels, nav.
- **Space Mono** — every piece of metadata: dates, venues, prices, eyebrows, tags, counts. Uppercase with `0.06em` (`0.16em` for eyebrows). This is the system's most recognisable tic.

⚠️ **Font substitution.** No brand font files were supplied. The logo wordmark is a heavy high-contrast serif; **Playfair Display 900** is the closest Google Fonts match and is used wherever that voice is needed. Archivo, Archivo Black and Space Mono are chosen, not matched — they are the working faces for a brand that only has a logo. **If Rising Sound WA owns real licensed fonts, send the files and this will be swapped.**

### Space and layout
4px base scale (`--sp-1` … `--sp-11`). 12 columns, 24px gutters, 1360px max width. Section padding is 96px vertical (`--sp-9`), 144px for a hero. Content bands run full-bleed and change background colour; the *content inside* respects the max width. Two adjacent bands never share a background colour.

Text measure is capped at 64ch; intro paragraphs at ~52ch.

### Corners, borders, shadows
- **Square by default.** `--radius-none: 0` on cards, buttons, inputs, dialogs, images. The only rounded things in the system are pill Tags, radio buttons, the round media transport button, and the waveform bars (which are round-capped in the logo itself).
- Borders are 1px hairline (`rgba(248,232,208,.16)`) for dividers, 2px solid for inputs and outlined buttons, 3px for the active tab underline, 6px for a section rule.
- **No soft drop shadows anywhere.** Depth is a **hard offset block** — `8px 8px 0 0` in ink, amber or voltage. Use it on light and coloured surfaces only; on black it's invisible, so on black a panel is separated by border or background shift instead.

### Cards
Square, near-black (`--surface-1 #121110`), 1px hairline border, 24px padding. Media sits in a 4:3 well flush to the card edges with the body padded beneath. Light and amber cards get the offset block. Interactive cards lift `-2px,-2px` and take an amber border on hover; their image scales to 1.04 over 420ms.

### Imagery
Six photographs are in `assets/imagery/`. They set the standard: **warm, close, and unglamorous.** Shot on phones at real gigs — the shop floor at Midland Records under fluorescent tubes, a stage wash of magenta and orange, an artist against a graffiti wall, one sepia-toned portrait. Motion blur, grain and cluttered backgrounds are part of the character, not defects to retouch out.

Rules: crop tight on the player. Warm grade — cool-blue stage shots fight the amber. Full-bleed placement with the black bottom-veil (`--overlay-bottom`) under any overlaid type, or a 90° left-weighted gradient behind a hero headline. Where a still is missing, the fallback is an accent colour block carrying the waveform motif.

### Posters
The gig poster is the brand's loudest asset and the site treats it as **content, not decoration** — there is a `Poster` component and a poster grid on both the home and What's On screens.

The posters are hand-lettered brush type, cream on black, with halftone dot fields and grain at the edges. **Do not imitate that lettering in web type.** The site's job is to show the real poster and set the same words in Archivo Black beside it; the shared colour makes the connection. Never crop a poster's lettering, never overlay type on one, never place one inside a coloured card.

### Motion
Fast and mechanical. `--dur-fast 140ms` for hover and press, `--dur-base 220ms` for panels and tabs, `--dur-slow 420ms` for image scale, `--dur-scene 900ms` for a hero reveal. One curve does almost everything: `cubic-bezier(.2,.8,.25,1)`.

- **Hover** — fills invert (outlined bone button becomes solid bone with ink text); blocks translate `-2px,-2px`; links move to amber-300. Never a plain opacity fade.
- **Press** — translate `+2px,+2px`. The element visibly moves into the page. Offset shadows shrink to match.
- **Disabled** — opacity 0.35, pointer-events off.
- **Focus** — 2px `--rs-teal-300` ring, 2px offset. The one place an accent appears at small scale.
- The ticker strip scrolls linearly and never pauses. The waveform animates *only* while audio or video is actually playing.
- Everything above collapses to zero duration under `prefers-reduced-motion`.

### Transparency and blur
Used once: the sticky header sits on `rgba(0,0,0,.92)` with `saturate(140%) blur(14px)`. Scrims are flat black at 72% (dialog) and 45% (media). No frosted-glass cards, no translucent panels over content.

---

## Iconography

**Lucide, 2px stroke, via CDN** — `https://unpkg.com/lucide@0.462.0/dist/umd/lucide.js`.

⚠️ **Substitution flagged.** Rising Sound WA has no icon set of its own; nothing was supplied. Lucide's uniform 2px outline weight sits correctly against Archivo and doesn't compete with the waveform mark. If the organisation adopts a set later, swap it behind the `Icon` component and nothing else changes.

- Sizes: 16, 18, 20, 24 only. Colour is always `currentColor`.
- Common glyphs: `ticket`, `calendar`, `calendar-plus`, `play`, `pause`, `search`, `menu`, `arrow-right`, `share-2`, `check`, `triangle-alert`, `map-pin`, `users`.
- Icons are **paired with text** in buttons; icon-only controls are `IconButton` and always carry a `label`.
- **No emoji, anywhere.** No unicode characters standing in for icons — with two deliberate exceptions in text: the `·` separator in metadata lines and the `—` bullet in tier feature lists.
- The waveform mark is a **brand motif, not an icon**. It is never used inside a button, never at icon scale in a text run, and never recoloured outside the amber ramp.

### Logo rules
`assets/` holds the supplied artwork in five forms: `logo-lockup-transparent.png` (cream + amber, the default), `logo-lockup-dark.png` (as supplied, on solid black), `logo-lockup-ink.png` and `logo-wordmark-ink.png` (recoloured for light surfaces), `logo-wordmark.png`, `mark-waveform.png`. The ink variants are colourway derivations of the supplied file — no letterform was redrawn.

Clear space equals the height of the "R". Minimum lockup height 24px, mark 16px. Never stretch, rotate, outline, add a shadow to, or place the cream lockup on amber.
