# Changelog

## Unreleased - 2026-05-04

_Range: `e0a65747a68602535ee8accb2cf665c160e19437..HEAD`_

### Features

- enforce architecture boundaries via no-restricted-imports (`1750117`)
- editorial print stylesheet for case studies and home (`bbdc221`)
- harden /api/csp-report - normalise, dedupe, drop noise (`50f68fd`)
- tighten jsx-a11y rules; fix logo anchor to use next/link (`091aff0`)
- pre-build content validator for case studies (`87d556f`)
- reading time, BreadcrumbList JSON-LD, security.txt (`b71e1b0`)
- enable View Transitions, share project title across navigation (`4702d09`)
- add /contact form, Resend, Plausible toggle, click tracking (`70a216d`)
- add /projects/[slug] case studies for the six featured projects (`a0df594`)
- add /uses, /now, downloadable /cv.pdf (`5865910`)
- consolidate microcopy to pt-BR for tonal consistency (`c0a3d7a`)
- NPDN monogram, SVG underlines, magnetic CTA, typographic 404 (`04316b9`)
- static security headers, per-request CSP nonce, CSP report (`03772ec`)
- Vitest, Prettier, Husky, lint-staged, commitlint, parallel CI (`538fb70`)
- mobile nav, scroll-spy, reduced-motion, Playwright + axe E2E (`e2b649a`)
- route states, blur, web vitals, bundle analyzer, Lighthouse CI (`b6ff54b`)
- add dynamic OG, icons, manifest, JSON-LD, section anchors (`70cd7b5`)
- add Fathom entry (`3490f8c`)
- add Unholy Bastion entry (`b0ea567`)
- add Pg2MongoCdC entry for v1.0.0 release (`98df356`)
- add MTG Accessible Combat and render project thumbnails (`09ee91c`)
- use CopyEmailLink in the Contact section (`56a2846`)
- add CopyEmailLink and wire Navbar Say Hello (`76577fe`)
- animate expand/collapse with staggered row reveal (`884cd4e`)
- add expand/collapse toggle button (`e640891`)
- add Web Accessibility Auditor to featured grid (`d2e9930`)
- link portfolio project card to its GitHub repo (`28d4587`)
- production-ready for Railway deploy (`0f7dfe1`)
- complete site skeleton with Navbar, Skills, Contact, Footer + centralized siteConfig (`f48d2ec`)
- compose page from Hero + Projects + Experience sections (`60272a9`)
- ProjectCard and Projects grid with scroll-triggered animations (`f8222d2`)
- Experience timeline component with stagger-on-scroll animation (`b64e2b7`)
- Hero component with cinematic staggered reveal animation (`083cd23`)
- typed data models and placeholder data for projects + experience (`f8ed8af`)
- luxury design tokens (Tailwind v4 @theme) + Google Fonts in layout (`fa24fee`)

### Bug fixes

- raise contrast on project card icon actions (`5a95f76`)
- use correct domain (nicolaspilegidenigris.dev) in fallback URLs (`0c2d6cd`)
- address code review - line-heights, skip-nav, a11y, type imports, variant typing (`6707cb8`)
- use GitBranch icon (Github not available in lucide-react 1.8.0) (`2525442`)

### Performance

- split Courses into server shell + client expand toggle (`5ad3d8f`)
- convert Contact and Experience to server components (`161ef11`)
- convert to server component, drop framer-motion variants (`fd4bbb3`)

### Refactor

- consolidate motion variants and sweep em-dashes (`0822210`)
- extract EASE_STANDARD to shared module (`43ff5f3`)
- extract ease tuple and document aria anchor (`a7e22fd`)
- reverse display order and slice to 6 visible (`bfa6e5e`)

### Docs

- expand with Architecture Decisions section (`9557a29`)
- add CI, CodeQL, and license badges (`7053327`)
- add CONTRIBUTING and CODE_OF_CONDUCT (`b74d292`)
- add SECURITY.md with private-disclosure process (`33b72aa`)
- add Design System of Excellence (DESIGN.md) (`d1dae26`)

### Tests

- close coverage gaps in Navbar, ProjectCard; add View Transitions E2E (`f37015f`)
- add ContactForm and MagneticCTA unit tests (`93db54e`)
- expand Playwright suite to case studies, meta pages and contact (`5c8729a`)
- expand Vitest coverage to Footer, Monogram, NavLink, BackToTop (`e5a7ef2`)

### Chores

- point repoHrefs at the public mirrors (`bfc2104`)
- add issue templates and pull-request template (`f26325b`)
- add MIT license (`8e1cef6`)
- add .gitattributes for line-ending normalization (`10ab334`)
- scaffold Next.js 16 App Router with Tailwind v4 + Framer Motion (`b1fc5bf`)
- scaffold Next.js 14 App Router with Tailwind + Framer Motion (`81f52ef`)
