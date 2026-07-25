<script lang="ts">
	import { education, languages, hobbies, softSkills } from '$lib/data';
	import { ACCENT } from '$lib/constants';
	import Section from './Section.svelte';
</script>

<Section id="education" title="Education">
	<div class="space-y-8">
		{#each education as edu (edu.degree + edu.institution)}
			<div>
				<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
					<h3 class="text-lg font-semibold text-ink">{edu.degree}</h3>
					<span class="font-mono text-xs text-faint">{edu.start} – {edu.end}</span>
				</div>
				<p class="mt-1 text-sm text-accent">
					{edu.institution}{edu.location ? ` · ${edu.location}` : ''}
				</p>
				{#if edu.description}
					<p class="mt-3 text-sm leading-relaxed text-faint">{edu.description}</p>
				{/if}
				{#if edu.items?.length}
					<ul class="mt-3 space-y-1.5">
						{#each edu.items as item (item)}
							<li class="flex gap-2 text-sm text-faint">
								<span aria-hidden="true" class="text-accent/70">›</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>

	<div class="mt-10 border-t border-line pt-6">
		<h3 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Languages</h3>
		<ul class="mt-3 flex flex-wrap gap-x-6 gap-y-2" role="list">
			{#each languages as lang (lang)}
				<li class="text-sm text-ink">{lang}</li>
			{/each}
		</ul>
	</div>

	<div class="mt-8">
		<h3 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Soft Skills</h3>
		<ul class="mt-3 flex flex-wrap gap-2" role="list">
			{#each softSkills as skill (skill)}
				<li
					class="rounded-full border border-accent/25 px-3 py-1 text-sm text-accent"
					style="background-color: color-mix(in srgb, {ACCENT} 10%, transparent);"
				>
					{skill}
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-8">
		<h3 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Hobbies &amp; Interests</h3>
		<p class="mt-3 text-sm leading-relaxed text-faint">{hobbies}</p>
	</div>
</Section>
