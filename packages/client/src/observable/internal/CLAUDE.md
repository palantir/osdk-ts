# Observable Client Internal Implementation

This directory contains the implementation details of the ObservableClient. These are internal modules not meant to be imported directly by consumers.

## Core Architecture

### ObservableClientImpl

Implements the public API defined in the parent ObservableClient interface, delegating operations to the Store:

- `observeObject()` - Delegates to Store for single object observations
- `observeList()` - Delegates to Store for filtered/sorted collections
- `observeLinks()` - Delegates to Store for linked object relationships
- `applyAction()` - Coordinates action execution with optimistic updates
- `validateAction()` - Handles action validation without execution

### Store

The central data management system that:

- Maintains the layered cache (truth + optimistic)
- Handles reference counting for efficient memory management
- Coordinates batch operations for consistency
- Manages subscriptions and invalidation

### Layer System

Implements a stack-based approach to data management:

- **Truth Layer**: Base layer representing server state
- **Optimistic Layers**: Temporary layers for pending changes
- All layers can be queried with consistent API
- Automatic rollback of optimistic changes on failure

### Query System

Abstract base class (`Query`) with specialized implementations:

- `ObjectQuery`: Handles single object fetching and caching
- `ListQuery`: Manages collections with filtering and sorting
- `SpecificLinkQuery`: Handles relationship traversal and caching

Each query type manages its own cache keys, network requests, and subscription lifecycle.

## Key Implementation Concepts

### Cache Keys

Strongly-typed cache keys uniquely identify cached values:

- Object keys: `{objectType}:{primaryKey}`
- List keys: `{objectType}:list:{whereClause}:{orderByClause}`
- Link keys: `{sourceType}:{sourcePk}:{linkName}:{whereClause}:{orderByClause}`

Canonicalization ensures consistent key generation across equivalent queries.

### Reactive Architecture

Built on RxJS for reactive data flow:

- `BehaviorSubject` stores current state
- `connectable()` enables efficient shared subscriptions
- Automatic subscription management and cleanup

### Optimistic Updates

The system supports immediate UI feedback through optimistic updates:

- Changes are applied to temporary layers
- Multiple optimistic layers can stack
- Automatic rollback on failure
- Change tracking for invalidation

### Memory Management

Sophisticated memory handling to prevent leaks:

- Reference counting for cache entries
- Automatic cleanup of unused entries
- Weak references for garbage collection
- Subscription lifecycle management

## Best Practices for Development

1. Always operate within batch contexts when modifying cache
2. Understand the layer system for implementing optimistic updates
3. Use canonicalization for consistent cache key generation
4. Handle proper subscription cleanup to prevent memory leaks
5. Use the test utilities for reliable unit tests