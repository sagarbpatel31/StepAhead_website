# StepAhead — Capstone Website (Next.js + Tailwind, Vercel-ready)

Pixel-perfect implementation of the "Desktop Final Website" Figma frame.
Font: **Exo 2** · Primary color: **#080E62** · Accent: **#F26522** (orange).

This build contains **8 sections** (Trust Strip and Reviews intentionally
omitted): NavBar · Hero · Features · How It Works · How We Help ·
Mission Banner · FAQ · Footer.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy to Vercel

1. `git init && git add . && git commit -m "init"`
2. Push to GitHub (e.g. `gh repo create stepahead --public --source=. --push`).
3. Go to <https://vercel.com/new> → Import the repo → **Deploy**. No env
   vars are needed for the base site.

## Project structure
Editing copy or images? Open `content/site.json` — no React knowledge needed.

## Asset export checklist (Figma → `public/images/`)

Figma file: **Capstone** · Frame: **Desktop Final Website** (1536 × 5786px).
Open Dev Mode, select each layer, click **Export** in the right panel.

| Target path                               | What it is                                    | Format    |
|-------------------------------------------|-----------------------------------------------|-----------|
| public/images/logo.svg                    | "Step↗Ahead" wordmark                         | SVG       |
| public/images/hero.jpg                    | Parent + baby photo (hero background)         | JPG @2x   |
| public/images/feature-phones.png          | Two phones beside the feature list            | PNG @2x   |
| public/images/icons/track.svg             | Feature row 1 icon                            | SVG       |
| public/images/icons/compare.svg           | Feature row 2 icon                            | SVG       |
| public/images/icons/share.svg             | Feature row 3 icon                            | SVG       |
| public/images/icons/inform.svg            | Feature row 4 icon                            | SVG       |
| public/images/phones/record-phone.png     | Record step: phone mockup                     | PNG @2x   |
| public/images/phones/record-stick.png     | Record step: the stick under the phone        | PNG @2x   |
| public/images/phones/analyze.png          | Analyze step: full phone screen with icons    | PNG @2x   |
| public/images/phones/track.png            | Track step: full phone screen with icons      | PNG @2x   |
| public/images/phones/help.png             | How We Help: combined 3-phone composite       | PNG @2x   |
| public/images/sarah.jpg                   | Sarah & Emily testimonial avatar              | JPG/PNG   |
| public/images/store.svg                   | Combined App Store + Google Play badges       | SVG       |

> **Tip for Analyze / Track:** in Figma, select the **parent frame** for
> each step (the one that wraps all the inner icons + phone screen) and
> Export the whole frame as a single PNG @2x. That way you don't have to
> reassemble the individual icons after unzipping.

## Editing content without code

Open `content/site.json` and change any string, image path, or list item.
Save → the site reflects it on next render.

## Drag-and-drop editing with Builder.io (optional)

```bash
npm i @builder.io/react @builder.io/sdk
```

1. Create a Space at <https://builder.io>.
2. Add the **Public API Key** to `.env.local`:
Also add it as an Environment Variable in your Vercel project.
3. `builder-registry.ts` is pre-wired with all 8 sections. In Builder's
   web UI, create a Page model and drag the registered components onto
   the canvas. Editors can swap text, images and reorder sections — no
   redeploy needed.

## Optional: auto-fetch Figma assets

Use `scripts/fetch-figma-assets.mjs` with a Figma personal access token
(`figma.com/settings`) to download assets straight from the file:

```bash
FIGMA_TOKEN=figd_xxx node scripts/fetch-figma-assets.mjs
```

Replace the `TODO` node IDs inside the script with the IDs shown in the
Figma URL bar (`?node-id=1494-1747` → use `1494:1747` here).

## Troubleshooting

- **Images don't load** → you haven't exported assets yet. See checklist.
- **Font looks wrong** → confirm `app/layout.tsx` is wiring the `Exo_2`
  next/font import (it is, by default).
- **Tailwind classes not applying** → ensure `content` paths in
  `tailwind.config.ts` include `./app` and `./components`.

## License

Internal capstone project — adapt freely.
