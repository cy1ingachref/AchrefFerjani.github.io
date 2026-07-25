import { ACCENT } from '$lib/constants';

/**
 * Build a CDN URL for a tech/brand icon.
 *
 * By default uses cdn.simpleicons.org/<slug>/<hexcolor>.
 *
 * Some brands (LinkedIn, Bash, Java, Windows, phone, etc.) are not on Simple
 * Icons (removed for trademark/coverage reasons) or simply don't exist there,
 * so we route them through Iconify via an `iconify:<set>:<name>` prefix, e.g.
 *   'iconify:simple-icons:linkedin'  -> api.iconify.design/simple-icons:linkedin
 *   'iconify:devicon:java'           -> api.iconify.design/devicon:java
 *   'iconify:mdi:phone'              -> api.iconify.design/mdi:phone
 */
export function iconUrl(icon: string, color: string = ACCENT): string {
	const hex = color.replace('#', '');
	if (icon.startsWith('iconify:')) {
		const name = icon.slice('iconify:'.length);
		return `https://api.iconify.design/${name}.svg?color=%23${hex}`;
	}
	return `https://cdn.simpleicons.org/${icon}/${hex}`;
}
