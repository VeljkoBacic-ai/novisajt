import { writeFileSync, existsSync } from "fs";
import { join } from "path";

const clientDir = "dist/client";
const indexHtmlPath = join(clientDir, "index.html");

if (existsSync(indexHtmlPath)) {
  console.log("✅ Prerendered index.html found — keeping as-is");
} else {
  console.log("ℹ️  Prerender index.html not found — requests will be served by Netlify Function SSR");
}

writeFileSync(join(clientDir, "_redirects"), "/*   /.netlify/functions/ssr   200\n");
console.log("✅ Netlify postbuild done — _redirects now point to Netlify Function SSR");
