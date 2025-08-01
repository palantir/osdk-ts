# Links Implementation

This directory contains the specialized implementation for observing object relationships (links) in the ObservableClient.

## Core Components

### SpecificLinkCacheKey.ts

Defines the cache key structure for link queries:

- Type: `"specificLink"`
- Key components:
  - `sourceObjectType`: Source object type
  - `sourcePk`: Source object primary key
  - `linkName`: Relationship field name
  - `whereClause`: Canonicalized filter condition
  - `orderByClause`: Canonicalized sort order

Cache keys are strongly typed and integrated with the global cache key system.

### SpecificLinkQuery.ts

Implements the query logic for retrieving and observing linked objects:

- Extends the base `Query` class with link-specific behaviors
- Manages the full lifecycle: fetching, caching, invalidation, observation
- Handles pagination for linked collections
- Supports optimistic updates for links

## Data Flow

1. Client calls `observeLinks` with source object, link name, and options
2. A `SpecificLinkCacheKey` is created with canonicalized parameters
3. The Store checks if data exists in cache; if not, triggers a fetch
4. Linked objects are fetched, potentially using pivot queries
5. Results are stored in cache as references to full objects
6. RxJS observables propagate updates to subscribers
7. Changes to linked objects automatically trigger updates

## Implementation Details

### Link Storage Format

Links are stored as arrays of object cache keys rather than duplicating object data:

```typescript
// Internal storage format
interface LinkStorageData {
  linkedObjectKeys: ObjectCacheKey[];
  hasMore: boolean;
  status: Status;
}
```

This approach ensures consistency when the same object appears in multiple relationships.

### Reactive Resolution

When observing links, the system:

1. Retrieves the array of object cache keys
2. Reactively resolves each key to its current object value
3. Combines these into a single observable stream
4. Updates automatically when any linked object changes

### Optimization Features

- **Reference Storage**: Avoids data duplication
- **Deep Equality**: Prevents unnecessary updates
- **Batch Operations**: Ensures consistency across related changes
- **Pagination**: Supports loading large link collections efficiently

## Best Practices

1. Be aware that link observations create indirect dependencies on all linked objects
2. Consider pagination with `pageSize` for potentially large link collections
3. Use the canonicalization system consistently for where clauses and orderBy conditions
4. For testing, use the `expectStandardObserveLink` utility to validate behavior