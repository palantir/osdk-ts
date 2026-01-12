# Filter List Implementation Analysis

## Overall Architecture

This is a well-structured filtering component system for OSDK (Ontology SDK) with:

1. **Two-layer architecture**: Base components (headless, styling via className props) and Blueprint-wrapped components for styling.

2. **Type-safe filter definitions**: Uses TypeScript generics to ensure filter components match property types (e.g., boolean properties can only use TOGGLE, CHECKBOX_LIST, etc.)

3. **Multiple filter types**: Property filters, linked filters, keyword search, and custom filters.

---

## Strengths

### 1. Clean Separation of Concerns
- `FilterListApi.ts` - Public API types
- `FilterListItemApi.ts` - Item-level types and state definitions
- `renderFilterInput.tsx` - Factory pattern for input components
- `filterStateToWhereClause.ts` - State to query conversion

### 2. Reusable Abstractions
- `RangeInput.tsx` - Generic range input reused by DateRangeInput and NumberRangeInput
- `useDebouncedValue.ts` - Reusable debounce hook
- `usePropertyAggregation.ts` - Shared aggregation logic

### 3. Accessibility
Good ARIA attributes throughout (aria-label, aria-expanded, role="switch")

### 4. State Management
Clean controlled/uncontrolled pattern with `useFilterListState`

---

## Issues Found with Implementation Plans

---

### Issue 1: Missing default case exhaustiveness in `getFilterKey`

**Priority:** HIGH
**File:** `utils/getFilterKey.ts:23-38`
**Risk:** If a new filter type is added, function silently returns `undefined`

**Current Code:**
```typescript
export function getFilterKey<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): string {
  switch (definition.type) {
    case "property":
      return definition.key;
    case "hasLink":
      return `hasLink:${definition.linkName}`;
    case "linkedProperty":
      return `linkedProperty:${definition.linkName}:${definition.linkedPropertyKey}`;
    case "keywordSearch":
      return `keywordSearch-${...}`;
    case "custom":
      return definition.key;
  }
  // No default case - function can return undefined!
}
```

**Implementation Plan:**
1. Import `assertUnreachable` from `../utils/assertUnreachable.js`
2. Add default case at end of switch:
   ```typescript
   default:
     return assertUnreachable(definition);
   ```
3. Change return type from implicit to explicit `string` (already correct)

**Files to Modify:**
- `utils/getFilterKey.ts`

**Effort:** Low (5 min)

---

### Issue 2: Empty dependency array in `useMemo` for persistence

**Priority:** LOW (Intentional Design)
**File:** `hooks/useFilterListState.ts:196-204`

**Analysis:** After review, this appears to be intentional behavior. The hook reads persisted state once on mount and doesn't want to re-read if props change. This is a valid pattern for session restoration.

**Decision:** NO ACTION NEEDED - Add comment clarifying the intentional design.

**Implementation Plan (Optional Documentation):**
```typescript
// Intentionally empty dependency array: We only want to read persisted state
// on initial mount. Re-reading on prop changes would overwrite user's
// in-session filter modifications.
const persistedState = useMemo(() => {...}, []);
```

**Effort:** None (or 2 min for comment)

---

### Issue 3: Memory leak in setTimeout blur handlers

**Priority:** HIGH
**Files:**
- `base/inputs/MultiSelectInput.tsx:156-159`
- `base/inputs/TextTagsInput.tsx:171-178`

**Current Code (MultiSelectInput):**
```typescript
onBlur={() => {
  // Delay to allow click on dropdown item
  setTimeout(() => setIsDropdownOpen(false), 150);
}}
```

**Current Code (TextTagsInput):**
```typescript
onBlur={() => {
  setTimeout(() => {
    if (isMountedRef.current) {  // Already has protection!
      setShowSuggestions(false);
    }
  }, 150);
}}
```

**Analysis:** `TextTagsInput` already has protection via `isMountedRef`. Only `MultiSelectInput` needs fixing.

**Implementation Plan:**
1. In `MultiSelectInput.tsx`, add mounted ref pattern:
   ```typescript
   const isMountedRef = useRef(true);

   useEffect(() => {
     return () => {
       isMountedRef.current = false;
     };
   }, []);
   ```
