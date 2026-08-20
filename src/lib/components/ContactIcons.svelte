<script lang="ts">
	import { profile } from '$lib/data';
	import { iconUrl } from '$lib/utils/icon';
	import { ACCENT } from '$lib/constants';

	let { compact = false }: { compact?: boolean } = $props();

	// Order matters: GitHub, Email, Phone. LinkedIn is included only if set.
	const items = [
		{ key: 'github', href: profile.links.github, icon: 'github', label: 'GitHub', tel: false },
		{ key: 'email', href: profile.links.email, icon: 'maildotru', label: 'Email', tel: false },
		{ key: 'phone', href: profile.links.phone ? `tel:${profile.links.phone}` : '', icon: 'iconify:mdi:phone', label: 'Phone', tel: true },
		{ key: 'linkedin', href: profile.links.linkedin, icon: 'iconify:simple-icons:linkedin', label: 'LinkedIn', tel: false }
	].filter((i) => i.href);
</script>

<!-- Ghost outline icons, matching the reference site's minimal style. -->
<ul class="flex items-center gap-2.5" role="list">
	{#each items as item (item.key)}
		<li>
			<a
				href={item.href}
				target={item.key === 'email' || item.tel ? undefined : '_blank'}
				rel={item.key === 'email' || item.tel ? undefined : 'noopener noreferrer'}
				aria-label={item.label}
				title={item.label}
				class="group flex items-center justify-center rounded-lg border border-line text-faint transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
				style="width:{compact ? '2.5rem' : '2.75rem'};height:{compact ? '2.5rem' : '2.75rem'}"
			>
				<img
					src={iconUrl(item.icon, '#a1a1aa')}
					alt=""
					aria-hidden="true"
					width={compact ? 18 : 20}
					height={compact ? 18 : 20}
					loading="lazy"
					decoding="async"
					class="transition-opacity group-hover:opacity-100"
				/>
			</a>
		</li>
	{/each}
</ul>
