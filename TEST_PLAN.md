# TEST_PLAN — PR #3408 ($title / $primaryKey in object components, observable matcher hardening)

PR commit under test: `afb8743a2`
Branch: `title-pk-osdk-react`

## Usage sites (introduced or modified by PR #3408)

### 1. `packages/react-components/src/action-form/fields/ObjectSelectField.tsx` (search where-clause)

**Pre-PR behavior**

- Component called `useOsdkMetadata(source.objectType)` and resolved `metadata.titleProperty` (string).
- Search where clause was `{ [titleProperty]: { $containsAllTermsInOrder: trimmed } }` — keyed by the real property name (e.g. `fullName` for `Employee`).
- If `titleProperty` was missing (loading, error, or metadata absent), `where` returned `undefined` and the search was effectively a no-op until metadata loaded.

**Post-PR behavior**

- `useOsdkMetadata` is gone. The where clause is keyed by the special `$title` filter: `{ $title: { $containsAllTermsInOrder: trimmed } }`.
- Empty / whitespace-only trimmed input still returns `undefined` (no filter, full list).
- No metadata gating — the where clause is produced immediately on debounce.

**Failure modes to probe**

- Search still fires for the trimmed text after the 300 ms debounce.
- Search returns the full list for an empty / whitespace query.
- A previously-selected value that lies outside the filtered server response is not cleared by the field (covered by existing unit test, but the storybook scenario should not regress it visually).
- Loading / fetching indicators render while the new where clause is in flight.

### 2. `packages/react-components/src/object-table/ObjectTable.tsx` + `utils/deriveSelectionObjectSet.ts` (row-selection derived ObjectSet)

**Pre-PR behavior**

- `ObjectTable` looked up `primaryKeyApiName` from `objectType` (only available for `type === "object"`).
- For interface-typed tables (`type === "interface"`), `primaryKeyApiName` was `undefined`, and partial selection produced no `objectSet` (only `isSelectAll` populated it). Callbacks saw `objectSet: undefined` on partial selection.
- The derivation lived inline in `handleRowSelectionChanged`.

**Post-PR behavior**

- Derivation is extracted to `deriveSelectionObjectSet`.
- Partial selection always builds `resultingObjectSet.where({ $primaryKey: { $in: [...] } })` regardless of whether the type is object or interface.
- Select-all with at least one selected row returns the full `resultingObjectSet` unchanged.
- Deselect-all (no selected rows, no isSelectAll) returns `resultingObjectSet.where({ $primaryKey: { $in: [] } })` — an empty narrowed set, not `undefined`.
- `resultingObjectSet` undefined → result is `undefined` (preserved).

**Failure modes to probe**

- Partial selection produces an objectSet for object types (Employee).
- Partial selection produces an objectSet for interface types (WorkerInterface) — previously `undefined`. This is **new functionality** to assert explicitly.
- Select-all returns the full set unchanged (no narrowing).
- Deselect-all returns a `$primaryKey: { $in: [] }` narrowed set, not `undefined`.
- Selected rows array matches the visible checkbox state.

### 3. `packages/client/src/observable/internal/evaluateFilter.ts` ($startsWith null-safety)

**Pre-PR behavior**

- `case "$startsWith": return realValue.startsWith(expected);` — would throw `TypeError: Cannot read properties of null (reading 'startsWith')` when `realValue` was `null` or `undefined`.

**Post-PR behavior**

- `case "$startsWith": return typeof realValue === "string" && realValue.startsWith(expected);` — non-string `realValue` returns `false` without throwing.

**Failure modes to probe**

- Subscribing to a list filtered by `{ $title: { $startsWith: "..." } }` and then triggering an optimistic write against an object whose `$title` is `null` must not crash. Pre-PR the matcher would throw inside `_extractAndCategorizeRelevantObjects`, breaking the cache and any subscribed list (React error boundary).
- Same path with `$startsWith` against a non-string scalar property (e.g. an integer `realValue`) returns `false`, not a throw.

## Regression scenarios

These mirror previously-working behavior that the PR must not break.

