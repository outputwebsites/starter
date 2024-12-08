import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://outputstarter.netlify.app", // update me!
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
});
