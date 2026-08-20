<script lang="ts">
	import { profile } from '$lib/data';
	import { base } from '$app/paths';
	import ContactIcons from './ContactIcons.svelte';
</script>

<header class="mx-auto w-full max-w-4xl px-6 pt-20 pb-8 sm:px-8 sm:pt-28 sm:pb-10">
	<div class="flex flex-col items-center text-center">
		<div class="relative">
			<img
				src={base + profile.avatar}
				alt="Portrait of {profile.name}"
				width="128"
				height="128"
				class="h-28 w-28 rounded-full border border-line object-cover ring-1 ring-white/5 sm:h-32 sm:w-32"
			/>
		</div>

		<h1 class="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
			{profile.name}
		</h1>

		<p class="mt-2 font-mono text-sm text-accent sm:text-base">{profile.title}</p>

		{#if profile.subtitle}
			<p class="mt-1 text-sm text-faint">{profile.subtitle}</p>
		{/if}

		<p class="mt-5 max-w-xl text-base leading-relaxed text-faint">{profile.bio}</p>

		<div class="mt-7 flex items-center gap-3">
			<ContactIcons />
			{#if profile.links.resume}
				<a
					href={base + profile.links.resume}
					class="inline-flex items-center gap-2 rounded-lg border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
				>
					Resume
					<span aria-hidden="true">↗</span>
				</a>
			{/if}
		</div>
	</div>
</header>
