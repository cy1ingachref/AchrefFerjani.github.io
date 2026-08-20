<script lang="ts">
	import { projects } from '$lib/data';
	import Section from './Section.svelte';
</script>

<Section id="projects" title="Open Source / Projects" divider>
	<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
		{#each projects as project (project.name)}
			<li>
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex h-full flex-col rounded-xl border border-line bg-panel p-5 transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
				>
					<div class="flex items-center justify-between gap-2">
						<h3 class="font-mono text-base font-medium text-ink group-hover:text-accent">
							{project.name}
						</h3>
						<span aria-hidden="true" class="text-faint transition-colors group-hover:text-accent"
							>↗</span
						>
					</div>

					<p class="mt-2 flex-1 text-sm leading-relaxed text-faint">{project.description}</p>

					{#if project.tags?.length}
						<ul class="mt-4 flex flex-wrap gap-2" role="list">
							{#each project.tags as tag (tag)}
								<li
									class="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-faint"
								>
									{tag}
								</li>
							{/each}
						</ul>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</Section>