2. Update onBlur handler:
   ```typescript
   onBlur={() => {
     setTimeout(() => {
       if (isMountedRef.current) {
         setIsDropdownOpen(false);
       }
     }, 150);
   }}
   ```

**Files to Modify:**
- `base/inputs/MultiSelectInput.tsx`

**Effort:** Low (10 min)

---

### Issue 4: Type casting for dynamic property keys

**Priority:** NONE (Documented, Unavoidable)
**Files:**
- `base/inputs/CheckboxListInput.tsx:96`
- `base/inputs/RangeInput.tsx:132`
- `hooks/usePropertyAggregation.ts:58`

**Analysis:** These casts are already documented with comments explaining why they're necessary. The dynamic property key pattern requires type assertions because TypeScript cannot infer the specific property key at compile time.

**Decision:** NO ACTION NEEDED - Already properly documented.

---

### Issue 5: Missing error boundary

**Priority:** MEDIUM
**File:** `base/renderFilterInput.tsx`

**Implementation Plan:**
1. Create new file `base/FilterInputErrorBoundary.tsx`:
   ```typescript
   import React, { Component, type ReactNode } from "react";

   interface Props {
     children: ReactNode;
     fallback?: ReactNode;
     onError?: (error: Error) => void;
   }

   interface State {
     hasError: boolean;
     error: Error | null;
   }

   export class FilterInputErrorBoundary extends Component<Props, State> {
     state: State = { hasError: false, error: null };

     static getDerivedStateFromError(error: Error): State {
       return { hasError: true, error };
     }

     componentDidCatch(error: Error) {
       this.props.onError?.(error);
     }

     render() {
       if (this.state.hasError) {
         return this.props.fallback ?? (
           <div data-error="filter-input">
             Error loading filter
           </div>
         );
       }
       return this.props.children;
     }
   }
   ```

2. Wrap filter inputs in `renderFilterInput.tsx`:
   ```typescript
   return (
     <FilterInputErrorBoundary>
       {/* existing switch/case rendering */}
     </FilterInputErrorBoundary>
   );
   ```

**Files to Modify:**
- Create: `base/FilterInputErrorBoundary.tsx`
- Modify: `base/renderFilterInput.tsx`

**Effort:** Medium (20 min)

---

### Issue 6: Duplicate key generation in `buildWhereClause`

**Priority:** MEDIUM
**File:** `utils/filterStateToWhereClause.ts:222-247`

**Current Problem:** The function re-derives keys from definitions instead of using `getFilterKey`.

**Implementation Plan:**
1. Import `getFilterKey`:
   ```typescript
   import { getFilterKey } from "./getFilterKey.js";
   ```
2. Replace inline key derivation with `getFilterKey(definition)` calls
3. This ensures consistency and single source of truth for key generation

**Files to Modify:**
- `utils/filterStateToWhereClause.ts`

**Effort:** Low (15 min)

---

### Issue 7: NullValueWrapper aggregation structure

**Priority:** HIGH (Potential Bug)
**File:** `base/inputs/NullValueWrapper.tsx:59-68`

**Current Code:**
```typescript
const nullCountAggregateOptions = useMemo(
  () =>
    ({
      $select: { $count: "unordered" as const },
      $where: { [propertyKey as string]: { $isNull: true } },
    }) as AggregateOpts<Q>,
  [propertyKey],
);

const { data } = useOsdkAggregation(objectType, {
  where: whereClause,  // External where clause
  aggregate: nullCountAggregateOptions,  // Contains $where inside!
});
```

**Analysis:** The `$where` is inside `aggregateOptions` but `useOsdkAggregation` also takes a separate `where` prop. Need to verify:
1. Does OSDK support `$where` inside aggregate options?
2. Or should the null check be combined with the external `whereClause`?

**Implementation Plan:**
1. First, verify OSDK API behavior (check `@osdk/api` types and docs)
2. Likely fix - combine where clauses:
   ```typescript
   const combinedWhere = useMemo(() => {
     const nullCheck = { [propertyKey as string]: { $isNull: true } };
     return whereClause
       ? { $and: [whereClause, nullCheck] }
       : nullCheck;
   }, [propertyKey, whereClause]);

   const aggregateOptions = useMemo(
     () => ({ $select: { $count: "unordered" as const } }) as AggregateOpts<Q>,
     [],
   );

   const { data } = useOsdkAggregation(objectType, {
     where: combinedWhere,
     aggregate: aggregateOptions,
   });
   ```

