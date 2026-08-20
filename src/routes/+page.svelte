<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import {
		profile,
		technologies,
		education,
		certifications,
		languages,
		experience,
		projects,
		hobbies,
		softSkills
	} from '$lib/data';
	import { iconUrl } from '$lib/utils/icon';

	let time = $state('');
	let timeIcon = $state('');
	let mounted = $state(false);
	let visibleSections = $state<string[]>([]);

	function updateTime() {
		const now = new Date();
		const hour = parseInt(
			new Intl.DateTimeFormat('en-US', {
				hour: 'numeric',
				hour12: false,
				timeZone: 'Africa/Tunis'
			}).format(now)
		);
		// Moon at night (19:00–06:59), sun during the day.
		timeIcon = hour >= 19 || hour < 7 ? '🌙' : '☀️';
		time = new Intl.DateTimeFormat('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true,
			timeZone: 'Africa/Tunis',
			timeZoneName: 'short'
		}).format(now);
	}

	onMount(() => {
		mounted = true;
		updateTime();
		const interval = setInterval(updateTime, 60000);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && entry.target.id && !visibleSections.includes(entry.target.id)) {
						visibleSections = [...visibleSections, entry.target.id];
					}
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
		);

		document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));

		return () => {
			clearInterval(interval);
			observer.disconnect();
		};
	});

	function reveal(id: string) {
		return visibleSections.includes(id) ? 'section-visible' : 'section-hidden';
	}
</script>

<svelte:head>
	<title>{profile.name} — {profile.title}</title>
	<meta name="description" content={profile.bio} />
</svelte:head>

<div class="grain-overlay no-print"></div>

