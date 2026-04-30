---
name: add-new-component
description: Opinionated workflow for adding a new component to @osdk/react-components. Use when the user says "add a component", "create a component", "new component", or wants to scaffold a fresh OSDK-aware component in this package. Layers AI-driven gates (API-first PR, MVP feature checklist, verification loop) on top of the package's CONTRIBUTING.md.
user-invocable: true
---

# Create a new `@osdk/react-components` component

Operational playbook for scaffolding a new component in `packages/react-components`. Use this whenever a user asks to add a new OSDK-aware component to the package.

This skill is a **companion** to [`packages/react-components/CONTRIBUTING.md`](../../../CONTRIBUTING.md), which is the canonical source of truth for everything about contributing to this package. The skill follows CONTRIBUTING.md and adds three AI-driven gates on top:

1. An **API-first PR** that lands the type contract before any implementation.
2. A **user-supplied MVP checklist** that defines "done" before code is written.
3. A **verification loop** that exercises the MVP checklist in a real browser and backports findings as code fixes and tests.

If this skill ever conflicts with CONTRIBUTING.md, **CONTRIBUTING.md wins** — flag the conflict to the user.

## Authoritative sources

Read these in roughly this order. The skill cites them by name throughout; do not reproduce their contents inline.

| File | What it tells you |
| --- | --- |
| [`packages/react-components/CONTRIBUTING.md`](../../../CONTRIBUTING.md) | **Canonical**: development setup, branch naming, component architecture, API design rules, folder structure, styling, testing, Storybook, PR/changeset process, hook placement |
| [`packages/react-components/README.md`](../../../README.md) | Installation, peer-dependency matrix, CSS layer setup, component catalogue, architecture overview, metrics (`withOsdkMetrics`) |
| [`packages/react-components/AGENTS.md`](../../../AGENTS.md) | Agent-facing component catalogue, install-time error reference, current entry points |
| [`packages/react-components/CLAUDE.md`](../../../CLAUDE.md) | Claude-specific reminders: TypeScript/React/CSS rules, monorepo and pnpm constraints |
| [`packages/react-components/docs/`](../../../docs/) | Per-component user-facing docs and [`CSSVariables.md`](../../../docs/CSSVariables.md) |
| [`packages/react/CONTRIBUTING.md`](../../../../react/CONTRIBUTING.md) | Sister package rules — read when deciding whether a hook belongs in `@osdk/react` or stays here |
| [`packages/react/AGENTS.md`](../../../../react/AGENTS.md) | Sister package — provider setup and available hooks |
| [`packages/react-components-storybook/README.md`](../../../../react-components-storybook/README.md) | Storybook playground (used in Step 3 verification) |
| [`packages/e2e.sandbox.peopleapp/README.md`](../../../../e2e.sandbox.peopleapp/README.md) | Live playground against real Foundry data (optional Step 3 verification) |
| [Repo-root `CLAUDE.md`](../../../../../CLAUDE.md) | Monorepo-wide rules: turbo invocation (`--filter`, never `--dir`), changesets, formatting (`dprint`), pre-push verification |

## Preflight — before writing any code

Ask the user, in order. Do not skip.

