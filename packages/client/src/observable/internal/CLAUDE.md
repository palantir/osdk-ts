# Observable Client Internal Implementation

This directory contains internal implementation details not meant for direct import by consumers.

## Store Architecture

Central data management system:

- Maintains layered cache (truth + optimistic layers)
- Reference counting for memory management
- Batch operations for consistency
- Subscription and invalidation coordination

## Layer System

Stack-based data management:

- **Truth Layer**: Server state base layer
- **Optimistic Layers**: Temporary layers for pending changes
- Consistent query API across all layers
- Automatic rollback on failure

## Query Hierarchy

- `Query`: Base abstract class
  - `ObjectQuery`: Single object fetching/caching
  - `BaseCollectionQuery`: Collection base with shared functionality
    - `BaseListQuery`: List-type collections abstract base
      - `ListQuery`: Filtered/sorted collections implementation
    - `SpecificLinkQuery`: Relationship traversal implementation

## Cache Keys

Strongly-typed identifiers:

- Objects: `{objectType}:{primaryKey}`
- Lists: `{objectType}:list:{whereClause}:{orderByClause}`
- Links: `{sourceType}:{sourcePk}:{linkName}:{whereClause}:{orderByClause}`

## Best Practices

- Operate within batch contexts for cache modifications
- Use canonicalization for consistent cache keys
- Leverage BaseCollectionQuery abstractions for new collection types
- Handle proper subscription cleanup