**Files to Modify:**
- `base/inputs/NullValueWrapper.tsx`

**Effort:** Medium (30 min including verification)

---

### Issue 8: Date validation bounds

**Priority:** LOW
**File:** `base/inputs/dateUtils.ts:22-26`

**Analysis:** Browser date inputs handle validation. The `isNaN` check already catches invalid dates. Adding bounds would be over-engineering.

**Decision:** NO ACTION NEEDED

---

### Issue 9: Inconsistent KeywordSearchFilterDefinition filterState

**Priority:** LOW
**File:** `types/KeywordSearchTypes.ts:64-65`

**Analysis:** This filter type supports both controlled and uncontrolled modes:
- `filterState` provided = controlled
- `defaultFilterState` provided = uncontrolled

This is actually consistent with other React patterns.

**Decision:** NO ACTION NEEDED - Pattern is valid for optional controlled mode.

---

### Issue 10: Duplicate search filtering logic

**Priority:** LOW
**Files:**
- `base/inputs/CheckboxListInput.tsx:175-179`
- `base/inputs/MultiSelectInput.tsx:66-70`

**Current Code (both files):**
```typescript
const filteredValues = useMemo(() => {
  if (!searchValue.trim()) return values;
  const lowerSearch = searchValue.toLowerCase();
  return values.filter((v) => v.toLowerCase().includes(lowerSearch));
}, [values, searchValue]);
```

**Implementation Plan:**
1. Create utility function in `utils/filterValues.ts`:
   ```typescript
   export function filterValuesBySearch<T extends { value: string } | string>(
     values: T[],
     searchValue: string,
     getValue: (item: T) => string = (item) =>
       typeof item === "string" ? item : item.value,
   ): T[] {
     const trimmed = searchValue.trim();
     if (!trimmed) return values;
     const lowerSearch = trimmed.toLowerCase();
     return values.filter((v) =>
       getValue(v).toLowerCase().includes(lowerSearch)
     );
   }
   ```
2. Update both components to use shared utility

**Files to Modify:**
- Create: `utils/filterValues.ts`
- Modify: `base/inputs/CheckboxListInput.tsx`
- Modify: `base/inputs/MultiSelectInput.tsx`

**Effort:** Low (15 min)

---

## Implementation Summary

| Issue | Priority | Action | Effort | Files |
|-------|----------|--------|--------|-------|
| 1. getFilterKey exhaustiveness | HIGH | Add default case | 5 min | 1 |
| 2. useMemo empty deps | LOW | No action (intentional) | 0 | 0 |
| 3. setTimeout memory leak | HIGH | Add mounted ref | 10 min | 1 |
| 4. Type casting | NONE | No action (documented) | 0 | 0 |
| 5. Error boundary | MEDIUM | Create ErrorBoundary | 20 min | 2 |
| 6. Duplicate key gen | MEDIUM | Use getFilterKey | 15 min | 1 |
| 7. NullValueWrapper where | HIGH | Fix aggregation | 30 min | 1 |
| 8. Date validation | LOW | No action (browser handles) | 0 | 0 |
| 9. KeywordSearch filterState | LOW | No action (valid pattern) | 0 | 0 |
| 10. Duplicate filter logic | LOW | Extract utility | 15 min | 3 |

**Total Estimated Time:** ~1.5 hours for all actionable items

---

## Files Modified in This Branch

```
base/FilterList.tsx                    |   2 +
base/FilterListContent.tsx             |   3 +
base/FilterListItem.tsx                |  14 +-
base/inputs/ContainsTextInput.tsx      |  60 ++--
base/inputs/DateRangeInput.tsx         | 296 ++------------------
base/inputs/MultiDateInput.tsx         |  24 +-
base/inputs/NumberRangeInput.tsx       | 305 ++-------------------
base/inputs/RangeInput.tsx             | 305 +++++++++++++++++++++ (NEW)
base/inputs/SingleDateInput.tsx        |  12 +-
base/inputs/TimelineInput.tsx          |  29 +-
base/inputs/dateUtils.ts               |  38 +++ (NEW)
base/inputs/index.ts                   |   2 +
base/renderFilterInput.tsx             | 270 +++++-------------
hooks/useDebouncedValue.ts             |  74 +++++ (NEW)
hooks/useFilterListState.ts            |  68 ++---
types/ClassNameOverrides.ts            |  21 +-
utils/filterStateToWhereClause.ts      |  51 ++--
```

