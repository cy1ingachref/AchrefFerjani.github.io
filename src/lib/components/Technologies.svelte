<script lang="ts">
	import { technologies } from '$lib/data';
	import { iconUrl } from '$lib/utils/icon';
	import Section from './Section.svelte';
</script>

<Section id="technologies" title="Technologies">
	<ul class="flex flex-wrap gap-2" role="list">
		{#each technologies as tech (tech.label)}
			<li>
				<span
					class="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1 text-sm text-ink"
				>
					<img
						src={iconUrl(tech.icon, tech.color)}
						alt=""
						aria-hidden="true"
						width="18"
						height="18"
						loading="lazy"
						decoding="async"
						class="shrink-0"
					/>
					{tech.label}
				</span>
			</li>
		{/each}
	</ul>
</Section>
