# Filter List Component - Implementation Guide

This document provides complete context for implementing three improvements to the filter list component. A new developer (or Claude instance) can pick up this task with no prior context.

## Progress

| Task | Status | Description |
|------|--------|-------------|
| Task 1: Fix Date Persistence | ✅ COMPLETE | Reconstruct Date objects when loading persisted filter states |
| Task 2: Add Filter ID Field | ✅ COMPLETE | Add optional `id` field for stable keying across filter reorders |
| Task 3: Implement LinkedProperty Rendering | ✅ COMPLETE | Render actual filter inputs for linked property filters |

---

## Table of Contents

1. [Codebase Context](#codebase-context)
2. [Architecture Overview](#architecture-overview)
3. [Task 1: Fix Date Persistence](#task-1-fix-date-persistence) ✅
4. [Task 2: Add Filter ID Field](#task-2-add-filter-id-field) ✅
5. [Task 3: Implement LinkedProperty Rendering](#task-3-implement-linkedproperty-rendering) ✅
6. [Implementation Order](#implementation-order)
7. [Testing Requirements](#testing-requirements)

---

## Codebase Context

### Project Structure

This is the `@osdk/react-components` package in a monorepo. The filter-list component lives at:

```
packages/react-components/src/filter-list/
├── __tests__/                          # Unit tests
├── base/                               # Headless components (no styling)
│   ├── inputs/                         # Input component implementations
│   │   ├── CheckboxListInput.tsx
│   │   ├── ContainsTextInput.tsx
│   │   ├── DateRangeInput.tsx
│   │   ├── MultiSelectInput.tsx
│   │   ├── NullValueWrapper.tsx
│   │   ├── NumberRangeInput.tsx
│   │   └── ... (more inputs)
│   ├── FilterList.tsx
│   ├── FilterListContent.tsx
│   ├── FilterListItem.tsx
│   └── renderFilterInput.tsx           # Factory for rendering inputs
├── blueprint/                          # Blueprint-styled wrappers
├── hooks/
│   ├── useDebouncedValue.ts
│   ├── useFilterListState.ts           # Core state management
│   └── usePropertyAggregation.ts
├── types/
│   ├── ClassNameOverrides.ts
│   ├── CustomRendererTypes.ts
│   ├── FilterDisplayTypes.ts
│   ├── FilterPanelTypes.ts
│   ├── KeywordSearchTypes.ts
│   └── LinkedFilterTypes.ts
├── utils/
│   ├── assertUnreachable.ts
│   ├── filterStateToWhereClause.ts     # Converts state to OSDK queries
│   ├── filterValues.ts
│   └── getFilterKey.ts                 # Generates unique keys for filters
├── FilterListApi.ts                    # Public API types
└── FilterListItemApi.ts                # Filter definition types
```

### Key Commands

```bash
# Typecheck the package
cd packages/react-components && pnpm turbo typecheck

# Run tests
cd packages/react-components && pnpm test

# Install dependencies
pnpm install
```

### TypeScript Guidelines (from CLAUDE.md)

- NEVER use `any` without asking first
- NEVER use manual casting unless absolutely necessary
- Avoid `never` or `unknown` usage
- Minimize comments
- Look for `.ts`/`.tsx` files (ESM/TypeScript project)

---

## Architecture Overview

### Type System

The filter list uses discriminated unions for type safety:

```typescript
// All filter states have a `type` discriminator
type FilterState =
  | ExactMatchFilterState      // type: "EXACT_MATCH"
  | DateRangeFilterState       // type: "DATE_RANGE"
  | ContainsTextFilterState    // type: "CONTAINS_TEXT"
  | NumberRangeFilterState     // type: "NUMBER_RANGE"
  | CheckboxListFilterState    // type: "CHECKBOX_LIST"
  | LinkedPropertyFilterState  // type: "LINKED_PROPERTY"
  | ... (14 total types)
```

All filter definitions also use discriminated unions:

```typescript
type FilterDefinitionUnion<Q> =
  | PropertyFilterDefinition<Q>       // type: "property"
  | HasLinkFilterDefinition<Q>        // type: "hasLink"
  | LinkedPropertyFilterDefinition<Q> // type: "linkedProperty"
  | KeywordSearchFilterDefinition<Q>  // type: "keywordSearch"
  | CustomFilterDefinition<Q>         // type: "custom"
```

### State Management

The `useFilterListState` hook manages all filter state:

```typescript
// Key function signature
export function useFilterListState<Q extends ObjectTypeDefinition>(
  props: FilterListProps<Q>,
): UseFilterListStateResult<Q>

// Returns
interface UseFilterListStateResult<Q> {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  filterStates: Map<string, FilterState>;
  setFilterState: (key: string, state: FilterState) => void;
  resetFilterState: (key: string) => void;
  whereClause: WhereClause<Q>;
  activeFilterCount: number;
  reset: () => void;
}
```

### Key Files to Understand

| File | Purpose |
|------|---------|
| `hooks/useFilterListState.ts` | Core state management, persistence |
| `utils/filterStateToWhereClause.ts` | Converts filter state to OSDK WHERE clauses |
| `utils/getFilterKey.ts` | Generates unique keys for filter definitions |
| `base/renderFilterInput.tsx` | Factory that renders appropriate input component |
| `FilterListItemApi.ts` | All filter state type definitions |
| `FilterListApi.ts` | Public API and FilterDefinitionUnion |
| `types/LinkedFilterTypes.ts` | LinkedProperty and HasLink definitions |

---

## Task 1: Fix Date Persistence ✅ COMPLETE

### Problem

Date objects in filter states are serialized to ISO strings via `JSON.stringify()` when persisting to sessionStorage. However, when loading persisted state, they remain as strings instead of being reconstructed as Date objects.

### Solution Implemented

1. **Added `parseDateFromISO` utility** to `base/inputs/dateUtils.ts`:
   - Safely converts strings/Dates to Date objects
   - Handles undefined, null, and invalid date strings gracefully

2. **Added `deserializeFilterState` function** to `hooks/useFilterListState.ts`:
   - Handles DATE_RANGE, SINGLE_DATE, MULTI_DATE, TIMELINE filter types
   - Recursively deserializes LINKED_PROPERTY nested states
   - Includes defensive `Array.isArray()` check for MULTI_DATE

3. **Updated `loadFromStorage`** to apply deserialization after JSON parsing

### Files Modified

| File | Changes |
|------|---------|
| `base/inputs/dateUtils.ts` | Added `parseDateFromISO` utility |
| `hooks/useFilterListState.ts` | Added `deserializeFilterState`, updated `loadFromStorage` |

---

## Task 2: Add Filter ID Field ✅ COMPLETE

### Problem

Current filter keying uses `${filterKey}:${index}` where `filterKey` is derived from the filter definition and `index` is the array position. This breaks if filter definitions are reordered at runtime.

### Solution Implemented

1. **Added `id?: string` field** to all filter definition interfaces:
   - `PropertyFilterDefinition` in `FilterListItemApi.ts`
   - `HasLinkFilterDefinition` and `LinkedPropertyFilterDefinition` in `types/LinkedFilterTypes.ts`
   - `KeywordSearchFilterDefinition` in `types/KeywordSearchTypes.ts`
   - `CustomFilterDefinition` in `types/CustomRendererTypes.ts`

2. **Updated `getFilterKey`** in `utils/getFilterKey.ts`:
   - Returns `id` directly when present
   - Falls back to type-specific key derivation otherwise
   - Added `hasExplicitId` helper function

3. **Updated keying logic** in both:
   - `hooks/useFilterListState.ts` (`buildInitialStates`)
   - `utils/filterStateToWhereClause.ts` (`buildWhereClause`)
   - Uses `id` directly when present, otherwise appends index for uniqueness

4. **Added exhaustive switch check** in `buildWhereClause` with `assertUnreachable`

### Files Modified

| File | Changes |
|------|---------|
| `FilterListItemApi.ts` | Added `id?: string` to `PropertyFilterDefinition` |
| `types/LinkedFilterTypes.ts` | Added `id?: string` to `HasLinkFilterDefinition`, `LinkedPropertyFilterDefinition` |
| `types/KeywordSearchTypes.ts` | Added `id?: string` to `KeywordSearchFilterDefinition` |
| `types/CustomRendererTypes.ts` | Added `id?: string` to `CustomFilterDefinition` |
| `utils/getFilterKey.ts` | Updated to prefer `id`, added `hasExplicitId` helper |
| `hooks/useFilterListState.ts` | Updated keying logic in `buildInitialStates` |
| `utils/filterStateToWhereClause.ts` | Updated keying logic in `buildWhereClause`, added `assertUnreachable` |

### Backward Compatibility

- Filters without `id` work exactly as before (index-based keying)
- Filters with `id` use that `id` as their stable key
- Reordering filters with `id` preserves their state

---

## Task 3: Implement LinkedProperty Rendering ✅ COMPLETE

### Problem

In `base/renderFilterInput.tsx`, the `linkedProperty` case returned a placeholder instead of an actual filter input.

### Solution Implemented

1. **Created `LinkedPropertyInput.tsx`** at `base/inputs/LinkedPropertyInput.tsx`:
   - Uses `objectSet.pivotTo(linkName)` to derive the linked ObjectSet
   - Extracts linked object type via `linkedObjectSet.$objectSetInternals.def`
   - Renders appropriate input based on `linkedFilterComponent` (CHECKBOX_LIST, MULTI_SELECT, SINGLE_SELECT, CONTAINS_TEXT, TOGGLE, NUMBER_RANGE, DATE_RANGE)
   - Wraps state changes in `LinkedPropertyFilterState`
   - Uses `assertUnreachable` for exhaustive switch
   - Shows placeholder for not-yet-supported components (LISTOGRAM, TEXT_TAGS, SINGLE_DATE, MULTI_DATE, TIMELINE)

2. **Updated `renderFilterInput.tsx`**:
   - Added import for `LinkedPropertyInput`
   - Updated `linkedProperty` case to render `LinkedPropertyInput`

3. **Exported from `inputs/index.ts`**

### Files Modified

| File | Changes |
|------|---------|
| **NEW**: `base/inputs/LinkedPropertyInput.tsx` | Created component for linked property rendering |
| `base/renderFilterInput.tsx` | Updated to use `LinkedPropertyInput` |
| `base/inputs/index.ts` | Added export for `LinkedPropertyInput` |

### Implementation

#### Step 1: Create `LinkedPropertyInput.tsx`

Create new file at `base/inputs/LinkedPropertyInput.tsx`:

```typescript
/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type {
  LinkNames,
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import React, { useCallback, useMemo } from "react";
import type { FilterState } from "../../FilterListItemApi.js";
import type { LinkedPropertyFilterDefinition } from "../../types/LinkedFilterTypes.js";
import type { InputClassNames } from "../renderFilterInput.js";
import { CheckboxListInput } from "./CheckboxListInput.js";
import { ContainsTextInput } from "./ContainsTextInput.js";
import { DateRangeInput } from "./DateRangeInput.js";
import { MultiSelectInput } from "./MultiSelectInput.js";
import { NumberRangeInput } from "./NumberRangeInput.js";
import { SingleSelectInput } from "./SingleSelectInput.js";
import { ToggleInput } from "./ToggleInput.js";

interface LinkedPropertyInputProps<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
> {
  objectSet: ObjectSet<Q>;
  definition: LinkedPropertyFilterDefinition<Q, L>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  inputClassNames?: InputClassNames;
  whereClause?: WhereClause<Q>;
}

export function LinkedPropertyInput<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
>({
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  inputClassNames,
}: LinkedPropertyInputProps<Q, L>): React.ReactElement {
  // Derive linked ObjectSet via pivotTo
  // This gives us an ObjectSet of the linked object type
  const linkedObjectSet = useMemo(
    () => objectSet.pivotTo(definition.linkName),
    [objectSet, definition.linkName],
  );

  // Extract linked object type definition from the pivoted ObjectSet
  // The type system knows this is LinkedType<Q, L>
  const linkedObjectType = linkedObjectSet.$objectSetInternals.def;

  // Extract inner filter state from the LinkedPropertyFilterState wrapper
  const innerState = filterState?.type === "LINKED_PROPERTY"
    ? filterState.linkedFilterState
    : undefined;

  // Wrap onChange to produce LinkedPropertyFilterState
  const wrappedOnChange = useCallback(
    (innerFilterState: FilterState) => {
      onFilterStateChanged({
        type: "LINKED_PROPERTY",
        linkedFilterState: innerFilterState,
      });
    },
    [onFilterStateChanged],
  );

  // Render the appropriate input component based on linkedFilterComponent
  switch (definition.linkedFilterComponent) {
    case "CHECKBOX_LIST": {
      const selectedValues = innerState?.type === "CHECKBOX_LIST"
        ? innerState.selectedValues
        : [];
      return (
        <CheckboxListInput
          objectType={linkedObjectType}
          propertyKey={definition.linkedPropertyKey as PropertyKeys<typeof linkedObjectType>}
          selectedValues={selectedValues}
          onChange={(newSelectedValues) =>
            wrappedOnChange({
              type: "CHECKBOX_LIST",
              selectedValues: newSelectedValues,
              isExcluding: innerState?.isExcluding ?? false,
            })}
          classNames={inputClassNames?.checkboxList}
        />
      );
    }

    case "MULTI_SELECT": {
      const values = innerState?.type === "MULTI_SELECT"
        ? (innerState.selectedValues as string[])
        : [];
      return (
        <MultiSelectInput
          objectType={linkedObjectType}
          propertyKey={definition.linkedPropertyKey as PropertyKeys<typeof linkedObjectType>}
          selectedValues={values}
          onChange={(selectedValues) =>
            wrappedOnChange({
              type: "MULTI_SELECT",
              selectedValues,
              isExcluding: innerState?.isExcluding ?? false,
            })}
          classNames={inputClassNames?.multiSelect}
        />
      );
    }

    case "SINGLE_SELECT": {
      const value = innerState?.type === "SINGLE_SELECT"
        ? (innerState.selectedValue as string | undefined)
        : undefined;
      return (
        <SingleSelectInput
          objectType={linkedObjectType}
          propertyKey={definition.linkedPropertyKey as PropertyKeys<typeof linkedObjectType>}
          selectedValue={value}
          onChange={(selectedValue) =>
            wrappedOnChange({
              type: "SINGLE_SELECT",
              selectedValue,
              isExcluding: innerState?.isExcluding ?? false,
            })}
          classNames={inputClassNames?.singleSelect}
        />
      );
    }

    case "CONTAINS_TEXT": {
      const value = innerState?.type === "CONTAINS_TEXT"
        ? innerState.value
        : undefined;
      return (
        <ContainsTextInput
          value={value}
          onChange={(newValue) =>
            wrappedOnChange({
              type: "CONTAINS_TEXT",
              value: newValue,
            })}
          placeholder={`Search ${String(definition.linkedPropertyKey)}...`}
          classNames={inputClassNames?.containsText}
        />
      );
    }

    case "TOGGLE": {
      const enabled = innerState?.type === "TOGGLE"
        ? innerState.enabled
        : false;
      return (
        <ToggleInput
          enabled={enabled}
          onChange={(newEnabled) =>
            wrappedOnChange({
              type: "TOGGLE",
              enabled: newEnabled,
            })}
          classNames={inputClassNames?.toggle}
        />
      );
    }

    case "NUMBER_RANGE": {
      const nr = innerState?.type === "NUMBER_RANGE" ? innerState : undefined;
      return (
        <NumberRangeInput
          objectType={linkedObjectType}
          propertyKey={definition.linkedPropertyKey as PropertyKeys<typeof linkedObjectType>}
          minValue={nr?.minValue}
          maxValue={nr?.maxValue}
          onChange={(minValue, maxValue) =>
            wrappedOnChange({
              type: "NUMBER_RANGE",
              minValue,
              maxValue,
              includeNull: innerState?.includeNull,
            })}
          classNames={inputClassNames?.numberRange}
        />
      );
    }

    case "DATE_RANGE": {
      const dr = innerState?.type === "DATE_RANGE" ? innerState : undefined;
      return (
        <DateRangeInput
          objectType={linkedObjectType}
          propertyKey={definition.linkedPropertyKey as PropertyKeys<typeof linkedObjectType>}
          minValue={dr?.minValue}
          maxValue={dr?.maxValue}
          onChange={(minValue, maxValue) =>
            wrappedOnChange({
              type: "DATE_RANGE",
              minValue,
              maxValue,
              includeNull: innerState?.includeNull,
            })}
          classNames={inputClassNames?.dateRange}
        />
      );
    }

    default:
      return (
        <div data-unsupported="true">
          Unsupported linked filter component: {definition.linkedFilterComponent}
        </div>
      );
  }
}
```

#### Step 2: Update `renderFilterInput.tsx`

In `base/renderFilterInput.tsx`, add the import and update the linkedProperty case:

```typescript
// Add import at top
import { LinkedPropertyInput } from "./inputs/LinkedPropertyInput.js";

// Update the linkedProperty case (around line 117-118)
case "linkedProperty":
  return (
    <LinkedPropertyInput
      objectSet={objectSet}
      definition={definition}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      inputClassNames={inputClassNames}
      whereClause={whereClause}
    />
  );
```

#### Step 3: Export from inputs/index.ts

Add to `base/inputs/index.ts`:

```typescript
export { LinkedPropertyInput } from "./LinkedPropertyInput.js";
```

### Verification

After implementation:
1. Run `pnpm turbo typecheck`
2. Test that LinkedProperty filters:
   - Render the correct input component
   - Use the linked object type for aggregation queries
   - Properly wrap state changes in LinkedPropertyFilterState

---

## Implementation Order

Execute tasks in this order to minimize conflicts and enable incremental testing:

### Phase 1: Date Persistence (Low Risk) ✅ COMPLETE

1. ✅ Add `parseDateFromISO` utility to `base/inputs/dateUtils.ts`
2. ✅ Add `deserializeFilterState` function to `hooks/useFilterListState.ts`
3. ✅ Update `loadFromStorage` to call deserialization
4. ✅ Run typecheck and tests

### Phase 2: Filter ID Field (Additive) ✅ COMPLETE

1. ✅ Add `id` field to all filter definition interfaces
2. ✅ Update `getFilterKey` to prefer `id`
3. ✅ Add `hasExplicitId` helper function
4. ✅ Update keying logic in `useFilterListState.ts`
5. ✅ Update keying logic in `filterStateToWhereClause.ts`
6. ✅ Add `assertUnreachable` to switch in `buildWhereClause`
7. ✅ Run typecheck and tests

### Phase 3: LinkedProperty Rendering (Most Complex) ✅ COMPLETE

1. ✅ Create `base/inputs/LinkedPropertyInput.tsx`
2. ✅ Update `base/renderFilterInput.tsx` to use it
3. ✅ Export from `base/inputs/index.ts`
4. ✅ Run typecheck and tests

---

## Testing Requirements

### Task 1 Tests

Create `hooks/__tests__/datePersistence.test.ts`:

```typescript
describe("deserializeFilterState", () => {
  it("reconstructs Date objects in DATE_RANGE state", () => {
    const serialized = JSON.parse(JSON.stringify({
      type: "DATE_RANGE",
      minValue: new Date("2024-01-01"),
      maxValue: new Date("2024-12-31"),
    }));

    const result = deserializeFilterState(serialized);

    expect(result.minValue).toBeInstanceOf(Date);
    expect(result.maxValue).toBeInstanceOf(Date);
  });

  it("handles LINKED_PROPERTY with nested date state", () => {
    const serialized = JSON.parse(JSON.stringify({
      type: "LINKED_PROPERTY",
      linkedFilterState: {
        type: "DATE_RANGE",
        minValue: new Date("2024-01-01"),
      },
    }));

    const result = deserializeFilterState(serialized);

    expect(result.linkedFilterState.minValue).toBeInstanceOf(Date);
  });
});
```

### Task 2 Tests

Add to `__tests__/getFilterKey.test.ts`:

```typescript
describe("getFilterKey with id field", () => {
  it("uses id when present on property filter", () => {
    const def = {
      type: "property",
      id: "my-custom-id",
      key: "name",
      filterComponent: "CHECKBOX_LIST",
    };

    expect(getFilterKey(def)).toBe("my-custom-id");
  });

  it("falls back to key when id is not present", () => {
    const def = {
      type: "property",
      key: "name",
      filterComponent: "CHECKBOX_LIST",
    };

    expect(getFilterKey(def)).toBe("name");
  });
});
```

### Task 3 Tests

Create `base/inputs/__tests__/LinkedPropertyInput.test.tsx`:

```typescript
describe("LinkedPropertyInput", () => {
  it("renders CHECKBOX_LIST for linked property", () => {
    // Test with mock objectSet that has pivotTo
    const mockPivotTo = vi.fn().mockReturnValue({
      $objectSetInternals: { def: mockLinkedObjectType },
    });

    const mockObjectSet = {
      pivotTo: mockPivotTo,
    } as unknown as ObjectSet<TestObjectType>;

    render(
      <LinkedPropertyInput
        objectSet={mockObjectSet}
        definition={linkedPropertyDef}
        filterState={undefined}
        onFilterStateChanged={vi.fn()}
      />
    );

    expect(mockPivotTo).toHaveBeenCalledWith("employees");
  });
});
```

---

## Files Modified Summary

### Completed Changes (Tasks 1 & 2)

| File | Task | Changes |
|------|------|---------|
| `base/inputs/dateUtils.ts` | 1 | ✅ Added `parseDateFromISO` utility |
| `hooks/useFilterListState.ts` | 1, 2 | ✅ Added `deserializeFilterState`, updated `loadFromStorage`, updated keying |
| `FilterListItemApi.ts` | 2 | ✅ Added `id?: string` to PropertyFilterDefinition |
| `types/LinkedFilterTypes.ts` | 2 | ✅ Added `id?: string` to HasLink and LinkedProperty definitions |
| `types/KeywordSearchTypes.ts` | 2 | ✅ Added `id?: string` to KeywordSearchFilterDefinition |
| `types/CustomRendererTypes.ts` | 2 | ✅ Added `id?: string` to CustomFilterDefinition |
| `utils/getFilterKey.ts` | 2 | ✅ Updated to prefer `id`, added `hasExplicitId` helper |
| `utils/filterStateToWhereClause.ts` | 2 | ✅ Updated keying, added `assertUnreachable` |

### Task 3 Changes

| File | Task | Changes |
|------|------|---------|
| `base/renderFilterInput.tsx` | 3 | ✅ Added LinkedPropertyInput usage |
| **NEW**: `base/inputs/LinkedPropertyInput.tsx` | 3 | ✅ New component for linked property rendering |
| `base/inputs/index.ts` | 3 | ✅ Export LinkedPropertyInput |

---

## Notes

- All changes are backward compatible
- Existing code without `id` fields continues to work unchanged
- Type casts in LinkedPropertyInput are necessary for dynamic property key access
- The `pivotTo` API returns a properly typed ObjectSet, preserving type safety
