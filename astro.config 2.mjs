import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// The public site is 100% static HTML. The Keystatic admin (/keystatic) only
// needs to exist while editing, so it is switched on by `npm run dev` (ADMIN=1)
// and left out of production builds.
const admin = process.env.ADMIN === '1';

export default defineConfig({
  site: 'https://www.risingsoundwa.com.au',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [...(admin ? [react(), keystatic()] : [])],
});
