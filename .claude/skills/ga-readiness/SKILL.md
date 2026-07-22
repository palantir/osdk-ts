---
name: ga-readiness
description: Audit an @osdk/react-components component against the GA (General Availability) readiness checklist. Use when the user says "check GA readiness", "is <X> ready for GA", "GA audit", "what's left to GA <X>", or wants to know what remains before a component can be promoted out of experimental/. Produces a feature inventory followed by a categorized list of outstanding tasks to reach GA. Read-only by default — it reports, it does not fix.
user-invocable: true
---

# GA readiness audit for `@osdk/react-components`

Assess whether a component is ready to graduate from `experimental/` to a stable export, and produce a concrete punch-list of what's left. This skill **audits and reports**; it does not change code unless the user explicitly asks at the end.

**Source of truth:** [`packages/react-components/CONTRIBUTING.md`](../../../packages/react-components/CONTRIBUTING.md) and [`packages/react-components/CLAUDE.md`](../../../packages/react-components/CLAUDE.md) define the engineering rules. This skill does **not** restate them — it cites them and adds the GA-specific bar below. If anything here conflicts with those docs, **those win** — flag the conflict.

The GA candidates are the components currently exported under `packages/react-components/src/public/experimental/`. A component is GA-ready when every **required** criterion below is satisfied or has an explicit, user-accepted exception. **Optional** criteria (marked `[OPTIONAL]`) are nice-to-haves that do **not** block GA — surface them, but never count them as blockers.

**Required vs optional is load-bearing in this skill.** Each criterion below is tagged `[REQUIRED]` or `[OPTIONAL]`. Only `[REQUIRED]` items gate GA and feed the blocker count in the verdict. Report optional findings under a clearly separated "Nice-to-have (non-blocking)" bucket in each category so the reader never confuses them with blockers.

## Output contract

Every run ends with two artifacts, in this order:

1. **Feature inventory** — a bulleted list of the component's main features (what it does, its major props/capabilities). This orients the reader and defines the surface each category is judged against.
2. **Outstanding tasks to GA** — a checklist grouped by the six categories below (Exports, API, Features, Styling, Documentation, plus a short Summary verdict). Within each category, list `[REQUIRED]` (blocking) findings first, then a separated **Nice-to-have (non-blocking)** bucket for `[OPTIONAL]` findings. Each item is specific and actionable (`file:line` where known), ordered most-blocking first. If a category has no required findings, say so explicitly ("✅ Exports — no blocking tasks") rather than omitting it — but still list any optional findings under Nice-to-have.

Do **not** interleave fixes into the report. The report is the deliverable.

## Step 0 — Resolve the component

1. If the user named a component, map it to its folder under `packages/react-components/src/<name>/` and its export file `packages/react-components/src/public/experimental/<name>.ts`. Confirm both exist. If the name is ambiguous or missing, `AskUserQuestion` with the current experimental roster (`ls src/public/experimental/`).
2. If the user asked to audit **all** components or didn't name one, list the roster and `AskUserQuestion` for which one (or confirm "all" — if all, run the audit per-component and emit one report each; do not merge them).
3. Read, at minimum: `<name>/<Name>Api.ts`, `<name>/Base*.tsx` (or the base-layer file), the OSDK wrapper `<name>/<Name>.tsx`, the export file `src/public/experimental/<name>.ts`, `src/tokens/component-tokens/<name>.css`, `docs/<Name>.md`, and the Storybook story under `packages/react-components-storybook/src/stories/<Name>/`.

State the resolved component name (PascalCase) and refer to it as `<X>` for the rest of the run.

## Step 1 — Feature inventory (do this first)

Before auditing, build the feature inventory that becomes artifact #1. Derive it from:

- **`<Name>Api.ts`** — the public props are the feature surface. Each meaningful prop or prop group is a feature (data source, sorting, filtering, selection, editing, render slots, controlled/uncontrolled modes, …).

Write the inventory as a short bulleted list. Keep it factual — this is "what `<X>` does today", not a wishlist.

## Step 2 — Parallel category audit

