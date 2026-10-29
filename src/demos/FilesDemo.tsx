// ReboFiles: the drive, kept in the page with no server, holding files of
// the other apps of the suite, each shown by its own engine.

import { type Context, type Drive, addFile, createFolder, emptyDrive } from '@rebofiles/core';
import { FileDrive, type MemoryClient, createMemoryClient } from '@rebofiles/react';
import { pictureOfDocx, previewDocx, textOfDocx, viewDocx } from '@rebofiles/react/rebodocs';
import { sheetsFormat } from '@rebofiles/react/rebosheets';
import { slidesFormat } from '@rebofiles/react/reboslides';
import { THEMES, serializeDeck, themedDeck } from '@reboslides/core';
import { exportXlsx, sampleWorkbook } from '@rebosheets/core';
import { useEffect, useState } from 'react';
import type { DemoProps } from './shared';

const FORMATS = [slidesFormat, sheetsFormat];
const DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const YOU = 'Demo';

/** A picture to look at: the six colours of the suite, as a PNG drawn here. */
async function picture(): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const context = canvas.getContext('2d')!;
  const colours = ['#0b57d0', '#6741d9', '#0e7c52', '#c2410c', '#0d9488', '#c2255c'];
  colours.forEach((colour, i) => {
    context.fillStyle = colour;
    context.fillRect((i % 3) * 400, Math.floor(i / 3) * 400, 400, 400);
  });
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob!), 'image/png'));
}

async function seed(lang: 'es' | 'en'): Promise<{ drive: Drive; blobs: Map<string, Blob> }> {
  const es = lang === 'es';
  const blobs = new Map<string, Blob>();
  let drive = emptyDrive();
  const at = (days: number): Context => ({ by: YOU, at: new Date(Date.now() - days * 86_400_000).toISOString() });
  const folder = (id: string, name: string, days: number) => (drive = createFolder(drive, { id, name, parent: null }, at(days)));
  const file = (id: string, name: string, parent: string | null, blob: Blob, days: number) => {
    const key = `${id}/v1`;
    blobs.set(key, blob);
    drive = addFile(drive, { id, name, parent, type: blob.type, version: { id: 'v1', key, size: blob.size } }, at(days));
  };

  folder('contracts', es ? 'Contratos' : 'Contracts', 9);
  folder('reports', es ? 'Informes' : 'Reports', 7);
  folder('brand', es ? 'Marca' : 'Brand', 5);

  const docx = await (await fetch('/demos/sample.docx')).arrayBuffer();
  file('agreement', es ? 'contrato.docx' : 'agreement.docx', null, new Blob([docx], { type: DOCX }), 0);
  file('budget', es ? 'presupuesto.xlsx' : 'budget.xlsx', null, new Blob([exportXlsx(sampleWorkbook(lang))], { type: XLSX }), 1);
  const deck = themedDeck(THEMES[2], { width: 960, height: 540 }, es ? 'Plan del trimestre' : 'Plan for the quarter', lang);
  file('plan', es ? 'plan.reboslides' : 'plan.reboslides', null, new Blob([serializeDeck(deck)], { type: 'application/json' }), 2);
  file('notes', es ? 'notas.md' : 'notes.md', null, new Blob([es ? '# Reunión\n\n- Revisar el contrato\n- Enviar el presupuesto' : '# Meeting\n\n- Review the agreement\n- Send the budget'], { type: 'text/markdown' }), 3);
  file('colours', es ? 'colores.png' : 'colours.png', 'brand', await picture(), 4);
  file('sales', es ? 'ventas.csv' : 'sales.csv', 'reports', new Blob([es ? 'Mes,Ventas\nEnero,1200\nFebrero,1850\nMarzo,2100\n' : 'Month,Sales\nJanuary,1200\nFebruary,1850\nMarch,2100\n'], { type: 'text/csv' }), 6);
  return { drive, blobs };
}

export default function FilesDemo({ lang, dark }: DemoProps) {
  const [client, setClient] = useState<MemoryClient>();
  useEffect(() => {
    let live = true;
    seed(lang).then(({ drive, blobs }) => live && setClient(createMemoryClient({ drive, blobs, user: YOU, label: 'memory://demo' })));
    return () => {
      live = false;
    };
  }, [lang]);
  if (!client) return null;
  return (
    <FileDrive
      client={client}
      language={lang}
      title="Acme Files"
      theme={dark ? 'dark' : 'light'}
      previewDocument={previewDocx}
      viewDocument={viewDocx}
      textDocument={textOfDocx}
      pictureDocument={pictureOfDocx}
      formats={FORMATS}
    />
  );
}
