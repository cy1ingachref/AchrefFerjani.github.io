/**
 * ============================================================================
 *  PORTFOLIO CONTENT — EDIT EVERYTHING HERE
 * ============================================================================
 *  This is the single source of truth for all text, links, and images on the
 *  site. You should never need to touch the component/layout files to change
 *  content. Replace the placeholder values below with your own.
 *
 *  Tips:
 *   - Icons use the Simple Icons slug. Find any brand/tool slug at
 *     https://simpleicons.org  (e.g. "typescript", "svelte", "cisco").
 *   - Some brands (LinkedIn, Bash) were removed from Simple Icons for
 *     trademark reasons. For those we use the Iconify mirror of the same
 *     artwork — just keep the `iconify:` prefix on the slug value.
 *   - Accent color and theme are in src/lib/constants.ts.
 * ============================================================================
 */

import { ACCENT } from './constants';

/* ----------------------------------------------------------------------------
 * 1. PROFILE (Header + Footer)
 * ------------------------------------------------------------------------- */

export const profile = {
	/** Your name. */
	name: 'Achref Ferjani',
	/** One-line current title shown under your name. */
	title: 'Network Systems Engineering Student · Cybersecurity Enthusiast',
	/** Short one-line role/context subtitle shown directly under the name. */
	subtitle: 'B.Sc. Student — ISSATM Bizerte',
	/** 1–2 sentence bio describing what you do / focus on. */
	bio: 'Network systems engineering student with hands-on experience in network design, traffic analysis, and server administration. Skilled in configuring VLANs, DHCP servers, and multi-network topologies using Cisco Packet Tracer and Windows Server. Actively sharpening cybersecurity skills through CTF challenges, pwnable exercises, and platforms like TryHackMe. Passionate about network security and eager to contribute to a real-world cybersecurity team.',
	/** Circular avatar. Square image at static/avatar.jpg (or use a URL). */
	avatar: '/avatar.jpg',
	/** Links used in the header and footer icon row. Set any to '' to hide. */
	links: {
		github: 'https://github.com/cy1ingachref',
		linkedin: 'https://www.linkedin.com/in/achref-ferjani-480a90355/',
		email: 'mailto:cy1ingachref@gmail.com',
		phone: '+216 25 708 778',
		/** Resume: a route (e.g. '/resume') or a direct PDF (e.g. '/resume.pdf'). */
		resume: '/resume'
	}
};

/* ----------------------------------------------------------------------------
 * 2. TECHNOLOGIES  (wrapped row of badges)
 * ------------------------------------------------------------------------- */

export interface Tech {
	label: string;
	/** Simple Icons slug, e.g. 'typescript'. Use 'iconify:<slug>' for LinkedIn/Bash. */
	icon: string;
	/** Optional override of the accent color for this badge's icon. */
	color?: string;
}

export const technologies: Tech[] = [
	{ label: 'Wireshark', icon: 'wireshark', color: '#1679a3' },
	{ label: 'Cisco / Packet Tracer', icon: 'cisco', color: '#1ba0c9' },
	{ label: 'Python', icon: 'python', color: '#3776ab' },
	{ label: 'C / C++', icon: 'cplusplus', color: '#00599c' },
	{ label: 'Java', icon: 'iconify:devicon:java', color: '#ea2d2e' },
	{ label: 'JavaScript', icon: 'javascript', color: '#f7df1e' },
	{ label: 'SQL / PL-SQL', icon: 'postgresql', color: '#336791' },
	{ label: 'Linux', icon: 'linux', color: '#000000' },
	{ label: 'Arduino / ESP32', icon: 'arduino', color: '#00979d' },
	{ label: 'Git', icon: 'git', color: '#f05032' },
	{ label: 'Bash', icon: 'iconify:simple-icons:gnubash', color: '#4eaa25' },
	{ label: 'Windows Server', icon: 'iconify:mdi:microsoft-windows', color: '#0078d4' }
];

/* ----------------------------------------------------------------------------
 * 3. EDUCATION
 * ------------------------------------------------------------------------- */

export interface Education {
	degree: string;
	institution: string;
	location?: string;
	start: string;
	end: string;
	/** Paragraph description (focus, coursework, lab work). */
	description?: string;
	/** Smaller sub-entries: year-by-year track, certifications, awards, honors. */
	items?: string[];
}

export const education: Education[] = [
	{
		degree: 'B.Sc. — Computer & Network Systems Engineering',
		institution: 'ISSATM — Bizerte',
		location: 'Bizerte, Tunisia',
		start: '2024',
		end: 'Present',
		description:
			'Focus on Cybersecurity and Data/Computer Network Engineering. Relevant coursework: Network Security, Computer Networks, Data Communications, Operating Systems, Data Structures & Algorithms. Lab work includes packet analysis and basic network hardening.'
	}
];

/* ----------------------------------------------------------------------------
 * 3b. CERTIFICATIONS  (badges, courses, platforms)
 * ------------------------------------------------------------------------- */

export interface Certification {
	/** Name of the cert / course / achievement. */
	name: string;
	/** Issuing body or platform, e.g. 'TryHackMe', 'Cisco'. */
	issuer: string;
	/** Optional date or status, e.g. '2026' or 'In progress'. */
	date?: string;
	/** Optional URL to verify / view. */
	url?: string;
}

export const certifications: Certification[] = [
	{ name: 'TryHackMe — Pre-Security', issuer: 'TryHackMe', date: '2026' },
	{ name: 'TryHackMe — Introduction to Cyber Security', issuer: 'TryHackMe', date: '2026' },
	{ name: 'CTF & pwnable practice', issuer: 'Self-directed', date: 'Ongoing' }
];

