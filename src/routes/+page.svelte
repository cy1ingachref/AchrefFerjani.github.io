<script lang="ts">
	import { profile } from '$lib/data';
	import Header from '$lib/components/Header.svelte';
	import Technologies from '$lib/components/Technologies.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Portfolio — {profile.name}</title>
	<meta name="description" content="Personal portfolio of {profile.name}" />
</svelte:head>

<main>
	<Header />
	<Technologies />
	<Education />
	<Experience />
	<Projects />
	<Footer />
</main>
