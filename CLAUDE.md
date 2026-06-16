# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio + CV site for Marcel El Mouhajir Moncunill, deployed via **GitHub Pages** at https://marwix127.github.io/. The site content is in Spanish. There is no build step, no package manager, and no test suite — it is plain static HTML/CSS/JS served directly from the repo root. Pushing to `main` publishes the site.

## Running locally

Open `index.html` directly in a browser, or serve the root over HTTP so the portfolio modal videos and PDFs load correctly:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

There is nothing to build, lint, or test. Validate changes by viewing them in the browser.

## Architecture

Three source files do all the work; everything else under `assets/` is media.

- **`index.html`** (~834 lines) — the entire site: navbar, hero/masthead, Proyectos (portfolio), CV, and Contacto sections, plus one Bootstrap **modal per project**. Each project is a `<li class="project-item">` whose `data-bs-target` points at its `#modal-*` (e.g. `#modal-stronger`, `#modal-asl`, `#modal-usermanagement`). Adding a project = add the list item *and* its matching modal.
- **`css/styles.css`** (~13.5k lines) — vendored **Start Bootstrap "Freelancer" v7.0.7** theme (full Bootstrap is bundled in here) followed by a custom "PORTFOLIO PRO" dark-mode design system layered on top. The custom layer is driven by CSS variables (`--bg-dark`, `--accent-1/2/3`, `--radius-lg`, etc.) defined in `:root` near the top. Prefer these tokens over hard-coded colors when styling.
- **`js/scripts.js`** (~82 lines) — vendored Freelancer script (navbar shrink-on-scroll + Bootstrap ScrollSpy + collapse-on-click) plus one custom feature: **lazy-loaded modal videos**. A `<video data-src="...">` inside a `.portfolio-modal` only loads and plays when the modal opens (`shown.bs.modal`), and pauses + resets on close. It attempts unmuted playback first and falls back to muted autoplay if the browser blocks it.

External dependencies are loaded from CDNs (Font Awesome 6.3, Google Fonts "Inter"); Bootstrap's JS/CSS is vendored, not from CDN.

## Assets

- `assets/cv.pdf`, `assets/cv_eng.pdf` — downloadable CVs (Spanish / English), linked from the CV section.
- `assets/img/portfolio/` — project thumbnails and `icono*` icons.
- `assets/videos/` — project demo videos referenced via `data-src` in modals.

## Conventions

- Because the CSS file is mostly vendored theme code, make custom design changes in the "PORTFOLIO PRO" section and via the `:root` tokens rather than editing Bootstrap rules.
- Keep new content in Spanish to match the rest of the site.
