# LinkedProperty Filter Aggregation Bug

## Status: ✅ FIXED

## Problem

When using a linked property filter (e.g., filtering Employee by Office.name), the aggregation request was sent to the wrong object type:

**Previous behavior:**
```json
{
  "objectSet": { "type": "base", "objectType": "Employee" },
  "groupBy": [{ "type": "exact", "field": "name" }]
}
```

**Expected behavior:**
```json
{
  "objectSet": { "type": "searchAround", ... },
  "groupBy": [{ "type": "exact", "field": "name" }]
}
```

Error: `PropertiesNotFound: "name" does not exist on Employee`

## Root Cause

`useOsdkAggregation` only accepted an `ObjectTypeDefinition`, creating a fresh base ObjectSet. This lost the pivot chain context needed for linked property filters.

## Solution

1. **Extended `useOsdkAggregation`** (in separate branch `ksethi/useOsdkAggregation-updates`) to accept an optional `objectSet` parameter
2. **Updated all input components** to accept and pass through the `objectSet` prop:
   - `CheckboxListInput.tsx`
   - `MultiSelectInput.tsx`
   - `SingleSelectInput.tsx`
   - `NumberRangeInput.tsx`
   - `DateRangeInput.tsx`
   - `RangeInput.tsx`
   - `usePropertyAggregation.ts`
3. **Updated `LinkedPropertyInput.tsx`** to pass `objectSet={linkedObjectSet}` to all child components

## Verification

After fix:
1. Request targets the pivoted ObjectSet (respecting the parent filter chain)
2. Aggregation correctly counts linked objects
3. Selecting values correctly filters parent objects
