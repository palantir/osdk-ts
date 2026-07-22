---
name: new-component
description: Opinionated workflow for adding a new component to packages/components plus its Docusaurus docs page. Use when the user says "add a component", "create a component", "new component", or wants to scaffold a component in this monorepo. Layers AI-driven gates (reference analysis, props-API design checkpoint, verification loop, review fan-out) on top of the project's code standards, and auto-derives the docs <Playground> controls from the component's prop types.
user-invocable: true
---

# Create a new component

Operational playbook for scaffolding a new component in `packages/components` and its live docs page in `apps/docs`. Use whenever a user asks to add a component to this monorepo.

This skill is a **companion** to [`.claude/CLAUDE.md`](../../CLAUDE.md) (project guidance + Ultracite code standards). That document is the canonical source of truth for layout, workflows, and code quality. This skill **does not restate it** — it cites it and layers AI-driven structure on top:

1. A **reference analysis** step — when the user has a component/screenshot to base the work on, resolve it to source and capture how it looks before designing anything.
2. A **props-API design checkpoint** — agree on the `<Name>Props` contract before implementation begins (small interface, sensible defaults). Approval happens via `AskUserQuestion` with the candidate interface rendered inline.
3. **Doc generation with type-mapped controls** — the docs page's `<Playground>` controls are auto-derived from the prop types (the mapping table below is the contract).
4. A **verification loop** that drives the rendered docs page in a real browser and backports findings as fixes — run automatically after scaffolding, not on request.
5. A **review fan-out + named git checkpoints** before finishing.

If this skill conflicts with `.claude/CLAUDE.md`, **that wins** — flag the conflict to the user.

## Git policy

Ask the user before every git/gh action that mutates local or remote state (`git add`, `git commit`, `git push`, `gh pr create`, edits to a PR). A "yes" once does not extend to the next action.

## Preflight — before writing any code

Ask the user, in order. Do not skip.

1. **Design-system-free gate.** `packages/components` has **no** Blueprint, MUI, or Mantine — just React + its runtime peer deps. Confirm the component can be built from plain `<div>`/`<span>` + minimal inline styles, or by accepting a `ReactNode` prop and letting callers pass their own primitive (how `Example.tsx` handles `icon`). If the user needs a design-system primitive *rendered in the component itself*, that's a smell — steer them to pass it as a `ReactNode`, or to put the design-system usage in the **docs demo** (the docs site has Blueprint) rather than in the package.
2. **Reference component or source** (optional but strongly preferred). Most new components have a closest analog. Ask for **one** of:
   - **Local path** (file or directory in the repo or any working directory)
   - **GitHub URL** (file, blob, or PR link)
   - **Inline pasted code** (TS/TSX block in the conversation)
   - **Screenshot path** (visual reference only, no source)

   Treat the reference as the **feature/behavior inventory**, not as an API template — references tend to be over-configured, and the goal here is a small, design-system-free surface.
3. **Reference screenshot or Figma URL** (optional). If a Figma URL is provided and figma-mcp is available, use it for canonical visuals.
4. **Demo URL for the reference** (optional). If the reference runs somewhere, note the URL — the verification step can visit it to compare appearance.
5. **Name + prop/behavior list.** PascalCase name (e.g. `UserCard`) and what the component should do — the list of props with rough TypeScript types, and a one-sentence description for the docs page. If the user hasn't decided, suggest a sensible default set. This is the checklist Step 3 verifies against.

## Reference analysis — before Step 1

Only when a reference was provided in preflight #2. Resolve it to a source bundle and capture how it looks. Run **source resolution and visual capture in parallel** (single message, two operations). Findings feed Step 1 (props API) and Step 2 (scaffold).

### Source resolution

Probe the reference input in this order:

1. **URL.** If it matches `^https?://`:
   - For GitHub URLs use the `gh` CLI. The `ref` is a query string, not a `--field`:
     ```sh
     gh api "repos/<owner>/<repo>/contents/<path>?ref=<branch>"
     ```
     For non-`github.com` hosts pass `--hostname <host>` **before** the `api` subcommand.
   - For non-GitHub HTTP sources, use `WebFetch`.
2. **Inline pasted code.** Extract the largest fenced TS/TSX block.
3. **Local path.** Try `Read`. If it's a directory, glob `*.tsx` and pick (in order): `index.tsx`, the file matching the directory name, or the largest `.tsx`. If `Read` errors, ask via `AskUserQuestion`.
4. **Unresolvable.** Ask via `AskUserQuestion` and stop.

