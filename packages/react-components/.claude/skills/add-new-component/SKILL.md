---
name: add-new-component
description: Opinionated workflow for adding a new component to @osdk/react-components. Use when the user says "add a component", "create a component", "new component", or wants to scaffold a fresh OSDK-aware component in this package. Layers AI-driven gates (API-first PR, MVP feature checklist, verification loop) on top of the package's CONTRIBUTING.md.
user-invocable: true
---

# Create a new `@osdk/react-components` component

Operational playbook for scaffolding a new component in `packages/react-components`. Use this whenever a user asks to add a new OSDK-aware component to the package.

This skill is a **companion** to [`packages/react-components/CONTRIBUTING.md`](../../../CONTRIBUTING.md), which is the canonical source of truth for everything about contributing to this package. The skill follows CONTRIBUTING.md and layers AI-driven structure on top:

1. An **API-first PR** that lands the type contract before any implementation, designed for **small interface, hidden complexity** (Ousterhout's "deep modules" principle).
2. A **user-supplied MVP checklist** that defines "done" before code is written.
3. **Parallel implementation fan-out** — once the API is approved, the OSDK wrapper, Storybook story, and tests are written by three sub-agents in parallel via the Task tool. (Empirically: when the Base API was refactored, two sub-agents finished both rewrites in ~2 min concurrently. Always parallelize tests + Storybook + wrapper rather than serialising them.)
4. **Named user checkpoints** — explicit `AskUserQuestion` gates at API approval and the final review. **Use the `preview` field on options** to render rendered code (or markdown) previews; multiple-choice with previews collapses each iteration into a single tool call instead of looping back-and-forth across multiple turns.
5. A **verification loop** that exercises the MVP checklist in a real browser and backports findings as code fixes and tests. The agent **runs this automatically** after Step 2 — it does not stop at the end of Step 2 and wait for the user to ask for verification.
6. A **review fan-out** before pushing — invoke the official `review` and `security-review` skills in parallel and consolidate findings into one edit pass.

If this skill ever conflicts with CONTRIBUTING.md, **CONTRIBUTING.md wins** — flag the conflict to the user.

**Git policy.** The skill **asks the user every single time** before running `git commit` or `git push` — first commit, second commit, every commit. Do not assume an earlier confirmation extends to the next commit. Do not auto-commit, do not auto-push, do not amend. The skill stages diffs and proposes a message; the user approves each commit and each push individually. PR creation is the same — explicit per-action confirmation.

## Authoritative sources

Read these in roughly this order. The skill cites them by name throughout; do not reproduce their contents inline.

| File                                                                                                | What it tells you                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`packages/react-components/CONTRIBUTING.md`](../../../CONTRIBUTING.md)                             | **Canonical**: development setup, branch naming, component architecture, API design rules, folder structure, styling, testing, Storybook, PR/changeset process, hook placement |
| [`packages/react-components/README.md`](../../../README.md)                                         | Installation, peer-dependency matrix, CSS layer setup, component catalogue, architecture overview, metrics (`withOsdkMetrics`)                                                 |
| [`packages/react-components/AGENTS.md`](../../../AGENTS.md)                                         | Agent-facing component catalogue, install-time error reference, current entry points                                                                                           |
| [`packages/react-components/CLAUDE.md`](../../../CLAUDE.md)                                         | Claude-specific reminders: TypeScript/React/CSS rules, monorepo and pnpm constraints                                                                                           |
| [`packages/react-components/docs/`](../../../docs/)                                                 | Per-component user-facing docs and [`CSSVariables.md`](../../../docs/CSSVariables.md)                                                                                          |
| [`packages/react/CONTRIBUTING.md`](../../../../react/CONTRIBUTING.md)                               | Sister package rules — read when deciding whether a hook belongs in `@osdk/react` or stays here                                                                                |
| [`packages/react/AGENTS.md`](../../../../react/AGENTS.md)                                           | Sister package — provider setup and available hooks                                                                                                                            |
| [`packages/react-components-storybook/README.md`](../../../../react-components-storybook/README.md) | Storybook playground (used in Step 3 verification)                                                                                                                             |
| [`packages/e2e.sandbox.peopleapp/README.md`](../../../../e2e.sandbox.peopleapp/README.md)           | Live playground against real Foundry data (optional Step 3 verification)                                                                                                       |
| [Repo-root `CLAUDE.md`](../../../../../CLAUDE.md)                                                   | Monorepo-wide rules: turbo invocation (`--filter`, never `--dir`), changesets, formatting (`dprint`), pre-push verification                                                    |