---

## Conclusion

The implementation is solid and well-architected with good TypeScript types and separation of concerns. The refactoring to create the shared `RangeInput` component was a good architectural decision. The main concerns are:

- A few potential memory leaks in blur handlers
- One potentially incorrect aggregation query in NullValueWrapper
- Some minor inconsistencies that could cause maintenance headaches

The codebase passes typecheck, and the overall patterns follow React best practices.

---

## Testing Analysis

### Current State: CRITICAL GAP

**The filter-list component has NO tests.** The only test file in the entire `@osdk/react-components` package is a placeholder:

```typescript
// packages/react-components/src/junk.test.ts
describe("anything", () => {
  it("does", async () => {
    expect(1).toBe(1);
  });
});
```

### Testing Infrastructure

The infrastructure for testing exists and is ready to use:

- **Test runner**: Vitest (configured in `vitest.config.mts`)
- **DOM environment**: happy-dom
- **Fake timers**: Configured for `setTimeout`, `clearTimeout`, `Date`
- **Test command**: `pnpm test` runs `vitest run`

However, the package is missing `@testing-library/react` as a dev dependency (unlike `@osdk/react` which has it).

### Reference Pattern

The `@osdk/react` package has good testing patterns we can follow:

```typescript
// From packages/react/test/useOsdkObject.enabled.test.tsx
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vitest } from "vitest";

const createWrapper = () => {
  const observableClient = { observeObject: mockFn } as any;
  return ({ children }: React.PropsWithChildren) => (
    <OsdkContext2.Provider value={{ observableClient }}>
      {children}
    </OsdkContext2.Provider>
  );
};

renderHook(() => useOsdkObject(mockInstance, false), { wrapper });
```

### Recommended Test Coverage

#### Priority 1: Core Logic (Unit Tests)
These are pure functions that can be tested without React:

| File | Test File | Priority |
|------|-----------|----------|
| `utils/filterStateToWhereClause.ts` | `filterStateToWhereClause.test.ts` | **CRITICAL** |
| `utils/getFilterKey.ts` | `getFilterKey.test.ts` | **HIGH** |
| `hooks/useDebouncedValue.ts` | `useDebouncedValue.test.ts` | **HIGH** |
| `base/inputs/createHistogramBuckets.ts` | `createHistogramBuckets.test.ts` | **MEDIUM** |
| `base/inputs/dateUtils.ts` | `dateUtils.test.ts` | **MEDIUM** |

#### Priority 2: Hooks (Integration Tests)
These need React rendering context:

| Hook | Test Focus |
|------|------------|
| `useFilterListState` | State initialization, controlled/uncontrolled modes, persistence |
| `usePropertyAggregation` | Mock OSDK responses, error handling |

#### Priority 3: Components (Component Tests)
These need React Testing Library:

| Component | Test Focus |
|-----------|------------|
| `FilterList` | Rendering, collapse/expand, reset |
| `FilterListItem` | Expand/collapse, exclude toggle |
| `CheckboxListInput` | Selection, search, select all |
| `NumberRangeInput` | Min/max input, debouncing |
| `DateRangeInput` | Date selection, range validation |
| `ContainsTextInput` | Text entry, debouncing, clear |

### Test File Structure

```
src/filter-list/
├── __tests__/
│   ├── filterStateToWhereClause.test.ts
│   ├── getFilterKey.test.ts
│   └── createHistogramBuckets.test.ts
├── hooks/
│   ├── __tests__/
│   │   ├── useDebouncedValue.test.ts
│   │   ├── useFilterListState.test.tsx
│   │   └── usePropertyAggregation.test.tsx
├── base/
│   ├── __tests__/
│   │   ├── FilterList.test.tsx
│   │   ├── FilterListItem.test.tsx
│   │   └── renderFilterInput.test.tsx
│   └── inputs/
│       └── __tests__/
│           ├── CheckboxListInput.test.tsx
│           ├── NumberRangeInput.test.tsx
│           ├── DateRangeInput.test.tsx
│           └── ...
```

### Dependencies to Add

```json
// package.json devDependencies
{
  "@testing-library/react": "^16.3.0",
  "@testing-library/user-event": "^14.5.2"
}
```

