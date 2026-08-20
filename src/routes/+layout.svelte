<script lang="ts">
	import '../app.css';
	import { site } from '$lib/data';
	import { THEME_COLOR } from '$lib/constants';
	import { page } from '$app/stores';
	import { BASE_URL } from '$lib/constants-base';
	import Particles from '$lib/components/Particles.svelte';

	let { children } = $props();

	// Root-relative og:image joined to the site URL (or the live base path).
	const ogImageAbs = $derived(
		site.ogImage.startsWith('http')
			? site.ogImage
			: `${site.url || BASE_URL}${site.ogImage}`
	);
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="theme-color" content={THEME_COLOR} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={ogImageAbs} />
	{#if site.url}
		<meta property="og:url" content={site.url + $page.url.pathname} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={ogImageAbs} />
	{#if site.twitterHandle}
		<meta name="twitter:creator" content={site.twitterHandle} />
	{/if}
</svelte:head>

<Particles />

{@render children()}
