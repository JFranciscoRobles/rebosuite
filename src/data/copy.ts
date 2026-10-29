// What the page says around the products, in both languages.

import type { Lang } from './products';

export const GITHUB = 'https://github.com/JFranciscoRobles';

export const COPY = {
  es: {
    title: 'Rebo — La suite de oficina para tu aplicación',
    description:
      'Documentos, presentaciones, hojas de cálculo, archivos, correos y notas para el navegador, con motores propios. Código abierto, en npm, para React o sin framework.',
    nav: { products: 'Productos', demo: 'Pruébalas', together: 'Juntos', code: 'Código', why: 'Por qué Rebo' },
    otherLang: { label: 'English', href: '/en/' },
    hero: {
      eyebrow: 'Código abierto · MIT · TypeScript',
      title: ['La oficina completa,', 'dentro de tu aplicación.'],
      lead: 'Seis aplicaciones para el navegador —documentos, presentaciones, hojas de cálculo, archivos, correos y notas— con motores propios. Las instalas desde npm y las pones en tu app como un componente más.',
      primary: 'Ver los productos',
      secondary: 'GitHub',
      copied: 'Copiado',
      copy: 'Copiar',
    },
    strip: 'Archivos de verdad, no formatos inventados',
    products: {
      eyebrow: 'Los productos',
      title: 'Seis apps, un mismo aspecto',
      lead: 'Cada una funciona sola, con su paquete y su documentación. Juntas se ven y se comportan como una sola suite, en claro y en oscuro.',
      site: 'Sitio',
      soon: 'Próximamente en npm',
    },
    demo: {
      eyebrow: 'Pruébalas',
      title: 'Úsalas aquí mismo',
      lead: 'Cada demo es la app real, cargada desde npm, con un archivo de ejemplo. Escribe, mueve, cambia formatos: nada se guarda ni sale de tu navegador.',
      tablist: 'Demos por app',
      loading: 'Cargando {app}…',
      reset: 'Empezar de nuevo',
      local: 'Todo ocurre en tu navegador. Al recargar, cada demo vuelve a empezar.',
      soon: 'ReboNotes llega pronto',
      soonText: 'Su demo estará aquí en cuanto esté en npm.',
      failed: 'Esta demo no pudo abrirse en este navegador.',
    },
    together: {
      eyebrow: 'Juntos',
      title: 'Hechas para trabajar juntas',
      lead: 'Las apps de la suite comparten motores: lo que una sabe hacer, las otras lo aprovechan.',
      links: [
        {
          from: ['rebodocs'],
          to: 'reboslides',
          title: 'El texto de cada diapositiva',
          text: 'ReboSlides compone el texto de cada caja con el motor de Rebodocs: los mismos párrafos, listas, fuentes y medidas que un DOCX.',
        },
        {
          from: ['rebodocs', 'reboslides', 'rebosheets'],
          to: 'rebofiles',
          title: 'Vistas previas en el drive',
          text: 'ReboFiles muestra documentos, presentaciones y hojas de cálculo con sus propios motores: la miniatura de cada uno y el archivo entero en el visor.',
        },
        {
          from: ['rebodocs', 'reboslides', 'rebosheets'],
          to: 'rebonotes',
          title: 'Archivos dentro de una página',
          text: 'ReboNotes pone documentos, hojas y presentaciones de la suite dentro de sus páginas, junto al texto en Markdown.',
        },
      ],
    },
    code: {
      eyebrow: 'Código',
      title: 'Un componente y listo',
      lead: 'Cada app es un componente de React con todo incluido, o hooks sin interfaz para construir la tuya. También funcionan sin framework.',
      tablist: 'Ejemplos de código por producto',
    },
    why: {
      eyebrow: 'Por qué Rebo',
      title: 'Lo que tienen en común',
      items: [
        { icon: 'engine', title: 'Motores propios', text: 'No envuelven otra librería: cada app trae su propio modelo, su maquetación y su lector y escritor de archivos.' },
        { icon: 'file', title: 'Archivos de verdad', text: 'DOCX, XLSX, PPTX, PDF, Markdown y el HTML que leen las bandejas de correo. Se abren y se guardan en los formatos de siempre.' },
        { icon: 'server', title: 'En tu infraestructura', text: 'Tus archivos se quedan en tu servidor y en tu almacenamiento. Tú decides quién puede ver y hacer qué.' },
        { icon: 'people', title: 'En tiempo real', text: 'Varias personas en el mismo documento, presentación u hoja, cada una con su cursor y su propio deshacer.' },
        { icon: 'spark', title: 'Listas para la IA', text: 'Servidores MCP para que Claude y otros asistentes lean y editen documentos, presentaciones, hojas y archivos.' },
        { icon: 'globe', title: 'Español e inglés', text: 'Interfaces en los dos idiomas, tema claro y oscuro, y pensadas para teclado y lectores de pantalla.' },
      ],
    },
    cta: {
      title: 'Empieza con una sola app',
      text: 'Instala la que necesites hoy y suma las demás cuando las necesites. Todas son MIT.',
      button: 'Ver en GitHub',
    },
    footer: { made: 'Hecho con Astro. Código abierto bajo licencia MIT.' },
  },
  en: {
    title: 'Rebo — The office suite for your application',
    description:
      'Documents, presentations, spreadsheets, files, emails and notes for the browser, with engines of their own. Open source, on npm, for React or no framework.',
    nav: { products: 'Products', demo: 'Try them', together: 'Together', code: 'Code', why: 'Why Rebo' },
    otherLang: { label: 'Español', href: '/' },
    hero: {
      eyebrow: 'Open source · MIT · TypeScript',
      title: ['A whole office suite,', 'inside your application.'],
      lead: 'Six apps for the browser —documents, presentations, spreadsheets, files, emails and notes— with engines of their own. Install them from npm and put them in your app as one more component.',
      primary: 'See the products',
      secondary: 'GitHub',
      copied: 'Copied',
      copy: 'Copy',
    },
    strip: 'Real files, not formats of our own',
    products: {
      eyebrow: 'The products',
      title: 'Six apps, one look',
      lead: 'Each works on its own, with its package and its documentation. Together they look and behave as one suite, light and dark.',
      site: 'Website',
      soon: 'Coming to npm',
    },
    demo: {
      eyebrow: 'Try them',
      title: 'Use them right here',
      lead: 'Each demo is the real app, loaded from npm, with a sample file. Type, move things, change formats: nothing is saved or leaves your browser.',
      tablist: 'Demos by app',
      loading: 'Loading {app}…',
      reset: 'Start over',
      local: 'It all happens in your browser. Reload, and each demo starts again.',
      soon: 'ReboNotes is coming',
      soonText: 'Its demo will be here as soon as it is on npm.',
      failed: 'This demo could not open in this browser.',
    },
    together: {
      eyebrow: 'Together',
      title: 'Made to work together',
      lead: 'The apps of the suite share their engines: what one can do, the others use.',
      links: [
        {
          from: ['rebodocs'],
          to: 'reboslides',
          title: 'The text of every slide',
          text: 'ReboSlides sets the text of each box with the Rebodocs engine: the same paragraphs, lists, fonts and measurements as a DOCX.',
        },
        {
          from: ['rebodocs', 'reboslides', 'rebosheets'],
          to: 'rebofiles',
          title: 'Previews in the drive',
          text: 'ReboFiles shows documents, decks and workbooks with their own engines: a thumbnail of each, and the whole file in the viewer.',
        },
        {
          from: ['rebodocs', 'reboslides', 'rebosheets'],
          to: 'rebonotes',
          title: 'Files inside a page',
          text: 'ReboNotes puts the suite’s documents, sheets and decks inside its pages, beside their Markdown.',
        },
      ],
    },
    code: {
      eyebrow: 'Code',
      title: 'One component, and done',
      lead: 'Each app is a React component with everything in it, or headless hooks to build your own interface. They work without a framework too.',
      tablist: 'Code examples by product',
    },
    why: {
      eyebrow: 'Why Rebo',
      title: 'What they have in common',
      items: [
        { icon: 'engine', title: 'Engines of their own', text: 'They wrap no other library: each app brings its own model, its own layout, and its own file reader and writer.' },
        { icon: 'file', title: 'Real files', text: 'DOCX, XLSX, PPTX, PDF, Markdown, and the HTML inboxes read. Opened and saved in the formats everyone uses.' },
        { icon: 'server', title: 'On your infrastructure', text: 'Your files stay on your server and your storage. You decide who may see and do what.' },
        { icon: 'people', title: 'Real time', text: 'Several people in the same document, deck or sheet, each with their own cursor and their own undo.' },
        { icon: 'spark', title: 'Ready for AI', text: 'MCP servers so Claude and other assistants can read and edit documents, decks, sheets and files.' },
        { icon: 'globe', title: 'English and Spanish', text: 'Interfaces in both languages, light and dark themes, and made for the keyboard and screen readers.' },
      ],
    },
    cta: {
      title: 'Start with one app',
      text: 'Install the one you need today, and add the rest when you need them. All are MIT.',
      button: 'See on GitHub',
    },
    footer: { made: 'Made with Astro. Open source under the MIT license.' },
  },
} satisfies Record<Lang, unknown>;
