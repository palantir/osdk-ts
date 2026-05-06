---
name: add-new-component
description: Opinionated workflow for adding a new component to @osdk/react-components. Use when the user says "add a component", "create a component", "new component", or wants to scaffold a fresh OSDK-aware component in this package. Layers AI-driven gates (API-first design checkpoint, MVP feature checklist, verification loop) on top of CONTRIBUTING.md.
user-invocable: true
---

# Create a new `@osdk/react-components` component

Operational playbook for scaffolding a new component in `packages/react-components`. Use whenever a user asks to add a new OSDK-aware component to the package.

This skill is a **companion** to [`packages/react-components/CONTRIBUTING.md`](../../../CONTRIBUTING.md) and [`packages/react-components/CLAUDE.md`](../../../CLAUDE.md). Those documents are the canonical source of truth for engineering rules, API design, styling, testing, Storybook conventions, and metrics. This skill **does not restate them** — it cites them and layers AI-driven structure on top:

1. An **API-first design checkpoint** — agree on the type contract before implementation begins (deep modules: small interface, hidden complexity). Once approved, continue on the same branch.
2. A **user-supplied MVP checklist** that defines "done" before code is written.
3. **Parallel implementation fan-out** — once the API is approved, the OSDK wrapper, Storybook story, tests, and live peopleapp example are written by four sub-agents in parallel via the Task tool. Empirically: when the Base API was refactored, two sub-agents finished both rewrites in ~2 min concurrently. Always parallelize rather than serialize.
4. **Named user checkpoints** — explicit `AskUserQuestion` gates at API approval and final review. Use the `preview` field on options to render rendered code (or markdown) previews; multiple-choice with previews collapses each iteration into a single tool call.
5. A **verification loop** that exercises the MVP checklist in a real browser and backports findings as code fixes and tests. The agent runs this **automatically** after Step 2 — it does not stop and wait for the user to ask.
6. A **review fan-out** before pushing — invoke the official `review` and `security-review` skills in parallel and consolidate findings into one edit pass.

If this skill conflicts with `CONTRIBUTING.md` or `CLAUDE.md`, **those win** — flag the conflict to the user.

## Git policy

Ask the user before every git/gh action that mutates remote state (`git commit`, `git push`, `gh pr create`, edits to a PR). A "yes" once does not extend to the next action.

## Preflight — before writing any code

Ask the user, in order. Do not skip.

1. **Component-belongs-here gate** (see `CONTRIBUTING.md` "When does a component belong here?"): does this component fetch OSDK data OR hit an api-gateway endpoint? If **no to both**, suggest BlueprintJS. If the user insists it lives here, ask them to justify and note the justification for the PR description later.
2. **Reference component or source.** Most new components have a closest analog. Ask for **one** of:
   - **Local path** (file or directory in the repo or any working directory)
   - **GitHub URL** (file, blob, or PR link)
   - **Inline pasted code** (TS/TSX block in the conversation)
   - **Screenshot path** (visual reference only, no source)

   Treat the reference as the **feature/behavior inventory**, not as an API template — references tend to be over-configured, and the goal is the opposite (`CLAUDE.md` "API Design").
3. **Figma URL or reference screenshot** (optional but strongly preferred). If a Figma URL is provided, use **figma-mcp** to read it.
4. **Demo URL for the reference** (optional). If the reference already runs somewhere — Storybook deployment, staging app, localhost — ask for the URL. Reference analysis will visit it via `playwright-cli` to capture appearance and interaction. No demo is fine; analysis falls back to source-only.
5. **MVP feature list.** Spell out what "MVP" means for this component (e.g. _"when `objectType` is passed, data renders in the table"_). This is the checklist Step 3 verifies against.

## Reference analysis — before Step 1

Resolve the reference into a source bundle and capture how it looks. Run **source resolution and visual capture in parallel** — single message, two operations. Findings feed Step 1 (API design) and Step 2 (implementation fan-out).

### Source resolution

Probe the reference input from preflight #2 in this order:

1. **URL.** If it matches `^https?://`:
   - For GitHub URLs use `gh` CLI. Pass the host via `--hostname` (which **must come before the `api` subcommand**) for non-`github.com` hosts. The `ref` is a query string, not a `--field`:
     ```sh
     gh api "repos/<owner>/<repo>/contents/<path>?ref=<branch>"
     gh --hostname <host> api "repos/<owner>/<repo>/contents/<path>?ref=<branch>"
     ```
   - For non-GitHub HTTP sources, use `WebFetch`
   - **Also fetch the parent directory listing** to pick up sibling `.module.scss`/`.module.css`. The target package is always `.module.css` — note any conversions
