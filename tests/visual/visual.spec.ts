import { expect, test } from "@playwright/test";

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

for (const route of routes) {
  test(`visual: ${route.path}`, async ({ page }) => {
    await page.goto(route.path, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot(route.file, { fullPage: true });
  });
}
