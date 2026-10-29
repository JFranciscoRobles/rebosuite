// Rebodocs: the whole editor, on a Word document of its own demo.

import { DocsEditor } from '@rebodocs/react';
import { useEffect, useState } from 'react';
import type { DemoProps } from './shared';

export default function DocsDemo({ lang }: DemoProps) {
  const [docx, setDocx] = useState<Uint8Array>();
  useEffect(() => {
    let live = true;
    fetch('/demos/sample.docx')
      .then((response) => response.arrayBuffer())
      .then((bytes) => live && setDocx(new Uint8Array(bytes)));
    return () => {
      live = false;
    };
  }, []);
  if (!docx) return null;
  return <DocsEditor docx={docx} name={lang === 'es' ? 'contrato.docx' : 'agreement.docx'} author="Demo" locale={lang} style={{ height: '100%' }} />;
}