State the resolved reference name and refer to it as `<X>` for the rest of the skill.

### Reference analysis sub-agent

Spawn an `Explore` sub-agent (concurrently with visual capture) with this prompt:

> Analyze this React component as a reference for porting into a **design-system-free** component package (React + inline styles only; no Blueprint/MUI/Mantine). Report under:
>
> 1. **Behaviors & data flow** — props in, callbacks out, local state, side effects, keyboard/focus/mouse handling.
> 2. **Design-system coupling** — every `@blueprintjs/*`/MUI/Mantine/design-system import and what it provides. Flag each as: replaceable with a plain element, or must become a `ReactNode` prop.
> 3. **A11y posture** — semantic elements, ARIA attributes, gaps.
> 4. **Styling values** — every color, spacing, radius, font-size that appears as a literal, grouped by category — these become inline styles.
> 5. **Prop surface** — the minimal prop set that preserves the MVP behavior (aggressively drop over-configuration).
>
> Keep the report under ~250 words.

### Visual capture

Run **in parallel** with the source-analysis sub-agent (single message, two tool calls).

1. **If the user gave a demo URL** and `playwright-cli` is available, capture default state + each MVP variant + console output.
2. **If a Figma URL** was provided and figma-mcp is available, use it (`get_design_context`, `get_screenshot`, `get_variable_defs`).
3. **If only a screenshot path**, use it as-is.
4. **If none**, work from source only and note the absence.

**Never block on visual capture.** A failed navigation or unreachable Figma file is fine — proceed with whatever you have; the user catches visual gaps at the Step 3 checkpoint.

## Step 1 — Define the props API

The props interface is the contract. Get user approval on the surface before writing implementation.

