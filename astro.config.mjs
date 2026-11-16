import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// The public site is 100% static HTML (no adapter, no admin). The Keystatic
// admin (/keystatic) only exists when ADMIN=1: in `npm run dev`, and in the
// separate online admin Worker built with `npm run build:admin`.
const admin = process.env.ADMIN === '1';
// The Cloudflare adapter is only for the hosted admin Worker (not for local dev, which uses plain Node).
const hosted = process.env.PUBLIC_ADMIN_BUILD === '1';

export default defineConfig({
  site: 'https://www.risingsoundwa.com.au',
  trailingSlash: admin ? 'ignore' : 'always',
  build: { format: 'directory' },
  ...(hosted ? { adapter: cloudflare({ prerenderEnvironment: 'node', configPath: 'wrangler.admin.jsonc' }) } : {}),
  integrations: [...(admin ? [react(), keystatic()] : [])],
});
