## Project Overview

OSDK TypeScript monorepo (~82 packages). Provides a type-safe SDK for Palantir Foundry ontologies: code generation, client runtime, React hooks, CLI tooling, and widget framework.

- **Package manager**: pnpm 10.27.0 (enforced via `engines` and `packageManager` in root `package.json`)
- **Node.js**: >=18.19.0. CI tests on Node 18, 20, 22, and 24
- **Workspace layout**: `packages/*`, `examples/*`, `examples-extra/*`, `tests/*`, `benchmarks/*/*`, `docs/`

## Build System

- Turbo orchestrates all tasks. `pnpm check` runs everything CI runs (lint, transpile, typecheck, test, check-attw, check-api, check-spelling)
- Each published package produces 3 output formats: ESM (`build/esm`), CJS (`build/cjs`), Browser (`build/browser`), plus type declarations (`build/types`)
- Transpilation uses `@osdk/monorepo.tool.transpile` (tsup + babel with dead-code elimination for `process.env.NODE_ENV` guards)

## License Headers

- Every `.ts`/`.tsx` source file must have the Apache 2.0 license header block comment
- ESLint enforces this via `eslint-plugin-header` -- run `eslint . --fix` in a package to add missing headers

## TypeScript Best Practices

- NEVER use `any` without asking the user first. If you think you need `any`, you probably don't understand the problem
- Projects are ESM/TypeScript - look for `.ts`/`.tsx` files, not `.js`

## Running Turbo Commands

- NEVER use `pnpm --dir /path turbo` or `cd /path && pnpm turbo`. The `--dir` flag breaks turbo (pnpm misinterprets the path as the command to spawn).
- Use turbo's `--filter` flag to target packages: `pnpm turbo typecheck --filter=@osdk/react`
- To typecheck a specific package: `pnpm turbo typecheck --filter=@osdk/the-package`
- To run tests in a package: `pnpm turbo test --filter=@osdk/the-package`
- For vitest directly: `pnpm --dir packages/the-package vitest run`

## Changesets

- Every PR that changes published package code needs exactly ONE changeset per branch
- Create manually: add `.changeset/<descriptive-name>.md` with YAML front matter listing `"@osdk/package-name": patch|minor|major` and a one-line summary
- Check `.changeset/` before creating - do NOT create duplicate changesets on the same branch
- Changeset summaries should be specific ("add drag-and-drop reordering to filter list" not "update filter list")
- CI will fail if a changeset is missing for changed packages

## Formatting

- Run `npx dprint fmt` on changed files before committing
- The pre-commit hook runs `dprint check` and will reject unformatted code
- To check without fixing: `npx dprint check`

## React Best Practices

- Always put new components in their own file and create separate components instead of inline functions
- NEVER conditionally call React hooks
- ALWAYS keep components rendering during loading/error states. Don't use early returns like `if (isLoading) return <LoadingMessage />`. Show loading/error indicators while rendering existing data to prevent UI flashing
- @osdk/react hooks may have data while loading (reloading invalidated data). Incorporate loading state comprehensively, not as shortcuts
- Call actions: `const { applyAction } = useOsdkAction(modifyEmployee)` then `applyAction({ employee, primary_office_id })`
- Direct client: `$(modifyEmployee).applyAction({ employee, primary_office_id })`
- Read docs/react/getting-started.md when working with @osdk/react

## Project Management

- This project uses pnpm. DO NOT use npm

## Security Best Practices

- NEVER disable gpg signing unless explicitly requested

## Repository Best Practices

- Monorepo: run tests from individual packages, not root

## API Extractor

- When making changes to a package's public API (exports, types, function signatures), run API extractor: `pnpm turbo check-api --filter=@osdk/the-package`
- This updates the API report in `etc/<package>.report.api.md` — commit the updated report
- API extractor requires transpiled types, so `transpileTypes` runs automatically as a dependency

## Pre-Push Verification

- Before pushing to a PR, run `pnpm turbo transpile` globally to ensure all packages compile
- This catches cross-package build issues that per-package checks may miss

## Code Maintenance Best Practices

- Do not fix diagnostic warnings in old code

## Updating Platform SDKs

- `@osdk/foundry.*` and `@osdk/internal.foundry.*` versions are pinned in the `foundry-platform-typescript` catalog in `pnpm-workspace.yaml`
- To bump: update the catalog versions, run `pnpm install`, then fix type errors iteratively with `pnpm turbo typecheck` until all packages pass
- Common breakages: new variants in `QueryDataType` discriminated unions (find exhaustive switches via `const _: never`), new required fields on types like `QueryTypeV2` in test stubs, and fields becoming optional
- After fixing types, update snapshots with `pnpm vitest run --update` in affected packages
- Validate with `pnpm check` before finalizing the PR

## Additional Linting

- **cspell**: Spell checking. Run per-package: `pnpm turbo check-spelling --filter=@osdk/the-package`
- **monorepolint**: Enforces consistent package.json structure, tsconfig, and export maps. Config in `.monorepolint.config.mjs`
- **ESLint flat config**: Root `eslint.config.mjs`. Key rules: `no-console` is an error (use a logger), `import/no-default-export` warns, `@typescript-eslint/consistent-type-imports` enforces `import type`
- **attw** (`@arethetypeswrong/cli`): Validates package exports resolve correctly for ESM, CJS, and bundler consumers

## Export Conventions

- Published packages use conditional exports in `package.json`: `browser` -> `import` (with `types` subpath) -> `require` -> `default`
- Internal sub-paths follow patterns: `./internal`, `./unstable-do-not-use`, `./experimental`, `./*` (wildcard)
- Public API surface files live in `src/public/` and map to the `package.json` `exports` entries

## Release Process

- Changesets with fixed version groups defined in `.changeset/config.json`
- Snapshot releases publish on merges to the `next` branch