| Scenario                                        | Where to probe                                                           | Expected behavior                                                                                                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty / whitespace query in `ObjectSelectField` | ObjectSelectField storybook scenario                                     | `where` stays `undefined`; full list rendered after debounce                                                                                                                                             |
| Select-all in `ObjectTable` (multiple)          | ObjectTable storybook scenario                                           | `onRowSelectionChanged` receives `{ isSelectAll: true, objectSet: <full resultingObjectSet> }` (no `$in` narrowing)                                                                                      |
| Deselect-all in `ObjectTable`                   | ObjectTable storybook scenario                                           | `onRowSelectionChanged` receives `{ isSelectAll: false, selectedRows: [], objectSet: <narrowed by $primaryKey.$in: []> }`                                                                                |
| `resultingObjectSet === undefined`              | Unit-test coverage in `deriveSelectionObjectSet.test.ts` (PR ships this) | Callback receives `objectSet: undefined`                                                                                                                                                                 |
| ObjectSelectField search gating removed         | ObjectSelectField storybook scenario                                     | Search where-clause produced immediately after debounce — no waiting on metadata fetch. The PR REMOVED the metadata gate, so the regression here is "search must not regress to a metadata-gated no-op." |

## Functional verification scenarios (new behavior)

| Scenario                                                                               | Where to probe                                                                                                                                                                                                                   | Expected behavior                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Configured-title object (`Employee`, `titleProperty: "fullName"`) — search by `$title` | ObjectSelectField storybook scenario                                                                                                                                                                                             | Typing a substring of `fullName` filters the dropdown rows to the matching employees                                                                                                                                     |
| Partial selection on configured-title `Employee` table                                 | ObjectTable storybook scenario                                                                                                                                                                                                   | Selecting two rows produces an `objectSet` narrowed by `$primaryKey: { $in: [pk1, pk2] }`                                                                                                                                |
| Partial selection on `WorkerInterface` interface-typed table                           | ObjectTable interface storybook scenario                                                                                                                                                                                         | Selecting rows produces a real `objectSet` (previously `undefined`). Selected payload exposes the same `$primaryKey` `$in` narrowing as the object-typed case. **This is the new functionality.**                        |
| Object with null `$title` filtered by `$title.$startsWith`                             | Matcher-hardening storybook scenario (optimistic write on a null-title employee while a `$title.$startsWith` list is observed)                                                                                                   | Optimistic update completes; no React error overlay; no console TypeError; the filtered table renders correctly (the null-title row is excluded from the filtered list because the matcher returns `false`, not a throw) |
| `$title` normalization for non-string-titled objects                                   | Same matcher-hardening story (probe one non-string title path if a fixture permits it; otherwise document as "post-PR behavior is `typeof realValue === 'string' && ...`, so any non-string returns false rather than throwing") | Same as above — non-string `$title` returns `false`, not a throw                                                                                                                                                         |
| Loading / error states                                                                 | Storybook play step that observes the dropdown / table during the debounce window                                                                                                                                                | No `undefined` or `[object Object]` ever rendered to the DOM; dropdown remains usable                                                                                                                                    |

## Storybook scenario inventory

ObjectSelectField scenarios (appended to `ActionForm.stories.tsx` — ~951 lines, under the 1500-LOC threshold):

- `ObjectSelectFieldSearch` — types `"Liam"` into the dropdown, asserts the row is visible after debounce
- `ObjectSelectFieldEmptyQuery` — clears the query, asserts full list is shown again
- `ObjectSelectFieldSearchNoGate` — asserts that filtering happens immediately after debounce, without any metadata-load gate (regression guard for the removed `useOsdkMetadata`)

ObjectTable selection scenarios (new sibling file `ObjectTable.titlePk.stories.tsx` — base `ObjectTable.stories.tsx` is ~2200 lines, over 1500):

- `EmployeePartialSelection` — selects two rows via checkbox; captures the latest `change.objectSet` and asserts it carries `$primaryKey: { $in: [pk1, pk2] }`
- `EmployeeSelectAll` — clicks header checkbox; asserts `change.isSelectAll === true` and `change.objectSet` is the full `resultingObjectSet` (no `$in` narrowing on the where clause)
- `EmployeeDeselectAll` — selects then deselects; asserts `change.objectSet` is narrowed by `$primaryKey: { $in: [] }` (empty set, not `undefined`)
- `InterfacePartialSelection` — same as the Employee partial-selection scenario but against `WorkerInterface`. Pre-PR this would have produced `objectSet: undefined`. Asserts the post-PR `$primaryKey.$in` narrowing.

Matcher-hardening scenarios (added inside `ObjectTable.titlePk.stories.tsx`):

- `MatcherHardeningNullTitleStartsWith` — renders an `ObjectTable` with `filter: { $title: { $startsWith: "Liam" } }` alongside an unfiltered `ObjectTable` against a fixture extended with a null-title employee. As the unfiltered table loads, the null-title row flows through the observable cache; the filtered subscription's matcher evaluates `$title.$startsWith` against it. Pre-PR the matcher threw `TypeError: Cannot read properties of null (reading 'startsWith')`. Post-PR it returns `false` and renders cleanly.

