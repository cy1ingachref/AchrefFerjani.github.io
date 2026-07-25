# Portfolio — SvelteKit + GitHub Pages

A single-page, dark-mode developer portfolio built with **SvelteKit + TypeScript + Tailwind CSS**, prerendered to static HTML and deployed to **GitHub Pages** via GitHub Actions.

## Edit your content

Everything you need to change lives in **one file**: [`src/lib/data.ts`](src/lib/data.ts).

- `profile` — name, title, bio, avatar, contact links, resume link
- `technologies` — tech/tool badges (icon slug + label)
- `education` — degrees, institutions, dates, certs/awards, languages
- `experience` — reverse-chronological timeline
- `projects` — card grid (name, description, GitHub URL, tags)
- `site` — SEO title/description/og:image

Theme accent color is in [`src/lib/constants.ts`](src/lib/constants.ts).

### Icons

Badges and contact icons use [Simple Icons](https://simpleicons.org). Use the brand slug, e.g. `"svelte"`, `"typescript"`, `"cisco"`:

```ts
{ label: 'Svelte', icon: 'svelte' }
```

> Note: some brands (LinkedIn, Bash, Java, Windows) were removed from Simple Icons
> for trademark reasons and 404 on the CDN. Use the Iconify mirror of the same
> artwork with the `iconify:<set>:<slug>` prefix, e.g.
> `{ label: 'Bash', icon: 'iconify:simple-icons:gnubash' }`.

### Avatar & social image

- Replace `static/avatar.jpg` (square, any size — it's cropped to a circle).
- Replace `static/og-image.png` (1200×630 recommended for link previews).
- A placeholder avatar/OG image can be regenerated with: `npm run gen:assets`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds with the
   correct `/<repo-name>` base path and publishes to the `gh-pages` environment.
4. Your site goes live at `https://<user>.github.io/<repo>/`.

### Custom domain (optional)

If you use a custom domain, set `base: ''` in `svelte.config.js` and add a
`CNAME` file in `static/`. The workflow auto-detects the repo name for the base path.

## Project structure

```
src/
  app.css                 # Tailwind + design tokens
  app.html                # <head> shell
  lib/
    constants.ts          # accent color, theme-color
    data.ts               # ← ALL your content here
    utils/icon.ts         # builds CDN/iconify URLs
    components/           # Header, Technologies, Education, Experience, Projects, Footer, Section, ContactIcons, Particles
  routes/
    +layout.ts            # prerender = true
    +layout.svelte        # SEO meta tags
    +page.svelte          # assembles the single page
    resume/+page.svelte   # /resume printable route
static/
  avatar.jpg  og-image.png  favicon.png  .nojekyll
.github/workflows/deploy.yml
```
