// astro.config.mjs
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

export default defineConfig({
  // for SSR or use "static" if only building static site
  output: "server",

  adapter: vercel()
});
