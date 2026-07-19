import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bbmerlion.milhamdedi.com",
  integrations: [sitemap()],
  devToolbar: {
    enabled: false
  }
});
