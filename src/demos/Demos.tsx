// One demo of each app, to use right here. Each is loaded only once its tab
// is chosen and the section is in view, so the page stays light; ReboNotes,
// not on npm yet, says so in its place.

import { Component, type ComponentType, type ReactNode, Suspense, lazy, useEffect, useRef, useState } from 'react';
import type { DemoProps } from './shared';

const DEMOS: Record<string, ComponentType<DemoProps>> = {
  rebodocs: lazy(() => import('./DocsDemo')),
  reboslides: lazy(() => import('./SlidesDemo')),
  rebosheets: lazy(() => import('./SheetsDemo')),
  rebofiles: lazy(() => import('./FilesDemo')),
  rebomail: lazy(() => import('./MailDemo')),
};

export interface DemoApp {
  id: string;
  name: string;
  kind: string;
  style: string;
}

interface Props {
  lang: 'es' | 'en';
  apps: DemoApp[];
  texts: { tablist: string; loading: string; reset: string; local: string; soon: string; soonText: string; failed: string };
}

/** The colours of an app, as the page gives them in a `style` attribute. */
const styleOf = (style: string) => Object.fromEntries(style.split(';').map((pair) => pair.split(':') as [string, string]));

class Fallback extends Component<{ message: string; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <div className="demo-state">{this.props.message}</div> : this.props.children;
  }
}

export default function Demos({ lang, apps, texts }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(apps[0].id);
  const [seen, setSeen] = useState(false);
  // Every demo opened stays, out of sight, so what was done in one is there on coming back; its run starts it over.
  const [opened, setOpened] = useState<string[]>([apps[0].id]);
  const [runs, setRuns] = useState<Record<string, number>>({});
  const [dark, setDark] = useState(false);

  // Loaded once the section is near.
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const near = new IntersectionObserver(([entry]) => entry.isIntersecting && (setSeen(true), near.disconnect()), { rootMargin: '300px' });
    near.observe(element);
    return () => near.disconnect();
  }, []);

  // In the theme the page is in.
  useEffect(() => {
    const scheme = matchMedia('(prefers-color-scheme: dark)');
    const follow = () => setDark(scheme.matches);
    follow();
    scheme.addEventListener('change', follow);
    return () => scheme.removeEventListener('change', follow);
  }, []);

  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const choose = (index: number, focus: boolean) => {
    const app = apps[(index + apps.length) % apps.length];
    setCurrent(app.id);
    if (DEMOS[app.id]) setOpened((ids) => (ids.includes(app.id) ? ids : [...ids, app.id]));
    if (focus) tabs.current[(index + apps.length) % apps.length]?.focus();
  };
  const app = apps.find((a) => a.id === current)!;
  const Demo = DEMOS[current];

  return (
    <div className="demo" ref={root}>
      <div className="demo-bar">
        <div className="demo-tabs" role="tablist" aria-label={texts.tablist}>
          {apps.map((a, i) => (
            <button
              key={a.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`demo-tab-${a.id}`}
              aria-controls="demo-panel"
              aria-selected={a.id === current}
              tabIndex={a.id === current ? 0 : -1}
              data-product=""
              style={styleOf(a.style)}
              onClick={() => choose(i, false)}
              onKeyDown={(event) => {
                const to = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: apps.length - 1 }[event.key];
                if (to === undefined) return;
                event.preventDefault();
                choose(to, true);
              }}
            >
              <img src={`/logos/${a.id}.svg`} alt="" width={20} height={20} />
              {a.name}
            </button>
          ))}
        </div>
        {Demo && (
          <button type="button" className="demo-reset" onClick={() => setRuns((all) => ({ ...all, [current]: (all[current] ?? 0) + 1 }))}>
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M2.5 8a5.5 5.5 0 1 0 1.7-4M2.5 2.5v3h3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {texts.reset}
          </button>
        )}
      </div>

      <div className="demo-frame" role="tabpanel" id="demo-panel" aria-labelledby={`demo-tab-${current}`} data-product="" style={styleOf(app.style)}>
        {seen &&
          opened.map((id) => {
            const Opened = DEMOS[id];
            const shown = id === current;
            const name = apps.find((a) => a.id === id)!.name;
            return (
              <div key={`${id}-${runs[id] ?? 0}`} className={shown ? 'demo-layer' : 'demo-layer demo-away'} inert={!shown}>
                <Fallback message={texts.failed}>
                  <Suspense
                    fallback={
                      <div className="demo-state">
                        <img className="demo-pulse" src={`/logos/${id}.svg`} alt="" width={48} height={48} />
                        {texts.loading.replace('{app}', name)}
                      </div>
                    }
                  >
                    <div className="demo-app">
                      <Opened lang={lang} dark={dark} />
                    </div>
                  </Suspense>
                </Fallback>
              </div>
            );
          })}
        {!Demo && (
          <div className="demo-state">
            <img src={`/logos/${app.id}.svg`} alt="" width={56} height={56} />
            <strong>{texts.soon}</strong>
            <span>{texts.soonText}</span>
          </div>
        )}
      </div>
      <p className="demo-note">{texts.local}</p>
    </div>
  );
}
