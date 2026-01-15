# Filter-List Component - PR Split Strategy

## Overview

The filter-list component is split into 3 PRs for easier review. Each PR builds on the previous one.

---

## PR 1: Types & Utils

**~1,500 lines** - Pure TypeScript, no runtime code

### Files
```
filter-list/FilterListApi.ts
filter-list/FilterListItemApi.ts
filter-list/types/*.ts (7 files)
filter-list/utils/*.ts (5 files)
filter-list/__tests__/filterStateToWhereClause.test.ts
filter-list/__tests__/getFilterKey.test.ts
filter-list/__tests__/testUtils.ts
```

### What's Included
- Filter definition types (PropertyFilterDefinition, LinkedPropertyFilterDefinition, etc.)
- Filter state types (CheckboxListFilterState, DateRangeFilterState, etc.)
- WhereClause generation utilities
- Type-safe filter key extraction
- Unit tests for utilities

---

## PR 2: Hooks

**~500 lines** - React hooks, depends on PR 1

### Files
```
filter-list/hooks/useFilterListState.ts
filter-list/hooks/usePropertyAggregation.ts
filter-list/hooks/useDebouncedValue.ts
filter-list/hooks/__tests__/useFilterListState.test.tsx
```

### What's Included
- `useFilterListState` - Central state management for filter list
- `usePropertyAggregation` - Fetch distinct values for a property
- `useDebouncedValue` - Debounce filter input changes
- Unit tests for hooks

---

## PR 3: Components & Styles

**~5,500 lines** - UI components, depends on PR 1 & PR 2

### Files
```
filter-list/base/*.tsx (6 files)
filter-list/base/inputs/*.tsx (15 files)
filter-list/base/styles/*.scss (4 files)
filter-list/blueprint/*.tsx (3 files)
filter-list/blueprint/styles/*.scss (3 files)
filter-list/styles/*.scss (2 files)
filter-list/__tests__/LinkedPropertyInput.test.tsx
shared/styles/*.scss (7 files)
e2e.sandbox.peopleapp/ (demo files)
package.json, pnpm-lock.yaml
public/experimental.ts exports
```

### What's Included
- Base (unstyled) filter components
- Input components (CheckboxList, DateRange, NumberRange, etc.)
- Blueprint-styled wrappers
- SCSS styles and variables
- Sandbox app demo
- Package exports

---

## Merge Order

```
PR 1 (Types) → PR 2 (Hooks) → PR 3 (Components)
```

Each PR should pass `pnpm turbo typecheck` and `pnpm test` independently.

---

## Notes

- Aggregation code changes are in a separate PR
- Dev notes (`ANALYSIS.md`, `LINKED_PROPERTY_FIXES.md`) should be deleted before merging
