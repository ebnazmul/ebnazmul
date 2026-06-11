# AGENTS.md

## Project

`ebnazmul` serves two purposes:

1. The root `README.md` is the GitHub profile readme for `github.com/ebnazmul`.
2. The repository is a Next.js portfolio website started locally with `pnpm run start`.

## Stack

- Next.js App Router
- React
- TypeScript
- Plain CSS with OKLCH design tokens
- pnpm

## Structure

- `app/`: website routes, layout, and global styles
- `images/`: assets used by the GitHub profile readme
- `README.md`: GitHub profile content, not website setup documentation
- `PRODUCT.md`: product intent and brand principles
- `DESIGN.md`: visual system
- `PLAN.md`: append-only task history

## Commands

- `pnpm run start`: run the local development server
- `pnpm run build`: create a production build
- `pnpm run serve`: serve the production build
- `pnpm run lint`: run ESLint

## Conventions

- Keep the profile readme concise and GitHub-friendly.
- Do not invent projects, experience, employers, or credentials.
- Keep page content in semantic HTML and preserve keyboard navigation.
- Use CSS custom properties for recurring visual values.
- Use OKLCH for colors and support `prefers-reduced-motion`.
- Add dependencies only when they provide clear value.
- Keep `AGENTS.md`, `PRODUCT.md`, and `DESIGN.md` aligned with architectural or visual changes.

## Environment

No environment variables are currently required.
