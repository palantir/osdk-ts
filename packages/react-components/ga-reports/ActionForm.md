<!-- cspell:words zpoh officenetwork peopleapp OOTB autodocs -->

# GA-Readiness Audit — ActionForm

Read-only audit. Source of truth: `packages/react-components/CONTRIBUTING.md`, `packages/react-components/CLAUDE.md`.
Component: `src/action-form/` · Export: `src/public/experimental/action-form.ts` · Docs: `docs/ActionForm.md`, `docs/ActionFormOverview.md` · Storybook: `../react-components-storybook/src/stories/ActionForm/`
Re-audited 2026-08-10 against `zpoh/ga` @ `ee3b3ed8ee`.

> **What changed since the first audit:** documentation moved substantially. `docs/ActionFormOverview.md` (#3761) adds AUTOGEN props tables for both `ActionFormProps` and `BaseFormProps` plus a Style API table, and `docs/ActionForm.md` gained an AUTOGEN `ActionFormProps` table (#3463). That closes the BaseForm-props gap, the `isSubmitDisabled` gap, and all but the `--osdk-form-section-*` group of the CSS-token gap. The sections/`columnCount` Storybook gap is also closed. **Categories B and C are entirely unchanged** — every API and string-override blocker is still open.

---

## Artifact 1 — Feature Inventory

Derived from `ActionFormApi.ts` + `FormFieldApi.ts`.

**OSDK component (`ActionForm`)**
- **Action binding** — `actionDefinition` (only required prop); fetches action metadata via `useOsdkMetadata` and executes via `useOsdkAction`.
- **Auto field generation** — with no `formFieldDefinitions`, derives one field per action parameter from metadata (`getDefaultFieldDefinitions`); parameter type → field component mapping.
- **Field customization** — `formFieldDefinitions` fully replaces generated fields; strongly-typed per-key (`FormFieldDefinition<Q>`) so `fieldComponent` narrows `fieldComponentProps`.
- **Submit handling** — default path calls `applyAction` then `onSuccess`; `onSubmit` override receives `(formState, applyAction)`; errors routed to `onError` (`FormError` union).
- **Controlled / uncontrolled form state** — discriminated union: `formState` + `onFormStateChange` (controlled) or neither (uncontrolled, RHF-owned).
- **Header** — `showFormTitle` (default `false`) + `formTitle` (falls back to metadata displayName → apiName).
- **Submit gating** — `isSubmitDisabled`.
- **Value coercion** — coerces raw form values to action-parameter wire types on submit (`coerceFieldValue`).

**Base component (`BaseForm`)** — OSDK-agnostic; primitive props only
- `formContent` (`FormContentItem[]`: standalone fields or `section` groups), `formTitle`, `onSubmit`, controlled/uncontrolled (`formState`/`onFieldValueChange`), `isSubmitDisabled`, `isPending`, `isLoading` (skeleton), `className`, `submitButtonText`, `submitButtonVariant`.
- Client-side validation via react-hook-form (`onTouched`), aggregated error indicator + per-field error slots, "Edited" tags.

**Sections** — `FormSectionDefinition`: `title`, `description`, `collapsedByDefault`, `showTitleBar`, `columnCount` (1|2), `style` (box|minimal), collapsible.

**Field components** (`FormFieldPropsByType`) — TEXT_INPUT, TEXT_AREA, NUMBER_INPUT, DROPDOWN (search/multi/async), OBJECT_SELECT (objectType|objectSet), OBJECT_SET (read-only summary), RADIO_BUTTONS, SWITCH, DATETIME_PICKER, DATE_RANGE_INPUT, FILE_PICKER, CUSTOM (customRenderer), UNSUPPORTED.

**Per-field customization** — `label`, `defaultValue`, `isRequired`, `placeholder`, `helperText` + `helperTextPlacement`, `disabled`, `validate`, `onValidationError` (typed `ValidationError` union), plus built-in validation (`min`/`max`/`minLength`/`maxLength`/`maxSize`).

---

## Artifact 2 — Outstanding Tasks to GA

### A. Exports

✅ **Exports — no blocking tasks.** Both `ActionForm` (OSDK, metrics-wrapped) and `BaseForm` (base) exported from `src/public/experimental/action-form.ts`. No `src/base-components/` primitive is re-exported. Metrics wrapping is at the barrel per CLAUDE.md; Base is not wrapped.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Building blocks not exported: `FormSection`, `FormField`, field components (`DropdownField`, `AsyncDropdownField`, `ObjectSetField`, …), and `useAsyncAction`/`useInfiniteScroll` are internal. Fine to keep internal for GA; consider exporting `AsyncDropdownField` if consumers need server-driven dropdowns.
- [OPTIONAL] Composition shape: `FormContentItem`/`RendererFieldDefinition`/`FormFieldDefinition` form three overlapping field-definition shapes (OSDK-typed, renderer, content-item). Tension: consumers building `BaseForm` content hand-author `RendererFieldDefinition` while `ActionForm` consumers use `FormFieldDefinition<Q>`. Candidate resolutions: (a) document the two-tier split explicitly as the intended API, or (b) unify on a single definition with an optional generic. Do not pick here.

### B. API

**[REQUIRED] — all four unchanged as of 2026-08-10**
- [ ] **`onSubmit`'s `applyAction` is typed with the wrong shape, forcing casts.** `ActionFormApi.ts:90-95` still types the injected callback as `applyAction: (args: ActionParameters<Q>) => …` (metadata-descriptor shape), but the value the consumer holds is `FormState<Q>` (value shape). Every consumer of the custom-submit path must cast. Still confirmed in the storybook consumer: `ActionForm.stories.tsx:200, 211, 222` all use `formState as unknown as Parameters<…>[0]`. This is the "types must resolve in a consumer without casts" blocker. Fix: type `applyAction` to accept `FormState<Q>` (or coerced params) so `applyAction(formState)` type-checks.
- [ ] **Dead prop: `onValidationResponse`.** Still declared `ActionFormApi.ts:102`, still destructured as `_onValidationResponse` (`ActionForm.tsx:48`), never invoked. No `validateOnly` path exists anywhere in `src/action-form/`. Strip the prop, the `ActionValidationResponse` import (`ActionFormApi.ts:20`), and its JSDoc. **Now also leaking into docs** — the AUTOGEN table publishes it at `docs/ActionForm.md:58`, so a dead prop is being actively advertised.
- [ ] **Dead type variant: `FormError` `"validation"`.** Still at `ActionFormApi.ts:130`; `ActionForm.tsx` only produces `"unknown"` and `"submission"`. Remove the variant (and the `ActionValidationError` import if it becomes unused) or wire up the validation path that produces it.
- [ ] **Sandbox coverage incomplete.** Unchanged: the repro page (`e2e.sandbox.peopleapp/src/app/action-form-filter-list-repro/page.tsx:269`) is still the only `ActionForm` mount in either sandbox, and still passes only `actionDefinition`, `formFieldDefinitions`, `onSuccess`, `onError`. Not exercised: `formState`/`onFormStateChange` (controlled), `onSubmit`, `showFormTitle`, `formTitle`, `isSubmitDisabled`. (The `/form` page uses `BaseForm`, not `ActionForm`.) CONTRIBUTING treats the peopleapp example as MVP DoD.

**Nice-to-have (non-blocking)**
- [OPTIONAL] No `@deprecated` props found — clean.
- [OPTIONAL] `BaseForm` `OBJECT_SET`/`OBJECT_SELECT` values require widening casts in the sandbox (`e2e.sandbox.peopleapp/src/app/form/page.tsx:220,227` `$(Employee) as ObjectSet<ObjectTypeDefinition>`). Base is OSDK-agnostic by design so some widening is expected; consider a helper to smooth this.
- [OPTIONAL] `FormState<Q>` vs `ActionParameters<Q>` duality (root cause of the B blocker) is an awkward intermediate-object shape worth simplifying.

### C. Features

**[REQUIRED] — user-facing strings with NO override path** (unchanged; no `labels`/`strings` bag exists on `ActionFormProps` or `BaseFormProps`)
Many literals in Base/sub-components/fields have no override prop. (Hardcoded *defaults* are fine — these have no prop at all.) `ObjectTable` solved the equivalent problem in #3697 with a context-backed `labels?: Partial<ObjectTableLabels>` bag — see `src/object-table/ObjectTableLabels.tsx` for the pattern to copy.
- `BaseForm.tsx:125` `"Some fields are invalid"` and `:324` `"1 issue"` / `"{n} issues"` (error indicator).
- `BaseForm.tsx:270` `"Submitting…"` (pending button — `submitButtonText` covers idle only).
- `BaseForm.tsx:86` `"Submission failed"` (also flagged `TODO`), `:122` `"Invalid"` (validation fallback).
- `FormSection.tsx:93` `"1 error"` / `"{n} errors"` badge.
- `FormField.tsx:69` `"Edited"` tag; `:56` `aria-label="required"`; `:110` `"More information"` / `` `Info about ${label}` ``.
- `FormFieldRenderer.tsx:42-43` `"Unsupported field type. Use a CUSTOM field instead"`.
- `ObjectSetField.tsx:138` `"object"`/`"objects"` count-noun fallback; `:148` `` `Failed to load: ${error.message}` ``. (`emptyMessage` IS overridable ✓.)
- `DropdownField.tsx:451` `placeholder="Search…"`, `:457` `"No results"`, `:213/:427` `aria-label="Clear"`, `:400` `` `Remove ${…}` ``.
- `AsyncDropdownField.tsx:75` `"Searching…"`, `:80` `"Loading…"` (surfaced via `OBJECT_SELECT`).
- `FilePickerField.tsx:137` `aria-label="Choose file"`, `:148` `aria-label="Clear selection"` (`text`/`buttonText` ARE overridable ✓).
- `NumberInputField.tsx:132/141` `aria-label="Increment"`/`"Decrement"`.
Add override props (or a strings/labels bag) for these before GA.

**[REQUIRED] — dark mode**
- [ ] **Hardcoded hex color.** Unchanged: `ObjectSetField.tsx:33` `DEFAULT_OBJECT_ICON = { name: "cube", color: "#4C90F0" }`. This is the fallback icon tint when metadata carries no icon; a literal blue will not adapt to theme. Route through an `--osdk`/`--bp` token. (All `*.module.css` are clean — grep for hex/rgb in module CSS returned nothing.)

**Nice-to-have (non-blocking)**
- [OPTIONAL] Open `TODO`s: `BaseForm.tsx:85` (better submission error message), `FormFieldRenderer.tsx:177,224` (use `coerceFieldValue` for datetime/number), `:295` (share file coercion), `DropdownField.tsx:121` (`trailingItem` unsupported in Select path), `coerceFieldValue.ts:39` (complex object types). No `FIXME`/`HACK`.
- [OPTIONAL] Code quality: `ActionForm.tsx:89` uses `as RendererFieldDefinition` (documented union-narrowing limitation); acceptable but a candidate for a typed builder.

### D. Styling

**[REQUIRED]**
- ✅ All `--osdk`/`--bp` token *mappings* live under `src/tokens/component-tokens/` (`form.css`, `form-section.css`, `object-set.css`). No token mapping is defined inline in a `.module.css` or `.tsx`. (The only inline color is the `#4C90F0` hex in `ObjectSetField.tsx` — tracked under C/dark-mode, not a token mapping.)

**Nice-to-have (non-blocking)**
- [OPTIONAL] Token files verified genuinely owned by ActionForm: `--osdk-form-section-*` used only by `FormSection.module.css`; `--osdk-object-set-*` used only by `ObjectSetField.module.css`; `--osdk-form-*` used only across the action-form module CSS. Split across 3 files — coherent by concern (form / section / object-set), not a grab-bag; consolidation optional.
- [OPTIONAL] Raw pixel value in token file: `object-set.css:3` `--osdk-object-set-min-height: 30px` (no `--osdk` analog). Minor; flag for a token-addition follow-up.
- [OPTIONAL] `calc(--token * 1)` no-op wrappers: `form.css:24` `--osdk-form-label-row-gap` and `form-section.css:42` `--osdk-form-section-title-gap`. Drop the `* 1`.

### E. Documentation — ALL [REQUIRED]

**[REQUIRED]**
- [ ] **Undocumented CSS tokens — narrowed to the `--osdk-form-section-*` group.** The Style API table in `docs/ActionFormOverview.md:47-65` (#3761, trimmed by #3817) now covers `--osdk-form-edited-tag-*`, `--osdk-form-info-popup-*`, `--osdk-form-info-icon-color`, `--osdk-form-label-row-*`, `--osdk-form-error-line-height`, and `--osdk-form-error-reserved-block-size`, and the `--osdk-object-set-*` group is covered too. **Still undocumented: all 23 tokens declared in `src/tokens/component-tokens/form-section.css`** — `--osdk-form-section-{background,border-color,border-radius,border-width,content-padding-block,content-padding-inline,description-color,description-font-size,error-color,error-font-size,field-gap,grid-column-gap,header-gap,header-padding-block,header-padding-inline,minimal-title-font-size,title-color,title-font-size,title-font-weight,title-gap,transition-duration,trigger-color,trigger-gap}`. Sections are a major inventory feature; add a Sections row-group to the Style API table.
- [ ] **Undocumented data attribute.** Unchanged: `data-osdk-form-field-error-slot` (`FormField.tsx:83`) is a public DOM hook and appears nowhere in `docs/`.
- [ ] **Field-definition props still undocumented.** Unchanged: `helperTextPlacement`, `onValidationError`, field-level `validate`, and `disabled` on `FormFieldDefinition` are absent from `docs/ActionForm.md` and `docs/ActionFormOverview.md`. Note the AUTOGEN tables only cover `ActionFormProps`/`BaseFormProps` — the field-definition types have no AUTOGEN block, so regenerating won't fix this. Consider adding `AUTOGEN:props` blocks for `FormFieldDefinition`/`FormFieldPropsByType` the way `FilterList.md` does for its definition types.

- ✅ **`BaseForm` props now documented** (#3761) — `docs/ActionFormOverview.md:80-96` carries an AUTOGEN `BaseFormProps` table.
- ✅ **`isSubmitDisabled` now documented** — `docs/ActionForm.md:53` and `docs/ActionFormOverview.md`, via the AUTOGEN `ActionFormProps` tables. (`onValidationResponse` is also now published at `docs/ActionForm.md:58` — but it is dead API, so this makes the B blocker worse, not better.)

**Storybook — ✅ no blocking gaps**
- ✅ Overview page embedding docs mdx exists (`ActionForm.mdx` → `<Markdown>{actionFormDocs}</Markdown>`).
- ✅ OSDK `Default` (minimal props) story exists; feature stories cover submit/validation/disabled/pending/custom-submit/title/default-values/overrides/unsupported/controlled.
- ✅ Base component story exists (`BaseForm.stories.tsx`, `title: "Components/ActionForm/BaseForm"`, with `source` Code panels).
- ✅ **Sections / `columnCount` / `style` now covered** — the cross-check resolves in the Base story set as anticipated: `BaseForm.stories.tsx:2205` `WithSections`, `:2260` `WithMinimalSections` (box vs minimal `style`), `:2307` `WithGridSection` (`columnCount: 2`, `:2273`). Sections are Base-driven, so this satisfies the criterion.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Tier inconsistency: stories use `title: "Components/ActionForm/*"` + manual `tags: ["beta"]`, but CONTRIBUTING says Beta components use a `Beta/` title prefix (badge auto-injected, no manual tag). Reconcile once the GA/Beta tier decision is final.

---

## Summary Verdict

**Not ready (9 blocking items).**

Blocking count (REQUIRED only, counted per bullet): B ×4 (`applyAction` mis-typing forcing casts; dead `onValidationResponse`; dead `FormError."validation"`; incomplete sandbox coverage), C ×2 (non-overridable user-facing strings; hardcoded `#4C90F0`), E ×3 (`--osdk-form-section-*` tokens undocumented; `data-osdk-form-field-error-slot` undocumented; field-definition props undocumented). Exports (A) and token-mapping location (D) remain clean.

> The count went 8 → 9 without anything regressing: the first audit collapsed its five E bullets into "E ×2+". Counting per-bullet, the original set was 11; three E items have since been closed, leaving 9.

Resolved since the first audit: `BaseForm` props documented (#3761), `isSubmitDisabled` documented (#3463 AUTOGEN), most of the CSS-token gap documented (#3761/#3817), and the sections/`columnCount`/`style` Storybook gap (`BaseForm.stories.tsx` `WithSections`/`WithMinimalSections`/`WithGridSection`).

**Single biggest blocker (unchanged):** `onSubmit`'s injected `applyAction` is typed with `ActionParameters<Q>` (metadata shape) instead of the `FormState<Q>` value the consumer actually holds — every custom-submit consumer must write `formState as unknown as …`, which the package's own Storybook still demonstrates at `ActionForm.stories.tsx:200,211,222`. This defeats the "types resolve without casts" GA bar and is the most user-visible API defect.

**Second-largest, and the one with the most work in it:** the string-override bag (C). `ObjectTable` has since shipped the exact mechanism to copy (#3697, `src/object-table/ObjectTableLabels.tsx`), so this is now a port rather than a design problem.
