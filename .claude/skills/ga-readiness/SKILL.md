---
name: ga-readiness
description: Audit an @osdk/react-components component against the GA (General Availability) readiness checklist. Use when the user says "check GA readiness", "is <X> ready for GA", "GA audit", "what's left to GA <X>", or wants to know what remains before a component can be promoted out of experimental/. Produces a feature inventory followed by a categorized list of outstanding tasks to reach GA. Read-only by default — it reports, it does not fix.
user-invocable: true
---

# GA readiness audit for `@osdk/react-components`

Assess whether a component is ready to graduate from `experimental/` to a stable export, and produce a concrete punch-list of what's left. This skill **audits and reports**; it does not change code unless the user explicitly asks at the end.

**Source of truth:** [`packages/react-components/CONTRIBUTING.md`](../../../packages/react-components/CONTRIBUTING.md) and [`packages/react-components/CLAUDE.md`](../../../packages/react-components/CLAUDE.md) define the engineering rules. This skill does **not** restate them — it cites them and adds the GA-specific bar below. If anything here conflicts with those docs, **those win** — flag the conflict.

The GA candidates are the components currently exported under `packages/react-components/src/public/experimental/` (e.g. `object-table`, `filter-list`, `action-form`, …). A component is GA-ready when every category below is either satisfied or has an explicit, user-accepted exception.

## Output contract

Every run ends with two artifacts, in this order:

1. **Feature inventory** — a bulleted list of the component's main features (what it does, its major props/capabilities). This orients the reader and defines the surface each category is judged against.
2. **Outstanding tasks to GA** — a checklist grouped by the six categories below (Exports, API, Features, Styling, Documentation, plus a short Summary verdict). Each item is specific and actionable (`file:line` where known), ordered most-blocking first. If a category is fully clean, say so explicitly ("✅ Exports — no outstanding tasks") rather than omitting it.

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

- Both the **OSDK component** (e.g. `ObjectTable`) **and the base component** (e.g. `BaseTable`) are exported. Note: base naming in this package is often `Base<Thing>` (`BaseTable`, not `BaseObjectTable`) — judge by role (OSDK-agnostic layer), not by an exact name.
- GA requires the component be exported from a **stable path**, not `experimental/`. Today everything ships under `src/public/experimental/<name>.ts`; the GA task is to add/move the stable export. Flag that the component still lives only under `experimental/`.
- **Hooks and building blocks are exported** — We want to export the hooks and building blocks (but not if it is something Bluepring already offers, see next point) to enable users to build their own custom component. Add a GA task here and list out any unexported hooks or building blocks under this task.
- **Do not export base components Blueprint already offers** (e.g. `Listogram`). If such an export exists, flag it for removal (`CONTRIBUTING.md` "Export Rules" — UI primitives in `src/base-components/` must not be exported; sanctioned reuse is `src/public/primitives.ts`).

### B. API

- **Remove unsupported API.** If a prop is exposed in **`<Name>Api.ts`** but the feature is not yet implemented, flag it to be removed.
- **Types resolve in a consumer without casts.** The strongest check is the sandbox apps — verify `<X>` is used in `packages/e2e.sandbox.peopleapp` (or `packages/e2e.sandbox.officenetwork`) and that no `as`/`any` cast is needed to satisfy `<X>`'s props. Flag any prop that is not tested in the sandbox apps. Flag any generic that fails to infer.
- **No deprecated props.** Grep the Api file and component for `@deprecated`. Each surviving deprecated prop is a GA task (remove it).
- **Clunky API flagged for improvement** (e.g. FilterList's linked-filter API). Note any prop shape that requires the consumer to construct awkward intermediate objects or duplicate information.

### C. Features

- **i18n** — user-facing strings go through the translation mechanism, not hardcoded literals. Flag hardcoded strings in the Base/wrapper.
- **Major bugs** — surface any known open bugs (check for `TODO`/`FIXME`/`HACK` in the component, and any obviously broken states).
- **Code quality** — run the [`deep-design`](../../..) skill's lens and check against `CLAUDE.md` "Common pitfalls" / anti-patterns. Report the top complexity/anti-pattern findings, not a line-by-line review.

### D. Styling

- **All CSS token mappings live in `src/tokens/component-tokens/<name>.css`.** Flag any `--osdk`/`--bp` mapping defined elsewhere (inline in a `.module.css`, in the component tsx).
- **Dark mode works out of the box** — no color is hardcoded such that it breaks in dark theme; colors come from `--bp`/`--osdk` tokens (`CONTRIBUTING.md` "Styling Guidelines").
- **No unused tokens** — cross-reference tokens declared in `<name>.css` against usages in the component's `.module.css` files; list declared-but-unused ones.
- **Remove `calc(--token * 1)`** — multiplying by 1 is a no-op; grep for `calc(` inside the component and its token file and flag any `* 1)` (or `1 *`).
- **Token consistency** — note whether `<X>` uses a coherent, consistent set of tokens versus a grab-bag; recommend consolidation where obvious.

### E. Documentation

Storybook must have:

- An **OSDK component story**: a `Default` (minimal props) plus **one story per major feature** (cross-check against the Step 1 inventory — every major feature should have a story).
- A **base component story**: at least one example.
- **Code panel** showing the example snippet (the story is wired so the Docs/Code panel renders source).
- **Overview page** structure that embeds the `docs` mdx file.

The component doc (`docs/<Name>.md` today; GA wants a single-page **mdx**) should be:

- Single page, with the **default component demo at the top**.
- A **props table** listing all props.
- A **CSS section** with a generated **CSS Variables** table and a **Data Attributes** table.
- Links at the bottom to (1) the **base component docs page** and (2) the **example usage page**.
- A **separate mdx for the base component**, linked from the OSDK component doc.
- A **separate mdx for example usage**, linking to the Storybook examples.

Flag whichever of these are missing or still in the older `.md` shape.

### F. (folded into Summary) — no sub-agent; you write the verdict in Step 3.

## Step 3 — Synthesize the report

Collect the sub-agent findings and emit the two artifacts from the **Output contract**:

1. Feature inventory (from Step 1).
2. Outstanding tasks to GA, grouped A–E, each item specific and `file:line`-anchored, ordered most-blocking first. Clean categories get an explicit "✅ … — no outstanding tasks".

Then add a one-paragraph **Summary verdict**: `GA-ready` / `Close (N blocking items)` / `Not ready (N blocking items)`, with the single biggest blocker named.

Keep the report skimmable — checklists over prose. Do not restate the criteria; report only what's outstanding for `<X>`.

## Step 4 — Offer to act (only if asked)

The audit is done. Do **not** start fixing. End by offering next steps via `AskUserQuestion`:

- **Fix now** — hand the punch-list to `/contribute` (per outstanding item) or fix directly. Each git/gh write still requires its own approval per that skill's Git policy.
- **File issues** — turn the punch-list into tracked tasks.
- **Just the report** — stop here.

If the user picks "Fix now", follow `/contribute` for each change — this skill does not own the edit/verify/ship workflow.
