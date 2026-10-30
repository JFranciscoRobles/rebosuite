# Rebo suite

The landing page of the Rebo suite: Rebodocs, ReboSlides, Rebosheets,
ReboFiles, Rebomail and ReboNotes, side by side. Built with Astro, static,
in Spanish at `/` and English at `/en/`, light and dark as the system is.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # the site in dist/
npm run preview
```

## Where things are

| File | What it is |
| --- | --- |
| `src/data/products.ts` | The six apps: their colours, what each says, its features, its package and version on npm, its links and its code example. Taken from each app's README. |
| `src/data/copy.ts` | What the page says around them, in both languages. |
| `src/components/Landing.astro` | The page, its styles and its few lines of script (the tabs of code, copying the install command). |
| `src/demos/` | One demo of each app, in React: the apps from npm with a sample file each (a Word document, a deck, a workbook, a drive kept in memory, an email). `Demos.tsx` loads each only when its tab is chosen and the section is near, and keeps those opened as they were. |
| `src/layouts/Base.astro` | The document: title, description, the language alternates. |
| `src/styles/global.css` | The warm neutrals of the suite, and each app's colour in light and dark. |
| `public/logos/` | Each app's logo, as in its own repository. |

When an app publishes a new version, change its `npm.version` in
`src/data/products.ts`, and its package in `package.json`. Every app with `npm` has a demo: its component in `src/demos/`, named in `DEMOS` of `src/demos/DemoPage.tsx`.
