<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		title,
		children
	}: {
		/** Anchor id for in-page navigation. */
		id: string;
		/** Section heading. */
		title: string;
		children: Snippet;
	} = $props();
</script>

<section {id} class="mx-auto w-full max-w-4xl px-6 py-14 sm:px-8 sm:py-16">
	<h2
		class="mb-8 font-mono text-xs font-medium uppercase tracking-[0.18em] text-faint"
	>
		{title}
	</h2>
	{@render children()}
</section>
