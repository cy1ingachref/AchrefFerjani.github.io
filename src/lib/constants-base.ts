/**
 * Base URL used to build absolute og:image / og:url when deploying.
 *
 * In CI, the workflow exports VITE_BASE_URL (the Pages site root, e.g.
 * https://user.github.io/repo). Locally it defaults to a relative-safe '/',
 * which Vite resolves against the current origin at runtime.
 */
export const BASE_URL: string =
	(typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_BASE_URL) || '';
