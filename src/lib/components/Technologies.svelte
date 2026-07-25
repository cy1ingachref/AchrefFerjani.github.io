<script lang="ts">
	import { technologies } from '$lib/data';
	import { iconUrl } from '$lib/utils/icon';
	import Section from './Section.svelte';
</script>

<Section id="technologies" title="Technologies">
	<ul class="flex flex-wrap gap-3" role="list">
		{#each technologies as tech (tech.label)}
			<li
				class="flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-2 text-sm text-ink transition-colors hover:border-accent/50"
			>
				<img
					src={iconUrl(tech.icon, tech.color)}
					alt=""
					aria-hidden="true"
					width="16"
					height="16"
					loading="lazy"
					decoding="async"
				/>
				<span>{tech.label}</span>
			</li>
		{/each}
	</ul>
</Section>