2. **Inline pasted code.** Extract the largest fenced TS/TSX block. No sibling files; skip the SCSS side-fetches
3. **Local path.** Try `Read`. If it's a directory, glob `*.tsx` and pick (in order): `index.tsx`, file matching the directory name, or the largest `.tsx`. If `Read` errors, ask via `AskUserQuestion`
4. **Unresolvable.** Ask via `AskUserQuestion` and stop

State the resolved component name (PascalCase) and refer to it as `<X>` for the rest of the skill.

### Reference analysis sub-agent

Spawn an `Explore` sub-agent (concurrently with visual capture) with this prompt:

> Analyze this React component as a reference for porting into `@osdk/react-components`. Report under:
>
> 1. **Imports** — grouped by source. Call out every `@osdk/*`, `@blueprintjs/*`, design-system, and other workspace-internal import.
> 2. **Hooks & contexts** — every `useState`, `useReducer`, `useContext`, custom hook. For each `useContext`: which context, what values are read.
> 3. **Behaviors & data flow** — props in, callbacks out, side effects, keyboard/focus/mouse handling, async work.
> 4. **A11y posture** — semantic elements, ARIA attributes, gaps.
> 5. **Styling values** — every color, spacing, radius, font-size, breakpoint that appears as a literal. Group by category. These will need token mapping.
>
> Keep the report under ~300 words.

### Visual capture

Run **in parallel** with the source-analysis sub-agent (single message, two tool calls).

1. **If the user provided a demo URL**, use `playwright-cli` to capture default state, each MVP variant the user flagged (open menu, dragging, error, empty), and browser console output
2. **If no demo URL but the source has a sibling `.module.scss`/`.module.css`**, read it directly
3. **If a Figma URL was provided**, use `figma-mcp` (`get_design_context`, `get_screenshot`, `get_variable_defs`) for canonical visuals
4. **If only a screenshot path**, use it as-is
5. **If none**, work from source only and note the absence

**Never block on visual capture.** A failed navigation, missing sibling SCSS, or unreachable Figma file is fine — proceed with whatever you have. The user catches visual gaps at the Step 3 checkpoint.

## Step 1 — Define the API

The API is the contract. Get user approval on the proposed surface before writing implementation. Approval happens via `AskUserQuestion` on the working branch; once approved, continue on the same branch into Step 2. The API can still evolve later — see the "Re-fan-out on Base API refactors" note in Step 2 for how to absorb changes that surface during implementation, verification, or PR review.

1. **Branch off `main`** named `<your-initials>/<short-description>` (`CONTRIBUTING.md` "Branch Naming").
2. **Create `<Name>Api.ts`** mirroring [`src/object-table/ObjectTableApi.ts`](../../../src/object-table/ObjectTableApi.ts):
   - Apache 2.0 license header (copy from any existing file)
   - Generic type parameters (`Q extends ObjectOrInterfaceDefinition`, etc.) where OSDK-typed
   - Outer-component props interface (`<Name>Props`) only — base props live inline in `Base<Name>.tsx`
   - Public sub-types co-located in this file (column definitions, locators, options)
   - JSDoc on every prop with `@default` for defaulted optional props
