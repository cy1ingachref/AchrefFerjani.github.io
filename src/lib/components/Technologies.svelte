<script lang="ts">
	import { technologies } from '$lib/data';
	import { iconUrl } from '$lib/utils/icon';
	import Section from './Section.svelte';
</script>

<Section id="technologies" title="Technologies">
	<ul class="flex flex-wrap items-center gap-x-5 gap-y-3" role="list">
		{#each technologies as tech (tech.label)}
			<li class="flex items-center gap-2 text-sm text-ink">
				<img
					src={iconUrl(tech.icon, tech.color || '#a1a1aa')}
					alt=""
					aria-hidden="true"
					width="18"
					height="18"
					loading="lazy"
					decoding="async"
				/>
				<span>{tech.label}</span>
			</li>
		{/each}
	</ul>
</Section>
