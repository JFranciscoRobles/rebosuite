// ReboPDF: the whole editor, on its sample agreement with a form to fill.
// PDF.js reads it in a worker of its own, so the page keeps answering.

import { type Pdf, samplePdf, usePdfWorker } from '@rebopdf/core';
import { PdfEditor } from '@rebopdf/react';
import worker from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';
import { useEffect, useState } from 'react';
import type { DemoProps } from './shared';

usePdfWorker(worker);

export default function PdfDemo({ lang, dark }: DemoProps) {
  const [pdf, setPdf] = useState<Pdf>();
  useEffect(() => {
    let live = true;
    void samplePdf(lang).then((made) => live && setPdf(made));
    return () => {
      live = false;
    };
  }, [lang]);
  if (!pdf) return null;
  return <PdfEditor pdf={pdf} locale={lang} author="Demo" theme={dark ? 'dark' : 'light'} languages={false} style={{ height: '100%' }} />;
}