<div class="mx-auto max-w-screen-2xl px-6 py-12 md:px-10 md:py-20">
	<div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
		<!-- Sidebar -->
		<aside
			class="lg:sticky lg:top-20 lg:w-[380px] lg:shrink-0 lg:self-start {mounted
				? 'animate-fade-in'
				: 'opacity-0'}"
		>
			<!-- Identity block (no banner / map) -->
			<div class="mb-6 flex flex-col items-start gap-4">
				<img
					src={`${base}${profile.avatar}`}
					width="96"
					height="96"
					alt={profile.name}
					class="h-24 w-24 rounded-2xl border-4 border-[#0a0a0f] object-cover shadow-lg shadow-black/40"
				/>
				<div>
					<h1 class="text-xl font-bold tracking-tight text-white">{profile.name}</h1>
					<p class="text-sm text-faint">{profile.title}</p>
				</div>
			</div>

			<!-- Live clock with pulsing dot -->
			{#if time}
				<div
					class="mb-6 flex items-center gap-2 rounded-full border border-line bg-panel/40 px-3 py-1.5 text-xs text-zinc-300"
				>
					<span class="animate-pulse-dot h-2.5 w-2.5 rounded-full bg-accent"></span>
					<span>{timeIcon} {time}</span>
				</div>
			{/if}

			<!-- Bio -->
			<p class="mt-8 text-sm leading-relaxed text-faint">
				{profile.bio}
			</p>

			<!-- Links -->
			<nav class="mt-5 flex items-center gap-4">
				{#if profile.links.github}
					<a
						href={profile.links.github}
						target="_blank"
						rel="noopener noreferrer"
						class="opacity-50 transition-opacity hover:opacity-100"
						aria-label="GitHub"
					>
						<img src="https://cdn.simpleicons.org/github/e4e4e7" alt="GitHub" class="h-5 w-5" />
					</a>
				{/if}
				{#if profile.links.linkedin}
					<a
						href={profile.links.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="opacity-50 transition-opacity hover:opacity-100"
						aria-label="LinkedIn"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="#e4e4e7"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
					</a>
				{/if}
				{#if profile.links.email}
					<a
						href={profile.links.email}
						class="opacity-50 transition-opacity hover:opacity-100"
						aria-label="Email"
					>
						<img src="https://cdn.simpleicons.org/maildotru/e4e4e7" alt="Email" class="h-5 w-5" />
					</a>
				{/if}
				{#if profile.links.phone}
					<a
						href="tel:{profile.links.phone}"
						class="opacity-50 transition-opacity hover:opacity-100"
						aria-label="Phone"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.38 1.9.74 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.89.36 1.83.613 2.79.74A2 2 0 0 1 22 16.92z" />
						</svg>
					</a>
				{/if}
			</nav>

			<!-- Resume link -->
			{#if profile.links.resume}
				<a
					href={`${base}${profile.links.resume}`}
					class="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-panel/40 px-4 py-2 text-sm text-faint transition-colors hover:border-zinc-700 hover:text-white"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
						<polyline points="10 9 9 9 8 9" />
					</svg>
					Resume
				</a>
			{/if}

			<!-- Technologies -->
			<div class="mt-8">
				<h2 class="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
					Technologies
				</h2>
				<div class="flex flex-wrap gap-2">
					{#each technologies as tech}
						<div
							class="flex items-center gap-1.5 rounded-full border border-line bg-panel/40 px-3 py-1.5 text-xs text-faint transition-colors hover:border-zinc-700 hover:text-ink"
						>
							<img
								src={iconUrl(tech.icon, tech.color)}
								alt={tech.label}
								width="14"
								height="14"
								class="h-3.5 w-3.5"
								loading="lazy"
							/>
							<span>{tech.label}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Education (compact in sidebar) -->
			<div class="mt-8">
				<h2 class="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">
					Education
				</h2>
				{#each education as edu}
					<div>
						<p class="text-sm font-medium text-zinc-300">{edu.degree}</p>
						<p class="mt-0.5 text-xs text-zinc-600">{edu.institution} · {edu.start} – {edu.end}</p>
					</div>
				{/each}
				<div class="mt-4 space-y-2 text-xs text-zinc-500">
					{#each certifications as cert}
						<p>{cert.name} — {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</p>
					{/each}
				</div>
			</div>

			<!-- Languages -->
			<div class="mt-6 text-xs text-zinc-600">
				{languages.join(' · ')}
			</div>
		</aside>

		<!-- Main content -->
		<main class="min-w-0 flex-1">
			<!-- Experience -->
			<section id="experience" class={reveal('experience')}>
				<h2 class="mb-8 text-lg font-semibold text-white">Experience</h2>
				<div class="ml-3 border-l border-line pl-8">
					{#each experience as job, i}
						<article class="relative {i < experience.length - 1 ? 'pb-10' : ''}">
							<div
								class="absolute -left-[37px] top-[7px] h-2.5 w-2.5 rounded-full border-2 border-zinc-700 bg-[#0a0a0f]"
							></div>
							<div class="flex flex-wrap items-baseline gap-x-3">
								<h3 class="font-medium text-white">{job.role}</h3>
								<span class="text-sm text-zinc-600">{job.start} – {job.end}</span>
							</div>
							<p class="mt-0.5 text-sm text-zinc-500">
								{job.company}{job.location ? ` · ${job.location}` : ''}
							</p>
							<ul class="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-faint">
								{#each job.description as line}
									<li>{line}</li>
								{/each}
							</ul>
						</article>
					{/each}
				</div>
			</section>

			<hr class="my-12 border-line" />

			<!-- Open Source / Projects -->
			<section id="projects" class={reveal('projects')}>
				<h2 class="mb-8 text-lg font-semibold text-white">Open Source / Projects</h2>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each projects as project}
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group rounded-xl border border-line bg-panel/30 p-5 transition-all hover:border-zinc-700 hover:bg-panel/50"
						>
							<div class="flex items-center gap-2">
								<h3
									class="font-medium text-white transition-colors group-hover:text-accent"
								>
									{project.name}
								</h3>
								<span
									class="text-zinc-700 transition-colors group-hover:text-accent/60"
									aria-hidden="true">↗</span
								>
							</div>
							<p class="mt-2 text-sm leading-relaxed text-faint">{project.description}</p>
							<div class="mt-3 flex flex-wrap gap-1.5">
								{#each project.tags as t}
									<span
										class="rounded-full bg-zinc-800/60 px-2.5 py-0.5 text-xs text-zinc-500"
										>{t}</span
									>
								{/each}
							</div>
						</a>
					{/each}
				</div>

				<p class="mt-8 text-sm text-zinc-600">
					Interests: <span class="text-zinc-500">{hobbies}</span>
				</p>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each softSkills as s}
						<span class="rounded-full border border-accent/25 px-3 py-1 text-xs text-accent" style="background-color: color-mix(in srgb, #60a5fa 10%, transparent);">{s}</span>
					{/each}
				</div>
			</section>
		</main>
	</div>

	<!-- Footer -->
	<footer class="no-print mt-16 flex items-center gap-4 border-t border-line pt-8 pb-4">
		{#if profile.links.github}
			<a
				href={profile.links.github}
				target="_blank"
				rel="noopener noreferrer"
				class="opacity-40 transition-opacity hover:opacity-80"
				aria-label="GitHub"
			>
				<img src="https://cdn.simpleicons.org/github/e4e4e7" alt="GitHub" class="h-4 w-4" />
			</a>
		{/if}
		{#if profile.links.linkedin}
			<a
				href={profile.links.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="opacity-40 transition-opacity hover:opacity-80"
				aria-label="LinkedIn"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="#e4e4e7"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
			</a>
		{/if}
		{#if profile.links.email}
			<a
				href={profile.links.email}
				class="opacity-40 transition-opacity hover:opacity-80"
				aria-label="Email"
			>
				<img src="https://cdn.simpleicons.org/maildotru/e4e4e7" alt="Email" class="h-4 w-4" />
			</a>
		{/if}
	</footer>
</div>
