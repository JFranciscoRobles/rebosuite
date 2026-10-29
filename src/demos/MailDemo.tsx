// Rebomail: the editor, on its sample email.

import '@rebomail/react/styles.css';
import { MailEditor, sampleEmail } from '@rebomail/react';
import { useState } from 'react';
import type { DemoProps } from './shared';

export default function MailDemo({ lang }: DemoProps) {
  const [email] = useState(() => sampleEmail(lang));
  return <MailEditor email={email} locale={lang} />;
}