3. **Apply `CLAUDE.md` "API Design" rules** — controlled/uncontrolled/no-default for every stateful feature, render override slots, `on*` listeners on top of default behavior, one required prop, `enable*` defaults `true`. **Use `AskUserQuestion` to confirm** which stateful features must support controlled mode in MVP.
4. **Apply the step-down rule to the file:** the outer-component props interface (`<Name>Props`) goes at the top; types it references appear in declining order of abstraction below. JSDoc reads as a top-down narrative. Use `interface`/`type` ordering or named exports to satisfy declaration order without reordering by abstraction level.
5. **Checkpoint — API approval (named checkpoint #1).** Present the proposed surface via `AskUserQuestion` with two or three named alternatives where there is a real design choice (granularity, controlled-vs-uncontrolled scope, render-slot placement). **Use the `preview` field on each option to render the candidate TypeScript interface inline** — lets the user compare full prop shapes side-by-side in one tool call. Iterate until the user picks one. The API and implementation ship together in a single PR at the end of Step 4; if preflight #1 produced a justification for the component belonging in this package, keep that note for the eventual PR description.
6. **Proceed to Step 2 on the same branch.**

## Step 2 — Implement MVP

Implementation continues on the same branch as Step 1. No new branch.

1. **Transpile internal deps once** (`CONTRIBUTING.md` "Development Setup"):
   ```sh
   pnpm --filter @osdk/react-components transpileAllDeps
   ```
2. **Folder structure** (`CONTRIBUTING.md` "Folder Structure"):
   ```
   src/<name>/
     <Name>Api.ts              # API contract (Step 1)
     <Name>.tsx                # OSDK layer
     Base<Name>.tsx            # Base layer (OSDK-agnostic)
     <Name>.module.css         # CSS module
     hooks/                    # Custom hooks
     components/               # Supporting sub-components
     utils/                    # Helpers and types
     __tests__/                # Vitest tests
   ```
3. **Build `Base<Name>` first.** All out-of-the-box features (default event handlers, sort/filter wiring, keyboard navigation) belong here — the OSDK wrapper only wires data in. Apply `CLAUDE.md` "OSDK Component Architecture", "Reuse before writing", and "CSS Styling".

4. **Parallelization point — fan out remaining work in a single message with four `general-purpose` Agent calls:**

   - **Sub-agent A** — OSDK wrapper (`<Name>.tsx`) + experimental export (`src/public/experimental/<name>.ts`) + `withOsdkMetrics` wrap. Apply `CLAUDE.md` "OSDK Component Architecture" and "Metrics"
   - **Sub-agent B** — Storybook story (`packages/react-components-storybook/src/stories/<Name>/<Name>.stories.tsx`). Apply `CLAUDE.md` "Storybook" and `CONTRIBUTING.md` "Storybook"
   - **Sub-agent C** — Tests in `__tests__/`. Apply `CLAUDE.md` "Testing"
   - **Sub-agent D** — Live peopleapp example in [`packages/e2e.sandbox.peopleapp/`](../../../../e2e.sandbox.peopleapp/README.md), wired into the sandbox's existing routing/navigation against real `Employee` / `Office` types. **Sub-agent D uses the OSDK component (`<Name>.tsx`), not Base** — the example showcases real Foundry data fetching

   Each sub-agent receives: path to `<Name>Api.ts`, path to `Base<Name>.tsx`, token-mapping decisions, the user's MVP feature checklist. Sub-agent D additionally receives the path to `packages/e2e.sandbox.peopleapp/` and ontology types available.

   **Hook placement decision** (relevant to sub-agents A and C): if a new hook is created, OSDK-aware reusable hooks belong in `@osdk/react`; component-internal hooks stay here in `hooks/`. When in doubt, ask the user.

   Wait for all four sub-agents before proceeding.

   **Re-fan-out on Base API refactors.** If a later round of feedback changes the Base API, re-spawn tests + Storybook + peopleapp sub-agents in parallel (single message, three Agent calls) rather than rewriting them serially.

5. **Documentation** (`CONTRIBUTING.md` step 9):
   - Add `docs/<Name>.md` with usage and a minimal example
   - If you added CSS variables, update `docs/CSSVariables.md`
   - Add a one-line entry to the components table in `AGENTS.md` and `README.md`
   - **Register with Docusaurus.** Add `"<Name>"` to the `@osdk/react-components` category in `docs/sidebarsReactComponents.ts` at the repo root — without this the doc ships in the package but does not appear on the public docs site

6. **No checkpoint here — auto-proceed to Step 3.** Status update only ("Implementation done across N files; running Storybook verification next.") so the user knows what's happening, then immediately start Step 3.

## Step 3 — Verify against reference

Transient verification using [`@playwright/cli`](https://github.com/microsoft/playwright-cli) (and figma-mcp if a Figma URL was provided). **Nothing committed in this step** — Playwright is a dev-time driver only. Findings flow back as code fixes and (where expressible) Vitest tests.

`@playwright/cli` is explicitly designed for coding agents (token-efficient, doesn't push DOM into the LLM context). Use it instead of ad-hoc node scripts driving Playwright.

1. **Run Storybook locally** (primary verification target — MSW-mocked data, fast iteration):
   ```sh
   pnpm --filter @osdk/react-components-storybook transpileAllDeps
   pnpm --filter @osdk/react-components-storybook dev
   ```
   Default URL: `http://localhost:6006`.

   **Verify the new story loads with no runtime errors before continuing.** "Storybook ready!" only means Vite is serving — it does NOT mean the story renders. Storybook compiles per-story on demand, so import errors only surface when the story is visited. Hit the iframe URL (`http://localhost:6006/iframe.html?id=<story-id>`) and check the response does NOT contain `sb-errordisplay`, `Cannot find module`, or other error markers. If it does, fix the underlying issue (typically a missing import, wrong icon name, or CSS-module path) before moving on.

2. **Live playground** ([`packages/e2e.sandbox.peopleapp`](../../../../e2e.sandbox.peopleapp/README.md)) to verify the OSDK wrapper against real Foundry data. Especially valuable when the component depends on data shape, server-side filtering, or pagination MSW mocks may not faithfully reproduce:
   ```sh
   # one-time: copy .env.local.sample to .env.local
   pnpm --filter @osdk/e2e.sandbox.peopleapp transpileAllDeps
   pnpm --filter @osdk/e2e.sandbox.peopleapp dev
   ```

3. **Open the new story (or playground page) via `playwright-cli`.** Capture browser console; if any errors fire on load, fix them — those are the issues the iframe curl check cannot catch (e.g. a Blueprint icon name that exists at typings but not at the chosen export path).
4. **If a Figma URL was provided**, use **figma-mcp** to read the design (`get_design_context`, `get_screenshot`, `get_variable_defs`). Compare visual properties to the rendered story.
5. **For each MVP feature checklist item**: exercise the interaction in the browser via `playwright-cli` and verify the resulting UI matches the reference behavior.
6. **Fix any discrepancies** in the Base or wrapper component.
7. **Backport regression coverage to Vitest** where the assertion can be expressed without a real browser. Behaviors that genuinely require a real browser (real `DataTransfer`, scroll virtualisation, real focus traversal) stay verified-but-untested for now — note in the PR description.

## Step 4 — Ship

Run in order (`CONTRIBUTING.md` "Submitting a Pull Request"). Stop and fix if any fails.

The **Git policy** at the top of this skill applies — every git/gh write is a fresh `AskUserQuestion`.

1. **All MVP checklist items pass** when exercised in Storybook.
2. **Visual match with the reference is acceptable** — user makes the call.
3. **Per-package check is green:**
   ```sh
   pnpm turbo check --filter=@osdk/react-components
   ```
4. **Add a changeset** (`CONTRIBUTING.md` "Changesets" + repo-root [`CLAUDE.md`](../../../../../CLAUDE.md) "Changesets"). `minor` for a new component. One changeset per branch — `ls .changeset/` first.
5. **Format only changed files** (repo-root `CLAUDE.md` "Formatting"):
   ```sh
   git ls-files --modified --others --exclude-standard | xargs npx dprint fmt
   ```
   Do **not** run bare `npx dprint fmt` — without a path it reformats the entire repo.
6. **Cross-package transpile** (repo-root `CLAUDE.md` "Pre-Push Verification"):
   ```sh
   pnpm turbo transpile
   ```
7. **Global cross-package check:**
   ```sh
   pnpm turbo check
   ```
8. **Final review fan-out — invoke `review` and `security-review` skills in parallel.** Single message with two `Skill` calls. Each runs read-only against the pending diff. Consolidate findings and apply **one** consolidated edit pass. If either still surfaces critical findings on a second pass, escalate to the user via `AskUserQuestion` rather than looping further.
9. **Final checkpoint (named checkpoint #2) — the user decides whether to stage, commit, or push.** Present created/modified files and a one-line review summary via `AskUserQuestion`. **Where the choice is between concrete artifacts (commit message variants, PR description variants), use the `preview` field on each option to render the candidate text inline** — collapses 2–3 conversational turns into a single tool call.

   Options:
   - **Stage all** — `git add` everything (do not commit)
   - **Stage selected** — user picks a subset
   - **Commit** — propose the message via a separate `AskUserQuestion` with `preview`; only run `git commit` after explicit approval
   - **Push** — only after the user explicitly approves (separate question from commit)
   - **Open PR** — only after explicit approval; propose title and body via `AskUserQuestion` with `preview` before running `gh pr create`
   - **Leave unstaged** — bail out and let the user inspect

   When subsequent PR-feedback commits land on the same branch, **ask again for each new commit and each new push**. Push new commits rather than force-pushing during review.