### Example Test Cases

#### `filterStateToWhereClause.test.ts`
```typescript
describe("buildWhereClause", () => {
  it("should handle empty filter state", () => {
    const result = buildWhereClause([], {});
    expect(result).toBeUndefined();
  });

  it("should build AND clause for multiple filters", () => {
    const result = buildWhereClause([def1, def2], state);
    expect(result).toEqual({ $and: [clause1, clause2] });
  });

  it("should handle exclude mode with $not wrapper", () => {
    const state = { filterKey: { exclude: true, ... } };
    const result = buildWhereClause([def], state);
    expect(result).toEqual({ $not: innerClause });
  });
});
```

#### `useDebouncedValue.test.ts`
```typescript
describe("useDebouncedValue", () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it("should debounce value changes", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useDebouncedValue("initial", onChange, 300)
    );

    act(() => { result.current[1]("new"); });
    expect(onChange).not.toHaveBeenCalled();

    act(() => { vi.advanceTimersByTime(300); });
    expect(onChange).toHaveBeenCalledWith("new");
  });
});
```

### Testing Recommendations Summary

| Priority | Action | Effort |
|----------|--------|--------|
| **CRITICAL** | Add `@testing-library/react` dependency | Low |
| **CRITICAL** | Write tests for `filterStateToWhereClause` | Medium |
| **HIGH** | Write tests for `getFilterKey` | Low |
| **HIGH** | Write tests for `useDebouncedValue` | Low |
| **HIGH** | Write tests for `useFilterListState` | Medium |
| **MEDIUM** | Write tests for input components | High |
| **MEDIUM** | Write tests for `createHistogramBuckets` | Low |
| **LOW** | Add integration tests with mocked OSDK | High |

### Estimated Coverage Goals

- **Phase 1** (Immediate): 40% coverage - Core utilities and hooks
- **Phase 2** (Short-term): 70% coverage - Add component tests
- **Phase 3** (Complete): 85%+ coverage - Integration and edge cases

---

## Testing Implementation Plan

### Step 0: Add Dependencies

**File:** `packages/react-components/package.json`

```bash
pnpm add -D @testing-library/react @testing-library/user-event
```

**Effort:** 5 min

---

### Step 1: Create Test Utilities

**File:** `src/filter-list/__tests__/testUtils.ts`

```typescript
import type { ObjectTypeDefinition } from "@osdk/api";

// Mock object type for testing
export const MockObjectType = {
  apiName: "TestObject",
  primaryKeyType: "string",
  properties: {
    name: { type: "string" },
    age: { type: "integer" },
    active: { type: "boolean" },
    createdAt: { type: "timestamp" },
  },
} as unknown as ObjectTypeDefinition;

// Factory for creating filter definitions
export function createPropertyFilterDef(
  key: string,
  component: string,
  state: Record<string, unknown>,
) {
  return {
    type: "property" as const,
    key,
    propertyKey: key,
    filterComponent: component,
    filterState: state,
  };
}
```

**Effort:** 15 min

---

### Step 2: Test `filterStateToWhereClause.ts` (CRITICAL)

**File:** `src/filter-list/__tests__/filterStateToWhereClause.test.ts`

**Test Cases:**
1. Empty state returns `undefined`
2. Single CHECKBOX_LIST filter builds `$in` clause
3. Multiple filters combine with `$and`
4. Exclude mode wraps with `$not`
5. CONTAINS_TEXT builds `$containsAllTermsInOrder`
6. NUMBER_RANGE builds `$gte` and `$lte`
7. DATE_RANGE builds date comparisons
8. TOGGLE builds equality check
9. Filters with no active values are skipped

**Effort:** 45 min

---

### Step 3: Test `getFilterKey.ts` (HIGH)

**File:** `src/filter-list/__tests__/getFilterKey.test.ts`

**Test Cases:**
1. Property filter returns `definition.key`
2. HasLink filter returns `hasLink:${linkName}`
3. LinkedProperty filter returns `linkedProperty:${linkName}:${propertyKey}`
4. KeywordSearch with array properties
5. KeywordSearch with "all" properties
6. Custom filter returns `definition.key`

**Effort:** 15 min

---

### Step 4: Test `useDebouncedValue.ts` (HIGH)

