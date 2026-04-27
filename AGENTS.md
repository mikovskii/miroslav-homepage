# Repository Guidelines

## Project Structure & Module Organization

This is an Astro personal homepage using Vue, TypeScript, and Tailwind CSS. Main source files live in `src/`:

- `src/components/` contains reusable UI components, with mobile-only pieces in `src/components/mobile/`.
- `src/layouts/Layout.astro` defines the shared page shell.
- `src/data/*.json` stores project, theme, and social-link content used by the UI.
- `src/utils/*.ts` contains small TypeScript helpers.
- `public/` stores static assets served as-is, currently `favicon.svg`.
- Root configs include `astro.config.mjs`, `tailwind.config.mjs`, `eslint.config.mjs`, and `tsconfig.json`.

## Build, Test, and Development Commands

Run commands from the repository root. The project uses Bun, as indicated by `bun.lock`.

- `bun install` installs dependencies.
- `bun run dev` or `bun run start` starts the dev server, usually at `http://localhost:4321`.
- `bun run build` runs `astro check` and builds the production site into `dist/`.
- `bun run preview` serves the production build locally.
- `bun run astro -- check` runs Astro type and content checks directly.

There is no dedicated test script; use `bun run build` as the primary validation command.

## Coding Style & Naming Conventions

Use TypeScript, Astro, Vue 3, and Tailwind utilities following the existing style. Prefer small components and keep content data in `src/data/` instead of hardcoding repeated lists. Use PascalCase for component filenames, such as `ThemeButton.vue`, and camelCase for utilities, such as `getCurrentYear.ts`.

Formatting and lint conventions are managed by `@antfu/eslint-config` with Astro, Vue, and formatter support enabled in `eslint.config.mjs`. Keep indentation, imports, semicolons, and Tailwind class ordering consistent with that tooling.

## Testing Guidelines

No unit or browser test framework is configured. Verify changes with `bun run build` and manually check affected pages in `bun run dev`. If adding tests later, colocate focused tests near the code they cover or add a clear `tests/` directory, then document the command in `package.json` and this file.

## Commit & Pull Request Guidelines

Recent history follows Conventional Commit-style messages, for example `feat: update links`, `fix: readme url error`, and `feat(SocialLinks): add fade-up animation`. Use short imperative subjects with a type such as `feat`, `fix`, or `docs`; include a scope when helpful.

Pull requests should include a concise description, screenshots or recordings for UI changes, and verification performed, especially `bun run build`. Link related issues when available and call out content or configuration changes that affect deployment.
