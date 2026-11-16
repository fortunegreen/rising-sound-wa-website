import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import sizes from '../image-sizes.json';
import copy from '../content/copy.json';

const reader = createReader(process.cwd(), keystaticConfig);

export const API_BASE = 'https://email-worker.misty-recipe-db89.workers.dev';
export const SITE = 'https://www.risingsoundwa.com.au';

export const asset = (name?: string | null) => (name ? (name.startsWith('/') ? name : `/assets/${name}`) : '');
export const dims = (src: string): { width?: number; height?: number } => {
  const d = (sizes as Record<string, number[]>)[src];
  return d ? { width: d[0], height: d[1] } : {};
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** Today in Perth, as YYYY-MM-DD. Events on or after this date count as upcoming. */
export const todayPerth = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Perth' });

export const embedUrl = (url?: string | null) => {
  if (!url) return null;
  const vimeo = url.match(/vimeo\.com\/(\d+)(?:\/([0-9a-z]+))?/i);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}${vimeo[2] ? `?h=${vimeo[2]}&autoplay=1` : '?autoplay=1'}`;
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/i);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;
  return null;
};

export interface Film {
  key: string; title: string; song: string; image: string; tone: string; episode: string;
  meta: string; url: string | null; embed: string | null; duration: string; anchor: string; slug: string; featured: boolean;
}

export async function getSettings() {
  return (await reader.singletons.settings.read())!;
}
export async function getMembership() {
  return (await reader.singletons.membership.read())!;
}
export const getCopy = () => copy as { pillars: { num: string; title: string; body: string }[]; values: { title: string; body: string }[] };

export async function getSessions(): Promise<Film[]> {
  const all = await reader.collections.sessions.all();
  return all
    .map((e) => ({ slug: e.slug, ...e.entry }))
    .sort((a, b) => a.order - b.order)
    .map((s) => {
      const key = `s${s.order}`;
      return {
        key, slug: s.slug, title: s.artist, song: s.song, image: asset(s.still), tone: s.tone,
        episode: `Session ${String(s.order).padStart(2, '0')}`,
        meta: [s.date, s.venue].filter(Boolean).join(' · '),
        url: s.videoUrl, embed: embedUrl(s.videoUrl), duration: s.videoUrl ? 'Watch' : 'Coming soon',
        anchor: `session-${key}`, featured: s.featured,
      } as Film;
    });
}

export async function getArtists() {
  const all = (await reader.collections.artists.all()).map((e) => ({ slug: e.slug, ...e.entry }));
  const key = (n: string) => n.replace(/^the\s+/i, '').toLowerCase();
  return all.sort((a, b) => key(a.name).localeCompare(key(b.name)));
}

export async function getCommittee() {
  return (await reader.collections.committee.all()).map((e) => ({ slug: e.slug, ...e.entry })).sort((a, b) => a.order - b.order);
}

export interface EventItem {
  slug: string; title: string; date: string; day: string; month: string; dow: string; time: string; venue: string;
  support: string; price: string; region: string; free: boolean; badge: { tone: string; label: string };
  tags: string[]; ticketUrl: string | null; poster: string; posterRatio: string; details: string[];
  featured: boolean; featuredEyebrow: string; featuredMeta: string; featuredParagraphs: string[];
  photos: { src: string; alt: string; credit: string }[]; videos: Film[]; films: Film[];
  startTime: string; endTime: string; performers: string[]; past: boolean; anchor: string;
}

export async function getEvents(): Promise<{ all: EventItem[]; upcoming: EventItem[]; past: EventItem[] }> {
  const today = todayPerth();
  const films = await getSessions();
  const linkMap: Record<string, string[]> = {};
  for (const s of await reader.collections.sessions.all()) {
    if (s.entry.eventSlug) (linkMap[s.entry.eventSlug] ||= []).push(s.slug);
  }
  const raw = (await reader.collections.events.all()).map((e) => ({ slug: e.slug, ...e.entry }));
  const all: EventItem[] = raw
    .map((e) => {
      const date = e.date || '';
      const [y, m, d] = date.split('-').map(Number);
      const dt = new Date(Date.UTC(y, m - 1, d, 12));
      const linked = films.filter((f) => (linkMap[e.slug] || []).includes(f.slug));
      return {
        slug: e.slug, title: e.title, date, day: String(d).padStart(2, '0'), month: MONTHS[m - 1], dow: DOW[dt.getUTCDay()],
        time: e.time, venue: e.venue, support: e.support, price: e.price, region: e.region, free: e.free,
        badge: { tone: e.badgeTone, label: e.badgeLabel }, tags: [e.region, e.free ? 'Free' : 'Ticketed'],
        ticketUrl: e.ticketUrl, poster: asset(e.poster), posterRatio: e.posterRatio, details: [...e.details],
        featured: e.featured, featuredEyebrow: e.featuredEyebrow, featuredMeta: e.featuredMeta, featuredParagraphs: [...e.featuredParagraphs],
        photos: e.photos.map((p) => ({ src: asset(p.image), alt: p.alt, credit: p.credit })),
        videos: e.videos.map((v, i) => ({
          key: `c${e.slug}-${i}`, title: v.title, song: '', image: asset(v.thumb), tone: ['teal', 'flare', 'amber', 'voltage'][i % 4],
          episode: `Clip ${String(i + 1).padStart(2, '0')}`, meta: '', url: v.url, embed: embedUrl(v.url), duration: 'Watch',
          anchor: `clip-${e.slug}-${i}`, slug: '', featured: false,
        })),
        films: linked, startTime: e.startTime, endTime: e.endTime, performers: [...e.performers],
        past: date < today, anchor: `event-${e.slug}`,
      } as EventItem;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
  return { all, upcoming: all.filter((e) => !e.past), past: all.filter((e) => e.past).reverse() };
}

export const googleCalendarUrl = (e: EventItem) => {
  const start = e.date.replace(/-/g, '');
  const next = new Date(Date.UTC(+e.date.slice(0, 4), +e.date.slice(5, 7) - 1, +e.date.slice(8, 10) + 1)).toISOString().slice(0, 10).replace(/-/g, '');
  const p = new URLSearchParams({ action: 'TEMPLATE', text: e.title, dates: `${start}/${next}`, location: e.venue, details: [e.time, e.support, `${SITE}/whats-on/`].filter(Boolean).join('\n') });
  return `https://calendar.google.com/calendar/render?${p}`;
};