**File:** `src/filter-list/hooks/__tests__/useDebouncedValue.test.ts`

**Test Cases:**
1. Returns initial value immediately
2. Updates local value immediately on change
3. Debounces onChange callback
4. Cancels pending timeout on new value
5. Syncs when external value changes
6. Cleans up timeout on unmount

**Effort:** 20 min

---

### Step 5: Test `createHistogramBuckets.ts` (MEDIUM)

**File:** `src/filter-list/base/inputs/__tests__/createHistogramBuckets.test.ts`

**Test Cases:**
1. Empty input returns empty array
2. Single value creates single bucket
3. Creates 20 buckets by default
4. Distributes values correctly into buckets
5. Handles number values
6. Handles date values via toNumber/fromNumber

**Effort:** 20 min

---

### Step 6: Test `dateUtils.ts` (MEDIUM)

**File:** `src/filter-list/base/inputs/__tests__/dateUtils.test.ts`

**Test Cases:**
1. `formatDateForInput` returns YYYY-MM-DD string
2. `formatDateForInput` returns empty string for undefined
3. `parseDateFromInput` parses valid date string
4. `parseDateFromInput` returns undefined for empty string
5. `parseDateFromInput` returns undefined for invalid date
6. `formatDateForDisplay` uses locale formatting

**Effort:** 15 min

---

### Step 7: Test `useFilterListState.ts` (HIGH)

**File:** `src/filter-list/hooks/__tests__/useFilterListState.test.tsx`

**Test Cases:**
1. Initializes state from filter definitions
2. Handles controlled mode (external filterStates)
3. Handles uncontrolled mode (internal state)
4. `updateFilterState` updates single filter
5. `resetAllFilters` restores defaults
6. `resetFilter` restores single filter default
7. Persistence loads from sessionStorage
8. Persistence saves to sessionStorage on change
9. `activeFilterCount` counts non-default filters

**Effort:** 45 min

---

### Step 8: Test Input Components (MEDIUM)

**Files:** `src/filter-list/base/inputs/__tests__/*.test.tsx`

Each component needs:
- Renders without crashing
- Displays loading state
- Displays error state
- Handles user interaction
- Calls onChange with correct values

**Priority Order:**
1. `ContainsTextInput.test.tsx` - simplest, good starting point
2. `CheckboxListInput.test.tsx` - complex, many interactions
3. `NumberRangeInput.test.tsx` - debouncing, histogram
4. `ToggleInput.test.tsx` - simple toggle

**Effort:** 2-3 hours total

---

## Complete Implementation Order

| Step | File | Priority | Effort | Dependencies |
|------|------|----------|--------|--------------|
| 0 | Add npm dependencies | SETUP | 5 min | None |
| 1 | Create testUtils.ts | SETUP | 15 min | Step 0 |
| 2 | filterStateToWhereClause.test.ts | CRITICAL | 45 min | Step 1 |
| 3 | getFilterKey.test.ts | HIGH | 15 min | Step 1 |
| 4 | useDebouncedValue.test.ts | HIGH | 20 min | Step 1 |
| 5 | createHistogramBuckets.test.ts | MEDIUM | 20 min | Step 1 |
| 6 | dateUtils.test.ts | MEDIUM | 15 min | Step 1 |
| 7 | useFilterListState.test.tsx | HIGH | 45 min | Step 1 |
| 8a | ContainsTextInput.test.tsx | MEDIUM | 30 min | Step 1 |
| 8b | CheckboxListInput.test.tsx | MEDIUM | 45 min | Step 1 |
| 8c | NumberRangeInput.test.tsx | MEDIUM | 45 min | Step 1 |
| 8d | ToggleInput.test.tsx | LOW | 20 min | Step 1 |

**Total Estimated Time:** ~5-6 hours for comprehensive test coverage

---

## Execution Priority

### Phase 1: Foundation (Today)
1. Add dependencies
2. Create test utilities
3. Test `filterStateToWhereClause` (most critical business logic)
4. Test `getFilterKey` (used everywhere)

### Phase 2: Hooks (Next)
5. Test `useDebouncedValue`
6. Test `useFilterListState`

### Phase 3: Utilities (After)
7. Test `createHistogramBuckets`
8. Test `dateUtils`

### Phase 4: Components (Final)
9. Test input components starting with simplest