Fan out the six checklist categories as independent read-only investigations. **Single message, multiple `Explore` (or `general-purpose`) Agent calls** — the categories don't depend on each other. Give each sub-agent the resolved paths from Step 0 and the feature inventory from Step 1, and ask it to return **only confirmed findings with `file:line` anchors**, most-blocking first. Do not have sub-agents edit anything.

Each sub-agent audits against these criteria:

### A. Exports

- `[REQUIRED]` Both the **OSDK component** (e.g. `ObjectTable`) **and the base component** (e.g. `BaseTable`) are exported. Note: base naming in this package is often `Base<Thing>` (`BaseTable`, not `BaseObjectTable`) — judge by role (OSDK-agnostic layer), not by an exact name.
- `[REQUIRED]` **Do not export base components Blueprint already offers** (e.g. `Listogram`). If such an export exists, flag it for removal (`CONTRIBUTING.md` "Export Rules" — UI primitives in `src/base-components/` must not be exported; sanctioned reuse is `src/public/primitives.ts`).
- `[OPTIONAL]` **Hooks and building blocks exported.** Exporting the hooks and building blocks lets users build their own custom component, but this is a nice-to-have. List any unexported hooks or building blocks under this optional task — do not treat their absence as a blocker.
- `[OPTIONAL]` **Question the higher-level export/composition shape.** A design judgment, not a mechanical check: is the _shape_ of the public surface right, or is it a family of siblings where one entry component would be cleaner? If you flag it, state the pattern, the tension that keeps it that way, and 1–2 candidate resolutions — surface it as an open design question for the user; do **not** pick one. Non-blocking.

### B. API

- `[REQUIRED]` **Types resolve in a consumer without casts.** The strongest check is the sandbox apps — verify `<X>` is used in `packages/e2e.sandbox.peopleapp` (or `packages/e2e.sandbox.officenetwork`) and that no `as`/`any` cast is needed to satisfy `<X>`'s props. Flag any prop that is not tested in the sandbox apps. Flag any generic that fails to infer.
- `[REQUIRED]` **No deprecated props.** Grep the Api file and component for `@deprecated`. Each surviving deprecated prop is a GA task (remove it).
- `[REQUIRED]` **Remove unsupported / dead API.** A public prop that is documented to do something but does nothing is a broken API, not a nice-to-have — treat it as blocking. Audit **every** public prop, not just data/enum props — **callback props are the easy miss**: a callback can be declared, destructured, and still never invoked. For each prop, trace it to a real use site:
  - Grep the prop name across `src/<name>/`. A prop that appears only in the Api file + the component's destructure (and nowhere else) is dead.
  - Follow the feature through: if a callback documents a behavior, confirm that code path actually exists. If it doesn't, the callback **and** any supporting types/union-variants/imports that exist only to type it are all dead surface to strip together.
- `[OPTIONAL]` **Improve clunky API** Note any prop shape that requires the consumer to construct awkward intermediate objects or duplicate information. Nice-to-have — a working-but-awkward API does not block GA.

### C. Features

- `[REQUIRED]` **All user-facing strings must be overridable via props.** We are **not** building an i18n/translation mechanism — the bar is that every hardcoded user-facing literal (button text, placeholders, empty/error states, aria-labels) can be replaced by a caller-supplied string so users can pass in their own translated copy. For each user-facing string in the Base/wrapper/sub-components, confirm there is a prop to override it; flag every string that is hard-coded with **no** override prop. (A hardcoded default is fine — the requirement is an override path, not routing through a translation layer.)
- `[REQUIRED]` **Dark mode works out of the box** — no color is hardcoded such that it breaks in dark theme; colors come from `--bp`/`--osdk` tokens (`CONTRIBUTING.md` "Styling Guidelines"). (Grep `.module.css` + tsx for hex/`rgb`/`rgba` literals.) _This is the "Dark mode OOTB" checklist item; the styling sub-agent is best placed to verify it since it inspects the CSS._
- `[OPTIONAL]` **Major bugs** — surface any known open bugs (check for `TODO`/`FIXME`/`HACK` in the component, and any obviously broken states). Nice-to-have to fix before GA.
- `[OPTIONAL]` **Code quality** — run the [`deep-design`](../../..) skill's lens and check against `CLAUDE.md` "Common pitfalls" / anti-patterns. Report the top complexity/anti-pattern findings, not a line-by-line review. Nice-to-have.

