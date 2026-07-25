<script lang="ts">
	import { profile, education, experience, projects, technologies, languages } from '$lib/data';
</script>

<svelte:head>
	<title>Resume — {profile.name}</title>
	<meta name="description" content="Résumé of {profile.name}" />
</svelte:head>

<article class="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
	<header class="border-b border-line pb-6">
		<h1 class="text-3xl font-semibold tracking-tight text-ink">{profile.name}</h1>
		<p class="mt-1 font-mono text-sm text-accent">{profile.title}</p>
		<p class="mt-3 text-sm text-faint">{profile.bio}</p>
		<div class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-faint">
			{#if profile.links.email}<span>{profile.links.email.replace('mailto:', '')}</span>{/if}
			{#if profile.links.github}<span>GitHub: {profile.links.github.replace('https://', '')}</span>{/if}
			{#if profile.links.linkedin}<span>LinkedIn: {profile.links.linkedin.replace('https://', '')}</span>{/if}
		</div>
	</header>

	<section class="mt-8">
		<h2 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Experience</h2>
		<div class="mt-4 space-y-5">
			{#each experience as job (job.role + job.company)}
				<div>
					<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
						<h3 class="text-base font-semibold text-ink">{job.role} — {job.company}</h3>
						<span class="font-mono text-xs text-faint">{job.start} – {job.end}</span>
					</div>
					<ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-faint">
						{#each job.description as point (point)}<li>{point}</li>{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<section class="mt-8">
		<h2 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Education</h2>
		<div class="mt-4 space-y-4">
			{#each education as edu (edu.degree + edu.institution)}
				<div>
					<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
						<h3 class="text-base font-semibold text-ink">{edu.degree}</h3>
						<span class="font-mono text-xs text-faint">{edu.start} – {edu.end}</span>
					</div>
					<p class="text-sm text-accent">{edu.institution}{edu.location ? ` · ${edu.location}` : ''}</p>
					{#if edu.items?.length}
						<ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-faint">
							{#each edu.items as item (item)}<li>{item}</li>{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<section class="mt-8">
		<h2 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Projects</h2>
		<ul class="mt-4 space-y-2">
			{#each projects as p (p.name)}
				<li class="text-sm text-faint">
					<span class="text-ink">{p.name}</span> — {p.description}
					<span class="text-faint/70"> [{p.tags.join(', ')}]</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mt-8">
		<h2 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Skills</h2>
		<p class="mt-3 text-sm text-faint">{technologies.map((t) => t.label).join(' · ')}</p>
	</section>

	<section class="mt-8">
		<h2 class="font-mono text-xs uppercase tracking-[0.2em] text-faint">Languages</h2>
		<p class="mt-3 text-sm text-faint">{languages.join(' · ')}</p>
	</section>

	<div class="mt-10 print:hidden">
		<button
			type="button"
			onclick={() => window.print()}
			class="inline-flex items-center gap-2 rounded-lg border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
		>
			Print / Save as PDF
		</button>
	</div>
</article>

<style>
	@media print {
		:global(body) {
			background: #fff;
			color: #111;
		}
		article {
			max-width: none;
		}
	}
</style>
