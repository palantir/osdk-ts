# FilterList: Reset disabled until state diverges from initial

## Why

Today the Reset button in `FilterListHeader` is disabled only when
`activeFilterCount === 0 && !hasVisibilityChanges`. The "active count" is
defined by `filterHasActiveState`, which is independent of where the
filter state started. If a consumer of `<FilterList />` passes
`filterDefinitions` that already carry non-empty initial states
(e.g. a property filter with `filterState: { type: "EXACT_MATCH", values: [...] }`,
or a `KEYWORD_SEARCH`/`CUSTOM` filter with a `defaultFilterState`), then
on first render the active count is already > 0 and Reset is enabled —
clicking it just rebuilds the same initial map and is a visible no-op.

The fix is to treat "touched" as "current state differs from the
snapshot captured the first time `useFilterListState` ran". Reset is
disabled until the user actually deviates from that initial snapshot
(or, as today, the visibility order changes).

## Approach

All changes live in
`packages/react-components/src/filter-list/`:

1. **Snapshot initial states on mount in `useFilterListState`**
   (`hooks/useFilterListState.ts`).
   - Add a `useRef` seeded once with
     `buildInitialStates(filterDefinitions)` merged with
     `initialFilterStates` (matching the existing `useState` initializer
     in lines 132–142 so the snapshot reflects what the hook actually
     starts with — not just what's in `filterDefinitions`).
   - Expose `hasChangesFromInitial: boolean` derived via `useMemo` over
     `filterStates`. Compute it by deep-comparing the live
     `Map<string, FilterState>` to the snapshot map. A small local
     `areFilterStatesEqual(a, b)` helper that compares Map sizes,
     iterates keys, and uses a structural equality check is sufficient
     — the `FilterState` shape is plain JSON (discriminated union of
     records/arrays of primitives), so a stable JSON-based equality or
     a recursive structural compare is acceptable. Prefer a small
     recursive comparator over `JSON.stringify` to be robust to key
     ordering in objects.
   - Add `hasChangesFromInitial` to `UseFilterListStateResult` and to
     the memoized return.
   - The snapshot is taken once; do NOT re-seed it when
     `filterDefinitions` changes. That matches the spec ("Snapshot at
     mount").

2. **Plumb the flag through the props chain.**
   - `FilterList.tsx` destructures `hasChangesFromInitial` from
     `useFilterListState(props)` and passes it down to
     `BaseFilterList`.
   - `base/BaseFilterListApi.ts` adds an optional
     `hasChangesFromInitial?: boolean` prop on
     `BaseFilterListProps<D>`.
   - `base/BaseFilterList.tsx` accepts the new prop and forwards it to
     `FilterListHeader`.
   - `base/FilterListHeader.tsx` adds
     `hasChangesFromInitial?: boolean` to
     `FilterListHeaderProps` and changes the disabled expression on
     line 76 from
     `disabled={activeFilterCount === 0 && !hasVisibilityChanges}` to
     `disabled={!hasChangesFromInitial && !hasVisibilityChanges}`.
     Keep `activeFilterCount` on the props (it is still used elsewhere
     in the header) but it is no longer the source of "is Reset
     enabled?".

3. **Tests.**
   Append to existing test files (do not create new split files):
   - `hooks/__tests__/useFilterListState.test.tsx` — add a nested
     `describe("hasChangesFromInitial", ...)` covering:
     - empty definitions → `false`
     - definitions with an initial `filterState` already set → still
       `false` on mount (the new "Reset disabled" behavior)
     - after `setFilterState` to a different value → `true`
     - after `setFilterState` back to the original snapshot value →
       `false` again
     - `reset()` flips it back to `false`
   - Optionally extend an existing FilterList integration test (or
     `FilterListDragAndDrop.test.tsx` if it covers the header) to
     assert Reset is disabled on first render when definitions carry
     initial filter state, and enabled after a user change.

4. **No public API surface changes outside the package.**
   `hasChangesFromInitial` is internal to the filter-list module
   (added to `BaseFilterListProps` which is exported via the package's
   beta surface — running `pnpm turbo check-api --filter=@osdk/react-components`
   will reveal any `.api.md` drift and the report must be committed if
   it changes).

## Verification

- `pnpm turbo typecheck --filter=@osdk/react-components`
- `pnpm --dir packages/react-components vitest run filter-list`
- `pnpm turbo check-api --filter=@osdk/react-components` and commit
  the updated `etc/react-components.report.api.md` if it changed
- `git ls-files --modified --others --exclude-standard | xargs npx dprint fmt`
- Add ONE changeset at `.changeset/<descriptive>.md` with
  `"@osdk/react-components": patch` and a one-line summary
  ("disable filter-list reset until state diverges from initial
  definitions").

## Non-goals

- Do not change `activeFilterCount` semantics; it remains
  `filterHasActiveState`-based and is still rendered in the header
  count badge.
- Do not refactor `useFilterVisibility`. `hasVisibilityChanges`
  remains the separate signal for visibility-only changes.
- Do not change the `reset()` implementation — it already rebuilds
  from `buildInitialStates(filterDefinitions)`, which matches the
  snapshot at mount as long as the definitions reference is stable
  (callers passing fresh array identities each render is a separate,
  pre-existing concern).
