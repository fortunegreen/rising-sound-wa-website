import { config, collection, singleton, fields } from '@keystatic/core';

// Local mode: edits are saved as files in this folder and committed with git.
// To let editors work on the live site instead, see DEPLOYMENT.md ("Editing online").
const image = (label: string, directory = 'public/assets') =>
  fields.image({ label, directory, publicPath: '/assets/' });

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Rising Sound WA' } },

  singletons: {
    settings: singleton({
      label: 'Site settings',
      path: 'src/content/settings',
      format: { data: 'yaml' },
      schema: {
        ticker: fields.array(fields.text({ label: 'Message' }), {
          label: 'Scrolling banner on the home page',
          itemLabel: (p) => p.value,
        }),
        email: fields.text({ label: 'Contact email' }),
        venueName: fields.text({ label: 'Home venue name' }),
        venueAddress: fields.text({ label: 'Home venue address' }),
        instagram: fields.url({ label: 'Instagram URL' }),
        facebook: fields.url({ label: 'Facebook URL' }),
        youtube: fields.url({ label: 'YouTube URL (leave blank to hide)' }),
        acknowledgement: fields.text({ label: 'Acknowledgement of Country', multiline: true }),
      },
    }),
    membership: singleton({
      label: 'Membership tiers',
      path: 'src/content/membership',
      format: { data: 'yaml' },
      schema: {
        note: fields.text({ label: 'Note under the tiers' }),
        tiers: fields.array(
          fields.object({
            id: fields.select({
              label: 'Stripe tier (do not change)',
              options: [
                { label: 'member', value: 'member' },
                { label: 'champion', value: 'champion' },
              ],
              defaultValue: 'member',
            }),
            name: fields.text({ label: 'Name' }),
            price: fields.text({ label: 'Price, e.g. $20' }),
            period: fields.text({ label: 'Period', defaultValue: 'per year' }),
            blurb: fields.text({ label: 'Short blurb' }),
            features: fields.array(fields.text({ label: 'Feature' }), { label: 'Features', itemLabel: (p) => p.value }),
            cta: fields.text({ label: 'Button label' }),
            featured: fields.checkbox({ label: 'Highlight this tier' }),
            dialogTitle: fields.text({ label: 'Checkout pop-up title' }),
            dialogBlurb: fields.text({ label: 'Checkout pop-up text' }),
          }),
          { label: 'Tiers', itemLabel: (p) => p.fields.name.value },
        ),
      },
    }),
  },

  collections: {
    events: collection({
      label: 'Events',
      path: 'src/content/events/*',
      slugField: 'title',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        time: fields.text({ label: 'Time, e.g. 12–2pm' }),
        venue: fields.text({ label: 'Venue (name and address)' }),
        support: fields.text({ label: 'Short description', multiline: true }),
        price: fields.text({ label: 'Price, e.g. Free or $25' }),
        region: fields.select({
          label: 'Region',
          options: [
            { label: 'Metro', value: 'Metro' },
            { label: 'Regional', value: 'Regional' },
          ],
          defaultValue: 'Metro',
        }),
        free: fields.checkbox({ label: 'Free entry' }),
        badgeTone: fields.select({
          label: 'Badge colour',
          options: [
            { label: 'Event (amber)', value: 'live' },
            { label: 'Saturday Sessions', value: 'session' },
          ],
          defaultValue: 'live',
        }),
        badgeLabel: fields.text({ label: 'Badge text' }),
        ticketUrl: fields.url({ label: 'Ticket link (leave blank if none)' }),
        startTime: fields.text({ label: 'Start time for Google, 24h like 18:00 (optional)' }),
        endTime: fields.text({ label: 'End time for Google, 24h like 20:30 (optional)' }),
        performers: fields.array(fields.text({ label: 'Performer' }), {
          label: 'Performers (for Google, optional)',
          itemLabel: (p) => p.value,
        }),
        poster: image('Poster'),
        posterRatio: fields.text({ label: 'Poster shape (width/height, e.g. 4/5)', defaultValue: '3/4' }),
        details: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
          label: 'More info (shown under "More info")',
          itemLabel: (p) => p.value.slice(0, 50),
        }),
        featured: fields.checkbox({ label: 'Feature on the What’s on page until the date passes' }),
        featuredEyebrow: fields.text({ label: 'Featured label, e.g. Featured event' }),
        featuredMeta: fields.text({ label: 'Featured date/venue line' }),
        featuredParagraphs: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
          label: 'Featured text',
          itemLabel: (p) => p.value.slice(0, 50),
        }),
        photos: fields.array(
          fields.object({
            image: image('Photo'),
            alt: fields.text({ label: 'Describe the photo (alt text)' }),
            credit: fields.text({ label: 'Photo credit' }),
          }),
          { label: 'Photos after the event', itemLabel: (p) => p.fields.alt.value.slice(0, 50) },
        ),
        videos: fields.array(
          fields.object({
            url: fields.url({ label: 'Vimeo or YouTube link' }),
            title: fields.text({ label: 'Title' }),
            thumb: image('Thumbnail'),
          }),
          { label: 'Videos after the event', itemLabel: (p) => p.fields.title.value },
        ),
      },
    }),

    sessions: collection({
      label: 'Rising Sound Sessions (films)',
      path: 'src/content/sessions/*',
      slugField: 'artist',
      format: { data: 'yaml' },
      schema: {
        artist: fields.slug({ name: { label: 'Artist' } }),
        order: fields.integer({ label: 'Order in the series (1 = first)', validation: { isRequired: true } }),
        song: fields.text({ label: 'Song title' }),
        date: fields.text({ label: 'Date, e.g. Sat 8 Aug 2026' }),
        venue: fields.text({ label: 'Venue', defaultValue: 'Midland Records' }),
        videoUrl: fields.url({ label: 'Vimeo or YouTube link (leave blank until the film is ready)' }),
        still: image('Still image'),
        tone: fields.select({
          label: 'Colour block when there is no still',
          options: ['teal', 'voltage', 'amber', 'flare'].map((v) => ({ label: v, value: v })),
          defaultValue: 'teal',
        }),
        featured: fields.checkbox({ label: 'Featured session (only one)' }),
        eventSlug: fields.text({ label: 'Linked event (slug), optional' }),
      },
    }),

    artists: collection({
      label: 'Artist directory',
      path: 'src/content/artists/*',
      slugField: 'name',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        photo: image('Photo'),
        tone: fields.select({
          label: 'Colour block when there is no photo',
          options: ['teal', 'flare', 'amber', 'lemon', 'voltage'].map((v) => ({ label: v, value: v })),
          defaultValue: 'teal',
        }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        genre: fields.text({ label: 'Genre' }),
        area: fields.text({ label: 'Area' }),
        emailUser: fields.text({ label: 'Email: the part before the @' }),
        emailDomain: fields.text({ label: 'Email: the part after the @' }),
        website: fields.url({ label: 'Website' }),
        facebook: fields.url({ label: 'Facebook' }),
        instagram: fields.url({ label: 'Instagram' }),
        music: fields.url({ label: 'Listen link' }),
        sessionSlug: fields.text({ label: 'Linked session film (artist slug), optional' }),
      },
    }),

    committee: collection({
      label: 'Committee',
      path: 'src/content/committee/*',
      slugField: 'name',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        order: fields.integer({ label: 'Order on the page (1 = first)', validation: { isRequired: true } }),
        role: fields.text({ label: 'Role' }),
        photo: image('Photo'),
        bio: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
          label: 'Bio paragraphs',
          itemLabel: (p) => p.value.slice(0, 50),
        }),
      },
    }),
  },
});