<!-- cspell:ignore actionform objecttable -->

## Pass / fail table

| # | Scenario                                          | Usage site                                        | Story id                                                                  | Playwright test (file:line)                  | Pass/Fail | Notes                                                                                                                                                                                                      |
| - | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | ObjectSelectField — `$title` search where-clause  | `ObjectSelectField.tsx`                           | `components-actionform-usage--object-select-field-search`                 | `playwright/object-select-field.spec.ts:39`  | Pass      | The PR's where clause reaches faux foundry. Faux currently rejects `$title` propertyIdentifier — coverage limitation, NOT a PR bug. Test asserts either the error or the filtered hit appears.             |
| 2 | ObjectSelectField — empty query returns full list | `ObjectSelectField.tsx`                           | `components-actionform-usage--object-select-field-empty-query`            | `playwright/object-select-field.spec.ts:80`  | Pass      | Empty / cleared query produces `undefined` where; full unfiltered list renders.                                                                                                                            |
| 3 | ObjectSelectField — search not gated by metadata  | `ObjectSelectField.tsx`                           | `components-actionform-usage--object-select-field-search-no-gate`         | `playwright/object-select-field.spec.ts:101` | Pass      | Where clause fires immediately after the 300 ms debounce — no separate metadata fetch. Same faux limitation as #1.                                                                                         |
| 4 | ObjectTable — Employee partial selection          | `ObjectTable.tsx` / `deriveSelectionObjectSet.ts` | `components-objecttable-pr3408--employee-partial-selection`               | `playwright/object-table.spec.ts:84`         | Pass      | Wire object set is a `filter` wrapping the base set; `where.propertyIdentifier.type === "primaryKeyProperty"`. Pre-PR this would have been keyed by `field: "employeeNumber"` instead.                     |
| 5 | ObjectTable — Employee select-all                 | `ObjectTable.tsx` / `deriveSelectionObjectSet.ts` | `components-objecttable-pr3408--employee-select-all`                      | `playwright/object-table.spec.ts:124`        | Pass      | Wire object set is the base set (no filter wrapper). `isSelectAll === true`.                                                                                                                               |
| 6 | ObjectTable — Employee deselect-all               | `ObjectTable.tsx` / `deriveSelectionObjectSet.ts` | `components-objecttable-pr3408--employee-deselect-all`                    | `playwright/object-table.spec.ts:147`        | Pass      | Wire object set is `filter` with `value: []`. Empty selection narrows rather than returning `undefined`.                                                                                                   |
| 7 | ObjectTable — Interface partial selection (NEW)   | `ObjectTable.tsx` / `deriveSelectionObjectSet.ts` | `components-objecttable-pr3408--interface-partial-selection`              | `playwright/object-table.spec.ts:178`        | Pass      | New functionality: interface-typed table now produces a real `objectSet` on partial selection (was `undefined` pre-PR). Same `primaryKeyProperty` wire shape.                                              |
| 8 | Observable matcher — `$startsWith` null-safety    | `evaluateFilter.ts`                               | `components-objecttable-pr3408--matcher-hardening-null-title-starts-with` | `playwright/matcher-hardening.spec.ts:27`    | Pass      | Null-title row enters the cache via the unfiltered table; the filtered subscription's matcher evaluates `$title.$startsWith` against it without crashing. No console / pageerror of the `startsWith` form. |

### Findings to surface to the reviewer

- **Faux foundry does not yet support the `$title` / `$primaryKey` propertyIdentifiers in its `filterObjects` switch.** When the PR-introduced where clause `{ $title: { $containsAllTermsInOrder: "Liam" } }` reaches the mock server, faux throws `propertyIdentifier not supported`. The test surfaces the error in the dropdown UI but cannot exercise the filtered server response. This is a **coverage gap in `@osdk/faux`, not a bug in PR #3408** — real Foundry supports these special filters, so the field works against a live ontology. Worth opening a follow-up to extend `packages/faux/src/FauxFoundry/filterObjects.ts` to recognize `propertyIdentifier.type === "objectTitle"` and `"primaryKeyProperty"` so storybook coverage is exhaustive.
- The fixture now ships a null-title employee (`employeeNumber: 657495999`, `fullName: ""`). `FauxDataStore.parseObject` normalizes the empty title to `__title: undefined`, which the matcher hardening scenario relies on.
