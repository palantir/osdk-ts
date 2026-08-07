# GA-Readiness Audit — ActionForm

Read-only audit. Source of truth: `packages/react-components/CONTRIBUTING.md`, `packages/react-components/CLAUDE.md`.
Component: `src/action-form/` · Export: `src/public/experimental/action-form.ts` · Docs: `docs/ActionForm.md` · Storybook: `../react-components-storybook/src/stories/ActionForm/`

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

**[REQUIRED]**
- **`onSubmit`'s `applyAction` is typed with the wrong shape, forcing casts.** `ActionFormApi.ts:79-82` types the injected callback as `applyAction: (args: ActionParameters<Q>) => …` (metadata-descriptor shape), but the value the consumer holds is `FormState<Q>` (value shape). Every consumer of the custom-submit path must cast. Confirmed in the storybook consumer: `ActionForm.stories.tsx:199-201, 210-212, 221-223` all use `formState as unknown as Parameters<…>[0]` with a comment noting "the callback type currently exposes metadata-shaped ActionParameters". This is the "types must resolve in a consumer without casts" blocker. Fix: type `applyAction` to accept `FormState<Q>` (or coerced params) so `applyAction(formState)` type-checks.
- **Dead prop: `onValidationResponse`.** Declared `ActionFormApi.ts:89`, destructured as `_onValidationResponse` (`ActionForm.tsx:48`), never invoked. No `validateOnly` path exists anywhere in `src/action-form/` (grep: zero `validateOnly` refs). Strip the prop, the `ActionValidationResponse` import (`ActionFormApi.ts:20`), and its JSDoc.
- **Dead type variant: `FormError` `"validation"`.** `ActionFormApi.ts:117` `{ type: "validation"; error: ActionValidationError }` is never emitted — `ActionForm.tsx` only produces `"unknown"` (`:63`) and `"submission"` (`:134`). Remove the variant (and the `ActionValidationError` import if it becomes unused) or wire up the validation path that produces it.
- **Sandbox coverage incomplete.** Only the repro page (`e2e.sandbox.peopleapp/src/app/action-form-filter-list-repro/page.tsx:269`) exercises `ActionForm`, and only `actionDefinition`, `formFieldDefinitions`, `onSuccess`, `onError`. Not exercised by any ActionForm instance in the sandbox: `formState`/`onFormStateChange` (controlled), `onSubmit`, `showFormTitle`, `formTitle`, `isSubmitDisabled`. (The `/form` page uses `BaseForm`, not `ActionForm`.) CONTRIBUTING treats the peopleapp example as MVP DoD. These props are covered in Storybook but should be exercised in-sandbox before GA.

**Nice-to-have (non-blocking)**
- [OPTIONAL] No `@deprecated` props found — clean.
- [OPTIONAL] `BaseForm` `OBJECT_SET`/`OBJECT_SELECT` values require widening casts in the sandbox (`e2e.sandbox.peopleapp/src/app/form/page.tsx:220,227` `$(Employee) as ObjectSet<ObjectTypeDefinition>`). Base is OSDK-agnostic by design so some widening is expected; consider a helper to smooth this.
- [OPTIONAL] `FormState<Q>` vs `ActionParameters<Q>` duality (root cause of the B blocker) is an awkward intermediate-object shape worth simplifying.

### C. Features

**[REQUIRED] — user-facing strings with NO override path**
Many literals in Base/sub-components/fields have no override prop. (Hardcoded *defaults* are fine — these have no prop at all.)
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
- **Hardcoded hex color.** `ObjectSetField.tsx:33` `DEFAULT_OBJECT_ICON = { name: "cube", color: "#4C90F0" }`. This is the fallback icon tint when metadata carries no icon; a literal blue will not adapt to theme. Route through an `--osdk`/`--bp` token. (All `*.module.css` are clean — grep for hex/rgb in module CSS returned nothing.)

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
- **Undocumented CSS tokens.** ~40 declared tokens are absent from `docs/CSSVariables.md`, including the entire `--osdk-form-section-*` group and the `--osdk-form-edited-tag-*`, `--osdk-form-info-popup-*`, `--osdk-form-info-icon-color`, `--osdk-form-label-row-*`, `--osdk-form-error-line-height`, `--osdk-form-error-reserved-block-size` tokens. `docs/ActionForm.md` delegates styling to `CSSVariables.md`, which only covers ~18 of the form tokens.
- **Undocumented `ActionForm` props.** `isSubmitDisabled` is not documented in `docs/ActionForm.md` (only in Storybook argTypes). `onValidationResponse` is undocumented (and dead — see B).
- **`BaseForm` props not documented.** `docs/ActionForm.md` mentions `BaseForm` only in the "Choosing" and "Styling" sections; it documents none of its props. Missing: `formContent`, `onFieldValueChange`, `isPending`, `isLoading`, `className`, `submitButtonText`, `submitButtonVariant`, `formTitle`, `isSubmitDisabled`. Criterion requires all base-component props documented.
- **Undocumented data attribute.** `data-osdk-form-field-error-slot` (`FormField.tsx:83`) is a public DOM hook and is not documented.
- **Field-definition props partially documented.** `helperTextPlacement`, `onValidationError`, field-level `validate`, and `disabled` on `FormFieldDefinition` are not covered in `docs/ActionForm.md`.

**Storybook — [REQUIRED] gaps**
- ✅ Overview page embedding docs mdx exists (`ActionForm.mdx` → `<Markdown>{actionFormDocs}</Markdown>`).
- ✅ OSDK `Default` (minimal props) story exists; feature stories cover submit/validation/disabled/pending/custom-submit/title/default-values/overrides/unsupported/controlled.
- ✅ Base component story exists (`BaseForm.stories.tsx`, `title: "Components/ActionForm/BaseForm"`, 29 stories with `source` Code panels).
- [REQUIRED] No dedicated OSDK story for **sections** or **`columnCount`/`style` (box vs minimal)** layout — `FormSectionDefinition` is a major inventory feature. Cross-check: confirm a section story exists in the Base story set (sections are Base-driven); if absent, add one.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Tier inconsistency: stories use `title: "Components/ActionForm/*"` + manual `tags: ["beta"]`, but CONTRIBUTING says Beta components use a `Beta/` title prefix (badge auto-injected, no manual tag). Reconcile once the GA/Beta tier decision is final.

---

## Summary Verdict

**Not ready (8 blocking items).**

Blocking count (REQUIRED only): B ×4 (`applyAction` mis-typing forcing casts; dead `onValidationResponse`; dead `FormError."validation"`; incomplete sandbox coverage), C ×2 (non-overridable user-facing strings; hardcoded `#4C90F0`), E ×2+ (undocumented CSS tokens; undocumented `BaseForm`/`ActionForm` props + data attribute). Exports (A) and token-mapping location (D) are clean.

**Single biggest blocker:** `onSubmit`'s injected `applyAction` is typed with `ActionParameters<Q>` (metadata shape) instead of the `FormState<Q>` value the consumer actually holds — every custom-submit consumer must write `formState as unknown as …`, which the package's own Storybook demonstrates. This defeats the "types resolve without casts" GA bar and is the most user-visible API defect.
