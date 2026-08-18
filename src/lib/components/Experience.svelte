<script lang="ts">
	import { experience } from '$lib/data';
	import Section from './Section.svelte';
</script>

<Section id="experience" title="Experience">
	<div class="space-y-8">
		{#each experience as job (job.role + job.company)}
			<div>
				<div
					class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
				>
					<h3 class="text-base font-semibold text-ink">{job.role}</h3>
					<span class="font-mono text-xs text-faint">{job.start} – {job.end}</span>
				</div>
				<p class="mt-1 text-sm text-accent">
					{job.company}{job.location ? ` · ${job.location}` : ''}
				</p>

				<ul class="mt-3 space-y-2">
					{#each job.description as point (point)}
						<li class="flex gap-2 text-sm leading-relaxed text-faint">
							<span aria-hidden="true" class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60"></span>
							<span>{point}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>
