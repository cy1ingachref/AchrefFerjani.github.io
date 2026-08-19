<script lang="ts">
	import { certifications } from '$lib/data';
	import Section from './Section.svelte';
</script>

<Section id="certifications" title="Certifications">
	<ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
		{#each certifications as cert (cert.name)}
			<li>
				{#if cert.url}
					<a
						href={cert.url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-lg border border-line px-4 py-3 transition-colors hover:border-accent/50"
					>
						<span class="text-sm font-medium text-ink">{cert.name}</span>
						<span class="mt-0.5 flex items-center justify-between text-xs text-faint">
							<span>{cert.issuer}</span>
							{#if cert.date}<span class="font-mono">{cert.date}</span>{/if}
						</span>
					</a>
				{:else}
					<div class="block rounded-lg border border-line px-4 py-3">
						<span class="text-sm font-medium text-ink">{cert.name}</span>
						<span class="mt-0.5 flex items-center justify-between text-xs text-faint">
							<span>{cert.issuer}</span>
							{#if cert.date}<span class="font-mono">{cert.date}</span>{/if}
						</span>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</Section>