1. **Does this component fetch OSDK data?**
   - If **no** → the component does not belong in `@osdk/react-components`. This package is purpose-built for Ontology-aware components (see CONTRIBUTING.md "When does a component belong here?" and README.md "What this package is (and isn't)"). Suggest [BlueprintJS](https://blueprintjs.com/) or another design system instead. Stop.
   - If **yes** → continue.
2. **Reference implementation path.** Most new components have a closest analog elsewhere — another codebase or a previous prototype. Ask for a specific file path, PR URL, or screenshot pointing at the analog. Read it; treat it as the **feature/behavior inventory**, not as the API template — references tend to be over-configured, and the goal here is the opposite (see CONTRIBUTING.md "API Design").
3. **Figma URL or reference screenshot** (optional but strongly preferred). Used in Step 3 verification. If a Figma URL is provided, use **figma-mcp** to read it.
4. **MVP feature list.** Get the user to spell out what "MVP" means for this component — for example, *"when `objectType` is passed, data renders in the table."* This is the checklist Step 3 verifies against.

## Step 1 — Define the API

The API is the contract. It is reviewed and approved **before** any implementation.

1. **Branch off `main`** named `<your-initials>/<name>-api` (CONTRIBUTING.md "Branch Naming").
2. **Create `packages/react-components/src/<name>/<Name>Api.ts`** mirroring [`packages/react-components/src/object-table/ObjectTableApi.ts`](../../../src/object-table/ObjectTableApi.ts):
   - Apache 2.0 license header (copy from any existing file in the package).
   - Generic type parameters (`Q extends ObjectOrInterfaceDefinition`, etc.) where the component is OSDK-typed.
   - Outer-component props interface (`<Name>Props`) only. **Base props live inline in `Base<Name>.tsx`**, not here.
   - Public sub-types co-located in this file (column definitions, locators, options, etc.).
   - JSDoc on every prop. Use `@default` for defaulted optional props. Use `@param` / `@returns` for callbacks.
3. **Minimal-API rules** (extends CONTRIBUTING.md "API Design"):
   - Aim for **one required prop**. Question every required prop addition based on the component type — most "required" inputs can be derived or defaulted.
   - **`enable*` boolean flags default to `true`** when the feature is part of the out-of-the-box experience.
   - Numeric/policy defaults (page size, dedupe interval, row height) are documented inline with `@default`.
   - Provide controlled and uncontrolled variants where applicable (e.g. `filter` + `onFilterChanged`, `defaultOrderBy` + `orderBy` + `onOrderByChanged`). Match `ObjectTableApi.ts` exactly.
   - **Render overrides for flexibility.** Expose `render*` slots (e.g. `renderHeader`, `renderProperty`, `renderRow`) where consumers may legitimately want to deviate from the default rendering. Default rendering must remain feature-complete with no overrides supplied. Don't add slots speculatively — add them where the surface is obviously customisable (header, individual cell/property, empty state). When in doubt, add the override; we want to enable flexibility where we can.
   - **Event listeners on top of default behaviour.** For every state change that has a built-in default behaviour (sort, filter, select, edit, navigate, load), expose a non-controlling `on*` listener so consumers can layer extra handling — analytics, scroll-to-top, telemetry, side effects — without replacing the default. The default still runs whether or not the listener is provided. This is distinct from controlled-mode `on*Changed` handlers, which DO take over the state.
4. **Open a PR with only `<Name>Api.ts`** — no exports wired, no implementation. The package still compiles because this is types-only.

   The PR description should describe the API surface concisely. Do **not** restate package guidelines or call out "documented exceptions" to internal heuristics (e.g. the one-required-prop guideline) in the PR body — those are reviewer-side concerns, not contract details. Keep the description focused on what consumers see.

5. **Proceed to Step 2 once the API PR is open.** The implementation branch stacks on the API branch (next step), so review feedback on the API can flow back into both branches without blocking implementation.

## Step 2 — Implement MVP

Implementation lives on a **separate branch stacked on the API branch** so the API can merge independently if desired.

1. **Branch off the API branch** named `<your-initials>/<name>-impl`.

2. **Transpile internal deps once** so the dev environment is ready (CONTRIBUTING.md "Development Setup"):

   ```sh
   pnpm --filter @osdk/react-components transpileAllDeps
   ```

3. **Folder structure** for the new component — match CONTRIBUTING.md "Folder Structure" and the existing components (`object-table`, `pdf-viewer`, `filter-list`):

   ```
   src/<name>/
     <Name>Api.ts              # API contract (already written in Step 1)
     <Name>.tsx                # OSDK layer
     Base<Name>.tsx            # Base layer (OSDK-agnostic)
     <Name>.module.css         # CSS module (scoped styles)
     hooks/                    # Custom hooks (component-specific)
     components/               # Supporting sub-components (building blocks)
     utils/                    # Helper utilities and types
     __tests__/                # Vitest tests
   ```

4. **Build the Base component first** (CONTRIBUTING.md "Component Architecture", README.md "Component Architecture", CLAUDE.md "OSDK Component Architecture"):
   - `Base<Name>.tsx` at `packages/react-components/src/<name>/Base<Name>.tsx`.
   - **No OSDK imports** in this file.
   - Accepts only primitive props (`string[]`, plain objects, callbacks). Do not leak OSDK types here.
   - All UI rendering, interactions, and styling live here.
   - For complex components, split into a **building blocks tier**: sub-components and hooks under `components/` and `hooks/` subfolders. `PdfViewer` is the canonical in-package example (`PdfViewerToolbar`, `PdfViewerSidebar`, `usePdfViewerState`).
   - **Reuse from [`src/base-components/`](../../../src/base-components/) first.** The package's `src/base-components/` folder contains shared internal UI primitives (`action-button/`, `checkbox/`, `combobox/`, `dialog/`, `draggable-list/`, `icon/`, `search-bar/`, `searchable-menu/`, `select/`, `skeleton/`, `switch/`, `tooltip/`, etc.) — check this folder before writing a new UI primitive. If you find a fit, import it. Reusing avoids visual / behavioral drift across the package.
   - **If a piece of UI you need is reusable across components, add it to `src/base-components/` rather than co-locating in your component folder.** A primitive that's clearly useful elsewhere (a status badge, a hover card, a list-row pattern, a property-pair layout) belongs in `base-components/` so the next component can pick it up. UI primitives in `src/base-components/` are internal-only and **must not** be exported (README.md "Why Not Export UI Primitives?").
   - **Prefer `@base-ui/react` over primitive HTML for interactive elements.** When you need a button, dialog, menu, popover, tooltip, select, switch, or similar interactive primitive, reach for the corresponding `@base-ui/react` component (it's a workspace dependency) rather than a raw `<button>`, `<div role="dialog">`, etc. Base-ui handles accessibility, keyboard interaction, and focus management correctly out of the box. Plain semantic HTML (`<div>`, `<section>`, `<span>`, `<a>`) is fine for non-interactive layout.

5. **Styling rules (Base component)** — see CONTRIBUTING.md "Styling Guidelines", CLAUDE.md "CSS Styling Best Practices", README.md "CSS Setup":
   - Use **CSS modules** (`<Name>.module.css`) for component-scoped styles.
   - **Never hardcode colors or pixel values.** Every visual property goes through a CSS variable.
   - Use **`--bp` design tokens first**. Any `--bp` token used must be mapped from an `--osdk` token in `src/tokens/base-tokens/base.css`.
   - Define a CSS variable for **every property a consumer may want to customise**. Defaults go in `src/tokens/<name>.css`. Document new variables in [`docs/CSSVariables.md`](../../../docs/CSSVariables.md).
   - **Combine class names with the `classnames` utility.** Never use template literals for class names (CLAUDE.md "React Best Practices").
   - **Respect CSS layers** — see README.md "CSS Setup" for layer order and how brand overrides plug in.

6. **Then build the OSDK wrapper.** `<Name>.tsx` at `packages/react-components/src/<name>/<Name>.tsx`:
   - Uses `@osdk/react` hooks for data fetching (see [`packages/react/AGENTS.md`](../../../../react/AGENTS.md) for available hooks and provider setup).
   - Converts OSDK types to the primitive shapes that `Base<Name>` expects.
   - Contains no styling or UI interaction logic.

7. **Hook placement decision** (if you create a new hook) — CONTRIBUTING.md "Contributing to @osdk/react":
   - Reusable, OSDK-aware, not tied to this component → belongs in `@osdk/react` (see [`packages/react/CONTRIBUTING.md`](../../../../react/CONTRIBUTING.md)).
   - Tied to this component's internal state, rendering, or interactions → stays in `@osdk/react-components` (alongside the component, in `hooks/`).
   - When in doubt, ask the user.

8. **Wire up exports** — both required (CONTRIBUTING.md "Export Rules", README.md "Export Strategy"):
   - Re-export the OSDK component (and Base, if intended for advanced use) from `packages/react-components/src/public/experimental/<name>.ts` (one file per component, mirroring the existing exports).
   - Add a subpath under `./experimental/<name>` in `packages/react-components/package.json` `exports` to match existing components (`object-table`, `filter-list`, `pdf-viewer`, etc.).
   - **Never export** UI primitives in `src/base-components/` — those are internal (README.md "Why Not Export UI Primitives?").

9. **Register a user agent for metrics** — required for every OSDK component (the data-fetching wrapper, **not** the Base component). See README.md "Metrics" for the rationale and full checklist.
   - Wrap at the **export barrel** (`src/public/experimental/<name>.ts`), not inside the component body:

     ```ts
     // src/public/experimental/<name>.ts
     import { MyComponent as _MyComponent } from "../../<name>/<Name>.js";
     import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
     export const MyComponent: typeof _MyComponent = withOsdkMetrics(
       _MyComponent,
       "MyComponent",
     );
     ```

   - Add the `typeof _Component` annotation so `--isolatedDeclarations` is satisfied.
   - Do **not** wrap Base components.
   - Do **not** call `useRegisterUserAgent` directly inside the component body.

10. **Tests** (CONTRIBUTING.md "Testing"):
    - Place test files in `__tests__/` subfolders alongside the code they test (e.g. `src/<name>/__tests__/Base<Name>.test.tsx`).
    - Name files `*.test.ts` or `*.test.tsx`.
    - **Test the Base layer independently of OSDK** — keeps tests fast and focused.
    - **Test the OSDK wrapper separately** for data transformation and hook-usage behaviour.
    - Reference existing component tests in `packages/react-components/src/<other-component>/__tests__/` for conventions (e.g. `object-table/__tests__/EditableCell.test.tsx`, `filter-list/__tests__/`).
    - Run during dev: `pnpm --dir packages/react-components vitest` (watch mode) or `pnpm --dir packages/react-components vitest run` (single pass).

11. **Storybook story** (CONTRIBUTING.md "Storybook", [`packages/react-components-storybook/README.md`](../../../../react-components-storybook/README.md)):
    - Add `<Name>.stories.tsx` under `packages/react-components-storybook/src/stories/<Name>/`.
    - Follow [Component Story Format](https://storybook.js.org/docs/api/csf).
    - Cover the key states the user listed in the MVP feature checklist; also default, loading, error, empty, edge cases.
    - Use the **MSW addon** when stories need mocked API responses.

12. **Documentation** (CONTRIBUTING.md "Adding a New Component" step 8):
    - Add `packages/react-components/docs/<Name>.md` with usage and a minimal example. Match the structure of the existing per-component docs in [`packages/react-components/docs/`](../../../docs/).
    - If you added CSS variables, update [`docs/CSSVariables.md`](../../../docs/CSSVariables.md).
    - Add a one-line entry to the components table in [`AGENTS.md`](../../../AGENTS.md) and [`README.md`](../../../README.md).

13. **Live example in [`@osdk/e2e.sandbox.peopleapp`](../../../../e2e.sandbox.peopleapp/README.md):**
    - Add an example usage of the new component against real Foundry data, using the existing `Employee`, `Office`, etc. types in the sandbox's ontology.
    - Keep it minimal — MVP-feature usage only. The goal is to give reviewers (and you yourself) a quick way to exercise the component end-to-end against a real Foundry instance, complementing the MSW-mocked Storybook story.

## Step 3 — Verify against reference

Transient verification using [`@playwright/cli`](https://github.com/microsoft/playwright-cli) (and figma-mcp if a Figma URL was provided). **Nothing committed in this step** — Playwright is a dev-time driver only. Findings flow back as code fixes and (where expressible) Vitest tests.

**Prerequisite — install `@playwright/cli` once if it isn't already on your `PATH`:**

```sh
npm install -g @playwright/cli@latest
playwright-cli install --skills    # registers the agent-friendly skills
```

`@playwright/cli` is explicitly designed for coding agents (token-efficient, doesn't push page DOM into the LLM context). Use it instead of trying to drive Playwright through ad-hoc node scripts — its `--skills` integration is what makes browser interaction fast inside an agent loop.

1. **Run Storybook locally** (primary verification target — uses MSW-mocked data, fast iteration; see [`packages/react-components-storybook/README.md`](../../../../react-components-storybook/README.md)):

   ```sh
   pnpm --filter @osdk/react-components-storybook transpileAllDeps
   pnpm --filter @osdk/react-components-storybook dev
   ```

   Default URL: `http://localhost:6006`.

   **Verify the new story loads with no runtime errors before continuing.** "Storybook ready!" in the dev-server log only means Vite is serving — it does NOT mean the story renders. Storybook compiles per-story on demand, so import errors and component errors only surface when the story is actually visited. Hit the new story's iframe URL (`http://localhost:6006/iframe.html?id=<story-id>`) and check that the response does NOT contain `sb-errordisplay`, `Cannot find module`, or other error markers. If it does, fix the underlying issue (typically a missing import, wrong icon name, or CSS-module path) before moving on.

2. **Optional: run the live playground** ([`packages/e2e.sandbox.peopleapp`](../../../../e2e.sandbox.peopleapp/README.md)) to verify the OSDK wrapper against real Foundry data. Especially valuable when the component depends on data shape, server-side filtering, or pagination that MSW mocks may not faithfully reproduce.

   ```sh
   # one-time: copy .env.local.sample to .env.local in packages/e2e.sandbox.peopleapp
   pnpm --filter @osdk/e2e.sandbox.peopleapp transpileAllDeps
   pnpm --filter @osdk/e2e.sandbox.peopleapp dev
   ```

3. **Open the new story (or playground page) via `playwright-cli`.** Capture the browser console; if any errors fire on load, fix them before continuing — those are the issues that the per-story curl check (above) cannot catch (e.g. a Blueprint icon name that exists at the package's typings level but not at the chosen export path).
4. **If a Figma URL was provided in preflight:** use **figma-mcp** to read the design (`get_design_context`, `get_screenshot`, `get_variable_defs` as needed). Compare visual properties (spacing, colour, typography, layout) to the rendered story.
5. **For each item on the user's MVP feature checklist:**
   - Exercise the interaction in the browser via `playwright-cli` (click the dropdown, drag-and-drop, keyboard navigation, etc.).
   - Verify the resulting UI matches the reference component's behaviour (Figma flow or reference screenshot).
6. **Fix any discrepancies** in the Base or wrapper component.
7. **Backport regression coverage to Vitest** where the assertion can be expressed without a real browser. Behaviours that genuinely require a real browser (real `DataTransfer`, scroll virtualisation, real focus traversal) stay verified-but-untested for now — note them in the PR description.

## Step 4 — Ship

Run these in order (CONTRIBUTING.md "Submitting a Pull Request"). Stop and fix if any fails.

1. **All MVP checklist items pass** when exercised in Storybook.
2. **Visual match with the reference is acceptable** — user makes the call.
3. **Per-package check is green:**

   ```sh
   pnpm turbo check --filter=@osdk/react-components
   ```

4. **Add a changeset** (CONTRIBUTING.md "Changesets", repo-root [`CLAUDE.md`](../../../../../CLAUDE.md) "Changesets"). Create `.changeset/<descriptive-kebab-name>.md`:

   ```md
   ---
   "@osdk/react-components": minor
   ---

   Add <Name> component for <one-sentence purpose>.
   ```

   - Bump type: `minor` for a new component, `patch` for fixes, `major` only on breaking changes.
   - Specific summary ("add drag-and-drop reordering to filter list"), not generic ("update filter list").
   - One changeset per branch — check `.changeset/` first; do not duplicate.

5. **Format** (repo-root `CLAUDE.md` "Formatting"):

   ```sh
   npx dprint fmt
   ```

6. **Global cross-package check** to catch issues per-package check missed:

   ```sh
   pnpm turbo check
   ```

7. **Push the implementation PR** against `main`. Fill out the PR template. Do **not** force-push during review — push new commits so reviewers can see incremental changes (CONTRIBUTING.md step 7).

## Common pitfalls

- **Never use `pnpm --dir <path> turbo` or `cd <path> && pnpm turbo`.** The `--dir` flag breaks turbo (pnpm interprets the path as the command). Always use `--filter`: `pnpm turbo <task> --filter=@osdk/react-components`. For non-turbo commands (vitest, lint), `pnpm --dir packages/react-components <cmd>` is fine. (Repo-root `CLAUDE.md`, CONTRIBUTING.md "Running Commands".)
- **If `pnpm turbo check` fails on lint:** auto-fix what's mechanical with `pnpm --dir packages/react-components fix-lint`, then re-run the check.
- **If formatting fails:** run `npx dprint fmt` from the repo root — the pre-commit hook runs `dprint check` and rejects unformatted code.
- **Do not skip `transpileAllDeps`.** This package depends on transpiled output of other monorepo packages; skipping the transpile step leads to "missing export" errors that look like real bugs.
- **Do not export UI primitives.** Anything in `src/base-components/` is internal. New components belong in their own folder under `src/<name>/`.
- **Do not wrap the Base component with `withOsdkMetrics`.** Only the OSDK wrapper registers a user agent.

