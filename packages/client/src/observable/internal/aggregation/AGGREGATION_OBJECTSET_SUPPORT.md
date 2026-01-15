# Plan: Add ObjectSet Support to useOsdkAggregation

## Problem

`useOsdkAggregation` only accepts an `ObjectTypeDefinition`. Internally, it creates a **fresh base ObjectSet** from the type definition. This prevents aggregating on pivoted or filtered ObjectSets.

**Example:**
- Pivoted ObjectSet: `$(Employee).pivotTo("primaryOffice")` → Offices linked to Employees
- But `useOsdkAggregation(Office, {...})` creates `$(Office)` → ALL Offices

## Solution

Add optional `objectSet` parameter to `useOsdkAggregation` and underlying observable client.

---

## Cache Key Changes

**Current `AggregationCacheKey`:**
```typescript
[
  type: "object" | "interface",
  apiName: string,                    // e.g., "Office"
  whereClause: Canonical<SimpleWhereClause>,
  rdpConfig: Canonical<Rdp> | undefined,
  aggregateOpts: Canonical<AggregateOpts>,
]
```

**With ObjectSet support:**
```typescript
[
  type: "object" | "interface",
  apiName: string,
  wireObjectSet: Canonical<WireObjectSet> | undefined,  // NEW
  whereClause: Canonical<SimpleWhereClause>,
  rdpConfig: Canonical<Rdp> | undefined,
  aggregateOpts: Canonical<AggregateOpts>,
]
```

The `wireObjectSet` captures the full ObjectSet structure:
```json
{
  "type": "searchAround",
  "objectSet": {
    "type": "filter",
    "objectSet": { "type": "base", "objectType": "Employee" },
    "where": { "department": { "$eq": "Engineering" } }
  },
  "link": "primaryOffice"
}
```

---

## Invalidation Changes

**Invalidation flow:**
1. User calls `observableClient.applyAction()` → action modifies objects
2. `ActionApplication.#invalidateActionEditResponse()` → calls `store.invalidateObjectType(apiName)` for each edited type
3. `Store.invalidateObjectType()` → loops through all queries, calls `query.invalidateObjectType(apiName)`
4. `AggregationQuery.invalidateObjectType()` → decides if this query should revalidate

**Current `AggregationQuery.invalidateObjectType`:**
```typescript
if (this.apiName === objectType) {
  return this.revalidate(true);
}
```

This only checks the target type (e.g., "Office"). For pivoted ObjectSets:

| Action modifies | Current Behavior | Required Behavior |
|-----------------|------------------|-------------------|
| Office | ✅ Invalidates | ✅ Invalidates |
| Employee | ❌ Does NOT invalidate | ✅ Should invalidate |

**Required fix - Update `AggregationQuery.invalidateObjectType`:**
```typescript
invalidateObjectType = (objectType: string, changes: Changes | undefined): Promise<void> => {
  // Check target type OR any type in the ObjectSet chain
  if (this.apiName === objectType || this.wireObjectSetContainsType(objectType)) {
    changes?.modified.add(this.cacheKey);
    return this.revalidate(true);
  }
  return Promise.resolve();
};

private wireObjectSetContainsType(objectType: string): boolean {
  if (!this.wireObjectSet) return false;
  return extractObjectTypesFromWireObjectSet(this.wireObjectSet).has(objectType);
}
```

**Helper function to extract types from WireObjectSet:**
```typescript
function extractObjectTypesFromWireObjectSet(wireObjectSet: WireObjectSet): Set<string> {
  const types = new Set<string>();

  function walk(os: WireObjectSet) {
    switch (os.type) {
      case "base":
        types.add(os.objectType);
        break;
      case "static":
        types.add(os.objectType);
        break;
      case "filter":
        walk(os.objectSet);
        break;
      case "searchAround":
        walk(os.objectSet);
        // Target type is already captured in apiName
        break;
      case "union":
      case "intersect":
      case "subtract":
        for (const child of os.objectSets) walk(child);
        break;
      case "reference":
      case "interfaceBase":
        // These don't contain object type info directly
        break;
    }
  }

  walk(wireObjectSet);
  return types;
}
```

**Note:** The public `ObservableClient.invalidateObjectType()` API doesn't need changes - it delegates to `Store.invalidateObjectType()` which calls each query's `invalidateObjectType` method. Only the query-level method needs updating.

---

## Files to Modify

**@osdk/client:**
1. `packages/client/src/observable/ObservableClient.ts` - Add `objectSet?` to `ObserveAggregationOptions`
2. `packages/client/src/observable/internal/aggregation/AggregationCacheKey.ts` - Add `wireObjectSet` field to cache key tuple
3. `packages/client/src/observable/internal/aggregation/AggregationsHelper.ts` - Canonicalize WireObjectSet, include in cache key, pass to query
4. `packages/client/src/observable/internal/aggregation/AggregationQuery.ts` - Store WireObjectSet, update `invalidateObjectType` to check all types in chain
5. `packages/client/src/observable/internal/aggregation/ObjectAggregationQuery.ts` - Use provided WireObjectSet in `_fetchAggregation` instead of creating fresh base set
6. `packages/client/src/observable/internal/aggregation/extractObjectTypesFromWireObjectSet.ts` (NEW) - Helper to walk WireObjectSet and extract all object types
7. `packages/client/src/public/unstable-do-not-use.ts` - Export new types if needed

**@osdk/react:**
8. `packages/react/src/new/useOsdkAggregation.ts` - Add `objectSet?` option, pass to observeAggregation

---

## Usage After Implementation

```typescript
// Current usage (still works)
const { data } = useOsdkAggregation(Office, {
  aggregate: { $select: { $count: "unordered" }, $groupBy: { name: "exact" } }
});

// New usage with ObjectSet
const pivotedObjectSet = $(Employee).where({ department: "Engineering" }).pivotTo("primaryOffice");
const { data } = useOsdkAggregation(Office, {
  objectSet: pivotedObjectSet,
  aggregate: { $select: { $count: "unordered" }, $groupBy: { name: "exact" } }
});
```