1. Draft `interface <Name>Props` — function-component props only, **design-system-free**. JSDoc on every prop, with `@default` for defaulted optionals. Prefer a small surface; where the component needs a visual primitive, model it as a `ReactNode` prop rather than importing a design system.
2. **Apply the step-down rule:** `<Name>Props` at the top, referenced sub-types below in declining order of abstraction, so the JSDoc reads top-down.
3. **Checkpoint — props approval (named checkpoint #1).** Present the proposed surface via `AskUserQuestion` with two or three named alternatives where there's a real design choice (prop granularity, controlled-vs-uncontrolled, a single `variant` union vs. separate booleans). **Use the `preview` field on each option to render the candidate `interface <Name>Props` inline** so the user compares full shapes in one tool call. Iterate until the user picks one.

## Step 2 — Scaffold

### 2a. Component file

Create `packages/components/src/components/<Name>.tsx`:

- Function component. No class components. New JSX transform — no `import React`.
- The approved `interface <Name>Props { ... }` with JSDoc on each prop.
- **No design-system dependency.** Plain `<div>`/`<span>` + minimal inline styles, or `ReactNode` props for caller-supplied primitives.
- Named export.

### 2b. Expose the component

`packages/components` has **no barrel** — every component is its own entry point. Add a named subpath export to `packages/components/package.json`. The subpath key is the lowercase kebab-case slug even though the component is PascalCase:

```jsonc
"exports": {
  "./example": { … },
  "./<slug>": {
    "types": "./dist/components/<Name>.d.ts",
    "import": "./dist/components/<Name>.js"
  }
}
```

### 2c. Docs page

Create `apps/docs/docs/custom/<slug>.mdx` (slug = kebab-cased name, `UserCard` → `user-card`). `ComponentPage`, `Playground`, `Preview`, `PropsTable`, and `UsageExample` are registered globally via `apps/docs/src/theme/MDXComponents.tsx` — no import needed for them. Required shape:

```mdx
---
title: <Name>
---

import { <Name> } from "@monorepo-app-placeholder/components/<slug>";

# <Name>

<One-sentence description>.

<ComponentPage packageName="@monorepo-app-placeholder/components" props={[
  { name: "<propA>", type: "<TS type>", required: true, description: "..." },
  // …one row per prop
]}>

## Usage

<Playground
  controls={[
    // …one control per prop, type-mapped (see table below)
  ]}
  render={(v) => (
    <<Name>
      // …spread/map control values to props
    />
  )}
  source={(v) => `import { <Name> } from "@monorepo-app-placeholder/components/<slug>";

function Demo() {
    return (
      <<Name>
        prop="\${v.prop}"
      />
    );
}`}
/>

</ComponentPage>
```

### 2d. Map prop types to `<Playground>` controls

This mapping is the contract — every prop gets exactly one control.

| Prop type | Control |
|---|---|
| `string` | `{ type: "text", defaultValue: "..." }` |
| `string` with a small known set (`"sm" \| "md" \| "lg"`, a variant union) | `{ type: "segmented", options: [{value, label}, ...], defaultValue: "..." }` |
| `string` with a large set (e.g. icon name from a long list) | `{ type: "select", options: [...], defaultValue: "..." }` |
| `number` | `{ type: "number", defaultValue: 0, min: 0, max: 100, step: 1 }` |
| `number` with a continuous range (size, opacity) | `{ type: "slider", min, max, step, defaultValue }` |
| `boolean` | `{ type: "switch", defaultValue: false }` |
| `ReactNode` (icon, etc.) | Use a `select` of common values + map to a real node in `render` (see `example.mdx`'s `icon` handling) |

Every control needs `name`, `label`, `type`. The `name` must match the key you destructure in `render` and reference in `source`.

### 2e. Patch the sidebar

Open `apps/docs/sidebars.ts` and add `"custom/<slug>"` to the `Components` category's `items` array.

### 2f. Formatting

The `PostToolUse` hook runs `ultracite fix` after every Write/Edit, so files you touch stay formatted automatically. Don't hand-format.

**No checkpoint here — auto-proceed to Step 3.** Post a one-line status ("Scaffolded <Name> across component + docs page + sidebar; verifying in the browser next.") and start Step 3 immediately.

## Step 3 — Verify

Transient verification — nothing committed in this step.

1. **Run the docs site:** `npm run dev` (Docusaurus on `http://localhost:3000`). If it's already running, Docusaurus hot-reloads and the new page appears in the sidebar.
2. **Open the new page** (`http://localhost:3000/docs/custom/<slug>`) — via `playwright-cli` if available, otherwise ask the user to open it.
3. **Confirm the page actually renders**, not just that the dev server started. Check the browser console for errors on load. Common causes: wrong subpath in the import, a `dist` type/path mismatch, or (for components that touch `window`) missing a `<BrowserOnly>` wrapper — Docusaurus SSRs every page, so client-only code must be wrapped (see the OSDK section MDX for the pattern). Plain design-system-free components usually don't need it.
4. **Exercise each `<Playground>` control** and confirm the preview + generated `source` update correctly, and that each control type matches the mapping table.
5. **If a reference/screenshot/Figma exists**, compare appearance and behavior; fix discrepancies in the component or the demo's control set.

## Step 4 — Ship

The **Git policy** at the top applies — every git/gh write is a fresh `AskUserQuestion`.

1. **Checks green** (run from repo root):
   ```sh
   npm run lint        # ultracite (oxlint + oxfmt)
   npm run typecheck   # turbo typecheck across workspaces
   npm run test        # vitest across workspaces
   npm run build       # turbo builds packages/components then docs
   ```
   Fix anything red before continuing.
2. **Review fan-out — invoke the `review` and `security-review` skills in parallel** (single message, two `Skill` calls). Each runs read-only against the pending diff. Consolidate findings into **one** edit pass. If either still surfaces critical findings on a second pass, escalate to the user via `AskUserQuestion` rather than looping.
3. **Final checkpoint (named checkpoint #2) — the user decides whether to stage, commit, or push.** Present created/modified files and a one-line review summary via `AskUserQuestion`. Where the choice is between concrete artifacts (commit-message or PR-description variants), use the `preview` field to render the candidate text inline.

   Options:
   - **Stage all** / **Stage selected** / **Leave unstaged**
   - **Commit** — propose the message via a separate `AskUserQuestion` with `preview`; commit only after explicit approval
   - **Push** — separate question from commit; only after explicit approval
   - **Open PR** — propose title + body via `AskUserQuestion` with `preview` before `gh pr create`

   Ask again for each new commit/push during any later PR-feedback round.

## Notes

- Slug: PascalCase → kebab-case (`UserCard` → `user-card`). Subpath export key and MDX filename both use the slug; the component and its type stay PascalCase.
- Use the `@monorepo-app-placeholder/components` scope in MDX imports and `packageName` so they match the package's `name` in `packages/components/package.json`. If you rename that package, update these references to match.
- `packages/components` MUST stay design-system-free. Blueprint icons/etc. belong in the **docs** demo (import at the top of the MDX) and reach the component as a `ReactNode` prop.
- The `source={(v) => \`...\`}` function returns the code shown beneath the demo — keep it concise; no need to inline props that equal their default.
- For multi-example pages (variant showcases), repeat `<UsageExample>` blocks under separate `### H3` headings inside the Documentation tab.
