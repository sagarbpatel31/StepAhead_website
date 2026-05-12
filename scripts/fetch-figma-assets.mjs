// Optional helper: fetches assets straight from Figma via the REST API.
// Usage: FIGMA_TOKEN=figd_xxx node scripts/fetch-figma-assets.mjs
import fs from "node:fs/promises";
import path from "node:path";

const FILE_KEY = "diheYfwOKaKceiCpPlWe5n";
const TOKEN = process.env.FIGMA_TOKEN;
if (!TOKEN) { console.error("Set FIGMA_TOKEN env var"); process.exit(1); }

// Replace TODO node IDs with the ones from the Figma URL (?node-id=XXXX-YYYY).
// Use a colon, not a dash, when filling these in (e.g. "1494:1663").
const ASSETS = [
  { id: "1494:1663", out: "public/images/logo.svg",                 format: "svg" },
  { id: "1494:1662", out: "public/images/hero.jpg",                 format: "jpg", scale: 2 },
  { id: "TODO",      out: "public/images/feature-phones.png",       format: "png", scale: 2 },
  { id: "TODO",      out: "public/images/sarah.jpg",                format: "jpg", scale: 2 },
  { id: "TODO",      out: "public/images/store.svg",                format: "svg" },
  { id: "TODO",      out: "public/images/icons/track.svg",          format: "svg" },
  { id: "TODO",      out: "public/images/icons/compare.svg",        format: "svg" },
  { id: "TODO",      out: "public/images/icons/share.svg",          format: "svg" },
  { id: "TODO",      out: "public/images/icons/inform.svg",         format: "svg" },
  { id: "1494:1747", out: "public/images/phones/record-phone.png",  format: "png", scale: 2 },
  { id: "TODO",      out: "public/images/phones/record-stick.png",  format: "png", scale: 2 },
  { id: "TODO",      out: "public/images/phones/analyze.png",       format: "png", scale: 2 },
  { id: "TODO",      out: "public/images/phones/track.png",         format: "png", scale: 2 },
  { id: "TODO",      out: "public/images/phones/help.png",          format: "png", scale: 2 },
];

for (const a of ASSETS) {
  if (a.id === "TODO") { console.log("skip (TODO):", a.out); continue; }
  const u = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${a.id}&format=${a.format}` +
            (a.scale ? `&scale=${a.scale}` : "");
  const meta = await fetch(u, { headers: { "X-Figma-Token": TOKEN } }).then(r => r.json());
  const url = meta.images?.[a.id];
  if (!url) { console.warn("No image for", a.id); continue; }
  const buf = Buffer.from(await fetch(url).then(r => r.arrayBuffer()));
  await fs.mkdir(path.dirname(a.out), { recursive: true });
  await fs.writeFile(a.out, buf);
  console.log("✓", a.out);
}
