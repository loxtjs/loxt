import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
	site: "https://loxt.angelnext.dev/",
	integrations: [tailwind(), sitemap(), prefetch()],
});