export const languages: string[] = [
	'Arabic (Native)',
	'English (C1)',
	'French (B2)',
	'German (A2)'
];

/* ----------------------------------------------------------------------------
 * 4. EXPERIENCE  (reverse-chronological timeline)
 * ------------------------------------------------------------------------- */

export interface Experience {
	role: string;
	company: string;
	location?: string;
	start: string;
	end: string; // e.g. 'Present'
	/** 2–4 sentences describing responsibilities / impact. */
	description: string[];
}

export const experience: Experience[] = [
	{
		role: 'Cybersecurity Intern',
		company: 'e-tafakna',
		location: 'Tunis, Tunisia',
		start: 'Jun 2026',
		end: 'Aug 2026',
		description: [
			'Supported the security team across a two-month internship focused on threat monitoring, vulnerability assessment, and incident response.',
			'Hands-on with log analysis, network-traffic inspection, and basic penetration-testing tooling to surface and triage potential risks.',
			'Documented findings and hardening recommendations that fed into the team’s monthly security reporting.'
		]
	},
	{
		role: 'Freelance Web Developer',
		company: 'Self-employed',
		location: 'Tunis, Tunisia',
		start: '2024',
		end: 'Present',
		description: [
			'Design and build polished, mobile-first marketing sites for Tunisian cafés and restaurants using SvelteKit and static hosting.',
			'Deliver projects end-to-end: design, deploy to GitHub Pages, and QR-based distribution — no technical setup required from clients.',
			'Balance client web work with studies in network systems engineering and a growing interest in cybersecurity.'
		]
	}
];

/* ----------------------------------------------------------------------------
 * 5. OPEN SOURCE / PROJECTS  (card grid)
 * ------------------------------------------------------------------------- */

export interface Project {
	/** Project name. */
	name: string;
	/** Short, one-line-ish description. */
	description: string;
	/** Link out to the GitHub repo. */
	url: string;
	/** Tech-stack tags shown as a row under the description. */
	tags: string[];
}

export const projects: Project[] = [
	{
		name: 'bcrypt-5digit-cracker',
		description: 'Educational bcrypt cracker — brute-forces a 5-digit numeric PIN against a bcrypt hash, with an in-browser cracker and a Python CLI.',
		url: 'https://github.com/cy1ingachref/bcrypt-5digit-cracker',
		tags: ['Python', 'bcrypt', 'Security']
	},
	{
		name: '01-devsecops-pipeline',
		description: 'DevSecOps CI/CD security pipeline as code — GitHub Actions + Semgrep + gitleaks + Trivy + tfsec, with a cross-project JWT gate.',
		url: 'https://github.com/cy1ingachref/01-devsecops-pipeline',
		tags: ['DevSecOps', 'CI/CD', 'AppSec']
	},
	{
		name: '03-cloud-soc-detection-lab',
		description: 'Cloud SOC detection lab — builds alerting and detection rules plus a simulated attack-to-alert pipeline.',
		url: 'https://github.com/cy1ingachref/03-cloud-soc-detection-lab',
		tags: ['SOC', 'Detection', 'Cloud']
	},
	{
		name: 'sigma-lab',
		description: 'Dependency-free Sigma detection lab — 4 rules (PsExec, PowerShell, DNS tunneling, LSASS) proven by a green-check harness: fires on planted attacks, silent on baseline.',
		url: 'https://github.com/cy1ingachref/sigma-lab',
		tags: ['Sigma', 'Detection', 'Python']
	},
	{
		name: '02-jwt-audit-tool',
		description: 'Static audit tool for JWT implementations — flags weak signing secrets, algorithm confusion, and insecure token handling.',
		url: 'https://github.com/cy1ingachref/02-jwt-audit-tool',
		tags: ['JWT', 'AppSec', 'Python']
	}
];

/* ----------------------------------------------------------------------------
 * 6. HOBBIES & INTERESTS  (free-text line)
 * ------------------------------------------------------------------------- */

export const hobbies: string =
	'Chess · Reading · CTF competitions & pwnable challenges · Network home-lab experimentation · Cybersecurity research · Hardware & technology exploration';

/* ----------------------------------------------------------------------------
 * 7. SOFT SKILLS  (wrapped row of chips)
 * ------------------------------------------------------------------------- */

export const softSkills: string[] = [
	'Problem-solving',
	'Attention to detail',
	'Fast learner',
	'Self-directed',
	'Analytical thinking',
	'Teamwork & communication'
];

/* ----------------------------------------------------------------------------
 * 8. SITE-WIDE SEO / SOCIAL PREVIEW
 * ------------------------------------------------------------------------- */

export const site = {
	/** Used for <title>, og:title, twitter:title. */
	title: 'Achref Ferjani — Network Systems Engineering Student',
	/** Used for meta description, og:description, twitter:description. */
	description:
		'Personal portfolio of Achref Ferjani — network systems engineering student and cybersecurity enthusiast based in Tunis, with hands-on experience in networking, traffic analysis, and web development.',
	/** Absolute or root-relative social preview image (1200x630 recommended). */
	ogImage: '/og-image.png',
	/** Canonical site URL (used to build absolute og:image). Leave '' to use relative. */
	url: '',
	/** Author handle for twitter:creator (optional). */
	twitterHandle: ''
};

/** Re-exported so components can color icons with the theme accent. */
export { ACCENT };
