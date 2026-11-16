// One-off: converts the data arrays in the old Claude Design source into Keystatic content files.
// Usage: node scripts/seed-content.mjs path/to/old/index.html
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import YAML from 'yaml';

const src = readFileSync(process.argv[2], 'utf8');
const script = src.slice(src.indexOf('const EVENTS'), src.indexOf('class Component'));
const { EVENTS, EVENT_POSTERS, EVENT_MEDIA, FEATURED, ARTISTS, SESSIONS } = new Function(
  script + '; return { EVENTS, EVENT_POSTERS, EVENT_MEDIA, FEATURED, ARTISTS, SESSIONS };')();
const cStart = src.indexOf('committee: this.withPhotos([') + 'committee: this.withPhotos('.length;
const cEnd = src.indexOf(']),', cStart) + 1;
const COMMITTEE = new Function('return ' + src.slice(cStart, cEnd))();
const section = (name) => { const a = src.indexOf(name + ': ['); const b = src.indexOf('\n      ],', a); return new Function('return ' + src.slice(a + name.length + 2, b + 8).replace(/\n\s*\],?\s*$/, ']'))(); };

const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const base = (p) => (p ? p.split('/').pop() : null);
const out = (dir, name, data) => { mkdirSync(dir, { recursive: true }); writeFileSync(`${dir}/${name}.yaml`, YAML.stringify(data, { lineWidth: 0 })); };
for (const d of ['events', 'sessions', 'artists', 'committee']) rmSync(`src/content/${d}`, { recursive: true, force: true });

const eventSlug = new Map(EVENTS.map((e) => [e.id, slug(e.title)]));
for (const e of EVENTS) {
  const poster = EVENT_POSTERS[e.id] || {};
  const feat = FEATURED.find((f) => f.id === e.id);
  const media = EVENT_MEDIA[e.id] || {};
  out('src/content/events', slug(e.title), {
    title: e.title, date: e.date, time: e.time || '', venue: e.venue || '', support: e.support || '',
    price: e.price || '', region: e.region, free: !!e.free, badgeTone: e.badge.tone, badgeLabel: e.badge.label,
    ticketUrl: e.url || null, poster: base(poster.src), posterRatio: poster.ratio || '3/4',
    details: e.details || [],
    featured: !!feat, featuredEyebrow: feat?.eyebrow || '', featuredMeta: feat?.meta || '', featuredParagraphs: feat?.paragraphs || [],
    photos: (media.photos || []).map((p) => ({ image: base(p.src), alt: p.alt || '', credit: p.credit || '' })),
    videos: (media.videos || []).map((v) => ({ url: v.url, title: v.title, thumb: base(v.image) })),
  });
}
SESSIONS.forEach((s, i) => out('src/content/sessions', slug(s.artist), {
  artist: s.artist, order: i + 1, song: s.song || '', date: s.date, venue: s.venue, videoUrl: s.url || null,
  still: base(s.image), tone: s.tone, featured: !!s.featured, eventSlug: s.eventId ? eventSlug.get(s.eventId) : '',
}));
const sessKey = Object.fromEntries(SESSIONS.map((s, i) => ['s' + (i + 1), slug(s.artist)]));
for (const a of ARTISTS) out('src/content/artists', slug(a.name), {
  name: a.name, photo: base(a.photo), tone: a.tone, bio: a.bio || '', genre: a.genre || '', area: a.area || '',
  emailUser: a.email?.user || '', emailDomain: a.email?.domain || '', website: a.website || null, facebook: a.facebook || null,
  instagram: a.instagram || null, music: a.music || null, sessionSlug: a.session ? sessKey[a.session] : '',
});
COMMITTEE.forEach((m, i) => out('src/content/committee', slug(m.name), {
  name: m.name, order: i + 1, role: m.role, photo: base(m.photo),
  bio: m.bio.map((p) => p.replace(/^Nici Bull is a Perth hills based singer songwriter\. She started playing music in the early 2000s\. MF has/, 'Nici Bull is a Perth hills based singer songwriter. She started playing music in the early 2000s. Nici has')),
}));

const PILLARS = section('pillars'), VALUES = section('values');
writeFileSync('src/content/copy.json', JSON.stringify({ pillars: PILLARS, values: VALUES }, null, 2));
console.log({ events: EVENTS.length, sessions: SESSIONS.length, artists: ARTISTS.length, committee: COMMITTEE.length, pillars: PILLARS.length, values: VALUES.length });
