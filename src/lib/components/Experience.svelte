<script lang="ts">
	import { experience } from '$lib/data';
	import Section from './Section.svelte';
</script>

<Section id="experience" title="Experience">
	<ol class="relative border-l border-line pl-6 sm:pl-8">
		{#each experience as job (job.role + job.company)}
			<li class="relative pb-10 last:pb-0">
				<span
					class="absolute -left-[1.5px] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent bg-bg"
					aria-hidden="true"
				></span>

				<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
					<h3 class="text-lg font-semibold text-ink">{job.role}</h3>
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
			</li>
		{/each}
	</ol>
</Section>
