<script lang="ts">
	import { onMount } from 'svelte';
	import { ACCENT } from '$lib/constants';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// Accent -> rgba channels for links / dots.
		const hex = ACCENT.replace('#', '');
		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);

		let width = 0;
		let height = 0;
		let dpr = 1;
		let particles: { x: number; y: number; vx: number; vy: number }[] = [];
		let raf = 0;
		const LINK_DIST = 130;

		function resize() {
			width = window.innerWidth;
			height = window.innerHeight;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

			// Density scales with viewport area, clamped for performance.
			const target = Math.min(120, Math.max(30, Math.floor((width * height) / 13000)));
			particles = Array.from({ length: target }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.3,
				vy: (Math.random() - 0.5) * 0.3
			}));
		}

		function render() {
			ctx!.clearRect(0, 0, width, height);

			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x <= 0 || p.x >= width) p.vx *= -1;
				if (p.y <= 0 || p.y >= height) p.vy *= -1;
				p.x = Math.max(0, Math.min(width, p.x));
				p.y = Math.max(0, Math.min(height, p.y));
			}

			// Connecting lines between nearby particles.
			for (let i = 0; i < particles.length; i++) {
				const a = particles[i];
				for (let j = i + 1; j < particles.length; j++) {
					const c = particles[j];
					const dx = a.x - c.x;
					const dy = a.y - c.y;
					const dist = Math.hypot(dx, dy);
					if (dist < LINK_DIST) {
						const alpha = (1 - dist / LINK_DIST) * 0.35;
						ctx!.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
						ctx!.lineWidth = 1;
						ctx!.beginPath();
						ctx!.moveTo(a.x, a.y);
						ctx!.lineTo(c.x, c.y);
						ctx!.stroke();
					}
				}
			}

			// Dots.
			ctx!.fillStyle = `rgba(${r},${g},${b},0.7)`;
			for (const p of particles) {
				ctx!.beginPath();
				ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
				ctx!.fill();
			}
		}

		function loop() {
			render();
			raf = requestAnimationFrame(loop);
		}

		resize();
		window.addEventListener('resize', resize);

		if (reduceMotion) {
			render(); // single static frame, no animation
		} else {
			raf = requestAnimationFrame(loop);
		}

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<canvas bind:this={canvas} class="particles-canvas" aria-hidden="true"></canvas>

<style>
	.particles-canvas {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: -1; /* sit behind content, above the html background */
		pointer-events: none;
	}

	@media print {
		.particles-canvas {
			display: none;
		}
	}
</style>