### D. Styling

- `[REQUIRED]` **All CSS token mappings live under `src/tokens/component-tokens/`.** Every `--osdk`/`--bp` mapping must be defined in the component's token file(s) under `component-tokens/`, so we can generate the documented CSS-variables list. Flag any `--osdk`/`--bp` mapping defined elsewhere (inline in a `.module.css`, in the component tsx). _(Note: dark-mode OOTB is verified here but reported under Features C per the checklist — the styling sub-agent should still grep for hardcoded colors and feed that finding to C.)_
- `[OPTIONAL]` **One consistent token file per component.** A component's tokens ideally live in a single `src/tokens/component-tokens/<name>.css` (as `object-table` does with `table.css`), not scattered. If `<X>`'s tokens are split (e.g. ActionForm's `form.css` + `form-section.css` + `object-set.css`), note consolidation as a nice-to-have — but first confirm each file is genuinely owned by `<X>` (grep the tokens' usages) rather than a co-located file belonging to a different component. Also note whether the token set is coherent versus a grab-bag. Non-blocking.
- `[OPTIONAL]` **No unused tokens** — cross-reference tokens declared in the token file(s) against usages in the component's `.module.css` files; list declared-but-unused ones. Nice-to-have cleanup.
- `[OPTIONAL]` **Remove `calc(--token * 1)`** — multiplying by `1` is a no-op wrapper that should be unwrapped to the bare `var(--token)`. Grep the component's token file and `.module.css` for `* 1` and `1 *` (e.g. `grep -rnE '\* 1[^0-9]|[^0-9-]1 \*'` — the `[^0-9]` guards keep `* 10`, `* 15` from matching; note `* 1.5` also slips through, so drop decimals when confirming). **Multiplying by `-1` is legitimate** (negating a token) — do not flag `* -1` or `-1 *`. Nice-to-have cleanup.

### E. Documentation

All items in this category are `[REQUIRED]`.

**Coverage — the component docs in `packages/react-components/docs` must cover:**

- **OSDK component**: all props, all CSS tokens, and all data attributes.
- **Base component**: all props.

Flag any prop, CSS token, or data attribute that is undocumented.

**Storybook must have:**
- **Overview page** structure that embeds the `packages/react-components/docs` mdx file.
- An **OSDK component story**: a `Default` (minimal props) plus **one story per major feature** (cross-check against the Step 1 inventory — every major feature should have a story). Flag features with no story.
- A **base component story**: at least one example.
- **Code panel** showing the example code snippet (the story is wired so the Docs/Code panel renders source).


Flag whichever of these are missing.

### F. (folded into Summary) — no sub-agent; you write the verdict in Step 3.

## Step 3 — Synthesize the report

Collect the sub-agent findings and emit the two artifacts from the **Output contract**:

1. Feature inventory (from Step 1).
2. Outstanding tasks to GA, grouped A–E, each item specific and `file:line`-anchored, ordered most-blocking first. Within each category, put `[REQUIRED]` findings first, then a separated **Nice-to-have (non-blocking)** bucket for `[OPTIONAL]` findings. Categories with no required findings get an explicit "✅ … — no blocking tasks" (still list any optional findings).

Then add a one-paragraph **Summary verdict**: `GA-ready` / `Close (N blocking items)` / `Not ready (N blocking items)`, with the single biggest blocker named. **The blocker count includes only `[REQUIRED]` findings** — optional/nice-to-have findings never count toward it. A component with only optional findings outstanding is `GA-ready` (note the nice-to-haves separately).

Keep the report skimmable — checklists over prose. Do not restate the criteria; report only what's outstanding for `<X>`.

Write the per-component report to packages/react-components/ga-reports.
