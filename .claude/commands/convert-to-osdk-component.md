---
description: "Lift a component from a forge demo (or any source) into a proper @osdk/react-components building block — themeable, accessible, tested, and exported correctly"
argument-hint: "<local path | github.palantir.build URL | inline pasted code>"
---

# Convert to OSDK Component

End-to-end conversion of a raw React component into an exported `@osdk/react-components` building block. Seven phases, three user checkpoints, otherwise autonomous. The command never commits or pushes — it leaves staged-able diffs.

**Source:** $ARGUMENTS

## Phase 1: Intake

Resolve `$ARGUMENTS` into a source bundle. Probe in this exact order:

1. If `$ARGUMENTS` matches `/^https?:\/\//` — treat as URL. For Palantir-internal hosts use `gh --hostname github.palantir.build api "repos/<owner>/<repo>/contents/<path>?ref=<branch>"` (the `--hostname` flag must come before the `api` subcommand; the `ref` is a query string, not a `--field`). Also fetch the parent directory listing for sibling `.module.scss`/`.module.css` and `.i18n.yml` files.
2. Else if `$ARGUMENTS` contains a fenced TS/TSX code block — extract the largest block as inline source. No sibling files available.
3. Else treat as a local path. Try `Read`. If a directory, glob `*.tsx` and pick (in order) `index.tsx`, a file matching the directory name, or the largest by line count. If `Read` errors, ask the user via `AskUserQuestion` for a corrected path.

If unresolvable, ask via `AskUserQuestion` and stop.

State the resolved component name (PascalCase). Refer to it as `<X>` for the rest of the command.

## Phase 2: Analyze source + visual capture (concurrent)

Spawn one `Explore` sub-agent **and** kick off visual capture in parallel (single message, two tool calls).

### Explore prompt

> Analyze this React component for porting into `@osdk/react-components`. Report under:
>
> 1. **Imports** — grouped by source. Call out every `@osdk/*`, `@blueprintjs/*`, and forge-internal import.
> 2. **Hooks & contexts** — every `useState`, `useReducer`, `useContext`, custom hook. For each `useContext`: which context, what values are read.
> 3. **Behaviors & data flow** — props in, callbacks out, side effects, keyboard/focus/mouse handling, async work.
> 4. **A11y posture** — semantic elements, ARIA attributes, gaps.
>
> ~300 words.

### Visual capture

Try `mcp__playwright__browser_navigate` against any demo URL the user mentioned or that's detectable from sibling files. On success, capture `mcp__playwright__browser_snapshot` and `mcp__playwright__browser_take_screenshot` for default + key variant states. On failure (no demo running, network error), fall back to reading the source `.module.scss`/`.module.css` directly. **Never block on visual capture.** Source may be SCSS; target output is always CSS.

For each color, spacing, radius, font-size value found, propose a mapping to an `--osdk-*` token from `packages/react-components/src/tokens/base-tokens/base.css`. Read that file first to discover the real token names. Values without a token analog are flagged as follow-ups — never inlined.

## Phase 3: Mismatch report — CHECKPOINT (only if mismatches exist)

Compare phase-2 imports against the **sanctioned allowlist** for new components (this is independent of what currently sits in `package.json` — that file may still contain tolerated legacy deps):

- ✅ `@osdk/react-components/primitives` — primary source for buttons, dialogs, comboboxes, tooltips, etc.
- ✅ `@base-ui/react/*` — only inside new primitives in `src/base-components/`
- ✅ `@osdk/react`, `@osdk/client` — only for OSDK-aware components
- ❌ `@blueprintjs/*` — always substitute via the primitives barrel. Read `packages/react-components/src/public/primitives.ts` to discover available substitutions. Abort if no analog exists; adding a new primitive is a separate command.
- ❌ Forge-internal imports / forge contexts — lift to props/callbacks.
- ❌ `useI18n` and `.i18n.yml` keys — convert to `string | ReactNode` props with English defaults.
- ❌ Anything not in the target package's `dependencies`.

If the mismatch list is non-empty, ask via `AskUserQuestion` with options **substitute / strip / abort**. If empty, skip silently. If aborted, stop.

## Phase 4: Propose public API — CHECKPOINT (always)

Spawn the `deep-design` skill via the Skill tool:

> Design the public API for a new `@osdk/react-components` component derived from the source analysis. Apply the "deep modules" principle from _A Philosophy of Software Design_: small interface, hidden complexity. Decide:
>
> 1. **Granularity** — single component vs compound (`<X>.Root` / `<X>.Item`). Default single unless 3+ named slots.
> 2. **OSDK-aware split** — only split when (a) the OSDK-free surface is independently reusable, and (b) the component touches OSDK objects/actions. Don't split reflexively.
> 3. **Tier** — primitive (`src/base-components/`, wraps `@base-ui/react` 1:1) vs composed (`src/<name>/`). Most conversions will be composed.
> 4. **Sub-path export** — `@osdk/react-components/experimental/<name>` or `@osdk/react-components/primitives`.
> 5. **TypeScript signatures** — full prop types and any custom hook signatures, no implementation.
>
> Reference splits — naming is **non-uniform** in this codebase, match the spirit not a fixed convention:
>
> - `object-table/ObjectTable.tsx` (OSDK-aware) + `object-table/Table.tsx` exporting `BaseTable`
> - `action-form/Form.tsx` + `action-form/BaseForm.tsx`
> - `filter-list/FilterList.tsx` + `filter-list/base/BaseFilterList.tsx`

Present the result via `AskUserQuestion` with 2–3 named alternatives. Iterate until the user approves.

## Phase 5: Implementation fan-out

