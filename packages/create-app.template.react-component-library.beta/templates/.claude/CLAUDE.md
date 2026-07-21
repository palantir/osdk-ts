# Project guidance

This repo is a Turborepo monorepo for a React component library, scaffolded from the OSDK `react-component-library` template. Docusaurus is the live preview surface.

## Layout

- `apps/docs` — Docusaurus 3 docs site. The sidebar is grouped into "Getting Started" (introduction, installation, project structure, the component generator, plus Blueprint and OSDK component references) and "Components" (your own components). The live preview surface.
- `packages/components` — your own components, consumed by the docs site and published to your Foundry npm registry.

## Common workflows

- Run locally: `npm run dev` (starts Docusaurus on port 3000).
- In Code Workspaces: `npm run dev:remote` reads `DEV_SERVER_PORT` and `DEV_SERVER_BASE_PATH` env vars so Docusaurus binds to the preview panel.
- Add a new component: invoke the `/new-component` skill. It writes the component file, appends the export, generates an MDX docs page with a `<Playground>` whose controls are auto-derived from the prop types, and patches `apps/docs/sidebars.ts`.
- Build for deployment: `npm run build` (turbo builds packages/components first, then docs).
- Type-check all workspaces: `npm run typecheck`
- Lint and format check: `npm run lint` (ultracite — oxlint + oxfmt)
- Format: `npm run format` (oxfmt)
- Auto-fix all fixable issues: `npm run fix` (ultracite)

## OSDK components section

`apps/docs/docs/getting-started/osdk-components.mdx` is a documentation-only page describing `@osdk/react-components` (the ready-made React components that wrap the Ontology SDK: `ObjectTable`, `ActionForm`, `FilterList`, and friends). It ships as prose and links rather than live renders, because those components need a generated `@<package>/sdk` and a real ontology at runtime — neither of which exists until you generate your SDK. Once your ontology SDK is in place, you can render them live alongside your own components.

## Docusaurus theming

Theming lives in `apps/docs/src/css/custom.css` — it sticks close to Docusaurus's stock Infima defaults and only styles the custom MDX components. The sidebar layout is configured in `apps/docs/sidebars.ts`. Shared MDX components (`ComponentPage`, `Playground`, `Preview`, `PropsTable`, `UsageExample`) live in `apps/docs/src/components/` and are registered via `apps/docs/src/theme/MDXComponents.tsx` so they're available globally in MDX without imports. `apps/docs/src/theme/Root.tsx` imports Blueprint's CSS so Blueprint-based demos render correctly inside MDX.

---

# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting via Oxlint and Oxfmt.

## Quick Reference

- **Auto-fix everything**: `npx ultracite fix` (or `npm run fix`)
- **Lint + format check**: `npx ultracite check` (or `npm run lint`)
- **Diagnose setup**: `npx ultracite doctor`
- **Format only**: `npm run format`

The PostToolUse hook in `.claude/settings.json` runs `ultracite fix` after every Write/Edit so files Claude touches stay formatted automatically.

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### React (apps/docs, packages/components)

- Function components only. No class components.
- Use the new JSX transform — no `import React from "react"` needed.
- Keep components small and focused. Doc pages live in `apps/docs/docs/<section>/<slug>.mdx`. The sidebar location is set in `apps/docs/sidebars.ts`.
- Use `useState` / `useReducer` for local state. Don't reach for a global store unless multiple unrelated components genuinely need to share state.

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Avoid barrel files that re-export everything. `packages/components` has no barrel — each component is published as its own named subpath export in `package.json` (e.g. `@.../components/example` → `dist/components/Example.js`). Consumers import directly from the subpath: `import { Example } from "@.../components/example"`.

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports

## Testing

- `packages/components` uses [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Run all tests with `npm run test` (turbo) or `npm run test:watch` inside the package. See `packages/components/src/components/Example.test.tsx` for the starter pattern.
- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

## When Oxlint/Oxfmt Can't Help

Oxlint/Oxfmt will catch most issues automatically. Focus your attention on:

1. **Business logic correctness** - the linter can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Module structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **Documentation** - Add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Oxlint/Oxfmt. Run `npm run fix` before committing to ensure compliance.
