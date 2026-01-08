const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const baseUrl = "http://localhost:3000";
const outDir = path.join(__dirname, "screenshots");
const routes = [
  { path: "/", file: "home.png" },
  { path: "/services", file: "services.png" },
  { path: "/gallery", file: "gallery.png" },
  { path: "/about", file: "about.png" },
  { path: "/contact", file: "contact.png" },
  { path: "/book", file: "book.png" },
  { path: "/consultation", file: "consultation.png" },
  { path: "/policies", file: "policies.png" },
];

(async () => {
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    const outPath = path.join(outDir, route.file);
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log("Saved:", outPath);
  }

  await browser.close();
})();
