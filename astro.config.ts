import { defineConfig } from "astro/config";

import path from "path";

import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: netlify(),
	integrations: [
		svelte(),
		prefetch(),
		sitemap(),
	],
	vite: {
		build: { sourcemap: true },
		resolve: {
			alias: {
				"~": path.resolve("./src")
			}
		}
	},
});
