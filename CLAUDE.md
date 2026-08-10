# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (the normal way to work; Vite does not typecheck)
- `npm run build` — `tsc -b && vite build`
- `npm run lint` — ESLint (flat config, typescript-eslint + react-hooks + react-refresh)
- `npm run preview` — serve the production build

There are no tests. Both `npm run build` and `npm run lint` pass — keep them passing.

The `@` / `@assets` path aliases are defined in both `vite.config.ts` and `tsconfig.app.json` (`paths`); if you add an alias, update both. TypeScript runs with `strict: true` plus `noUnusedLocals`/`noUnusedParameters`, and the ESLint react-hooks rules reject components declared inside another component's render — declare helper components at module scope.

## Architecture

Two-person portfolio SPA (users "caully" and "fred") built with React 19, TypeScript, Vite 7, React Router 7, Tailwind CSS 4, and per-component SCSS.

### Routing / user-switching (the core pattern)

- `src/App.tsx`: `/` renders the splash page (`pages/Home/Home.tsx`), and `/:userId/*` renders `components/UserLayouts.tsx`.
- `UserLayouts.tsx` reads the `:userId` URL param, writes it into `UserContext` (`src/contexts/UserContext.tsx`, exposes `userName`/`setUserName` via the `useUser()` hook), and renders the shared `components/UserHome.tsx` with that user's data.
- **Content is data-driven**: `src/data/fred.ts` and `src/data/caully.ts` (typed by `src/data/types.ts`) hold each user's name/title/intro, education and experience timeline entries, and projects. To change page content, edit the data files — not the components. Caully's `showArt: true` flag is what renders her extra Art section.
- `UserHome.tsx` is one scrollable page: a full-viewport hero (`#snapshot`), then the navbar, then `#education` and `#experience` (each a `components/Timeline.tsx`), `#projects` (a slightly-scattered wall of post-it `ProjectCard` buttons; clicking one opens `pages/Projects/ProjectDetail.tsx` as a peel-open overlay dialog — Escape/backdrop-click close it), and `#art` (caully only). `components/Navbar.tsx` sits below the hero and is `position: sticky` — it sticks to the top once scrolled past — and smooth-scrolls to section ids rather than navigating routes; sections use `scroll-margin-top` so anchors clear it. Headings use the `crayola` crayon font (construction-paper aesthetic); body text uses `justsans`.
- Page background: sage everywhere except the hero, which is solid stone — a placeholder until a hero background image goes in. Sections are `.band` blocks (padding + `scroll-margin-top` only, no background). Cards use the muted `$paper` surface (`#E6EFDC`) rather than `$cream`, which reads too bright on sage; `$cream` is kept for the nav pill. Post-it tint/tilt/nudge variety is cycled with `:nth-child(4n+…)` custom-property rules in `Projects.scss`, and a `--scatter` multiplier tones the nudges down on narrow screens.
- `pages/About/About.tsx` is an unrouted horizontal-scroll/crumble-transition experiment — not part of the live pages.

### Styling

- Tailwind v4 is wired through the `@tailwindcss/vite` plugin and `@import "tailwindcss"` in `src/index.css`. The site palette (`sage`, `forest`, `terracotta`, `cream`, `stone`) that powers utilities like `text-forest` is declared in the `@theme` block in `src/App.css` (the v3-style `tailwind.config.js` also lists it but is not what Tailwind v4 reads).
- Components also have sibling `.scss` files (compiled by `sass-embedded`) imported directly from the component. The same palette is available to SCSS via `@use '../styles/palette' as *;` (`src/styles/_palette.scss`) — keep it and the `@theme` block in sync.
- `Navbar.scss` rules are deliberately scoped under `nav` — don't add bare-element selectors there (an earlier bare `ul` rule leaked into every list on the site).
- Custom fonts (`crayola`, `oliviar`, `justsans`, `justsansbold`) are registered via `@font-face` in `src/index.css` from `.woff` files in `src/assets/`.