Spawn three `general-purpose` sub-agents in parallel (single message, three tool calls). Each gets the approved API, source analysis, token map, screenshot path (if any), and substitution decisions.

### Agent A — Component implementation

> Write the component files under `packages/react-components/src/<name>/`. Filenames follow the API approved in phase 4 — match the chosen pattern (e.g., `Table.tsx`, `BaseForm.tsx`, or `base/BaseFilterList.tsx` shape) rather than inventing a fixed `Base<X>.tsx` convention.
>
> Files to write:
>
> - `<X>.tsx` — the component, **unwrapped** (`forwardRef` for DOM-wrapping components)
> - The agnostic sibling — only if phase 4 specifies a split
> - `<X>.module.css` — CSS module (the target lib is always `.module.css`, not SCSS)
>
> **Do NOT apply `withOsdkMetrics` in this file.** That wrap happens in the public barrel during phase 6, importing from `src/util/withOsdkMetrics.ts`.
>
> Reuse primitives from `@osdk/react-components/primitives` (read `src/public/primitives.ts`) instead of `@base-ui/react` directly.
>
> All values map to tokens from `src/tokens/base-tokens/base.css` — read it first; don't assume specific token names. Values without an analog are flagged as follow-ups, never inlined.
>
> **Read and follow these CLAUDE.md files**: `packages/react-components/CLAUDE.md` (package-specific rules: `classnames` util, `EMPTY_ARRAY`/`EMPTY_OBJECT` constants, memoization of non-primitive props, `--bp-*` tokens preferred), the repo root `CLAUDE.md`, and `~/.claude/CLAUDE.md` (no `any`, no manual casting, no `unknown`/`never`, no non-null assertions, no inline styles, no `useEffect`, no early returns for loading, braces on all `if` statements, ESM/`.ts`/`.tsx` only).

### Agent B — Storybook story

> Write the story under `packages/react-components-storybook/src/stories/`. Path depends on parent matching:
>
> - If `<X>` is a feature of an existing story group (e.g., another PdfViewer feature) → `stories/<Parent>/<X>.stories.tsx`
> - Else (new top-level component) → `stories/<X>/<X>.stories.tsx`
>
> Glob `stories/` for a likely parent before choosing. Reference any existing story for shape.
>
> Include: `tags: ["experimental"]`, `argTypes` with descriptions, `Default` story, one story per significant variant identified in phase 2, and at least one interactive story using `fn()` from `@storybook/test`. Pass mocked data as props for OSDK-aware components — Storybook runs without a Foundry stack.

### Agent C — Tests

> Write Vitest + happy-dom + `@testing-library/react` tests. Reference existing tests in `packages/react-components/src/object-table/__tests__/`.
>
> **Before writing**: glob for an existing `<X>.test.tsx` at the target path. If present, append nested `describe` blocks — never split into `<X>.<feature>.test.tsx` (per global CLAUDE.md).
>
> Cover: default rendering (existence, key elements, ARIA roles), each behavior from phase 2 (keyboard, focus, callbacks), each variant from the API, error/empty states. If the component is OSDK-aware and no mock pattern exists for its data shape, scaffold those tests with `it.todo(...)` rather than fabricating mocks.

Wait for all three agents before phase 6.

## Phase 6: Wire up & verify

Sequential mechanical steps — no checkpoints, no judgment calls.

1. **Public barrel** — create `packages/react-components/src/public/experimental/<name>.ts` (or extend `primitives.ts` for a new primitive). Mirror the shape of `src/public/experimental/object-table.ts`. **This is where `withOsdkMetrics` wraps OSDK-aware components**:
   ```ts
   import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
   import { <X> as _<X> } from "../../<name>/<X>.js";
   export const <X> = withOsdkMetrics(_<X>, "<X>");
   ```
   Re-export agnostic siblings and prop types unwrapped.
2. **Aggregate barrel** — append the new export to `packages/react-components/src/public/experimental.ts`.
3. **package.json exports** — check the existing `exports` map first; the wildcard `"./*"` may already cover the new sub-path. Only add an explicit entry if it doesn't.
4. **Changeset** — `ls .changeset/` first. If a changeset already exists on this branch, modify its YAML header (add `"@osdk/react-components": minor`) and extend the body. Never create a parallel changeset.
5. **Format changed files only** — `git ls-files --modified --others --exclude-standard | xargs npx dprint fmt`. Don't run `dprint fmt` with no path (it would format the whole repo).
6. **Typecheck + lint** — `pnpm turbo typecheck lint --filter=@osdk/react-components --filter=@osdk/react-components-storybook`. Iterate on errors.
7. **Cross-package transpile** — `pnpm turbo transpile` (no filter, per project CLAUDE.md pre-push rule).
8. **API report** — only if `packages/react-components/package.json` defines a `check-api` script. It currently doesn't, so skip silently. If one is added later, run `pnpm turbo check-api --filter=@osdk/react-components` and stage `etc/*.api.md`.

## Phase 7: Final review — CHECKPOINT (always)

Run the three review skills **in parallel, read-only** (each returns findings; none edits):

- `deep-design` — module depth, information hiding, error design
- `ui-skill` — styling, animation, a11y, primitive usage
- `react-best-practices` — re-render, waterfalls, bundle

Consolidate findings. Apply **one** consolidated edit pass addressing them. Then invoke `team-review` once as the final parallel gate (4 reviewers).

Cap at 2 `team-review` iterations: if the second iteration still surfaces CRITICAL findings, escalate to the user rather than looping further.

Present the verdict + the list of every changed/created file to the user via `AskUserQuestion`:

- **stage all** — `git add` the changes (do NOT commit)
- **stage selected** — user picks a subset
- **abandon** — leave unstaged

Stop. Do not commit, do not push, do not open a PR.
