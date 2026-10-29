// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// Spanish at `/`, English at `/en/`. React for the demos of the apps, each loaded when it is opened.
export default defineConfig({
  site: 'https://rebosuite.com',
  integrations: [react()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