## Preflight — before writing any code

Ask the user, in order. Do not skip.

1. **Does this component fetch OSDK data OR hit an api-gateway endpoint?**
   - If **no to both** → the component probably does not belong in `@osdk/react-components`. This package is purpose-built for Ontology-aware components and API-gateway integrations (see CONTRIBUTING.md "When does a component belong here?" and README.md "What this package is (and isn't)"). Suggest [BlueprintJS](https://blueprintjs.com/) or another design system instead. If user insists that it should live here, ask the user to justify why it belongs here rather than blueprintjs. Note the justification in PR description later. Continue.
2. **Reference component or source.** Most new components have a closest analog elsewhere — another codebase, a prototype, or a pasted snippet. Ask the user for **one** of:
   - **A local path** — file or directory inside the repo or any working directory.
   - **A GitHub URL** — file, blob, or PR link.
   - **Inline pasted code** — a TS/TSX block in the conversation.
   - **A screenshot path** — for visual reference only (no source).

   Treat the reference as the **feature/behavior inventory**, not as the API template — references tend to be over-configured, and the goal here is the opposite (see CONTRIBUTING.md "API Design"). The next section ("Reference analysis") executes the actual fetch + analysis.
3. **Figma URL or reference screenshot** (optional but strongly preferred). Used in the reference-analysis step and again in Step 3 verification. If a Figma URL is provided, use **figma-mcp** to read it.
4. **Demo URL for the reference** (optional). If the reference component already runs somewhere — a Storybook deployment, a staging app, a localhost dev server the user has running — ask for the URL. The reference-analysis step will visit it via `playwright-cli` to capture appearance and interaction. If there is no running demo, this is fine; the analysis falls back to source-only.
5. **MVP feature list.** Get the user to spell out what "MVP" means for this component — for example, _"when `objectType` is passed, data renders in the table."_ This is the checklist Step 3 verifies against.

## Reference analysis — before Step 1

Once preflight is complete, resolve the reference into a source bundle and capture how it looks. Run **source resolution and visual capture in parallel** — single message, two operations. Findings feed directly into Step 1 (API design) and Step 2 (implementation fan-out).

### Source resolution

Probe the reference input from preflight step 2 in this order:

1. **URL.** If it matches `^https?://`:
   - For GitHub URLs use the `gh` CLI to fetch the file. Pass the GitHub host via `--hostname` (which **must come before the `api` subcommand**) when the URL is on a non-`github.com` host. The `ref` is a query string, not a `--field`:
     ```sh
     gh api "repos/<owner>/<repo>/contents/<path>?ref=<branch>"
     # or, for an enterprise GitHub host:
     gh --hostname <host> api "repos/<owner>/<repo>/contents/<path>?ref=<branch>"
     ```
   - For non-GitHub HTTP sources, use `WebFetch`.
   - **Also fetch the parent directory listing** so you can pick up sibling `.module.scss`/`.module.css` and any obvious helper files. Sibling SCSS is relevant: source may be SCSS, but the target package is always `.module.css` — note any conversions needed.

2. **Inline pasted code.** If preflight step 2 contained a fenced TS/TSX code block, extract the largest block as the source. No sibling files available — note this and skip the SCSS side-fetches.

3. **Local path.** Try `Read`. If it's a directory, glob `*.tsx` and pick (in order): `index.tsx`, a file matching the directory name, or the largest `.tsx` by line count. If `Read` errors, ask the user via `AskUserQuestion` for a corrected path.

4. **Unresolvable.** If the input matches none of the above, ask via `AskUserQuestion` and stop.

State the resolved component name (PascalCase) and refer to it as `<X>` for the rest of the skill.

### Reference analysis sub-agent

Spawn an `Explore` sub-agent (concurrently with visual capture — see below) with this prompt:

> Analyze this React component as a reference for porting into `@osdk/react-components`. Report under:
>
> 1. **Imports** — grouped by source. Call out every `@osdk/*`, `@blueprintjs/*`, design-system, and other workspace-internal import.
> 2. **Hooks & contexts** — every `useState`, `useReducer`, `useContext`, custom hook. For each `useContext`: which context, what values are read.
> 3. **Behaviors & data flow** — props in, callbacks out, side effects, keyboard/focus/mouse handling, async work.
> 4. **A11y posture** — semantic elements, ARIA attributes, gaps.
> 5. **Styling values** — every color, spacing, radius, font-size, breakpoint that appears as a literal. Group by category. These will need token mapping.
>
> Keep the report under ~300 words.

The analysis output feeds Step 1 (which props to expose / hide) and the Step 2 token mapping.

### Visual capture

Run **in parallel** with the source-analysis sub-agent (single message, two tool calls).

1. **If the user provided a demo URL in preflight step 4**, use `playwright-cli` to navigate to it and capture:
   - A screenshot of the default state.
   - A screenshot of each significant variant the user flagged in the MVP list (open menu, dragging, error, empty, etc.).
   - Browser console output (look for runtime errors that might hint at flaky deps).
2. **If no demo URL but the source has a sibling `.module.scss`/`.module.css`**, read it directly. Token mapping in Step 2.5 reads tokens from this file.
3. **If a Figma URL was provided in preflight step 3**, use `figma-mcp` (`get_design_context`, `get_screenshot`, `get_variable_defs` as needed) to capture canonical visuals.
4. **If only a screenshot path was provided**, use it as-is.
5. **If none of the above**, work from source only and note the absence in the analysis output.

**Never block on visual capture.** A failed `playwright-cli` navigation, a missing sibling SCSS, or an unreachable Figma file is fine — proceed to Step 1 with whatever you have. The reference analysis is the floor, not the ceiling; the user will catch visual gaps at the Step 3 verification checkpoint.

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
   - Apply **deep modules** thinking: small interface, hidden complexity. The prop list is what every consumer pays for; internal mechanism is what only the component pays for. Push complexity inward, not outward.
   - Apply the **step-down rule** to the file itself: the outer-component props interface (`<Name>Props`) is what consumers see, so it goes **at the top**. Below it, the types it references appear in declining order of abstraction — public-facing helper types (column definitions, locators, options) before internal utility types. JSDoc reads as a narrative top-down: someone reading the file should encounter concepts in the order they would think about them, not in the order TypeScript needs them declared. Use `interface`/`type` ordering or named exports to satisfy declaration order without reordering by abstraction level.
   - Aim for **one required prop**. Question every required prop addition based on the component type — most "required" inputs can be derived or defaulted.
   - **`enable*` boolean flags default to `true`** when the feature is part of the out-of-the-box experience.
   - Numeric/policy defaults (page size, dedupe interval, row height) are documented inline with `@default`.
   - **Controlled/uncontrolled for stateful feature.** AskUserQuestion` if this should be in the MVP. Every feature that holds state the user can change (selection, sort, filter, expansion, edit-in-progress, active tab, etc.) should expose all three modes:
     - **Controlled**: caller passes `value` (e.g. `selectedRows`, `orderBy`, `filter`). The prop is the source of truth; the caller is responsible for re-rendering with new values via the `on*Changed` callback.
     - **Uncontrolled with explicit default**: caller passes `defaultValue` (e.g. `defaultOrderBy`, `defaultSelectedRows`). The component seeds its own internal state from the default and continues to manage it. `on*Changed` still fires so callers can observe.
     - **Uncontrolled with no default**: caller passes neither `value` nor `defaultValue`. **The feature must still work out of the box.** The component maintains internal state seeded with a sensible empty default (e.g. `[]`, `{}`, `null`) and the built-in interactions (clicking a row to select, clicking a header to sort) continue to function.
     - **Naming**: `<feature>` for the controlled prop, `default<Feature>` for the uncontrolled seed, `on<Feature>Changed` for the callback. Match `ObjectTableApi.ts` exactly (`selectedRows` / `onRowSelection`, `orderBy` / `defaultOrderBy` / `onOrderByChanged`, `filter` / `onFilterChanged`).
     - **Canonical implementation**: see [`src/object-table/hooks/useRowSelection.ts`](../../../src/object-table/hooks/useRowSelection.ts) — note how `rowSelectionState` is computed from `selectedRows` when controlled, falls back to `internalRowSelection` (a `useState({})`) otherwise, and `onRowSelection` fires in both modes. Mirror this hook structure for any new stateful feature.
   - **Render overrides for flexibility.** Expose `render*` slots (e.g. `renderHeader`, `renderProperty`, `renderRow`) where consumers may legitimately want to deviate from the default rendering. Default rendering must remain feature-complete with no overrides supplied. Don't add slots speculatively — add them where the surface is obviously customisable (header, individual cell/property, empty state). When in doubt, add the override; we want to enable flexibility where we can.
   - **Event listeners on top of default behaviour.** For every state change that has a built-in default behaviour (sort, filter, select, edit, navigate, load), expose a non-controlling `on*` listener so consumers can layer extra handling — analytics, scroll-to-top, telemetry, side effects — without replacing the default. The default still runs whether or not the listener is provided. This is distinct from controlled-mode `on*Changed` handlers, which DO take over the state.
4. **Checkpoint — API approval.** Before opening the PR, present the proposed surface to the user via `AskUserQuestion` with two or three named alternatives where there is a real design choice (granularity, controlled-vs-uncontrolled scope, render-slot placement). **Use the `preview` field on each option to render the candidate TypeScript interface inline** — that lets the user compare full prop shapes side-by-side in one tool call instead of asking, getting one option, asking again. Iterate until the user picks one. This is the first of two named checkpoints in the skill.

5. **Open a PR with only `<Name>Api.ts`** — no exports wired, no implementation. The package still compiles because this is types-only.

   The PR description should describe the API surface concisely. Do **not** restate package guidelines or call out "documented exceptions" to internal heuristics (e.g. the one-required-prop guideline) in the PR body — those are reviewer-side concerns, not contract details. Keep the description focused on what consumers see.

   **If user provided justification for an exception that the component should live here (noted in preflight)**, include a brief justification in the PR description -- why should this component be in this package and not in blueprintjs?

   **Do not include "Generated with Claude Code", "Co-Authored-By: Claude", `🤖`, or any other AI-attribution footer in the PR description or commit messages** — write the description as the human author would. The same rule applies to every PR opened from this skill (API PR, impl PR, follow-ups).

6. **Proceed to Step 2 once the API PR is open.** The implementation branch stacks on the API branch (next step), so review feedback on the API can flow back into both branches without blocking implementation.

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
   - **The Base component encapsulates ALL out-of-the-box features**, including built-in event handlers (e.g. `BaseObjectTable` owns `onRowSelect`, sort/filter wiring, keyboard navigation, etc.). Default behaviour belongs in Base — the OSDK wrapper only wires data in. Consumers who want to layer extra logic on top use the non-controlling `on*` listeners from the API; consumers who want to take over use the controlled-mode `on*Changed` props.
   - **Component interactions live in a hook** (e.g. `useBase<Name>State` or `useBase<Name>` under `hooks/`) so the same logic can be exported later as a **headless component** without rewriting. Keep state, event handlers, and orchestration in the hook; keep markup in `Base<Name>.tsx`. Treat Base as `<headless-hook> + <markup>` from day one.
   - **No OSDK imports** in this file by default.
   - Accepts only primitive props (`string[]`, plain objects, callbacks). Do not leak OSDK types here.
   - All UI rendering, interactions, and styling live here.
   - For complex components, split into a **building blocks tier**: sub-components and hooks under `components/` and `hooks/` subfolders. `PdfViewer` is the canonical in-package example (`PdfViewerToolbar`, `PdfViewerSidebar`, `usePdfViewerState`).
   - **Reuse from [`src/base-components/`](../../../src/base-components/) first.** The package's `src/base-components/` folder contains shared internal UI primitives (`action-button/`, `checkbox/`, `combobox/`, `dialog/`, `draggable-list/`, `icon/`, `search-bar/`, `searchable-menu/`, `select/`, `skeleton/`, `switch/`, `tooltip/`, etc.) — check this folder before writing a new UI primitive. If you find a fit, import it. Reusing avoids visual / behavioral drift across the package.
   - **Public primitives barrel: [`src/public/primitives.ts`](../../../src/public/primitives.ts).** This file enumerates the primitives that are intentionally re-exported (`ActionButton`, `Dialog`, `SkeletonBar`, `Tooltip`, etc.). Read it before reaching for a new primitive — anything listed there is sanctioned for in-package reuse and has already been considered for the public surface. Anything in `src/base-components/` that is **not** re-exported through `primitives.ts` stays internal-only.
   - **If a piece of UI you need is reusable across components, add it to `src/base-components/` rather than co-locating in your component folder.** A primitive that's clearly useful elsewhere (a status badge, a hover card, a list-row pattern, a property-pair layout) belongs in `base-components/` so the next component can pick it up. UI primitives in `src/base-components/` are internal-only and **must not** be exported (README.md "Why Not Export UI Primitives?").
   - **Prefer `@base-ui/react` over primitive HTML for interactive elements.** When you need a button, dialog, menu, popover, tooltip, select, switch, or similar interactive primitive, reach for the corresponding `@base-ui/react` component (it's a workspace dependency) rather than a raw `<button>`, `<div role="dialog">`, etc. Base-ui handles accessibility, keyboard interaction, and focus management correctly out of the box. Plain semantic HTML (`<div>`, `<section>`, `<span>`, `<a>`) is fine for non-interactive layout.

5. **Styling rules (Base component)** — see CONTRIBUTING.md "Styling Guidelines", CLAUDE.md "CSS Styling Best Practices", README.md "CSS Setup":
   - **Read [`src/tokens/base-tokens/base.css`](../../../src/tokens/base-tokens/base.css) first** to discover the real `--osdk-*` token names available in the package. Do not assume token names — the file is authoritative.
   - Use **CSS modules** (`<Name>.module.css`) for component-scoped styles.
   - **Never hardcode colors or pixel values.** Every visual property goes through a CSS variable.
   - Use **`--bp` design tokens first**. Any `--bp` token used must be mapped from an `--osdk` token in `src/tokens/base-tokens/base.css`.
   - **If a value (color, spacing, radius, font-size) has no analog in `base.css`, do not inline it.** Flag it as a follow-up in the PR description for a separate token-addition change. Inlining a one-off value bypasses theming and accumulates as drift.
   - Define a CSS variable for **every property a consumer may want to customise**. Defaults go in `src/tokens/<name>.css`. Document new variables in [`docs/CSSVariables.md`](../../../docs/CSSVariables.md).
   - **Combine class names with the `classnames` utility.** Never use template literals for class names (CLAUDE.md "React Best Practices").
   - **Respect CSS layers** — see README.md "CSS Setup" for layer order and how brand overrides plug in.

6. **Parallelization point — fan out the remaining implementation work.** Once `Base<Name>` compiles cleanly and renders against placeholder data, the OSDK wrapper, Storybook story, tests, and live peopleapp example can be authored in parallel. Spawn four `general-purpose` sub-agents in **a single message with four Agent tool calls** so they run concurrently — this is empirically the biggest wall-clock win in the workflow (when the Base API was refactored, two sub-agents finished both rewrites in ~2 min concurrently; serialising would have taken 6+).

   - **Sub-agent A — OSDK wrapper + exports + metrics** (steps 7–10 below).
   - **Sub-agent B — Storybook story** (step 12 below).
   - **Sub-agent C — Tests** (step 11 below).
   - **Sub-agent D — Live peopleapp example** (step 14 below).

   Each sub-agent receives, in its prompt: the path to `<Name>Api.ts` (the approved API), the path to the just-written `Base<Name>.tsx`, the token-mapping decisions from sub-step 5, and the user's MVP feature checklist. Sub-agent D additionally receives the path to `packages/e2e.sandbox.peopleapp/` and the ontology types available (Employee, Office, etc.). **Sub-agent D uses the OSDK Component (`<Name>.tsx`), not the Base component** — the example showcases real Foundry data fetching, which requires the full OSDK wrapper.

   **Re-fan-out on Base API refactors.** If a later round of feedback changes the Base component's API, re-spawn the tests + Storybook + peopleapp sub-agents in parallel (single message, three Agent calls) rather than rewriting them serially yourself. Three concurrent rewrites finish in roughly the time of one serial one.

   Wait for all four sub-agents to return before proceeding to documentation (step 13) and Step 3 verification. If any sub-agent reports a blocker (missing primitive, ambiguous behaviour, routing conflict), pause and ask the user via `AskUserQuestion` before continuing.

7. **Then build the OSDK wrapper.** `<Name>.tsx` at `packages/react-components/src/<name>/<Name>.tsx`:
   - Uses `@osdk/react` hooks for data fetching (see [`packages/react/AGENTS.md`](../../../../react/AGENTS.md) for available hooks and provider setup).
   - Converts OSDK types to the primitive shapes that `Base<Name>` expects.
   - Contains no styling or UI interaction logic.

8. **Hook placement decision** (if you create a new hook) — CONTRIBUTING.md "Contributing to @osdk/react":
   - Reusable, OSDK-aware, not tied to this component → belongs in `@osdk/react` (see [`packages/react/CONTRIBUTING.md`](../../../../react/CONTRIBUTING.md)).
   - Tied to this component's internal state, rendering, or interactions → stays in `@osdk/react-components` (alongside the component, in `hooks/`).
   - When in doubt, ask the user.

9. **Wire up exports** — both required (CONTRIBUTING.md "Export Rules", README.md "Export Strategy"):
   - Re-export the OSDK component (and Base, if intended for advanced use) from `packages/react-components/src/public/experimental/<name>.ts` (one file per component, mirroring the existing exports).
   - Check `packages/react-components/package.json` `exports` first — the existing wildcard pattern (`"./*"` or `"./experimental/*"`) may already cover the new sub-path. Only add an explicit `./experimental/<name>` entry if the wildcard doesn't resolve to it.
   - **Never export** UI primitives in `src/base-components/` — those are internal (README.md "Why Not Export UI Primitives?").

10. **Register a user agent for metrics** — required for every OSDK component (the data-fetching wrapper, **not** the Base component). See README.md "Metrics" for the rationale and full checklist.

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

11. **Tests** (CONTRIBUTING.md "Testing"):
    - Place test files in `__tests__/` subfolders alongside the code they test (e.g. `src/<name>/__tests__/Base<Name>.test.tsx`).
    - Name files `*.test.ts` or `*.test.tsx`.
    - **One test file per source file.** Before writing, glob for an existing `<X>.test.tsx` at the target path; if it exists, append nested `describe` blocks. **Never split** into `<X>.<feature>.test.tsx` (per repo-root [`CLAUDE.md`](../../../../../CLAUDE.md)).
    - **Test the Base layer independently of OSDK** — keeps tests fast and focused.
    - **Test the OSDK wrapper separately** for data transformation and hook-usage behaviour.
    - **If no mock pattern exists** for the OSDK data shape this component consumes, scaffold the OSDK-wrapper tests with `it.todo("<behaviour>")` rather than fabricating mocks. Fabricated mocks drift from real shapes and create false-positive coverage.
    - Reference existing component tests in `packages/react-components/src/<other-component>/__tests__/` for conventions (e.g. `object-table/__tests__/EditableCell.test.tsx`, `filter-list/__tests__/`).
    - Run during dev: `pnpm --dir packages/react-components vitest` (watch mode) or `pnpm --dir packages/react-components vitest run` (single pass).

12. **Storybook story** (CONTRIBUTING.md "Storybook", [`packages/react-components-storybook/README.md`](../../../../react-components-storybook/README.md)):
    - **Folder placement: `packages/react-components-storybook/src/stories/<Name>/<Name>.stories.tsx`.** Folders match the component name, not a tier prefix. Sub-stories for sub-pieces of the same component (toolbar, sidebar, etc.) live alongside, optionally under a `Recipes/` or `Features/` subfolder for variants — see `stories/PdfViewer/`, `stories/ObjectTable/` for the pattern.
    - **Tier placement is via the meta `title:`, not the folder path.** New components belong under the `Experimental/` category in the published Storybook tree, so set:

      ```ts
      const meta: Meta<typeof MyComponent> = {
        title: "Experimental/<Name>", // for top-level OSDK components
        // or "Experimental/<Parent>/<Subfeature>" for a sub-piece
        tags: ["experimental"], // also flag at the catalogue tag level
        component: MyComponent,
      };
      ```

      This produces URLs like `experimental-myname--default`, matching the existing pattern (e.g. `experimental-baseform--default`, `experimental-objecttable-building-blocks-basetable--default`).
    - Follow [Component Story Format](https://storybook.js.org/docs/api/csf).
    - **OSDK-aware components must accept mocked data via props in stories.** Storybook runs without a Foundry stack, so the OSDK wrapper cannot fetch real data there. Either expose a `data` / `objects` / `value` prop the story can populate directly, or render the `Base<Name>` component (not the OSDK wrapper) in the story. Use the **MSW addon** for stories that exercise hook-level fetch paths against a fake server.
    - Cover the key states the user listed in the MVP feature checklist; also default, loading, error, empty, edge cases.

13. **Documentation** (CONTRIBUTING.md "Adding a New Component" step 8):
    - Add `packages/react-components/docs/<Name>.md` with usage and a minimal example. Match the structure of the existing per-component docs in [`packages/react-components/docs/`](../../../docs/).
    - If you added CSS variables, update [`docs/CSSVariables.md`](../../../docs/CSSVariables.md).
    - Add a one-line entry to the components table in [`AGENTS.md`](../../../AGENTS.md) and [`README.md`](../../../README.md).

14. **Live example in [`@osdk/e2e.sandbox.peopleapp`](../../../../e2e.sandbox.peopleapp/README.md) — required, not optional. Authored in parallel as Sub-agent D in step 6.**
    - Add an example usage of the new component against real Foundry data, using the existing `Employee`, `Office`, etc. types in the sandbox's ontology. Wire the example into the sandbox's existing routing/navigation so it actually shows up in the running app, not just as an unreferenced file.
    - Keep it minimal — MVP-feature usage only. The goal is to give reviewers (and you yourself) a quick way to exercise the component end-to-end against a real Foundry instance, complementing the MSW-mocked Storybook story.
    - **Do not skip this step or defer it to a follow-up PR.** Treat the peopleapp example as part of the MVP DoD.
    - **Parallelized execution:** Sub-agent D in step 6 handles this automatically. The agent reads the peopleapp router, identifies an appropriate page to add the example, and wires it into the navigation. If the peopleapp structure requires clarification, the agent will ask the user.

15. **No checkpoint here — auto-proceed to Step 3.** The Step 2 → Step 3 transition is automatic. The only Step 2-side gate is a short status update to the user (one sentence: "Implementation done across N files; running Storybook verification next.") so the user knows what's happening, then the agent immediately starts Step 3.

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

**Git policy (repeat — this is the most-violated rule).** Ask the user via `AskUserQuestion` **every single time** before:

- `git commit` (every commit, including the first)
- `git push` (every push, including subsequent pushes after PR feedback)
- `gh pr create` / opening or editing a PR
- Any `git` action that mutates remote state

A "yes" once does not extend to the next action. The user has been burned by skills that asked once and then started pushing automatically — do not do that. PR descriptions and commit messages must **not** include "Generated with Claude Code", `Co-Authored-By: Claude`, `🤖`, or other AI-attribution footers.

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
   - One changeset per branch — `ls .changeset/` first; do not duplicate. If a changeset already exists on this branch, extend it rather than creating a parallel one.

5. **Format only changed files** (repo-root `CLAUDE.md` "Formatting"):

   ```sh
   git ls-files --modified --others --exclude-standard | xargs npx dprint fmt
   ```

   Do **not** run bare `npx dprint fmt` — without a path it reformats the entire repo, which produces a giant unrelated diff.

6. **Cross-package transpile** (repo-root `CLAUDE.md` "Pre-Push Verification"):

   ```sh
   pnpm turbo transpile
   ```

   Catches cross-package build issues that per-package checks miss.

7. **Global cross-package check** to catch any remaining issues:

   ```sh
   pnpm turbo check
   ```

8. **Final review fan-out — invoke the official `review` and `security-review` skills in parallel.** Use the Skill tool in a single message with two calls so they run concurrently. Each runs read-only against the pending diff and returns findings.

   - `review` — general PR-style review.
   - `security-review` — security review of pending changes.

   Consolidate their findings and apply **one** consolidated edit pass. If either skill still surfaces critical findings on a second pass, escalate to the user via `AskUserQuestion` rather than looping further.

9. **Final checkpoint — the user decides whether to stage, commit, or push.** Present the full list of created/modified files and a one-line summary of the review findings to the user via `AskUserQuestion`. **Where the choice is between concrete artifacts (commit message variants, PR description variants), use the `preview` field on each option to render the candidate text inline** — this collapses what would otherwise be 2–3 conversational turns into a single tool call.

   Options:

   - **Stage all** — `git add` everything (do **not** commit).
   - **Stage selected** — user picks a subset.
   - **Commit** — propose the commit message via a separate `AskUserQuestion` with `preview` blocks; only run `git commit` after explicit approval.
   - **Push** — only after the user explicitly approves the push (separate question from the commit approval).
   - **Open PR** — only after the user explicitly approves; propose title and body via `AskUserQuestion` with `preview` blocks before running `gh pr create`.
   - **Leave unstaged** — bail out and let the user inspect.

   **Every git/gh write is a fresh question.** Approval to stage does not extend to commit; approval to commit does not extend to push; approval to push does not extend to PR creation. When subsequent PR-feedback commits land on the same branch, **ask again for each new commit and each new push** — do not assume the original approval still applies. When pushing follow-up commits, push new commits rather than force-pushing during review (CONTRIBUTING.md step 7).

## Common pitfalls

- **Never use `pnpm --dir <path> turbo` or `cd <path> && pnpm turbo`.** The `--dir` flag breaks turbo (pnpm interprets the path as the command). Always use `--filter`: `pnpm turbo <task> --filter=@osdk/react-components`. For non-turbo commands (vitest, lint), `pnpm --dir packages/react-components <cmd>` is fine. (Repo-root `CLAUDE.md`, CONTRIBUTING.md "Running Commands".)
- **If `pnpm turbo check` fails on lint:** auto-fix what's mechanical with `pnpm --dir packages/react-components fix-lint`, then re-run the check.
- **If formatting fails:** run dprint scoped to changed files only — `git ls-files --modified --others --exclude-standard | xargs npx dprint fmt`. The pre-commit hook runs `dprint check` and rejects unformatted code, but bare `npx dprint fmt` reformats the entire repo and produces a noisy diff.
- **Do not skip `transpileAllDeps`.** This package depends on transpiled output of other monorepo packages; skipping the transpile step leads to "missing export" errors that look like real bugs.
- **Do not export UI primitives.** Anything in `src/base-components/` is internal. New components belong in their own folder under `src/<name>/`.
- **Do not wrap the Base component with `withOsdkMetrics`.** Only the OSDK wrapper registers a user agent.
