// Rebomail: the editor, on its sample email. It flows with the page it is in,
// so here it is given a margin and a scroll of its own.

import '@rebomail/react/styles.css';
import { MailEditor, sampleEmail } from '@rebomail/react';
import { useState } from 'react';
import type { DemoProps } from './shared';

export default function MailDemo({ lang }: DemoProps) {
  const [email] = useState(() => sampleEmail(lang));
  return (
    <div style={{ height: '100%', overflow: 'auto', padding: 16, boxSizing: 'border-box', background: 'var(--rm-bg, transparent)' }}>
      <MailEditor
        email={email}
        locale={lang}
        preview={{ values: { name: 'Ana' }, footer: 'Rebo Studio · 1 Main St.', unsubscribe: 'https://example.com/unsubscribe' }}
      />
    </div>
  );
}
