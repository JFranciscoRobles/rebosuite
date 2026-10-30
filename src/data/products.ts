// The six apps of the suite, as the page shows them, in both languages. What
// each says is taken from its own README: change it there first.

export type Lang = 'es' | 'en';
type Text = Record<Lang, string>;

export interface Product {
  id: string;
  name: string;
  /** The colour of its logo, and a pale one to lay under it. */
  color: string;
  pale: string;
  /** A darker one for text, where its colour reads under 4.5:1 on white or on its pale one. */
  text?: string;
  /** The same two for a dark page. */
  colorDark: string;
  paleDark: string;
  kind: Text;
  tagline: Text;
  description: Text;
  features: Record<Lang, string[]>;
  formats: string | Text;
  /** The package to install, and its version on npm; none while it is not there. */
  npm?: { name: string; version: string };
  site?: string;
  repo?: string;
  snippet: { lang: 'tsx' | 'ts'; code: string };
}

export const PRODUCTS: Product[] = [
  {
    id: 'rebodocs',
    name: 'Rebodocs',
    color: '#0b57d0',
    pale: '#e8f0fd',
    colorDark: '#8ab4f8',
    paleDark: '#172a4a',
    kind: { es: 'Documentos', en: 'Documents' },
    tagline: { es: 'Word en el navegador, con motor propio.', en: 'Word in the browser, with an engine of its own.' },
    description: {
      es: 'Abre, edita y guarda archivos DOCX dentro de tu aplicación: control de cambios, versiones, plantillas, colaboración en tiempo real y PDF.',
      en: 'Open, edit and save DOCX files inside your application: tracked changes, versions, templates, real-time collaboration and PDF.',
    },
    features: {
      es: ['Control de cambios, notas y versiones', 'Plantillas con {{variables}}', 'Exportación a PDF', 'Colaboración en tiempo real'],
      en: ['Tracked changes, notes and versions', 'Templates with {{variables}}', 'Export to PDF', 'Real-time collaboration'],
    },
    formats: 'DOCX · PDF',
    npm: { name: '@rebodocs/react', version: '0.13.0' },
    site: 'https://rebodocs.com',
    repo: 'https://github.com/JFranciscoRobles/rebodocs',
    snippet: {
      lang: 'tsx',
      code: `import { DocsEditor } from '@rebodocs/react';

<DocsEditor
  docx={file}
  name="contract.docx"
  onSave={(docx) => upload(docx)}
/>`,
    },
  },
  {
    id: 'reboslides',
    name: 'ReboSlides',
    color: '#6741d9',
    pale: '#f0ebf8',
    colorDark: '#b9a5f5',
    paleDark: '#2b2340',
    kind: { es: 'Presentaciones', en: 'Presentations' },
    tagline: { es: 'Un estudio de presentaciones de diseño libre.', en: 'A presentation studio, laid out freely.' },
    description: {
      es: 'Texto, formas e imágenes colocados donde quieras, con temas y plantillas, modo presentación y exportación a PDF vectorial. El texto lo compone el motor de Rebodocs.',
      en: 'Text, shapes and pictures placed wherever you want, with themes and templates, presenting, and export to vector PDF. Its text is set by the Rebodocs engine.',
    },
    features: {
      es: ['Guías de alineación, grupos y capas', 'Temas y plantillas', 'Presentación a pantalla completa', 'PDF vectorial, PNG y PPTX'],
      en: ['Alignment guides, groups and layers', 'Themes and templates', 'Full-screen presenting', 'Vector PDF, PNG and PPTX'],
    },
    formats: 'PPTX · PDF · PNG',
    npm: { name: '@reboslides/react', version: '0.7.0' },
    repo: 'https://github.com/JFranciscoRobles/reboslides',
    snippet: {
      lang: 'tsx',
      code: `import { SlideStudio } from '@reboslides/react';

<SlideStudio
  deck={deck}
  onChange={(deck) => save(deck)}
/>`,
    },
  },
  {
    id: 'rebosheets',
    name: 'Rebosheets',
    color: '#0e7c52',
    text: '#0b6b47',
    pale: '#e7f3ea',
    colorDark: '#93d4a2',
    paleDark: '#1b3322',
    kind: { es: 'Hojas de cálculo', en: 'Spreadsheets' },
    tagline: { es: 'Excel en el navegador, con motor propio.', en: 'Excel in the browser, with an engine of its own.' },
    description: {
      es: 'Su propio modelo de libro, fórmulas que dan los mismos valores que Excel, formatos de número, lectura y escritura de XLSX y una cuadrícula dibujada en canvas.',
      en: 'Its own workbook model, formulas that give the values Excel gives, number formats, an XLSX reader and writer, and a grid drawn on canvas.',
    },
    features: {
      es: ['Fórmulas calculadas como Excel', 'Formatos de número y fechas', 'Gráficas y varias hojas', 'Libros llenados en el servidor'],
      en: ['Formulas worked out as Excel does', 'Number and date formats', 'Charts and many sheets', 'Workbooks filled on the server'],
    },
    formats: 'XLSX · CSV',
    npm: { name: '@rebosheets/react', version: '0.1.0' },
    repo: 'https://github.com/JFranciscoRobles/rebosheets',
    snippet: {
      lang: 'tsx',
      code: `import { SheetsEditor } from '@rebosheets/react';

<SheetsEditor
  xlsx={file}
  name="budget.xlsx"
  onSave={(xlsx) => upload(xlsx)}
/>`,
    },
  },
  {
    id: 'rebofiles',
    name: 'ReboFiles',
    color: '#c2410c',
    text: '#b23c0b',
    pale: '#fdeee2',
    colorDark: '#fb923c',
    paleDark: '#3b2216',
    kind: { es: 'Archivos', en: 'Files' },
    tagline: { es: 'Un drive dentro de tu app, en tu almacenamiento.', en: 'A drive inside your app, on your own storage.' },
    description: {
      es: 'Carpetas, subidas, vistas previas, versiones, papelera y compartir. Los bytes van directo del navegador a tu bucket, en direcciones que firma tu servidor.',
      en: 'Folders, uploads, previews, versions, the trash and sharing. The bytes go straight from the browser to your bucket, at addresses your server signs.',
    },
    features: {
      es: ['S3, R2, Google Cloud Storage o Azure', 'Subidas por partes que se reanudan', 'Búsqueda por nombre y por contenido', 'Vistas previas de toda la suite'],
      en: ['S3, R2, Google Cloud Storage or Azure', 'Uploads in parts that resume', 'Search by name and by what is written', 'Previews of the whole suite'],
    },
    formats: { es: 'Cualquier archivo', en: 'Any file' },
    npm: { name: '@rebofiles/react', version: '0.13.0' },
    site: 'https://rebofiles.com',
    repo: 'https://github.com/JFranciscoRobles/rebofiles',
    snippet: {
      lang: 'tsx',
      code: `import { FileDrive } from '@rebofiles/react';

<FileDrive
  base="/api/files"
  title="Acme Files"
  language="es"
/>`,
    },
  },
  {
    id: 'rebomail',
    name: 'Rebomail',
    color: '#0d9488',
    text: '#0b6f68',
    pale: '#ddf3f0',
    colorDark: '#5eead4',
    paleDark: '#12312e',
    kind: { es: 'Correos', en: 'Emails' },
    tagline: { es: 'Correos que se ven bien en cualquier bandeja.', en: 'Emails that look right in every inbox.' },
    description: {
      es: 'Bloques en secciones y columnas, escritos sobre el propio correo, convertidos al HTML que leen todas las bandejas, con su versión en texto plano.',
      en: 'Blocks in sections and columns, written on the email itself, made into the HTML every inbox reads, with a plain-text version beside it.',
    },
    features: {
      es: ['Bloques que se arrastran a columnas', 'Variables y clics contados', 'Columnas apiladas en el móvil', 'Envío por SMTP o Resend'],
      en: ['Blocks dragged into columns', 'Variables and counted clicks', 'Columns stacked on a phone', 'Sent by SMTP or Resend'],
    },
    formats: 'HTML · Text',
    npm: { name: '@rebomail/react', version: '0.1.0' },
    repo: 'https://github.com/JFranciscoRobles/rebomail',
    snippet: {
      lang: 'tsx',
      code: `import '@rebomail/react/styles.css';
import { MailEditor } from '@rebomail/react';

<MailEditor email={email} onChange={save} />`,
    },
  },
  {
    id: 'rebonotes',
    name: 'ReboNotes',
    color: '#c2255c',
    pale: '#fbe8ef',
    colorDark: '#f3a9c3',
    paleDark: '#3d1f2b',
    kind: { es: 'Notas y wikis', en: 'Notes and wikis' },
    tagline: { es: 'Notas y wikis guardadas como Markdown.', en: 'Notes and wikis kept as Markdown.' },
    description: {
      es: 'Páginas de bloques editadas en su lugar, un árbol de páginas, enlaces entre ellas y búsqueda rápida. Cada página es un archivo Markdown que puedes guardar en git.',
      en: 'Pages of blocks edited in place, a tree of pages, links between them and quick search. Every page is a Markdown file you can keep in git.',
    },
    features: {
      es: ['Árbol de páginas y enlaces', 'Markdown de verdad, también en zip', 'Documentos, hojas y presentaciones en la página', 'Herramientas para asistentes de IA'],
      en: ['A tree of pages and links', 'Real Markdown, as a zip too', 'Documents, sheets and decks in the page', 'Tools for AI assistants'],
    },
    formats: 'Markdown',
    npm: { name: '@rebonotes/react', version: '0.1.0' },
    repo: 'https://github.com/JFranciscoRobles/rebonotes',
    snippet: {
      lang: 'tsx',
      code: `import { NotesEditor } from '@rebonotes/react';

<NotesEditor workspace={workspace} onChange={save} />`,
    },
  },
];
