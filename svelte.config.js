import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * GitHub Pages serves the site from `/<repo-name>/`.
 * The CI workflow sets BASE_PATH so the build produces the correct
 * base path automatically. Locally (no env var) it defaults to ''.
 */
const BASE_PATH = process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// GitHub Pages serves from /<repo-name>/. CI sets BASE_PATH to that value.
		// Locally (no env var) it defaults to '' (no sub-path).
		paths: {
			base: BASE_PATH,
			// Use base-absolute URLs (/<base>/_app/...) so they resolve correctly
			// from nested routes like /resume as well as the index page.
			relative: false
		}
	}
};

export default config;
