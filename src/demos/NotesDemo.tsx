// ReboNotes: the notes, on their sample workspace. Kept in the page alone.

import { NotesEditor, sampleWorkspace } from '@rebonotes/react';
import { useState } from 'react';
import type { DemoProps } from './shared';

export default function NotesDemo({ lang, dark }: DemoProps) {
  const [workspace] = useState(() => sampleWorkspace(lang));
  return <NotesEditor workspace={workspace} locale={lang} theme={dark ? 'dark' : 'light'} style={{ height: '100%' }} />;
}
