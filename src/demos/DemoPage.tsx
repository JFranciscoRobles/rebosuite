// One demo alone, as the page inside its frame draws it: each app in a
// document of its own, so the styles and keys of one never reach another.

import { Component, type ComponentType, type ReactNode, Suspense, lazy, useEffect, useState } from 'react';
import type { DemoProps } from './shared';

const DEMOS: Record<string, ComponentType<DemoProps>> = {
  rebodocs: lazy(() => import('./DocsDemo')),
  reboslides: lazy(() => import('./SlidesDemo')),
  rebosheets: lazy(() => import('./SheetsDemo')),
  rebopdf: lazy(() => import('./PdfDemo')),
  rebofiles: lazy(() => import('./FilesDemo')),
  rebomail: lazy(() => import('./MailDemo')),
  rebonotes: lazy(() => import('./NotesDemo')),
};

const TEXTS = {
  es: { loading: 'Cargando {app}…', failed: 'Esta demo no pudo abrirse en este navegador.' },
  en: { loading: 'Loading {app}…', failed: 'This demo could not open in this browser.' },
};

class Fallback extends Component<{ message: string; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <div className="demo-state">{this.props.message}</div> : this.props.children;
  }
}

export default function DemoPage({ app, name }: { app: string; name: string }) {
  const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'es';
  const [dark, setDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches);
  useEffect(() => {
    const scheme = matchMedia('(prefers-color-scheme: dark)');
    const follow = () => setDark(scheme.matches);
    scheme.addEventListener('change', follow);
    return () => scheme.removeEventListener('change', follow);
  }, []);
  const Demo = DEMOS[app];
  const texts = TEXTS[lang];
  return (
    <Fallback message={texts.failed}>
      <Suspense
        fallback={
          <div className="demo-state">
            <img className="demo-pulse" src={`/logos/${app}.svg`} alt="" width={48} height={48} />
            {texts.loading.replace('{app}', name)}
          </div>
        }
      >
        <div className="demo-app">
          <Demo lang={lang} dark={dark} />
        </div>
      </Suspense>
    </Fallback>
  );
}
