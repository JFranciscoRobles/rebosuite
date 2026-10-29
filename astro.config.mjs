// @ts-check
import { defineConfig } from 'astro/config';

// Spanish at `/`, English at `/en/`.
export default defineConfig({
  site: 'https://rebosuite.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
