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

<section {id} class="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
	<h2
		class="mb-10 flex items-center gap-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-faint"
	>
		<span class="h-px w-8 bg-line"></span>
		{title}
	</h2>
	{@render children()}
</section>
