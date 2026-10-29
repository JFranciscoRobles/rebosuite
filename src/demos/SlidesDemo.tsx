// ReboSlides: the studio, on a deck made from one of its themes. Kept in the page alone.

import { SlideStudio, THEMES, googleFontsUrl, themedDeck } from '@reboslides/react';
import { useMemo } from 'react';
import type { DemoProps } from './shared';

// The families its themes are set in, once for the page.
if (typeof document !== 'undefined' && !document.querySelector('link[data-reboslides-fonts]')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = googleFontsUrl();
  link.dataset.reboslidesFonts = '';
  document.head.append(link);
}

export default function SlidesDemo({ lang, dark }: DemoProps) {
  const deck = useMemo(() => themedDeck(THEMES[2], { width: 960, height: 540 }, lang === 'es' ? 'Plan del trimestre' : 'Plan for the quarter', lang), [lang]);
  return <SlideStudio deck={deck} storageKey={null} locale={lang} theme={dark ? 'dark' : 'light'} style={{ height: '100%' }} />;
}
