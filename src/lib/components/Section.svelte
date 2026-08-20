<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		title,
		divider = false,
		children
	}: {
		/** Anchor id for in-page navigation. */
		id: string;
		/** Section heading. */
		title: string;
		/** Render a subtle hairline divider above the section (like the reference site). */
		divider?: boolean;
		children: Snippet;
	} = $props();
</script>

{#if divider}
	<hr class="mx-auto w-full max-w-4xl border-0 border-t border-line" />
{/if}

<section {id} class="mx-auto w-full max-w-4xl px-6 py-9 sm:px-8 sm:py-11">
	<h2
		class="mb-7 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-ink"
	>
		{title}
	</h2>
	{@render children()}
</section>
